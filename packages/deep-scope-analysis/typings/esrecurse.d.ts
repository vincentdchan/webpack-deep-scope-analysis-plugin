
declare module "esrecurse" {

  import * as ESTree from 'estree';

  function isNode(node: any): boolean;

  export interface VisitorOption {
    optimistic?: boolean;
    directive?: boolean;
    ignoreEval?: boolean;
    nodejsScope?: boolean;
    impliedStrict?: boolean;
    sourceType?: string;
    ecmaVersion?: number;
    fallback?: string;
  }

  class Visitor {

    constructor(visitor?: Visitor, options?: VisitorOption);

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
