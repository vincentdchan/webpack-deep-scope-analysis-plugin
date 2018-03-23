import { Scope } from './scope';

export class CatchScope extends Scope {

  constructor(scopeManager, upperScope, block) {
    super(scopeManager, 'catch', upperScope, block, false);
  }

}
