import { Scope } from "./scope"
import { Reference } from './reference'
import { Definition } from "./definition"

/**
 * A Variable represents a locally scoped identifier. These include arguments to
 * functions.
 * @class Variable
 */
export class Variable {

  public static CatchClause = 'CatchClause';
  public static Parameter = 'Parameter';
  public static FunctionName = 'FunctionName';
  public static ClassName = 'ClassName';
  public static Variable = 'Variable';
  public static ImportBinding = 'ImportBinding';
  public static TDZ = 'TDZ';
  public static ImplicitGlobalVariable = 'ImplicitGlobalVariable';
  public static ExportDefault = 'ExportDefault';

  public name: string;
  public scope: Scope;
  public identifiers: any[];
  public references: Reference[];
  public defs: Definition[];
  public tainted: boolean;
  public stack: boolean;

  constructor(name: string, scope: Scope) {
    /**
     * The variable name, as given in the source code.
     * @member {String} Variable#name
     */
    this.name = name;

    /**
     * List of defining occurrences of this variable (like in 'var ...'
     * statements or as parameter), as AST nodes.
     * @member {espree.Identifier[]} Variable#identifiers
     */
    this.identifiers = [];

    /**
     * List of {@link Reference|references} of this variable (excluding parameter entries)
     * in its defining scope and all nested scopes. For defining
     * occurrences only see {@link Variable#defs}.
     */
    this.references = [];

    /**
     * List of defining occurrences of this variable (like in 'var ...'
     * statements or as parameter), as custom objects.
     * @member {Definition[]} Variable#defs
     */
    this.defs = [];

    this.tainted = false;

    /**
     * Whether this is a stack variable.
     * @member {boolean} Variable#stack
     */
    this.stack = true;

    /**
     * Reference to the enclosing Scope.
     * @member {Scope} Variable#scope
     */
    this.scope = scope;

  }

}
