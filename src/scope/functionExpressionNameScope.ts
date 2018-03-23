import { Scope } from './scope';
import { Definition } from '../definition';
import { VariableType } from '../variable';

export class FunctionExpressionNameScope extends Scope {
  constructor(scopeManager, upperScope, block) {
    super(scopeManager, 'function-expression-name', upperScope, block, false);
    this.__define(
      block.id,
      new Definition(VariableType.FunctionName, block.id, block, null, null, null),
    );
    this.functionExpressionScope = true;
  }
}
