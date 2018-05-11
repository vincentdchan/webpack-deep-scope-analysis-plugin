import { Syntax } from "estraverse";
import { Scope } from "./scope";
import { Variable, VariableType } from "../variable";
import { Reference } from "../reference";
import { Definition } from "../definition";
import { ScopeManager } from "../scopeManager";
import * as ESTree from "estree";

export interface IGlobalScopeImplicit {
  set: Map<string, Variable>;
  variables: Variable[];
  left: Reference[];
}

export class GlobalScope extends Scope {
  public implicit: IGlobalScopeImplicit;

  public constructor(scopeManager: ScopeManager, block: ESTree.Node) {
    super(scopeManager, "global", null, block, false);

    this.implicit = {
      set: new Map(),
      variables: [],
      left: [],
    };
  }

  public __close(scopeManager: ScopeManager) {
    const implicit = [];

    for (let i = 0, iz = this.__left!.length; i < iz; ++i) {
      const ref = this.__left![i];

      if (
        ref.maybeImplicitGlobal &&
        !this.set.has(ref.identifier.name)
      ) {
        implicit.push(ref.maybeImplicitGlobal);
      }
    }

    // create an implicit global variable from assignment expression
    for (let i = 0, iz = implicit.length; i < iz; ++i) {
      const info = implicit[i];

      this.__defineImplicit(
        info.pattern,
        new Definition(
          VariableType.ImplicitGlobalVariable,
          info.pattern,
          info.node,
        ),
      );
    }

    this.implicit.left = this.__left!;

    return super.__close(scopeManager);
  }

  public __defineImplicit(node: ESTree.Node, def: Definition) {
    if (node && node.type === Syntax.Identifier) {
      this.__defineGeneric(
        node.name,
        this.implicit.set,
        this.implicit.variables,
        node,
        def,
      );
    }
  }
}
