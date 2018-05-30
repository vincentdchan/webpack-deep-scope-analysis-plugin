import { Scope } from "./scope";
import { ScopeManager } from "../scopeManager";
import * as ESTree from "estree";

export class ClassScope extends Scope {
  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.Node,
  ) {
    super(scopeManager, "class", upperScope, block, false);
  }
}
