import { VariableType } from './variable';
import * as ESTree from 'estree';

type Declaration =
| ESTree.VariableDeclaration
| ESTree.ImportDeclaration
| ESTree.ExportDefaultDeclaration

export class Definition {

  constructor(
    public readonly type: VariableType,
    public readonly name: ESTree.Pattern | null, 
    public readonly node: ESTree.Node,
    public readonly parent?: Declaration,
    public readonly index?: number,
    public readonly kind?: string,
  ) { }

}

export class ParameterDefinition extends Definition {

  constructor(
    name: ESTree.Identifier,
    node: ESTree.Node,
    index: number,
    public readonly rest: boolean,
  ) {
    super(VariableType.Parameter, name, node, undefined, index, undefined);
  }

}
