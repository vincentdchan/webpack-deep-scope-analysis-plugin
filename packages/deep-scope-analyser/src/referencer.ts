import { Syntax } from "estraverse";
import * as esrecurse from "esrecurse";
import { Reference, ImplicitGlobal } from "./reference";
import { VariableType } from "./variable";
import {
  PatternVisitor,
  PatternVisitorCallback,
  AssignmentType,
} from "./patternVisitor";
import { Definition, ParameterDefinition } from "./definition";
import * as assert from "assert";
import { ScopeManager } from "./scopeManager";
import { Scope, ModuleScope } from "./scope";
import * as ESTree from "estree";
import {
  ImportIdentifierInfo,
  ImportType,
} from "./importManager";
import {
  ExternalType, ExportVariableType, LocalExportVariable,
} from "./exportManager";

function traverseIdentifierInPattern(
  options: esrecurse.VisitorOption,
  rootPattern: ESTree.Node,
  referencer: Referencer | null,
  callback: PatternVisitorCallback,
) {
  // Call the callback at left hand identifier nodes, and Collect right hand nodes.
  const visitor = new PatternVisitor(
    options,
    rootPattern,
    callback,
  );

  visitor.visit(rootPattern);

  // Process the right hand nodes recursively.
  if (referencer !== null && referencer !== undefined) {
    visitor.rightHandNodes.forEach(
      referencer.visit,
      referencer,
    );
  }
}

type ImportSpecifierNode =
  | ESTree.ImportSpecifier
  | ESTree.ImportNamespaceSpecifier
  | ESTree.ImportDefaultSpecifier;

// Importing ImportDeclaration.
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-moduledeclarationinstantiation
// https://github.com/estree/estree/blob/master/es6.md#importdeclaration
// FIXME: Now, we don't create module environment, because the context is
// implementation dependent.

class Importer extends esrecurse.Visitor {
  public constructor(
    public readonly declaration: ESTree.ImportDeclaration,
    public readonly referencer: Referencer,
  ) {
    super(undefined, referencer.options);
  }

  get moduleScope() {
    return this.referencer.currentScope as ModuleScope;
  }

  public visitImport(
    id: ESTree.Identifier,
    specifier: ImportSpecifierNode,
  ) {
    this.referencer.visitPattern(id, undefined, pattern => {
      this.referencer.currentScope!.__define(
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

  public ImportNamespaceSpecifier(
    node: ESTree.ImportNamespaceSpecifier,
  ) {
    const local = node.local;

    this.visitImport(local, node);
    const importId = new ImportIdentifierInfo(
      local.name,
      local.name,
      this.declaration.source.value as string,
      ImportType.Namespace,
    );
    this.moduleScope.importManager.addImportId(importId);
  }

  public ImportDefaultSpecifier(
    node: ESTree.ImportDefaultSpecifier,
  ) {
    const local = node.local;

    this.visitImport(local, node);
    const importId = new ImportIdentifierInfo(
      local.name,
      "default",
      this.declaration.source.value as string,
      ImportType.Default,
    );
    this.moduleScope.importManager.addImportId(importId);
  }

  public ImportSpecifier(node: ESTree.ImportSpecifier) {
    const local = node.local;

    this.visitImport(local, node);
    const importId = new ImportIdentifierInfo(
      local.name,
      node.imported.name,
      this.declaration.source.value as string,
      ImportType.Identifier,
    );
    this.moduleScope.importManager.addImportId(importId);
  }
}

// Referencing variables and creating bindings.
export class Referencer extends esrecurse.Visitor {
  public parent: Referencer | null = null;
  public isInnerMethodDefinition: boolean = false;
  public exportingSource: string | null = null;
  public isExportingFromLocal: boolean = false;

  public constructor(
    public readonly options: esrecurse.VisitorOption,
    public readonly scopeManager: ScopeManager,
  ) {
    super(undefined, options);
  }

  get currentScope() {
    return this.scopeManager.__currentScope;
  }

  public close(node: ESTree.Node) {
    while (
      this.currentScope &&
      node === this.currentScope.block
    ) {
      this.scopeManager.__currentScope = this.currentScope.__close(
        this.scopeManager,
      );
    }
  }

  public pushInnerMethodDefinition(
    isInnerMethodDefinition: boolean,
  ) {
    const previous = this.isInnerMethodDefinition;

    this.isInnerMethodDefinition = isInnerMethodDefinition;
    return previous;
  }

  public popInnerMethodDefinition(
    isInnerMethodDefinition: boolean,
  ) {
    this.isInnerMethodDefinition = isInnerMethodDefinition;
  }

  public materializeTDZScope(
    node: ESTree.Node,
    iterationNode:
      | ESTree.ForOfStatement
      | ESTree.ForInStatement,
  ) {
    /* tslint:disable */
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-runtime-semantics-forin-div-ofexpressionevaluation-abstract-operation
    // TDZ scope hides the declaration's names.
    /* tslint:enable */
    this.scopeManager.__nestTDZScope(node);
    this.visitVariableDeclaration(
      this.currentScope!,
      VariableType.TDZ,
      iterationNode.left as ESTree.VariableDeclaration, // it must be
      0,
      true,
    );
  }

  public materializeIterationScope(
    node: ESTree.ForInStatement | ESTree.ForOfStatement,
  ) {
    // Generate iteration scope for upper ForIn/ForOf Statements.
    const letOrConstDecl = node.left as ESTree.VariableDeclaration;

    this.scopeManager.__nestForScope(node);
    this.visitVariableDeclaration(
      this.currentScope!,
      VariableType.Variable,
      letOrConstDecl,
      0,
    );
    this.visitPattern(
      letOrConstDecl.declarations[0].id,
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
      },
    );
  }

  public referencingDefaultValue(
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

  public visitPattern(
    node: ESTree.Pattern,
    options = { processRightHandNodes: false },
    callback: PatternVisitorCallback,
  ) {
    traverseIdentifierInPattern(
      this.options,
      node,
      options.processRightHandNodes ? this : null,
      callback,
    );
  }

  public visitFunction(node: ESTree.Function) {
    let i: number, iz: number;

    // FunctionDeclaration name is defined in upper scope
    // NOTE: Not referring variableScope. It is intended.
    // Since
    //  in ES5, FunctionDeclaration should be in FunctionBody.
    //  in ES6, FunctionDeclaration should be block scoped.

    if (node.type === Syntax.FunctionDeclaration) {
      // id is defined in upper scope
      this.currentScope!.__define(
        node.id!,
        new Definition(
          VariableType.FunctionName,
          node.id!,
          node,
        ),
      );
    }

    // FunctionExpression with name creates its special scope;
    // FunctionExpressionNameScope.
    if (node.type === Syntax.FunctionExpression && node.id) {
      this.scopeManager.__nestFunctionExpressionNameScope(node);
    }

    // Consider this function is in the MethodDefinition.
    this.scopeManager.__nestFunctionScope(
      node,
      this.isInnerMethodDefinition,
    );

    const that = this;

    /**
     * Visit pattern callback
     * @param {pattern} pattern - pattern
     * @param {Object} info - info
     * @returns {void}
     */
    function visitPatternCallback(
      pattern: ESTree.Identifier,
      info: any,
    ) {
      that.currentScope!.__define(
        pattern,
        new ParameterDefinition(pattern, node, i, info.rest),
      );

      that.referencingDefaultValue(
        pattern,
        info.assignments,
        undefined,
        true,
      );
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
        this.visitChildren(node.body);
      } else {
        this.visit(node.body);
      }
    }

    this.close(node);
  }

  public visitClass(node: ESTree.Class) {
    if (node.type === Syntax.ClassDeclaration) {
      this.currentScope!.__define(
        node.id!,
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

  public visitProperty(node: any) {
    let previous: boolean;

    if (node.computed) {
      this.visit(node.key);
    }

    const isMethodDefinition =
      node.type === Syntax.MethodDefinition;

    if (isMethodDefinition) {
      previous = this.pushInnerMethodDefinition(true);
    }
    this.visit(node.value);
    if (isMethodDefinition) {
      this.popInnerMethodDefinition(previous!);
    }
  }

  public visitForIn(
    node: ESTree.ForInStatement | ESTree.ForOfStatement,
  ) {
    if (
      node.left.type === Syntax.VariableDeclaration &&
      node.left.kind !== "var"
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
          },
        );
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

  public visitVariableDeclaration(
    variableTargetScope: Scope,
    type: VariableType,
    node: ESTree.VariableDeclaration,
    index: number,
    fromTDZ?: boolean,
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
          new Definition(
            type,
            pattern,
            decl,
            node,
            index,
            node.kind,
          ),
        );

        if (!fromTDZ) {
          this.referencingDefaultValue(
            pattern,
            info.assignments,
            undefined,
            true,
          );
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

  public AssignmentExpression(
    node: ESTree.AssignmentExpression,
  ) {
    if (PatternVisitor.isPattern(node.left)) {
      if (node.operator === "=") {
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
        this.currentScope!.__referencing(
          node.left,
          Reference.RW,
          node.right,
        );
      }
    } else {
      this.visit(node.left);
    }
    this.visit(node.right);
  }

  public CatchClause(node: ESTree.CatchClause) {
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
        this.referencingDefaultValue(
          pattern,
          info.assignments,
          undefined,
          true,
        );
      },
    );
    this.visit(node.body);

    this.close(node);
  }

  public Program(node: ESTree.Program) {
    this.scopeManager.__nestGlobalScope(node);

    if (this.scopeManager.__isNodejsScope()) {
      // Force strictness of GlobalScope to false when using node.js scope.
      this.currentScope!.isStrict = false;
      this.scopeManager.__nestFunctionScope(node, false);
    }

    if (
      this.scopeManager.__isES6() &&
      this.scopeManager.isModule()
    ) {
      this.scopeManager.__nestModuleScope(node);
    }

    if (
      this.scopeManager.isStrictModeSupported() &&
      this.scopeManager.isImpliedStrict()
    ) {
      this.currentScope!.isStrict = true;
    }

    this.visitChildren(node);
    this.close(node);
  }

  public Identifier(node: ESTree.Identifier) {
    this.currentScope!.__referencing(
      node,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      this.isExportingFromLocal,
    );
  }

  public UpdateExpression(node: ESTree.UpdateExpression) {
    if (PatternVisitor.isPattern(node.argument)) {
      this.currentScope!.__referencing(
        node.argument,
        Reference.RW,
      );
    } else {
      this.visitChildren(node);
    }
  }

  public MemberExpression(node: ESTree.MemberExpression) {
    this.visit(node.object);
    if (node.computed) {
      this.visit(node.property);
    }
  }

  public Property(node: ESTree.Property) {
    this.visitProperty(node);
  }

  public MethodDefinition(node: ESTree.MethodDefinition) {
    this.visitProperty(node);
  }

  public BreakStatement() {} // eslint-disable-line class-methods-use-this

  public ContinueStatement() {} // eslint-disable-line class-methods-use-this

  public LabeledStatement(node: ESTree.LabeledStatement) {
    this.visit(node.body);
  }

  public ForStatement(node: ESTree.ForStatement) {
    // Create ForStatement declaration.
    // NOTE: In ES6, ForStatement dynamically generates
    // per iteration environment. However, escope is
    // a static analyzer, we only generate one scope for ForStatement.
    if (
      node.init &&
      node.init.type === Syntax.VariableDeclaration &&
      node.init.kind !== "var"
    ) {
      this.scopeManager.__nestForScope(node);
    }

    this.visitChildren(node);

    this.close(node);
  }

  public ClassExpression(node: ESTree.ClassExpression) {
    this.visitClass(node);
  }

  public ClassDeclaration(node: ESTree.ClassDeclaration) {
    this.visitClass(node);
  }

  public CallExpression(node: ESTree.CallExpression) {
    // Check this is direct call to eval
    if (
      !this.scopeManager.__ignoreEval() &&
      node.callee.type === Syntax.Identifier &&
      node.callee.name === "eval"
    ) {
      // NOTE: This should be `variableScope`. Since direct eval call always creates Lexical environment and
      // let / const should be enclosed into it. Only VariableDeclaration affects on the caller's environment.
      this.currentScope!.variableScope.__detectEval();
    }
    this.visitChildren(node);
  }

  public BlockStatement(node: ESTree.BlockStatement) {
    if (this.scopeManager.__isES6()) {
      this.scopeManager.__nestBlockScope(node);
    }

    this.visitChildren(node);

    this.close(node);
  }

  public ThisExpression() {
    this.currentScope!.variableScope.__detectThis();
  }

  public WithStatement(node: ESTree.WithStatement) {
    this.visit(node.object);

    // Then nest scope for WithStatement.
    this.scopeManager.__nestWithScope(node);

    this.visit(node.body);

    this.close(node);
  }

  public VariableDeclaration(node: ESTree.VariableDeclaration) {
    const variableTargetScope =
      node.kind === "var"
        ? this.currentScope!.variableScope
        : this.currentScope!;

    for (
      let i = 0, iz = node.declarations.length;
      i < iz;
      ++i
    ) {
      const decl = node.declarations[i];

      this.visitVariableDeclaration(
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
  public SwitchStatement(node: ESTree.SwitchStatement) {
    this.visit(node.discriminant);

    if (this.scopeManager.__isES6()) {
      this.scopeManager.__nestSwitchScope(node);
    }

    for (let i = 0, iz = node.cases.length; i < iz; ++i) {
      this.visit(node.cases[i]);
    }

    this.close(node);
  }

  public FunctionDeclaration(node: ESTree.FunctionDeclaration) {
    this.visitFunction(node);
  }

  public FunctionExpression(node: ESTree.FunctionExpression) {
    this.visitFunction(node);
  }

  public ForOfStatement(node: ESTree.ForOfStatement) {
    this.visitForIn(node);
  }

  public ForInStatement(node: ESTree.ForInStatement) {
    this.visitForIn(node);
  }

  public ArrowFunctionExpression(
    node: ESTree.ArrowFunctionExpression,
  ) {
    this.visitFunction(node);
  }

  public ImportDeclaration(node: ESTree.ImportDeclaration) {
    assert(
      this.scopeManager.__isES6() &&
        this.scopeManager.isModule(),
      "ImportDeclaration should appear when the mode is ES6 and in the module context.",
    );

    const importer = new Importer(node, this);

    importer.visit(node);
  }

  public visitExportDeclaration(
    node: ESTree.ExportNamedDeclaration,
  ) {
    if (node.source) {
      this.exportingSource = node.source.value as string;
    } else {
      this.exportingSource = null;
    }
    if (node.declaration) {
      this.visit(node.declaration);
      return;
    }

    this.visitChildren(node);
  }

  public ExportNamedDeclaration(
    node: ESTree.ExportNamedDeclaration,
  ) {
    const moduleScope = this.currentScope as ModuleScope;
    const previous = moduleScope.isExportingNamedDeclaration;
    moduleScope.isExportingNamedDeclaration = true;
    this.visitExportDeclaration(node);
    moduleScope.isExportingNamedDeclaration = previous;
  }

  public ExportDefaultDeclaration(
    node: ESTree.ExportDefaultDeclaration,
  ) {
    const currentScope = this.currentScope as ModuleScope;
    if (currentScope.type !== "module") {
      throw new Error("use export in a non module scope");
    }

    let localExportVar: LocalExportVariable;
    if (node.declaration.type === "Identifier") {
      localExportVar = {
        type: ExportVariableType.Local,
        exportName: "default",
        localName: node.declaration.name,
        node: node.declaration,
      };
      this.isExportingFromLocal = true;
      this.visit(node.declaration);
      this.isExportingFromLocal = false;
    } else {
      localExportVar = {
        type: ExportVariableType.Local,
        exportName: "default",
        localName: null,
        node: node.declaration,
      };
      this.visit(node.declaration);
    }

    currentScope.exportManager.addLocalExportVariable(localExportVar);
  }

  public ExportAllDeclaration(
    node: ESTree.ExportAllDeclaration,
  ) {
    const currentScope = this.currentScope as ModuleScope;
    currentScope.exportManager.addExternalVariable({
      type: ExportVariableType.External,
      moduleName: node.source.value as string,
      moduleType: ExternalType.All,
    });
  }

  public ExportSpecifier(node: ESTree.ExportSpecifier) {
    const local = node.local;
    const currentScope = this.currentScope as ModuleScope;
    if (this.exportingSource) {
      currentScope.exportManager.addExternalVariable({
        type: ExportVariableType.External,
        moduleName: this.exportingSource,
        moduleType: ExternalType.Identifier,
        names: {
          exportName: node.exported.name,
          sourceName: node.local.name,
        },
      });
    } else {
      this.isExportingFromLocal = true;
      this.visit(local);
      currentScope.exportManager.addLocalExportVariable({
        type: ExportVariableType.Local,
        exportName: node.exported.name,
        localName: node.local.name,
        node: node.local,
      });
      this.isExportingFromLocal = false;
    }
  }

  public MetaProperty() {
    // eslint-disable-line class-methods-use-this
    // do nothing.
  }
}
