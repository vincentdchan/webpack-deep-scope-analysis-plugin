import { ScopeManager } from "../scopeManager";

import * as assert from "assert";
import { Referencer } from "../referencer";
import * as ESTree from "estree";
import { Scope, ModuleScope } from "../scope";
import { Reference } from "../reference";
import { IComment } from "./comment";
import { ImportIdentifierInfo, ImportManager } from "../importManager";
import { ChildScopesTraverser } from "./childScopesTraverser";
import { Variable } from "../variable";
import { Definition } from "../definition";
import { RootDeclaration, RootDeclarationType } from "./rootDeclaration";
import rootDeclarationResolver from "./rootDeclarationResolver";

export interface Dictionary<T> {
  [index: string]: T;
}

// flatMap polyfill
Object.defineProperty(Array.prototype, "flatMap", {
  value(this: any[], f: any) {
    return this.reduce((ys: any, x: any) => {
      return ys.concat(f.call(this, x));
    }, []);
  },
  enumerable: false,
});

export class ModuleAnalyser {
  public readonly childScopesTraverserMap: Map<
    string,
    ChildScopesTraverser
  > = new Map();
  public readonly internalUsedScopeIds: string[] = [];

  private comments: IComment[] = [];

  /**
   * Set of end offset of @__PURE__ or #__PURE__
   */
  private readonly pureCommentEndsSet: Set<number> = new Set();

  public constructor(
    public readonly name: string,
    public readonly module: any,
    public scopeManager: ScopeManager | null = null,
  ) {}

  /**
   * Set the default options
   * @returns {Object} options
   */
  public defaultOptions() {
    return {
      optimistic: false,
      directive: false,
      nodejsScope: false,
      impliedStrict: false,
      sourceType: "module", // one of ['script', 'module']
      ecmaVersion: 6,
      childVisitorKeys: null,
      fallback: "iteration",
      comments: [],
    };
  }

  public analyze(tree: ESTree.Node, providedOptions?: any) {
    const options = this.updateDeeply(this.defaultOptions(), providedOptions);
    this.comments = options.comments;
    const scopeManager = new ScopeManager(options);
    const referencer = new Referencer(options, scopeManager);

    referencer.visit(tree);

    assert(
      scopeManager.__currentScope === null,
      "currentScope should be null.",
    );
    this.scopeManager = scopeManager;

    this.resolvePureVariables();
    this.analyzeImportExport();
  }

  // find all the pure annotation
  private processComments() {
    this.comments.forEach(comment => {
      if (comment.type === "Block" && /(@|#)__PURE__/.test(comment.value)) {
        this.pureCommentEndsSet.add(comment.end);
      }
    });
  }

  private resolvePureVariables() {}

  private get moduleScopeDeclarations() {
    const moduleScope = this.moduleScope;
    const declarations: RootDeclaration[] = [];

    const { importManager, exportManager } = moduleScope;
    const resolver = rootDeclarationResolver(declarations, this.scopeManager!);

    for (let i = 0; i < moduleScope.variables.length; i++) {
      const variable = moduleScope.variables[i];
      resolver(variable);
    }

    // resolve export declaration
    this.resolveExportDeclaration(declarations);
    return declarations;
  }

  private resolveExportDeclaration(declarations: RootDeclaration[]) {
    const moduleScope = this.moduleScope;
    const { exportManager } = moduleScope;

    const isFunction = (node: ESTree.Node) =>
      ["FunctionDeclaration", "ArrowFunctionExpression"].indexOf(node.type) >= 0;

    if (exportManager.exportDefaultDeclaration) {
      if (isFunction(exportManager.exportDefaultDeclaration)) {
        const declaration = exportManager.exportDefaultDeclaration;
        declarations.push(
          new RootDeclaration(
            RootDeclarationType.Function,
            "default",
            declaration,
            this.scopeManager!.__nodeToScope.get(declaration)!,
          ),
        );
      } else if (exportManager.exportDefaultDeclaration.type === "Identifier") {
        const id = exportManager.exportDefaultDeclaration as ESTree.Identifier;
        const idName = id.name;
        const variable = moduleScope.set.get(idName)!;
        declarations.push(
          new RootDeclaration(
            RootDeclarationType.Function,
            "default",
            id,
            this.scopeManager!.__nodeToScope.get(variable.defs[0].node)!,
          ),
        );
      }
    }

  }

  private analyzeImportExport() {
    const moduleScope = this.moduleScope;
    const declarations = this.moduleScopeDeclarations;

    // find all the function & class scopes under modules
    const dependentScopes = declarations.flatMap(decl => decl.scopes);
    // deep scope analysis of all child scopes
    const visitedSet = new WeakSet();
    this.handleDeclarations(declarations, visitedSet);

    const independentScopes = moduleScope.childScopes.filter(
      item => !visitedSet.has(item),
    );
    this.handleIndependentScopes(independentScopes);

    // find references that is not in export specifiers
    this.handleNotExportReferences(
      moduleScope.references.filter(ref => !ref.isExport),
    );
  }

  public generateExportInfo(usedExport: string[]) {
    const moduleScopeIds = this.internalUsedScopeIds.concat(
      this.findExportLocalNames(usedExport),
    );
    const importManager = this.moduleScope.importManager;
    const resultList = importManager.ids
      .filter(item => item.mustBeImported)
      .map(item => ({
        sourceName: item.sourceName,
        moduleName: item.moduleName,
      }));

    const visitedTraverserSet = new WeakSet<ChildScopesTraverser>();

    const visitTraverser = (traverser: ChildScopesTraverser) => {
      if (visitedTraverserSet.has(traverser)) return;
      visitedTraverserSet.add(traverser);

      traverser.refsToModule.forEach(([ref, info]) => {
        if (info !== null) {
          resultList.push({
            sourceName: info.sourceName,
            moduleName: info.moduleName,
          });
        }

        if (this.childScopesTraverserMap.has(ref.identifier.name)) {
          visitTraverser(
            this.childScopesTraverserMap.get(ref.identifier.name)!,
          );
        }
      });
    };

    // find all related scopes
    for (const [funName, traverser] of this.childScopesTraverserMap) {
      if (moduleScopeIds.indexOf(funName) >= 0) {
        visitTraverser(traverser);
      }
    }

    const resultMap: Dictionary<Set<string>> = {};

    resultList.forEach(({ sourceName, moduleName }) => {
      if (moduleName in resultMap) {
        resultMap[moduleName].add(sourceName);
      } else {
        resultMap[moduleName] = new Set([sourceName]);
      }
    });

    return Object.entries(resultMap).reduce(
      (acc: Dictionary<string[]>, [moduleName, sourceNameSet]) => {
        acc[moduleName] = [...sourceNameSet].sort();
        return acc;
      },
      {},
    );
  }

  private findExportLocalNames(usedExport: string[]) {
    return usedExport
      .map(id => this.moduleScope.exportManager.localIdMap.get(id)!)
      .filter(info => info.localName !== null || info.exportName === "default")
      .map(info => info.localName || info.exportName);
  }

  private handleDeclarations = (
    decls: RootDeclaration[],
    visitedSet: WeakSet<Scope>,
  ) =>
    decls.forEach(decl => {
      if (!decl.scopes) return;
      decl.scopes.forEach(scope => {
        visitedSet.add(scope);
        const traverser = new ChildScopesTraverser(
          scope,
          this.moduleScope.importManager,
        );
        this.childScopesTraverserMap.set(decl.name, traverser);
      });
    })

  private handleIndependentScopes = (scopes: Scope[]) =>
    scopes.forEach(scope => {
      const traverser = new ChildScopesTraverser(
        scope,
        this.moduleScope.importManager,
      );
      traverser.refsToModule.forEach(([ref, info]) => {
        if (info !== null) {
          info.mustBeImported = true;
        }
      });
    })

  private handleNotExportReferences = (refs: Reference[]) => {
    const moduleScopeRefs = refs.filter(
      ref => ref.resolved && ref.resolved.scope.type === "module",
    );

    moduleScopeRefs.forEach(ref => {
      const resolvedName = ref.resolved!.name;
      const importId = this.moduleScope.importManager.idMap.get(resolvedName);
      const traverser = this.childScopesTraverserMap.get(resolvedName);
      if (importId) {
        importId.mustBeImported = true;
      } else if (traverser && !ref.init) {
        this.internalUsedScopeIds.push(ref.identifier.name);
      }
    });
  }

  private findChildScopeOfModule(ref: Reference): Scope | null {
    let scope = ref.from;
    while (scope.upper !== null) {
      if (scope.upper.type === "module") {
        return scope;
      }
      scope = scope.upper;
    }
    return null;
  }

  /**
   * Preform deep update on option object
   */
  private updateDeeply(target: any, override: any) {
    function isHashObject(value: any): boolean {
      return (
        typeof value === "object" &&
        value instanceof Object &&
        !(value instanceof Array) &&
        !(value instanceof RegExp)
      );
    }

    for (const key in override) {
      if (override.hasOwnProperty(key)) {
        const val = override[key];

        if (isHashObject(val)) {
          if (isHashObject(target[key])) {
            this.updateDeeply(target[key], val);
          } else {
            target[key] = this.updateDeeply({}, val);
          }
        } else {
          target[key] = val;
        }
      }
    }
    return target;
  }

  get moduleScope() {
    return this.scopeManager!.scopes[1] as ModuleScope; // default 1 is module Scope;
  }
}