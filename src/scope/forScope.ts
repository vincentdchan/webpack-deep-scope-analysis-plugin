import { Scope } from './scope';

export class ForScope extends Scope {

  constructor(scopeManager, upperScope, block) {
    super(scopeManager, 'for', upperScope, block, false);
  }
  
}
