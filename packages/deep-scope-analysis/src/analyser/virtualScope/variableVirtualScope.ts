import { VirtualScope, VScopeContentType, VirtualScopeType } from ".";
import { Variable, Scope, ScopeManager, ModuleScope } from "../..";
import * as ESTree from "estree";
import * as estraverse from "estraverse";

/**
 * Every variable belongs to a module have
 * a VirtualScope, even it's not a function or class.
 *
 * Notice: imported variable are also virtualScope
 *
 * It can find all references to imports and other VirtualScopes
 */
export class VariableVirtualScope implements VirtualScope {

  public readonly children: VirtualScope[] = [];
  public readonly pureRange: [number, number] | undefined;

  public constructor(
    public readonly contentType: VScopeContentType,
    public readonly variable: Variable,
    public isChildrenDependent: boolean = true,
  ) {
    if (contentType === VScopeContentType.PureFunctionCall) {
      const { declarator } = this;
      this.pureRange = [declarator.start, declarator.end];
    }
  }

  public get type() {
    return VirtualScopeType.Variable;
  }

  public get declarator() {
    const def = this.variable.defs[0];
    const node = def.node as any;
    if (typeof node === "undefined") {
      throw new TypeError("node.init is undefined");
    }
    return node;
  }

  public get isImport() {
    return this.contentType === VScopeContentType.Import;
  }

  public findAllReferencesToVirtualScope(
    visitedSet: WeakSet<Scope>,
    scopeManager: ScopeManager,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    if (!this.isChildrenDependent) return;
    switch (this.contentType) {
      case VScopeContentType.ClassDeclaration:
      case VScopeContentType.FunctionDeclaration:
        this.traverseDeclarationScope(
          visitedSet,
          scopeManager,
          virtualScopeMap,
        );
        break;
      case VScopeContentType.ArrowFunction:
      case VScopeContentType.FunctionExpression:
      case VScopeContentType.ClassExpression:
        this.traverseExpressionScope(
          visitedSet,
          scopeManager,
          virtualScopeMap,
        );
        break;
      case VScopeContentType.PureFunctionCall:
        this.traversePureDeclarator(
          visitedSet,
          this.declarator,
          scopeManager,
          virtualScopeMap,
        );
        break;
      case VScopeContentType.NormalFunctionCall:
        break;
      case VScopeContentType.Undefined:
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
            this.addToVs(idName, moduleScope, virtualScopeMap);
          }
        });
        scope.childScopes.forEach(traverse);
      };

      traverse(scope);
    });
  }

  private traversePureDeclarator(
    visitedSet: WeakSet<Scope>,
    validatorDeclarator: ESTree.VariableDeclarator,
    scopeManager: ScopeManager,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    const moduleScope = this.getModuleScope(scopeManager);

    const nodeContains = (node1: any, node2: any) => {
      return node2.start >= node1.start && node2.end <= node1.end;
    };

    // FIXME: improve efficiency
    moduleScope.childScopes.forEach(scope => {
      const block = scope.block as any;
      if (nodeContains(validatorDeclarator, block)) {
        visitedSet.add(scope);
      }
    });

    estraverse.traverse(validatorDeclarator, {
      enter: (node) => {
        if (node.type === "Identifier") {
          const idName = node.name;
          this.addToVs(idName, moduleScope, virtualScopeMap);
        }
      },
    });
  }

  private addToVs(
    idName: string,
    moduleScope: ModuleScope,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    const refVar = moduleScope.set.get(idName);
    if (typeof refVar !== "undefined") {
      const virtualScope = virtualScopeMap.get(refVar)!;
      this.children.push(virtualScope);
    }
  }

}
