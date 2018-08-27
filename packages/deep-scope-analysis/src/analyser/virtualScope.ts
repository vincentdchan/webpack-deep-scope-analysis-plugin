import { Variable } from "../variable";
import { ScopeManager } from "../scopeManager";
import { Scope, ModuleScope } from "..";
import { ImportIdentifierInfo } from "../importManager";
import * as estraverse from "estraverse";
import * as ESTree from "estree";
// import { Scope } from "../scope";

export enum VirtualScopeType {
  Import = "import",
  Expression = "expression",
  ArrowFunction = "arrow-function",
  ClassExpression = "class-expression",
  ClassDeclaration = "class-declaration",
  PureFunctionCall = "pure-function-call",
  NormalFunctionCall = "normal-function-call",
  FunctionExpression = "function-expression",
  FunctionDeclaration = "function-declaration",
  Undefined = "undefined",
}

/**
 * Every variable belongs to a module have
 * a VirtualScope, even it's not a function or class.
 *
 * Notice: imported variable are also virtualScope
 *
 * It can find all references to imports and other VirtualScopes
 */
export class VirtualScope {

  public readonly children: VirtualScope[] = [];

  public constructor(
    public readonly type: VirtualScopeType,
    public readonly variable: Variable,
    /**
     * which mean the whether the children is included is dependent
     */
    public isChildrenDependent: boolean = true,
  ) {}

  public get declarator() {
    const def = this.variable.defs[0];
    const node = def.node as any;
    if (typeof node === "undefined") {
      throw new TypeError("node.init is undefined");
    }
    return node.init;
  }

  public get isImport() {
    return this.type === VirtualScopeType.Import;
  }

  public findAllReferencesToVirtualScope(
    visitedSet: WeakSet<Scope>,
    scopeManager: ScopeManager,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    switch (this.type) {
      case VirtualScopeType.ClassDeclaration:
      case VirtualScopeType.FunctionDeclaration:
        this.traverseDeclarationScope(
          visitedSet,
          scopeManager,
          virtualScopeMap,
        );
        break;
      case VirtualScopeType.ArrowFunction:
      case VirtualScopeType.FunctionExpression:
      case VirtualScopeType.ClassExpression:
        this.traverseExpressionScope(
          visitedSet,
          scopeManager,
          virtualScopeMap,
        );
        break;
      case VirtualScopeType.PureFunctionCall:
        this.traversePureDeclarator(
          this.declarator,
          scopeManager,
          virtualScopeMap,
        );
        break;
      case VirtualScopeType.Expression:
        break;
      case VirtualScopeType.NormalFunctionCall:
        break;
      case VirtualScopeType.Undefined:
        break;
    }
  }

  private getModuleScope(scopeManager: ScopeManager) {
    return scopeManager!.scopes[1] as ModuleScope; // default 1 is module Scope;
  }

  /**
   * It can find all references to imports and other VirtualScopes
   */
  private traverseDeclarationScope(
    visitedSet: WeakSet<Scope>,
    scopeManager: ScopeManager,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    const def = this.variable.defs[0];
    const scopes = scopeManager.__nodeToScope.get(def.node)!;
    const moduleScope = this.getModuleScope(scopeManager);

    this.traverseScopes(
      scopes,
      moduleScope,
      visitedSet,
      virtualScopeMap,
    );
  }

  private traverseExpressionScope(
    visitedSet: WeakSet<Scope>,
    scopeManager: ScopeManager,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    const def = this.variable.defs[0];
    const node = def.node as ESTree.VariableDeclarator;
    const { init } = node;
    const scopes = scopeManager.__nodeToScope.get(init)!;
    const moduleScope = this.getModuleScope(scopeManager);

    this.traverseScopes(
      scopes,
      moduleScope,
      visitedSet,
      virtualScopeMap,
    );
  }

  private traverseScopes(
    scopes: Scope[],
    moduleScope: ModuleScope,
    visitedSet: WeakSet<Scope>,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    scopes.forEach(scope => {
      visitedSet.add(scope);

      /**
       * recursive function to traverse all scopes belong
       * to this
       */
      const traverse = (scope: Scope) => {
        // find the reference to module
        scope.references.forEach(ref => {
          if (
            ref.resolved &&
            ref.resolved.scope.type === "module"
          ) {
            const idName = ref.identifier.name;
            this.addToVsOrImport(idName, moduleScope, virtualScopeMap);
          }
        });
        scope.childScopes.forEach(traverse);
      };

      traverse(scope);
    });
  }

  private traversePureDeclarator(
    validatorDeclarator: ESTree.VariableDeclarator,
    scopeManager: ScopeManager,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    const moduleScope = this.getModuleScope(scopeManager);
    const relevantScopes: Scope[] = [];

    const nodeContains = (node1: any, node2: any) => {
      return node2.start >= node1.start && node2.end <= node1.end;
    };

    // FIXME: improve efficiency
    moduleScope.childScopes.forEach(scope => {
      const block = scope.block as any;
      if (nodeContains(validatorDeclarator, block)) {
        relevantScopes.push(scope);
      }
    });

    estraverse.traverse(validatorDeclarator, {
      enter: (node) => {
        if (node.type === "Identifier") {
          const idName = node.name;
          this.addToVsOrImport(idName, moduleScope, virtualScopeMap);
        }
      },
    });

  }

  private addToVsOrImport(
    idName: string,
    moduleScope: ModuleScope,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    const refVar = moduleScope.set.get(idName)!;
    const virtualScope = virtualScopeMap.get(refVar)!;
    this.children.push(virtualScope);
  }

}
