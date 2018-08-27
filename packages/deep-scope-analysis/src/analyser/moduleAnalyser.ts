import { ScopeManager } from "../scopeManager";

import * as assert from "assert";
import { Referencer } from "../referencer";
import * as ESTree from "estree";
import { Scope, ModuleScope } from "../scope";
import { Reference } from "../reference";
import { IComment } from "./comment";
import { ChildScopesTraverser, RefsToModuleExtractor, PureDeclaratorTraverser } from "./childScopesTraverser";
import { RootDeclaration, RootDeclarationType } from "./rootDeclaration";
import rootDeclarationResolver from "./rootDeclarationResolver";
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
  public readonly internalUsedScopeIds: Set<string> = new Set();

  public readonly virtualScopeMap: WeakMap<Variable, VirtualScope> = new WeakMap();
  public readonly virtualScopes: VirtualScope[] = [];

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

    // this.findAllReferencesForModuleVariables();
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

  private get moduleScopeDeclarations() {
    const moduleScope = this.moduleScope;
    const declarations: RootDeclaration[] = [];

    const pureCommentEndsSet = this.processComments();
    const resolver = rootDeclarationResolver(declarations, this.scopeManager!, pureCommentEndsSet);

    for (let i = 0; i < moduleScope.variables.length; i++) {
      const variable = moduleScope.variables[i];
      resolver(variable);
    }

    // handle export declaration
    // this.handleExportDefaultDeclaration(declarations);
    return declarations;
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
      }
      if (typeof vsType! === "undefined") {
        throw new Error(
          `Unexpected export default type: ${exportManager.exportDefaultDeclaration.type}`,
        );
      }
      this.virtualScopes.push(
        new ExportDefaultVirtualScope(
          vsType!,
          exportManager.exportDefaultDeclaration,
          true,
        ),
      );
    }

  }

  private findAllReferencesForModuleVariables() {
    const moduleScope = this.moduleScope;
    const declarations = this.moduleScopeDeclarations;

    // deep scope analysis of all child scopes
    const visitedSet = new WeakSet();
    const pureIdentifiersSet: WeakSet<ESTree.Identifier> = new WeakSet();
    this.findAllReferencesToModuleScope(declarations, pureIdentifiersSet, visitedSet);

    const independentScopes = moduleScope.childScopes.filter(
      item => !visitedSet.has(item),
    );
    this.traverseIndependentScopes(independentScopes);

    // find references that is not in export specifiers
    this.handleNotExportReferences(moduleScope.references.filter(ref => !ref.isExport));
  }

  /**
   * traverse scopes
   * find references to module scope
   * and tag all relevant scopes
   */
  private findAllReferencesToModuleScope = (
    decls: RootDeclaration[],
    pureIdentifiersSet: WeakSet<ESTree.Identifier>,
    visitedSet: WeakSet<Scope>,
  ) =>
    decls.forEach(decl => {
      if (!decl.scopes) return;
      switch (decl.targetType) {
        case RootDeclarationType.PureVariable:
          const traverser = new PureDeclaratorTraverser(
            decl.node as ESTree.VariableDeclarator,
            this.moduleScope,
          );
          traverser.ids.forEach(id => pureIdentifiersSet.add(id));
          traverser.relevantScopes.forEach(scope => visitedSet.add(scope));
          this.extractorMap.set(decl.name, traverser);
          break;
        default:
          decl.scopes.forEach(scope => {
            visitedSet.add(scope);
            this.extractorMap.set(decl.name, new ChildScopesTraverser(
              scope,
              this.moduleScope.importManager,
            ));
          });
          break;
      }
    })

  public generateExportInfo(usedExports: string[]) {
    const { importManager, exportManager } = this.moduleScope;

    const resultList = importManager.ids
      .filter(item => item.mustBeImported)
      .map(item => ({
        sourceName: item.sourceName,
        moduleName: item.moduleName,
      }));

    const moduleScopeIds = [...this.internalUsedScopeIds];
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
    this.virtualScopes.forEach(traverseVirtualScope);

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
        if (this.extractorMap.has(ref)) {
          this.internalUsedScopeIds.add(ref);
        } else if (info !== null) {
          info.mustBeImported = true;
        }
      });
    }
  }

  private handleNotExportReferences = (refs: Reference[]) => {
    const moduleScopeRefs = refs.filter(
      ref => ref.resolved && ref.resolved.scope.type === "module",
    );

    const pureIdentifiersSet: WeakSet<ESTree.Identifier> = new WeakSet();
    this.virtualScopes.forEach(vs => {
      if (
        vs.type === VirtualScopeType.Variable &&
        vs.contentType === VScopeContentType.PureFunctionCall
      ) {
        const def = (vs as VariableVirtualScope).variable.defs[0];
        const node = def.node as ESTree.VariableDeclarator;
        if (node.id.type === "Identifier") {
          pureIdentifiersSet.add(node.id);
        }
      }
    });

    moduleScopeRefs.forEach(ref => {
      if (pureIdentifiersSet.has(ref.identifier)) return;
      const resolvedName = ref.resolved!.name;
      const importId = this.moduleScope.importManager.idMap.get(resolvedName);
      const extractor = this.extractorMap.get(resolvedName);
      if (importId) {
        importId.mustBeImported = true;
      } else if (extractor && !ref.init) {
        this.internalUsedScopeIds.add(ref.identifier.name);
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
