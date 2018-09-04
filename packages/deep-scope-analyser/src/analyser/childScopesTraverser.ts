import {
  ImportManager,
  ImportIdentifierInfo,
} from "../importManager";
import { Scope, ModuleScope } from "../scope";
import * as estraverse from "estraverse";
import * as ESTree from "estree";

export interface RefsToModuleExtractor {
  refsToModule: string[];
}

/**
 * Find the scopes within the pure declarator
 * and the references to the module scope
 */
export class PureDeclaratorTraverser implements RefsToModuleExtractor {
  public readonly refsToModule: string[] = [];
  public readonly relevantScopes: Scope[] = [];
  public readonly ids: ESTree.Identifier[] = [];

  public constructor(
    public readonly validatorDeclarator: ESTree.VariableDeclarator,
    public readonly moduleScope: ModuleScope,
  ) {

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
          this.refsToModule.push(idName);
        }
      },
    });

  }

  private nodeContains(node1: any, node2: any) {
    return node2.start >= node1.start && node2.end <= node1.end;
  }

}

/**
 * The traverser traverses all the scope
 * and all the children scopes to find
 * the references to module scope
 */
export class ChildScopesTraverser implements RefsToModuleExtractor {
  public readonly refsToModule: string[] = [];

  public constructor(
    public readonly scope: Scope,
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
        this.refsToModule.push(ref.identifier.name);
      }
    });
    scope.childScopes.forEach(this.traverse);
  }
}
