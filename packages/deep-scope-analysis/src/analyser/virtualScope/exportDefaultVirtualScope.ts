import { VirtualScope, VScopeContentType, VirtualScopeType } from ".";
import * as ESTree from "estree";
import { Scope, ScopeManager, Variable, ModuleScope } from "../..";

export class ExportDefaultVirtualScope implements VirtualScope {

  public readonly children: VirtualScope[] = [];

  public constructor(
    public readonly contentType: VScopeContentType,
    public readonly declaration: ESTree.Node,
    public isChildrenDependent: boolean = true,
  ) {}

  public get type() {
    return VirtualScopeType.Default;
  }

  public findAllReferencesToVirtualScope(
    visitedSet: WeakSet<Scope>,
    scopeManager: ScopeManager,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    const moduleScope = this.getModuleScope(scopeManager);
    if (this.contentType === VScopeContentType.Reference) {
      const id = this.declaration as ESTree.Identifier;
      const idName = id.name;
      const variable = moduleScope.set.get(idName)!;
      const vs = virtualScopeMap.get(variable)!;
      this.children.push(vs);
    } else {
      const scopes = scopeManager!.__nodeToScope.get(this.declaration)!;
      this.traverseScopes(
        scopes,
        moduleScope,
        visitedSet,
        virtualScopeMap,
      );
    }
  }

  private getModuleScope(scopeManager: ScopeManager) {
    return scopeManager!.scopes[1] as ModuleScope; // default 1 is module Scope;
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

  private addToVs(
    idName: string,
    moduleScope: ModuleScope,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ) {
    const refVar = moduleScope.set.get(idName)!;
    const virtualScope = virtualScopeMap.get(refVar)!;
    this.children.push(virtualScope);
  }

}
