import { Scope } from './scope';

export class SwitchScope extends Scope {
  constructor(scopeManager, upperScope, block) {
    super(scopeManager, 'switch', upperScope, block, false);
  }
}

