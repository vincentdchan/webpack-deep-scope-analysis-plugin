import { Scope } from './scope';

export class TDZScope extends Scope {

  constructor(scopeManager, upperScope, block) {
    super(scopeManager, 'TDZ', upperScope, block, false);
  }

}
