import { Scope } from "./scope";
import { Definition } from "../definition";
import { VariableType } from "../variable";
import { ScopeManager } from "../scopeManager";
import * as ESTree from "estree";

export class FunctionExpressionNameScope extends Scope {
  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.FunctionExpression,
  ) {
    super(
      scopeManager,
      "function-expression-name",
      upperScope,
      block,
      false,
    );
    this.__define(
      block.id!,
      new Definition(
        VariableType.FunctionName,
        block.id!,
        block,
      ),
    );
    this.functionExpressionScope = true;
  }
}
