import {
  ImportManager,
  ImportIdentifierInfo,
} from "../importManager";
import { Scope } from "../scope";
import * as estraverse from "estraverse";
import * as ESTree from "estree";

export type NameInfoTuple = [string, ImportIdentifierInfo | null];

export interface RefsToModuleExtractor {
  refsToModule: NameInfoTuple[];
}

export class PureDeclaratorTraverser implements RefsToModuleExtractor {
  public readonly refsToModule: NameInfoTuple[] = [];

  public constructor(
    public readonly validatorDeclarator: ESTree.VariableDeclarator,
    public readonly importManager: ImportManager,
  ) {

    estraverse.traverse(validatorDeclarator, {
      enter: (node) => {
        if (node.type === "Identifier") {
          const idName = node.name;
          let importNameInfo: ImportIdentifierInfo | null = null;
          if (this.importManager.idMap.get(idName)) {
            importNameInfo = this.importManager.idMap.get(
              idName,
            )!;
          }
          this.refsToModule.push([idName, importNameInfo]);
        }
      },
    });

  }

}

export class ChildScopesTraverser implements RefsToModuleExtractor {
  public readonly refsToModule: NameInfoTuple[] = [];

  public constructor(
    public readonly scope: Scope,
    public readonly importManager: ImportManager,
  ) {
    this.traverse(scope);
  }

  private traverse = (scope: Scope) => {
    // find the reference to module
    scope.references.forEach(ref => {
      if (
        ref.resolved &&
        ref.resolved.scope.type === "module"
      ) {
        const idName = ref.identifier.name;
        let importNameInfo: ImportIdentifierInfo | null = null;
        if (this.importManager.idMap.get(idName)) {
          importNameInfo = this.importManager.idMap.get(
            idName,
          )!;
        }
        this.refsToModule.push([ref.identifier.name, importNameInfo]);
      }
    });
    scope.childScopes.forEach(this.traverse);
  }
}
