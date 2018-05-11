import { Scope } from "./scope";
import { ScopeManager } from "../scopeManager";
import * as ESTree from "estree";

export class SwitchScope extends Scope {
  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.SwitchStatement,
  ) {
    super(scopeManager, "switch", upperScope, block, false);
  }
}
