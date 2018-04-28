import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';
import * as ESTree from 'estree';

export class CatchScope extends Scope {

  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.Node,
  ) {
    super(scopeManager, 'catch', upperScope, block, false);
  }

}
