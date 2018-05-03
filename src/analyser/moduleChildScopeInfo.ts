import { ImportManager, ImportIdentifierInfo } from "../importManager";
import { Scope } from "../scope";
import { Reference } from "../reference";

export type RefTuple = [Reference, ImportIdentifierInfo | null];

export class ModuleChildScopeInfo {

  public readonly refsToModule: RefTuple[] = [];

  constructor(
    public readonly scope: Scope,
    public readonly importManager: ImportManager,
  ) {
    this.traverse(scope);
  }

  private traverse = (scope: Scope) => {  // find the reference to module
    scope.references.forEach(ref => {
      if (ref.resolved && ref.resolved.scope.type === 'module') {
        const idName = ref.identifier.name;
        let importNameInfo: ImportIdentifierInfo | null = null;
        if (this.importManager.idMap.get(idName)) {
          importNameInfo = this.importManager.idMap.get(idName)!;
        }
        this.refsToModule.push([ref, importNameInfo]);
      }
    });
    scope.childScopes.forEach(this.traverse);
  };

}
