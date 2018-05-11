import {
  Scope,
  GlobalScope,
  CatchScope,
  WithScope,
  ModuleScope,
  ClassScope,
  SwitchScope,
  FunctionScope,
  ForScope,
  TDZScope,
  FunctionExpressionNameScope,
  BlockScope,
} from "./scope";
import { Variable } from "./variable";
import * as assert from "assert";
import * as ESTree from "estree";

export class ScopeManager {
  public constructor(public readonly __options: any) {}

  public globalScope: Scope | null = null;
  public __currentScope: Scope | null = null;
  public readonly scopes: Scope[] = [];
  public readonly __nodeToScope: WeakMap<
    any,
    Scope[]
  > = new WeakMap();
  public readonly __declaredVariables: WeakMap<
    any,
    Variable[]
  > = new WeakMap();

  public __useDirective() {
    return this.__options.directive;
  }

  public __isOptimistic() {
    return this.__options.optimistic;
  }

  public __ignoreEval() {
    return this.__options.ignoreEval;
  }

  public __isNodejsScope() {
    return this.__options.nodejsScope;
  }

  public isModule() {
    return this.__options.sourceType === "module";
  }

  public isImpliedStrict() {
    return this.__options.impliedStrict;
  }

  public isStrictModeSupported() {
    return this.__options.ecmaVersion >= 5;
  }

  // Returns appropriate scope for this node.
  public __get(node: ESTree.Node) {
    return this.__nodeToScope.get(node);
  }

  public getDeclaredVariables(node: ESTree.Node[]): Variable[] {
    return this.__declaredVariables.get(node) || [];
  }

  public acquire(node: ESTree.Node, inner: boolean): Scope | null {
    function predicate(testScope: Scope): boolean {
      if (
        testScope.type === "function" &&
        testScope.functionExpressionScope
      ) {
        return false;
      }
      if (testScope.type === "TDZ") {
        return false;
      }
      return true;
    }

    const scopes = this.__get(node);

    if (!scopes || scopes.length === 0) {
      return null;
    }

    // Heuristic selection from all scopes.
    // If you would like to get all scopes, please use ScopeManager#acquireAll.
    if (scopes.length === 1) {
      return scopes[0];
    }

    if (inner) {
      for (let i = scopes.length - 1; i >= 0; --i) {
        const scope = scopes[i];

        if (predicate(scope)) {
          return scope;
        }
      }
    } else {
      for (let i = 0, iz = scopes.length; i < iz; ++i) {
        const scope = scopes[i];

        if (predicate(scope)) {
          return scope;
        }
      }
    }

    return null;
  }

  public acquireAll(node: ESTree.Node): Scope[] | undefined {
    return this.__get(node);
  }

  public release(node: ESTree.Node, inner: boolean): Scope | null {
    const scopes = this.__get(node);

    if (scopes && scopes.length) {
      const scope = scopes[0].upper;

      if (!scope) {
        return null;
      }
      return this.acquire(scope.block, inner);
    }
    return null;
  }

  public attach() {} // eslint-disable-line class-methods-use-this

  public detach() {} // eslint-disable-line class-methods-use-this

  public __nestScope(scope: Scope) {
    if (scope instanceof GlobalScope) {
      assert(this.__currentScope === null);
      this.globalScope = scope;
    }
    this.__currentScope = scope;
    return scope;
  }

  public __nestGlobalScope(node: ESTree.Node) {
    return this.__nestScope(new GlobalScope(this, node));
  }

  public __nestBlockScope(node: ESTree.Node) {
    return this.__nestScope(
      new BlockScope(this, this.__currentScope!, node),
    );
  }

  public __nestFunctionScope(
    node: ESTree.Function | ESTree.Program,
    isMethodDefinition: boolean,
  ) {
    return this.__nestScope(
      new FunctionScope(
        this,
        this.__currentScope!,
        node,
        isMethodDefinition,
      ),
    );
  }

  public __nestForScope(node: ESTree.Node) {
    return this.__nestScope(
      new ForScope(this, this.__currentScope!, node),
    );
  }

  public __nestCatchScope(node: ESTree.Node) {
    return this.__nestScope(
      new CatchScope(this, this.__currentScope!, node),
    );
  }

  public __nestWithScope(node: ESTree.Node) {
    return this.__nestScope(
      new WithScope(this, this.__currentScope!, node),
    );
  }

  public __nestClassScope(node: ESTree.Node) {
    return this.__nestScope(
      new ClassScope(this, this.__currentScope!, node),
    );
  }

  public __nestSwitchScope(node: ESTree.SwitchStatement) {
    return this.__nestScope(
      new SwitchScope(this, this.__currentScope!, node),
    );
  }

  public __nestModuleScope(node: ESTree.Node) {
    return this.__nestScope(
      new ModuleScope(this, this.__currentScope!, node),
    );
  }

  public __nestTDZScope(node: ESTree.Node) {
    return this.__nestScope(
      new TDZScope(this, this.__currentScope!, node),
    );
  }

  public __nestFunctionExpressionNameScope(
    node: ESTree.FunctionExpression,
  ) {
    return this.__nestScope(
      new FunctionExpressionNameScope(
        this,
        this.__currentScope!,
        node,
      ),
    );
  }

  public __isES6() {
    return this.__options.ecmaVersion >= 6;
  }
}
