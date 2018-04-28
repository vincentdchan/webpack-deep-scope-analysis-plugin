import { Scope } from "./scope";
import { Variable } from "./variable";
import * as ESTree from 'estree';

const READ = 0x1;
const WRITE = 0x2;
const RW = READ | WRITE;

export interface ImplicitGlobal {
  pattern: ESTree.Identifier,
  node: ESTree.Node,
}

/**
 * A Reference represents a single occurrence of an identifier in code.
 */
export class Reference {

  public static READ = READ;
  public static WRITE = WRITE;
  public static RW = RW;

  public tainted: boolean = false;
  public resolved: Variable | null;

  constructor(
    public readonly identifier: ESTree.Identifier,
    public readonly from: Scope,
    public readonly flag: number,
    public readonly writeExpr?: ESTree.Expression,
    public readonly maybeImplicitGlobal: ImplicitGlobal | null = null,
    public readonly partial?: boolean,
    public readonly init?: boolean,
  ) {
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
