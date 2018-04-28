import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';

export class BlockScope extends Scope {

  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: any
  ) {
    super(scopeManager, 'block', upperScope, block, false);
  }

}
