import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';

export class ForScope extends Scope {

  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: any
  ) {
    super(scopeManager, 'for', upperScope, block, false);
  }
  
}
