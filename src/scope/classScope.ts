import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';

export class ClassScope extends Scope {

  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: any
  ) {
    super(scopeManager, 'class', upperScope, block, false);
  }

}
