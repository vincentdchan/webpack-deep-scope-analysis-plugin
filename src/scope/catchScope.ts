import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';

export class CatchScope extends Scope {

  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: any
  ) {
    super(scopeManager, 'catch', upperScope, block, false);
  }

}
