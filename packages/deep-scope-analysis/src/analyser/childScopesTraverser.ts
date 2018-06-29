import {
  ImportManager,
  ImportIdentifierInfo,
} from "../importManager";
import { Scope, ModuleScope } from "../scope";
import * as estraverse from "estraverse";
import * as ESTree from "estree";

export type NameInfoTuple = [string, ImportIdentifierInfo | null];

export interface RefsToModuleExtractor {
  refsToModule: NameInfoTuple[];
}

export class PureDeclaratorTraverser implements RefsToModuleExtractor {
  public readonly refsToModule: NameInfoTuple[] = [];
  public readonly relevantScopes: Scope[] = [];
  public readonly importManager: ImportManager;
  public readonly ids: ESTree.Identifier[] = [];

  public constructor(
    public readonly validatorDeclarator: ESTree.VariableDeclarator,
    public readonly moduleScope: ModuleScope,
  ) {
    this.importManager = moduleScope.importManager;

    // FIXME: improve efficiency
    moduleScope.childScopes.forEach(scope => {
      const block = scope.block as any;
      if (this.nodeContains(validatorDeclarator, block)) {
        this.relevantScopes.push(scope);
      }
    });

    estraverse.traverse(validatorDeclarator, {
      enter: (node) => {
        if (node.type === "Identifier") {
          this.ids.push(node);
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

  private nodeContains(node1: any, node2: any) {
    return node2.start >= node1.start && node2.end <= node1.end;
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
