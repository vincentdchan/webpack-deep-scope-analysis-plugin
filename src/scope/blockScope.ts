import { Scope } from './scope';

export class BlockScope extends Scope {

  constructor(scopeManager, upperScope, block) {
    super(scopeManager, 'block', upperScope, block, false);
  }

}

