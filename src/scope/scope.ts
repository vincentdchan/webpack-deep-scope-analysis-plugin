import * as assert from 'assert';
import { Variable, VariableType } from '../variable';
import { Reference, ImplicitGlobal } from '../reference';
import { ScopeManager } from '../scopeManager';
import { Definition } from '../definition';
import { Syntax } from 'estraverse';
import * as ESTree from 'estree';

export type ScopeType =
| 'TDZ'
| 'module'
| 'block'
| 'switch'
| 'function'
| 'catch'
| 'with'
| 'function'
| 'class'
| 'global'
| 'function-expression-name'
| 'for'


/**
 * Test if scope is strict
 */
function isStrictScope(
  scope: Scope,
  block: ESTree.Node,
  isMethodDefinition: boolean,
  useDirective: boolean,
) {
  let body;

  // When upper scope is exists and strict, inner scope is also strict.
  if (scope.upper && scope.upper.isStrict) {
    return true;
  }

  // ArrowFunctionExpression's scope is always strict scope.
  if (block.type === Syntax.ArrowFunctionExpression) {
    return true;
  }

  if (isMethodDefinition) {
    return true;
  }

  if (scope.type === 'class' || scope.type === 'module') {
    return true;
  }

  if (scope.type === 'block' || scope.type === 'switch') {
    return false;
  }

  if (scope.type === 'function') {
    if (block.type === Syntax.Program) {
      body = block;
    } else {
      body = (block as any).body;
    }

    if (!body) {
      return false;
    }
  } else if (scope.type === 'global') {
    body = block;
  } else {
    return false;
  }

  // Search 'use strict' directive.
  if (useDirective) {
    for (let i = 0, iz = body.body.length; i < iz; ++i) {
      const stmt = body.body[i];

      if (stmt.type !== Syntax.DirectiveStatement) {
        break;
      }
      if (stmt.raw === '"use strict"' || stmt.raw === "'use strict'") {
        return true;
      }
    }
  } else {
    for (let i = 0, iz = body.body.length; i < iz; ++i) {
      const stmt = body.body[i];

      if (stmt.type !== Syntax.ExpressionStatement) {
        break;
      }
      const expr = stmt.expression;

      if (expr.type !== Syntax.Literal || typeof expr.value !== 'string') {
        break;
      }
      if (expr.raw !== null && expr.raw !== undefined) {
        if (expr.raw === '"use strict"' || expr.raw === "'use strict'") {
          return true;
        }
      } else {
        if (expr.value === 'use strict') {
          return true;
        }
      }
    }
  }
  return false;
}


function registerScope(scopeManager: ScopeManager, scope: Scope): void {
  scopeManager.scopes.push(scope);

  const scopes = scopeManager.__nodeToScope.get(scope.block);

  if (scopes) {
    scopes.push(scope);
  } else {
    scopeManager.__nodeToScope.set(scope.block, [scope]);
  }
}

function shouldBeStatically(def: Definition): boolean {
  return (
    def.type === VariableType.ClassName ||
    (def.type === VariableType.Variable && (def.parent as ESTree.VariableDeclaration).kind !== 'var')
  );
}

export class Scope<BlockType extends ESTree.Node = ESTree.Node> {

  public dynamic: boolean;
  public variableScope: Scope;
  public functionExpressionScope: boolean = false;
  public directCallToEvalScope: boolean = false;
  public thisFound: boolean = false;
  public __left: Reference[] | null = [];
  public isStrict: boolean;

  public readonly set: Map<string, Variable> = new Map();
  public readonly taints: Map<string, boolean> = new Map();
  public readonly through: Reference[] = [];
  public readonly variables: Variable[] = [];
  public readonly references: Reference[] = [];
  public readonly childScopes: Scope[] = [];
  public readonly __declaredVariables: WeakMap<any, Variable[]>;

  public constructor(
    scopeManager: ScopeManager,
    public readonly type: ScopeType,
    public readonly upper: Scope | null = null,
    public readonly block: BlockType,
    isMethodDefinition: boolean
  ) {
    /**
     * Generally, through the lexical scoping of JS you can always know
     * which variable an identifier in the source code refers to. There are
     * a few exceptions to this rule. With 'global' and 'with' scopes you
     * can only decide at runtime which variable a reference refers to.
     * Moreover, if 'eval()' is used in a scope, it might introduce new
     * bindings in this or its parent scopes.
     * All those scopes are considered 'dynamic'.
     */
    this.dynamic = this.type === 'global' || this.type === 'with';

    /**
     * For 'global' and 'function' scopes, this is a self-reference. For
     * other scope types this is the <em>variableScope</em> value of the
     * parent scope.
     */
    this.variableScope =
      this.type === 'global' ||
      this.type === 'function' ||
      this.type === 'module'
        ? this
        : this.upper!.variableScope;

    /**
     * Whether 'use strict' is in effect in this scope.
     * @member {boolean} Scope#isStrict
     */
    this.isStrict = isStrictScope(
      this,
      block,
      isMethodDefinition,
      scopeManager.__useDirective(),
    );

    if (this.upper) {
      this.upper.childScopes.push(this);
    }

    this.__declaredVariables = scopeManager.__declaredVariables;

    registerScope(scopeManager, this);
  }

  __shouldStaticallyClose(scopeManager: ScopeManager) {
    return !this.dynamic || scopeManager.__isOptimistic();
  }

  __shouldStaticallyCloseForGlobal(ref: Reference) {
    // On global scope, let/const/class declarations should be resolved statically.
    const name = ref.identifier.name;

    if (!this.set.has(name)) {
      return false;
    }

    const variable: Variable = this.set.get(name)!;
    const defs = variable.defs;

    return defs.length > 0 && defs.every(shouldBeStatically);
  }

  __staticCloseRef(ref: Reference) {
    if (!this.__resolve(ref)) {
      this.__delegateToUpperScope(ref);
    }
  }

  __dynamicCloseRef(ref: Reference) {
    // notify all names are through to global
    let current: Scope = this;

    do {
      current.through.push(ref);
      current = current.upper!;
    } while (current);
  }

  __globalCloseRef(ref: Reference) {
    // let/const/class declarations should be resolved statically.
    // others should be resolved dynamically.
    if (this.__shouldStaticallyCloseForGlobal(ref)) {
      this.__staticCloseRef(ref);
    } else {
      this.__dynamicCloseRef(ref);
    }
  }

  __close(scopeManager: ScopeManager) {
    let closeRef;

    if (this.__shouldStaticallyClose(scopeManager)) {
      closeRef = this.__staticCloseRef;
    } else if (this.type !== 'global') {
      closeRef = this.__dynamicCloseRef;
    } else {
      closeRef = this.__globalCloseRef;
    }

    // Try Resolving all references in this scope.
    for (let i = 0, iz = this.__left!.length; i < iz; ++i) {
      const ref = this.__left![i];

      closeRef.call(this, ref);
    }
    this.__left = null;

    return this.upper;
  }

  // To override by function scopes.
  // References in default parameters isn't resolved to variables which are in their function body.
  __isValidResolution(ref: Reference, variable: Variable) {
    // eslint-disable-line class-methods-use-this, no-unused-vars
    return true;
  }

  __resolve(ref: Reference) {
    const name = ref.identifier.name;

    if (!this.set.has(name)) {
      return false;
    }
    const variable: Variable = this.set.get(name)!;

    if (!this.__isValidResolution(ref, variable)) {
      return false;
    }
    variable.references.push(ref);
    variable.stack =
      variable.stack && ref.from.variableScope === this.variableScope;
    if (ref.tainted) {
      variable.tainted = true;
      this.taints.set(variable.name, true);
    }
    ref.resolved = variable;

    return true;
  }

  __delegateToUpperScope(ref: Reference) {
    if (this.upper) {
      this.upper.__left!.push(ref);
    }
    this.through.push(ref);
  }

  __addDeclaredVariablesOfNode(variable: Variable, node: ESTree.Node | undefined) {
    if (node === null || node === undefined) {
      return;
    }

    let variables = this.__declaredVariables.get(node);

    if (variables === null || variables === undefined) {
      variables = [];
      this.__declaredVariables.set(node, variables);
    }
    if (variables.indexOf(variable) === -1) {
      variables.push(variable);
    }
  }

  protected __defineGeneric(
    name: string,
    set: Map<string, Variable>,
    variables: Variable[],
    node: any,
    def?: Definition
  ) {
    let variable: Variable;

    variable = set.get(name)!;
    if (!variable) {
      variable = new Variable(name, this);
      set.set(name, variable);
      variables.push(variable);
    }

    if (def) {
      variable.defs.push(def);
      if (def.type !== VariableType.TDZ) {
        this.__addDeclaredVariablesOfNode(variable, def.node);
        this.__addDeclaredVariablesOfNode(variable, def.parent);
      }
    }
    if (node) {
      variable.identifiers.push(node);
    }

    return variable;
  }

  __define(node: ESTree.Node, def: Definition): Variable | null {
    if (node && node.type === Syntax.Identifier) {
      return this.__defineGeneric(node.name, this.set, this.variables, node, def);
    }
    return null;
  }

  __referencing(
    node: ESTree.Node,
    assign?: number,
    writeExpr?: ESTree.Expression,
    maybeImplicitGlobal?: ImplicitGlobal,
    partial?: boolean,
    init?: boolean,
    isExportingSpecifier: boolean = false,
  ): Reference | undefined {
    // because Array element may be null
    if (!node || node.type !== Syntax.Identifier) {
      return;
    }

    // Specially handle like `this`.
    if (node.name === 'super') {
      return;
    }

    const ref = new Reference(
      node,
      this,
      isExportingSpecifier ? Reference.EXPORT : (assign || Reference.READ),
      writeExpr,
      maybeImplicitGlobal,
      !!partial,
      !!init,
    );

    this.references.push(ref);
    this.__left!.push(ref);
    return ref;
  }

  __detectEval() {
    let current: Scope = this;

    this.directCallToEvalScope = true;
    do {
      current.dynamic = true;
      current = current.upper!;
    } while (current);
  }

  __detectThis() {
    this.thisFound = true;
  }

  __isClosed() {
    return this.__left === null;
  }

  resolve(ident: ESTree.Identifier): Reference | null {
    let ref, i, iz;

    assert(this.__isClosed(), 'Scope should be closed.');
    assert(ident.type === Syntax.Identifier, 'Target should be identifier.');
    for (i = 0, iz = this.references.length; i < iz; ++i) {
      ref = this.references[i];
      if (ref.identifier === ident) {
        return ref;
      }
    }
    return null;
  }

  /**
   * returns this scope is static
   * @method Scope#isStatic
   * @returns {boolean} static
   */
  isStatic() {
    return !this.dynamic;
  }

  /**
   * returns this scope has materialized arguments
   * @method Scope#isArgumentsMaterialized
   * @returns {boolean} arguemnts materialized
   */
  isArgumentsMaterialized() {
    // eslint-disable-line class-methods-use-this
    return true;
  }

  /**
   * returns this scope has materialized `this` reference
   * @method Scope#isThisMaterialized
   * @returns {boolean} this materialized
   */
  isThisMaterialized() {
    // eslint-disable-line class-methods-use-this
    return true;
  }

  isUsedName(name: string) {
    if (this.set.has(name)) {
      return true;
    }
    for (let i = 0, iz = this.through.length; i < iz; ++i) {
      if (this.through[i].identifier.name === name) {
        return true;
      }
    }
    return false;
  }
}
