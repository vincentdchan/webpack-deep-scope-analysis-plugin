import { Scope } from './scope';

export class ClassScope extends Scope {

  constructor(scopeManager, upperScope, block) {
    super(scopeManager, 'class', upperScope, block, false);
  }

}
