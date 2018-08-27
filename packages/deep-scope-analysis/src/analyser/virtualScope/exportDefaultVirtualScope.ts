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

    }
  }

  private getModuleScope(scopeManager: ScopeManager) {
    return scopeManager!.scopes[1] as ModuleScope; // default 1 is module Scope;
  }

}
