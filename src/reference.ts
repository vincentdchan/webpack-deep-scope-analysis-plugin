import { Scope } from "./scope";
import { Variable } from "./variable";
import * as ESTree from 'estree';

const __READ = 0x1;
const __WRITE = 0x2;
const __RW = __READ | __WRITE;
const __EXPORT = 0x4;

export interface ImplicitGlobal {
  pattern: ESTree.Identifier,
  node: ESTree.Node,
}

/**
 * A Reference represents a single occurrence of an identifier in code.
 */
export class Reference {

  public static READ = __READ;
  public static WRITE = __WRITE;
  public static RW = __RW;
  public static EXPORT = __EXPORT;

  public tainted: boolean = false;
  public resolved: Variable | null;

  public readonly writeExpr?: ESTree.Expression;
  public readonly partial?: boolean;
  public readonly init?: boolean;

  constructor(
    public readonly identifier: ESTree.Identifier,
    public readonly from: Scope,
    public readonly flag: number,
    writeExpr?: ESTree.Expression,
    public readonly maybeImplicitGlobal: ImplicitGlobal | null = null,
    partial?: boolean,
    init?: boolean,
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
    if (this.isWrite) {
      this.writeExpr = writeExpr;
      this.partial = partial;
      this.init = init;
    }
  }

  /**
   * Whether the reference is static.
   */
  get isStatic() {
    return !this.tainted && this.resolved && this.resolved.scope.isStatic();
  }

  /**
   * Whether the reference is writeable.
   */
  get isWrite() {
    return !!(this.flag & Reference.WRITE);
  }

  /**
   * Whether the reference is readable.
   */
  get isRead() {
    return !!(this.flag & Reference.READ);
  }

  /**
   * Whether the reference is read-only.
   */
  get isReadOnly() {
    return this.flag === Reference.READ;
  }

  /**
   * Whether the reference is write-only.
   */
  get isWriteOnly() {
    return this.flag === Reference.WRITE;
  }

  /**
   * Whether the reference is read-write.
   */
  get isReadWrite() {
    return this.flag === Reference.RW;
  }

  get isExport() {
    return this.flag === Reference.EXPORT;
  }
}
