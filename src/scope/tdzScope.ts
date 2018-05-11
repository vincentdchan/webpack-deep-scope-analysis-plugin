import { Scope } from "./scope";
import { ScopeManager } from "../scopeManager";
import * as ESTree from "estree";

export class TDZScope extends Scope {
  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.Node,
  ) {
    super(scopeManager, "TDZ", upperScope, block, false);
  }
}
