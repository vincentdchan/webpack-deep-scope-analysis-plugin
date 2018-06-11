import * as ESTree from "estree";
import { Scope } from "../scope";

export enum RootDeclarationType {
  Function = "function",
  Class = "class",
  PureVariable = "PureVariable",
}

export class RootDeclaration {
  public constructor(
    public readonly targetType: RootDeclarationType,
    public readonly name: string,
    public readonly node: ESTree.Node,
    public readonly scopes: Scope[],
  ) {}
}
