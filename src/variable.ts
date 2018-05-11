import { Scope } from "./scope";
import { Reference } from "./reference";
import { Definition } from "./definition";
import * as ESTree from "estree";

export enum VariableType {
  CatchClause = "CatchClause",
  Parameter = "Parameter",
  FunctionName = "FunctionName",
  ClassName = "ClassName",
  Variable = "Variable",
  ImportBinding = "ImportBinding",
  TDZ = "TDZ",
  ImplicitGlobalVariable = "ImplicitGlobalVariable",
  ExportDefault = "ExportDefault",
}

/**
 * A Variable represents a locally scoped identifier. These include arguments to
 * functions.
 * @class Variable
 */
export class Variable {
  public readonly identifiers: ESTree.Identifier[] = [];
  public readonly references: Reference[] = [];
  public readonly defs: Definition[] = [];
  public tainted: boolean = false;
  public stack: boolean = true;

  public constructor(
    public readonly name: string,
    public readonly scope: Scope,
  ) {}
}
