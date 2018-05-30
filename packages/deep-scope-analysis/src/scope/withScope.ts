import { Scope } from "./scope";
import { ScopeManager } from "../scopeManager";
import * as ESTree from "estree";

export class WithScope extends Scope {
  public constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.Node,
  ) {
    super(scopeManager, "with", upperScope, block, false);
  }

  public __close(scopeManager: ScopeManager) {
    if (this.__shouldStaticallyClose(scopeManager)) {
      return super.__close(scopeManager);
    }

    for (let i = 0, iz = this.__left!.length; i < iz; ++i) {
      const ref = this.__left![i];

      ref.tainted = true;
      this.__delegateToUpperScope(ref);
    }
    this.__left = null;

    return this.upper;
  }
}
