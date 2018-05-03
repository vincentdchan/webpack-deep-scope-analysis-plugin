import * as ESTree from 'estree';
import { Scope } from '../scope';

export enum DeclarationType {
  Function = 'function',
  Class = 'class',
};

export class Declaration {

  public constructor(
    public readonly targetType: DeclarationType,
    public readonly name: string,
    public readonly node: ESTree.Node,
    public readonly scopes: Scope[],
  ) {}

}
