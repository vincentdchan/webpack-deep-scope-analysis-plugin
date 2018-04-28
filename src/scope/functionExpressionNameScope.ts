import { Scope } from './scope';
import { Definition } from '../definition';
import { VariableType } from '../variable';
import { ScopeManager } from '../scopeManager';

export class FunctionExpressionNameScope extends Scope {

  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: any
  ) {
    super(scopeManager, 'function-expression-name', upperScope, block, false);
    this.__define(
      block.id,
      new Definition(VariableType.FunctionName, block.id, block),
    );
    this.functionExpressionScope = true;
  }
}
