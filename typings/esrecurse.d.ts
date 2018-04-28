
declare module "esrecurse" {

  import * as ESTree from 'estree';

  function isNode(node: any): boolean;

  class Visitor {

    constructor(visitor?: Visitor, options?: any);

    visitChildren(node: ESTree.Node): void;

    visit(node: ESTree.Node): void;

  }

  function visit(
    node: ESTree.Node,
    visitor: Visitor,
    options?: any,
  ): void;

  const version: string;

}
