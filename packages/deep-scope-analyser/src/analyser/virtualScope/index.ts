import { Variable } from "../../variable";
import { ScopeManager } from "../../scopeManager";
import { Scope } from "../../";

export enum VScopeContentType {
  Import = "import",
  Reference = "reference",
  ArrowFunction = "arrow-function",
  ClassExpression = "class-expression",
  ClassDeclaration = "class-declaration",
  PureFunctionCall = "pure-function-call",
  NormalFunctionCall = "normal-function-call",
  FunctionExpression = "function-expression",
  FunctionDeclaration = "function-declaration",
  Undefined = "undefined",
}

export enum VirtualScopeType {
  Variable = "variable",
  Default = "default",
}

export interface VirtualScope {
  type: VirtualScopeType;
  contentType: VScopeContentType;
  children: VirtualScope[];
  /**
   * which mean the whether the children is included is dependent
   */
  isChildrenDependent: boolean;
  findAllReferencesToVirtualScope(
    visitedSet: WeakSet<Scope>,
    scopeManager: ScopeManager,
    virtualScopeMap: WeakMap<Variable, VirtualScope>,
  ): void;
}

export * from "./variableVirtualScope";
export * from "./exportDefaultVirtualScope";
