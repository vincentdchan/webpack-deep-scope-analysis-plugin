import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';

export class SwitchScope extends Scope {

  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: any,
  ) {
    super(scopeManager, 'switch', upperScope, block, false);
  }

}

