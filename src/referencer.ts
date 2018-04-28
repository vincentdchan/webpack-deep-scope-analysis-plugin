import { Syntax } from 'estraverse';
import * as esrecurse from 'esrecurse';
import { Reference, ImplicitGlobal } from './reference';
import { VariableType } from './variable';
import { PatternVisitor, PatternVisitorCallback, AssignmentType } from './patternVisitor';
import { Definition, ParameterDefinition } from './definition';
import * as assert from 'assert';
import { ScopeManager } from './scopeManager';
import { Scope, ModuleScope } from './scope';
import * as ESTree from 'estree';

/**
 * Traverse identifier in pattern
 * @param {Object} options - options
 * @param {pattern} rootPattern - root pattern
 * @param {Refencer} referencer - referencer
 * @param {callback} callback - callback
 * @returns {void}
 */
function traverseIdentifierInPattern(
  options: any,
  rootPattern: ESTree.Node,
  referencer: Referencer | null,
  callback: PatternVisitorCallback,
) {
  // Call the callback at left hand identifier nodes, and Collect right hand nodes.
  const visitor = new PatternVisitor(options, rootPattern, callback);

  visitor.visit(rootPattern);

  // Process the right hand nodes recursively.
  if (referencer !== null && referencer !== undefined) {
    visitor.rightHandNodes.forEach(referencer.visit, referencer);
  }
}

type ImportSpecifierNode =
| ESTree.ImportSpecifier
| ESTree.ImportNamespaceSpecifier
| ESTree.ImportDefaultSpecifier

// Importing ImportDeclaration.
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-moduledeclarationinstantiation
// https://github.com/estree/estree/blob/master/es6.md#importdeclaration
// FIXME: Now, we don't create module environment, because the context is
// implementation dependent.

class Importer extends esrecurse.Visitor {

  constructor(
    public readonly declaration: ESTree.ImportDeclaration,
    public readonly referencer: Referencer
  ) {
    super(undefined, referencer.options);
    this.declaration = declaration;
    this.referencer = referencer;
  }

  visitImport(id: ESTree.Identifier, specifier: ImportSpecifierNode) {
    this.referencer.visitPattern(id, undefined, pattern => {
      this.referencer
        .currentScope!
        .__define(
          pattern,
          new Definition(
            VariableType.ImportBinding,
            pattern,
            specifier,
            this.declaration,
          ),
        );
    });
  }

  ImportNamespaceSpecifier(node: ESTree.ImportNamespaceSpecifier) {
    const local = node.local;

    if (local) {
      this.visitImport(local, node);
    }
  }

  ImportDefaultSpecifier(node: ESTree.ImportDefaultSpecifier) {
    const local = node.local;

    this.visitImport(local, node);
  }

  ImportSpecifier(node: ImportSpecifierNode) {
    const local = node.local;

    if ((node as any).name) {
        this.visitImport((node as any).name, node);
    } else {
        this.visitImport(local, node);
    }
  }

}

// Referencing variables and creating bindings.
export class Referencer extends esrecurse.Visitor {

  public options: any;
  public scopeManager: ScopeManager;
  public parent: Referencer | null;
  public isInnerMethodDefinition: boolean;

  constructor(options: any, scopeManager: ScopeManager) {
    super(undefined, options);
    this.options = options;
    this.scopeManager = scopeManager;
    this.parent = null;
    this.isInnerMethodDefinition = false;
  }

  get currentScope() {
    return this.scopeManager.__currentScope;
  }

  close(node: ESTree.Node) {
    while (this.currentScope && node === this.currentScope.block) {
      this.scopeManager.__currentScope = this.currentScope.__close(
        this.scopeManager,
      );
    }
  }

  pushInnerMethodDefinition(isInnerMethodDefinition: boolean) {
    const previous = this.isInnerMethodDefinition;

    this.isInnerMethodDefinition = isInnerMethodDefinition;
    return previous;
  }

  popInnerMethodDefinition(isInnerMethodDefinition: boolean) {
    this.isInnerMethodDefinition = isInnerMethodDefinition;
  }

  materializeTDZScope(
    node: ESTree.Node,
    iterationNode: ESTree.ForOfStatement | ESTree.ForInStatement
  ) {
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-runtime-semantics-forin-div-ofexpressionevaluation-abstract-operation
    // TDZ scope hides the declaration's names.
    this.scopeManager.__nestTDZScope(node);
    this.visitVariableDeclaration(
      this.currentScope!,
      VariableType.TDZ,
      iterationNode.left as ESTree.VariableDeclaration, // it must be
      0,
      true,
    );
  }

  materializeIterationScope(node: ESTree.ForInStatement | ESTree.ForOfStatement) {
    // Generate iteration scope for upper ForIn/ForOf Statements.
    const letOrConstDecl = node.left as ESTree.VariableDeclaration;

    this.scopeManager.__nestForScope(node);
    this.visitVariableDeclaration(
      this.currentScope!,
      VariableType.Variable,
      letOrConstDecl,
      0,
    );
    this.visitPattern(letOrConstDecl.declarations[0].id, undefined, pattern => {
      this.currentScope!.__referencing(
        pattern,
        Reference.WRITE,
        node.right,
        undefined,
        true,
        true,
      );
    });
  }

  referencingDefaultValue(
    pattern: ESTree.Pattern,
    assignments: AssignmentType[],
    maybeImplicitGlobal?: ImplicitGlobal,
    init?: boolean,
  ) {
    const scope = this.currentScope!;

    assignments.forEach(assignment => {
      scope.__referencing(
        pattern,
        Reference.WRITE,
        assignment.right,
        maybeImplicitGlobal,
        pattern !== assignment.left,
        init,
      );
    });
  }

  visitPattern(
    node: ESTree.Pattern,
    options = { processRightHandNodes: false },
    callback: PatternVisitorCallback
  ) {
    traverseIdentifierInPattern(
      this.options,
      node,
      options.processRightHandNodes ? this : null,
      callback,
    );
  }

  visitFunction(node: ESTree.Function) {
    let i: number, iz: number;

    // FunctionDeclaration name is defined in upper scope
    // NOTE: Not referring variableScope. It is intended.
    // Since
    //  in ES5, FunctionDeclaration should be in FunctionBody.
    //  in ES6, FunctionDeclaration should be block scoped.

    if (node.type === Syntax.FunctionDeclaration) {
      // id is defined in upper scope
      this.currentScope!.__define(
        node.id,
        new Definition(VariableType.FunctionName, node.id!, node),
      );
    }

    // FunctionExpression with name creates its special scope;
    // FunctionExpressionNameScope.
    if (node.type === Syntax.FunctionExpression && node.id) {
      this.scopeManager.__nestFunctionExpressionNameScope(node);
    }

    // Consider this function is in the MethodDefinition.
    this.scopeManager.__nestFunctionScope(node, this.isInnerMethodDefinition);

    const that = this;

    /**
     * Visit pattern callback
     * @param {pattern} pattern - pattern
     * @param {Object} info - info
     * @returns {void}
     */
    function visitPatternCallback(pattern: ESTree.Identifier, info: any) {
      that
        .currentScope!
        .__define(
          pattern,
          new ParameterDefinition(pattern, node, i, info.rest),
        );

      that.referencingDefaultValue(pattern, info.assignments, undefined, true);
    }

    // Process parameter declarations.
    for (i = 0, iz = node.params.length; i < iz; ++i) {
      this.visitPattern(
        node.params[i],
        { processRightHandNodes: true },
        visitPatternCallback,
      );
    }

    // In TypeScript there are a number of function-like constructs which have no body,
    // so check it exists before traversing
    if (node.body) {
      // Skip BlockStatement to prevent creating BlockStatement scope.
      if (node.body.type === Syntax.BlockStatement) {
        (this as any).visitChildren(node.body);
      } else {
        (this as any).visit(node.body);
      }
    }

    this.close(node);
  }

  visitClass(node: ESTree.Class) {
    if (node.type === Syntax.ClassDeclaration) {
      this.currentScope!.__define(
        node.id,
        new Definition(VariableType.ClassName, node.id, node),
      );
    }

    // FIXME: Maybe consider TDZ.
    this.visit(node.superClass!);

    this.scopeManager.__nestClassScope(node);

    if (node.id) {
      this.currentScope!.__define(
        node.id,
        new Definition(VariableType.ClassName, node.id, node),
      );
    }
    this.visit(node.body);

    this.close(node);
  }

  visitProperty(node: any) {
    let previous: boolean;

    if (node.computed) {
      (this as any).visit(node.key);
    }

    const isMethodDefinition = node.type === Syntax.MethodDefinition;

    if (isMethodDefinition) {
      previous = this.pushInnerMethodDefinition(true);
    }
    this.visit(node.value);
    if (isMethodDefinition) {
      this.popInnerMethodDefinition(previous!);
    }
  }

  visitForIn(node: ESTree.ForInStatement | ESTree.ForOfStatement) {
    if (
      node.left.type === Syntax.VariableDeclaration &&
      node.left.kind !== 'var'
    ) {
      this.materializeTDZScope(node.right, node);
      this.visit(node.right);
      this.close(node.right);

      this.materializeIterationScope(node);
      this.visit(node.body);
      this.close(node);
    } else {
      if (node.left.type === Syntax.VariableDeclaration) {
        this.visit(node.left);
        this.visitPattern(
          node.left.declarations[0].id,
          undefined,
          pattern => {
          this.currentScope!.__referencing(
            pattern,
            Reference.WRITE,
            node.right,
            undefined,
            true,
            true,
          );
        });
      } else {
        this.visitPattern(
          node.left as ESTree.Pattern,
          { processRightHandNodes: true },
          (pattern: ESTree.Identifier, info: any) => {
            let maybeImplicitGlobal: ImplicitGlobal | undefined;

            if (!this.currentScope!.isStrict) {
              maybeImplicitGlobal = {
                pattern,
                node,
              };
            }
            this.referencingDefaultValue(
              pattern,
              info.assignments,
              maybeImplicitGlobal,
              false,
            );
            this.currentScope!.__referencing(
              pattern,
              Reference.WRITE,
              node.right,
              maybeImplicitGlobal,
              true,
              false,
            );
          },
        );
      }
      this.visit(node.right);
      this.visit(node.body);
    }
  }

  visitVariableDeclaration(
    variableTargetScope: Scope,
    type: VariableType,
    node: ESTree.VariableDeclaration,
    index: number,
    fromTDZ?: boolean
  ) {
    // If this was called to initialize a TDZ scope, this needs to make definitions, but doesn't make references.
    const decl = node.declarations[index];
    const init = decl.init;

    this.visitPattern(
      decl.id,
      { processRightHandNodes: !fromTDZ },
      (pattern, info) => {
        variableTargetScope.__define(
          pattern,
          new Definition(type, pattern, decl, node, index, node.kind),
        );

        if (!fromTDZ) {
          this.referencingDefaultValue(pattern, info.assignments, undefined, true);
        }
        if (init) {
          this.currentScope!.__referencing(
            pattern,
            Reference.WRITE,
            init,
            undefined,
            !info.topLevel,
            true,
          );
        }
      },
    );
  }

  AssignmentExpression(node: ESTree.AssignmentExpression) {
    if (PatternVisitor.isPattern(node.left)) {
      if (node.operator === '=') {
        this.visitPattern(
          node.left,
          { processRightHandNodes: true },
          (pattern, info) => {
            let maybeImplicitGlobal;

            if (!this.currentScope!.isStrict) {
              maybeImplicitGlobal = {
                pattern,
                node,
              };
            }
            this.referencingDefaultValue(
              pattern,
              info.assignments,
              maybeImplicitGlobal,
              false,
            );
            this.currentScope!.__referencing(
              pattern,
              Reference.WRITE,
              node.right,
              maybeImplicitGlobal,
              !info.topLevel,
              false,
            );
          },
        );
      } else {
        this.currentScope!.__referencing(node.left, Reference.RW, node.right);
      }
    } else {
      this.visit(node.left);
    }
    this.visit(node.right);
  }

  CatchClause(node: ESTree.CatchClause) {
    this.scopeManager.__nestCatchScope(node);

    this.visitPattern(
      node.param,
      { processRightHandNodes: true },
      (pattern, info) => {
        this.currentScope!.__define(
          pattern,
          new Definition(
            VariableType.CatchClause,
            node.param,
            node,
          ),
        );
        this.referencingDefaultValue(pattern, info.assignments, undefined, true);
      },
    );
    this.visit(node.body);

    this.close(node);
  }

  Program(node: ESTree.Program) {
    this.scopeManager.__nestGlobalScope(node);

    if (this.scopeManager.__isNodejsScope()) {
      // Force strictness of GlobalScope to false when using node.js scope.
      this.currentScope!.isStrict = false;
      this.scopeManager.__nestFunctionScope(node, false);
    }

    if (this.scopeManager.__isES6() && this.scopeManager.isModule()) {
      this.scopeManager.__nestModuleScope(node);
    }

    if (
      this.scopeManager.isStrictModeSupported() &&
      this.scopeManager.isImpliedStrict()
    ) {
      this.currentScope!.isStrict = true;
    }

    (this as any).visitChildren(node);
    this.close(node);
  }

  Identifier(node: ESTree.Identifier) {
    this.currentScope!.__referencing(node);
  }

  UpdateExpression(node: ESTree.UpdateExpression) {
    if (PatternVisitor.isPattern(node.argument)) {
      this.currentScope!.__referencing(node.argument, Reference.RW);
    } else {
      (this as any).visitChildren(node);
    }
  }

  MemberExpression(node: ESTree.MemberExpression) {
    this.visit(node.object);
    if (node.computed) {
      this.visit(node.property);
    }
  }

  Property(node: ESTree.Property) {
    this.visitProperty(node);
  }

  MethodDefinition(node: ESTree.MethodDefinition) {
    this.visitProperty(node);
  }

  BreakStatement() {} // eslint-disable-line class-methods-use-this

  ContinueStatement() {} // eslint-disable-line class-methods-use-this

  LabeledStatement(node: ESTree.LabeledStatement) {
    this.visit(node.body);
  }

  ForStatement(node: ESTree.ForStatement) {
    // Create ForStatement declaration.
    // NOTE: In ES6, ForStatement dynamically generates
    // per iteration environment. However, escope is
    // a static analyzer, we only generate one scope for ForStatement.
    if (
      node.init &&
      node.init.type === Syntax.VariableDeclaration &&
      node.init.kind !== 'var'
    ) {
      this.scopeManager.__nestForScope(node);
    }

    (this as any).visitChildren(node);

    this.close(node);
  }

  ClassExpression(node: ESTree.ClassExpression) {
    this.visitClass(node);
  }

  ClassDeclaration(node: ESTree.ClassDeclaration) {
    this.visitClass(node);
  }

  CallExpression(node: ESTree.CallExpression) {
    // Check this is direct call to eval
    if (
      !this.scopeManager.__ignoreEval() &&
      node.callee.type === Syntax.Identifier &&
      node.callee.name === 'eval'
    ) {
      // NOTE: This should be `variableScope`. Since direct eval call always creates Lexical environment and
      // let / const should be enclosed into it. Only VariableDeclaration affects on the caller's environment.
      this.currentScope!.variableScope.__detectEval();
    }
    (this as any).visitChildren(node);
  }

  BlockStatement(node: ESTree.BlockStatement) {
    if (this.scopeManager.__isES6()) {
      this.scopeManager.__nestBlockScope(node);
    }

    (this as any).visitChildren(node);

    this.close(node);
  }

  ThisExpression() {
    this.currentScope!.variableScope.__detectThis();
  }

  WithStatement(node: ESTree.WithStatement) {
    this.visit(node.object);

    // Then nest scope for WithStatement.
    this.scopeManager.__nestWithScope(node);

    this.visit(node.body);

    this.close(node);
  }

  VariableDeclaration(node: ESTree.VariableDeclaration) {
    const variableTargetScope =
      node.kind === 'var'
        ? this.currentScope!.variableScope
        : this.currentScope!;

    for (let i = 0, iz = node.declarations.length; i < iz; ++i) {
      const decl = node.declarations[i];

      (this as any).visitVariableDeclaration(
        variableTargetScope,
        VariableType.Variable,
        node,
        i,
      );
      if (decl.init) {
        this.visit(decl.init);
      }
    }
  }

  // sec 13.11.8
  SwitchStatement(node: ESTree.SwitchStatement) {
    this.visit(node.discriminant);

    if (this.scopeManager.__isES6()) {
      this.scopeManager.__nestSwitchScope(node);
    }

    for (let i = 0, iz = node.cases.length; i < iz; ++i) {
      this.visit(node.cases[i]);
    }

    this.close(node);
  }

  FunctionDeclaration(node: ESTree.FunctionDeclaration) {
    this.visitFunction(node);
  }

  FunctionExpression(node: ESTree.FunctionExpression) {
    this.visitFunction(node);
  }

  ForOfStatement(node: ESTree.ForOfStatement) {
    this.visitForIn(node);
  }

  ForInStatement(node: ESTree.ForInStatement) {
    this.visitForIn(node);
  }

  ArrowFunctionExpression(node: ESTree.ArrowFunctionExpression) {
    this.visitFunction(node);
  }

  ImportDeclaration(node: ESTree.ImportDeclaration) {
    assert(
      this.scopeManager.__isES6() && this.scopeManager.isModule(),
      'ImportDeclaration should appear when the mode is ES6 and in the module context.',
    );

    const importer = new Importer(node, this);

    importer.visit(node);
  }

  visitExportDeclaration(node: any) {
    if (node.source) {
      return;
    }
    if (node.declaration) {
      this.visit(node.declaration);
      return;
    }

    (this as any).visitChildren(node);
  }

  // ExportDeclaration(node: ESTree.ExportDe) {
  //   const currentScope = this.currentScope() as ModuleScope;
  //   currentScope.startExport();
  //   this.visitExportDeclaration(node, false);
  //   currentScope.endExport();
  // }

  ExportNamedDeclaration(node: ESTree.ExportNamedDeclaration) {
    const currentScope = this.currentScope as ModuleScope;
    currentScope.startExport();
    this.visitExportDeclaration(node);
    currentScope.endExport();
  }

  // ExportDefaultDeclaration(node: ESTree.ExportDefaultDeclaration) {
  //   const currentScope = this.currentScope as ModuleScope;
  //   currentScope.startExport();
  //   if (currentScope.type !== 'module') {
  //     throw new Error('use export in a non module scope');
  //   }
  //   // exportInfo.alias = 'default';
  //   if (node.declaration.type === 'AssignmentExpression') {
  //     const decl = node.declaration;
  //     currentScope.__define(
  //       decl.left,
  //       new Definition(
  //         VariableType.ExportDefault,
  //         decl.left.name,
  //         decl,
  //         node,
  //       ),
  //     );
  //   }
  //   this.visitExportDeclaration(node);
  //   currentScope.endExport();
  // }

  ExportAllDeclaration(node: ESTree.ExportAllDeclaration) {
    const currentScope = this.currentScope as ModuleScope;
    // currentScope.exportAllDeclaration.push(node.source.value);
  }

  ExportSpecifier(node: ESTree.ExportSpecifier) {
    const local = node.local;

    if (node.exported && node.exported.name !== local.name) {
      // const currentScope = this.currentScope as ModuleScope;
      // currentScope.exportAlias(local.name, node.exported.name);
    }

    this.visit(local);
  }

  MetaProperty() {
    // eslint-disable-line class-methods-use-this
    // do nothing.
  }
}
