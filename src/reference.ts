import { Scope } from "./scope";
import { Variable } from "./variable";

const READ = 0x1;
const WRITE = 0x2;
const RW = READ | WRITE;

/**
 * A Reference represents a single occurrence of an identifier in code.
 */
export class Reference {

  public static READ = READ;
  public static WRITE = WRITE;
  public static RW = RW;

  public identifier: any;
  public from: Scope;
  public tainted: boolean;
  public resolved: Variable | null;
  public writeExpr: any;
  public partial: boolean | undefined;
  public init: boolean | undefined;
  public __maybeImplicitGlobal: boolean;
  private flag: number;

  constructor(
    ident,
    scope,
    flag,
    writeExpr,
    maybeImplicitGlobal: boolean = false,
    partial?: boolean,
    init?: boolean,
  ) {
    /**
     * Identifier syntax node.
     */
    this.identifier = ident;

    /**
     * Reference to the enclosing Scope.
     */
    this.from = scope;

    /**
     * Whether the reference comes from a dynamic scope (such as 'eval',
     * 'with', etc.), and may be trapped by dynamic scopes.
     */
    this.tainted = false;

    /**
     * The variable this reference is resolved with.
     */
    this.resolved = null;

    this.flag = flag;
    if (this.isWrite()) {
      /**
       * If reference is writeable, this is the tree being written to it.
       * @member {espreeNode} Reference#writeExpr
       */
      this.writeExpr = writeExpr;

      /**
       * Whether the Reference might refer to a partial value of writeExpr.
       * @member {boolean} Reference#partial
       */
      this.partial = partial;

      /**
       * Whether the Reference is to write of initialization.
       * @member {boolean} Reference#init
       */
      this.init = init;
    }
    this.__maybeImplicitGlobal = maybeImplicitGlobal;
  }

  /**
   * Whether the reference is static.
   */
  isStatic() {
    return !this.tainted && this.resolved && this.resolved.scope.isStatic();
  }

  /**
   * Whether the reference is writeable.
   */
  isWrite() {
    return !!(this.flag & Reference.WRITE);
  }

  /**
   * Whether the reference is readable.
   */
  isRead() {
    return !!(this.flag & Reference.READ);
  }

  /**
   * Whether the reference is read-only.
   */
  isReadOnly() {
    return this.flag === Reference.READ;
  }

  /**
   * Whether the reference is write-only.
   */
  isWriteOnly() {
    return this.flag === Reference.WRITE;
  }

  /**
   * Whether the reference is read-write.
   */
  isReadWrite() {
    return this.flag === Reference.RW;
  }
}
