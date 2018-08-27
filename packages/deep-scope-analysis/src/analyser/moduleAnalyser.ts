import { ScopeManager } from "../scopeManager";

import * as assert from "assert";
import { Referencer } from "../referencer";
import * as ESTree from "estree";
import { Scope, ModuleScope } from "../scope";
import { Reference } from "../reference";
import { IComment } from "./comment";
import { ChildScopesTraverser, RefsToModuleExtractor } from "./childScopesTraverser";
import { ExportVariableType, ExternalType } from "../exportManager";
import { Variable } from "../variable";
import {
  VirtualScope,
  VScopeContentType,
  VariableVirtualScope,
  ExportDefaultVirtualScope,
  VirtualScopeType,
} from "./virtualScope";

export interface Dictionary<T> {
  [index: string]: T;
}

export interface ExportInfo {
  sourceName: string;
  moduleName: string;
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
  public readonly extractorMap: Map<string, RefsToModuleExtractor> = new Map();

  public readonly virtualScopeMap: WeakMap<Variable, VirtualScope> = new WeakMap();
  public readonly virtualScopes: VirtualScope[] = [];
  public readonly initVirtualScopes: VirtualScope[] = [];

  private comments: IComment[] = [];

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

    const pureCommentEndsSet = this.processComments();
    const { moduleScope } = this;
    moduleScope.variables.forEach(variable => {
      let virtualScope: VirtualScope;

      if (moduleScope.importManager.idMap.get(variable.name)) {
        virtualScope = new VariableVirtualScope(
          VScopeContentType.Import,
          variable,
        );
      } else {
        const def = variable.defs[0];
        switch (def.node.type) {
          case "FunctionDeclaration":
            virtualScope = new VariableVirtualScope(
              VScopeContentType.FunctionDeclaration,
              variable,
            );
            break;
          case "ClassDeclaration":
            virtualScope = new VariableVirtualScope(
              VScopeContentType.ClassDeclaration,
              variable,
            );
            break;
          case "VariableDeclarator":
            let isChildrenDependent = true;
            if (def.node.init) {
              const { init } = def.node;

              if (["let", "var", "const"].indexOf(def.kind!) < 0) {
                throw new TypeError("def.kind muse be in ['let', 'var', 'const']");
              }

              if (def.kind === "let" || def.kind === "var") {
                for (let i = 1; i < variable.references.length; i++) {
                  const ref = variable.references[i];
                  if (ref.flag === Reference.WRITE || ref.flag === Reference.RW) {
                    isChildrenDependent = false;
                    break;
                  }
                }
              }

              let scopeType = VScopeContentType.Undefined;
              switch (init.type) {
                case "ClassExpression":
                  scopeType = VScopeContentType.ClassExpression;
                  break;
                case "FunctionExpression":
                  scopeType = VScopeContentType.FunctionExpression;
                  break;
                case "ArrowFunctionExpression":
                  scopeType = VScopeContentType.ArrowFunction;
                  break;
                case "CallExpression":
                  if (pureCommentEndsSet.has(init.range![0])) {
                    scopeType = VScopeContentType.PureFunctionCall;
                  } else {
                    scopeType = VScopeContentType.NormalFunctionCall;
                  }
              }
              virtualScope = new VariableVirtualScope(
                scopeType,
                variable,
                isChildrenDependent,
              );
            } else {
              virtualScope = new VariableVirtualScope(
                VScopeContentType.Undefined,
                variable,
                false,
              );
            }
            break;
          default:
            virtualScope = new VariableVirtualScope(
              VScopeContentType.Undefined,
              variable,
              false,
            );
        }
      }
      this.virtualScopeMap.set(variable, virtualScope);
      this.virtualScopes.push(virtualScope);
    });

    const visitedSet: WeakSet<Scope> = new WeakSet();

    this.handleExportDefaultDeclaration();

    this.virtualScopes.forEach(
      vs => vs.findAllReferencesToVirtualScope(
        visitedSet,
        scopeManager,
        this.virtualScopeMap,
      ),
    );

    const independentScopes = moduleScope.childScopes.filter(
      item => !visitedSet.has(item),
    );
    this.traverseIndependentScopes(independentScopes);

    // find references that is not in export specifiers
    this.handleNotExportReferences(
      moduleScope.references.filter(ref => !ref.isExport),
    );
  }

  /**
   * find all the pure annotation
   * Set of end offset of @__PURE__ or #__PURE__
   */
  private processComments() {
    const pureCommentEndsSet: Set<number> = new Set();
    this.comments.forEach(comment => {
      if (comment.type === "Block" && /(@|#)__PURE__/.test(comment.value)) {
        pureCommentEndsSet.add(comment.end);
      }
    });
    return pureCommentEndsSet;
  }

  private handleExportDefaultDeclaration() {
    const moduleScope = this.moduleScope;
    const { exportManager } = moduleScope;

    if (exportManager.exportDefaultDeclaration) {
      let vsType: VScopeContentType;
      switch (exportManager.exportDefaultDeclaration.type) {
        case "FunctionDeclaration":
          vsType = VScopeContentType.FunctionDeclaration;
          break;
        case "ArrowFunctionExpression":
          vsType = VScopeContentType.ArrowFunction;
          break;
        case "ClassDeclaration":
          vsType = VScopeContentType.ClassDeclaration;
          break;
        case "ClassExpression":
          vsType = VScopeContentType.ClassExpression;
          break;
        case "Identifier":
          vsType = VScopeContentType.Reference;
          break;
        default:
          return;
      }
      this.virtualScopes.push(
        new ExportDefaultVirtualScope(
          vsType,
          exportManager.exportDefaultDeclaration,
          true,
        ),
      );
    }

  }

  public generateExportInfo(usedExports: string[]) {
    const { exportManager } = this.moduleScope;

    const resultList: ExportInfo[] = [];

    const moduleScopeIds = [];
    for (let i = 0; i < usedExports.length; i++) {
      const usedExport = usedExports[i];
      const exportVar = exportManager.exportsMap.get(usedExport);

      if (typeof exportVar === "undefined") {
        // FIX: export from another module
        // throw new Error(`${usedExport} is not an export variable`);
        continue;
      }

      switch (exportVar.type) {
        case ExportVariableType.Local:
          if (exportVar.localName !== null || exportVar.exportName === "default") {
            moduleScopeIds.push(exportVar.localName || exportVar.exportName);
          }
          break;
        case ExportVariableType.External:
          if (exportVar.moduleType === ExternalType.Identifier) {
            resultList.push({
              sourceName: exportVar.names!.sourceName,
              moduleName: exportVar.moduleName,
            });
          }
          break;
      }
    }

    const visitedVScope = new WeakSet<VirtualScope>();

    const traverseVirtualScope = (vs: VirtualScope) => {
      if (visitedVScope.has(vs)) return;
      visitedVScope.add(vs);

      if (vs.type === VirtualScopeType.Variable) {
        const varVScope = vs as VariableVirtualScope;
        if (vs.contentType === VScopeContentType.Import) {
          const name = varVScope.variable.name;
          const importInfo = this.moduleScope.importManager.idMap.get(name)!;
          resultList.push({
            sourceName: importInfo.sourceName,
            moduleName: importInfo.moduleName,
          });
        }
      }

      for (const child of vs.children) {
        traverseVirtualScope(child);
      }
    };
    this.initVirtualScopes.forEach(traverseVirtualScope);
    moduleScopeIds.forEach(id => {
      if (id === "default") {
        // FIXME: improve efficiency
        const defaultVs = this.virtualScopes.filter(vs => vs.type === VirtualScopeType.Default);
        defaultVs.forEach(vs => traverseVirtualScope(vs));
      } else {
        const variable = this.moduleScope.set.get(id)!;
        const vs = this.virtualScopeMap.get(variable)!;
        traverseVirtualScope(vs);
      }
    });

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

  /**
   * traverse all independent scopes
   * and tag all the import variables
   */
  private traverseIndependentScopes(scopes: Scope[]) {
    for (const scope of scopes) {
      const traverser = new ChildScopesTraverser(
        scope,
        this.moduleScope.importManager,
      );
      traverser.refsToModule.forEach(([ref, info]) => {
        const variable = this.moduleScope.set.get(ref)!;
        const vs = this.virtualScopeMap.get(variable)!;
        this.initVirtualScopes.push(vs);
        if (info !== null) {
          info.mustBeImported = true;
        }
      });
    }
  }

  private handleNotExportReferences = (refs: Reference[]) => {
    const moduleScopeRefs = refs.filter(
      ref => ref.resolved && ref.resolved.scope.type === "module",
    );

    const pureVScopes = this.virtualScopes.filter(
      vs => vs.contentType === VScopeContentType.PureFunctionCall,
    );

    /**
     * judge if node is in the range
     */
    const nodeContains = (node: any, [start, end]: [number, number]) => {
      return node.start >= start && node.end <= end;
    };

    moduleScopeRefs.forEach(ref => {
      for (const vs of pureVScopes) {
        if (vs instanceof VariableVirtualScope) {
          const range = vs.pureRange!;
          if (nodeContains(ref.identifier, range)) {
            return;
          }
        }
      }
      const resolvedName = ref.resolved!;
      const vs = this.virtualScopeMap.get(resolvedName)!;
      if (!ref.init) {
        this.initVirtualScopes.push(vs);
      }
    });
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
