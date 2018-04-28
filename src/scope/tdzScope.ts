import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';

export class TDZScope extends Scope {

  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: any
  ) {
    super(scopeManager, 'TDZ', upperScope, block, false);
  }

}
