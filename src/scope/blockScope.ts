import { Scope } from "./scope";
import { ScopeManager } from "../scopeManager";
import * as ESTree from "estree";

export class BlockScope extends Scope {
  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.Node,
  ) {
    super(scopeManager, "block", upperScope, block, false);
  }
}
