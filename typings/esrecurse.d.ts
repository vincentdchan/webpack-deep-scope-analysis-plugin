
declare module "esrecurse" {

  import * as ESTree from 'estree';

  function isNode(node: any);

  class Visitor {

    constructor(visitor?: Visitor, options?: any);

    visitChildren(node: ESTree.Node);

    visit(node: ESTree.Node);

  }

  function visit(
    node: ESTree.Node,
    visitor: Visitor,
    options?: any,
  );

  const version: string;

}
