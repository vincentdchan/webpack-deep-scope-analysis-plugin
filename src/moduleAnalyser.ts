import { ScopeManager } from './scopeManager';

import * as assert from 'assert';
import { Referencer } from './referencer';
import * as ESTree from 'estree';
import { Scope, ModuleScope, ImportIdentifierInfo, ImportManager } from './scope';
import { Reference } from './reference';
import * as _ from 'lodash';

export type RefTuple = [Reference, ImportIdentifierInfo | null];

export class ModuleChildScopeInfo {

  public readonly refsToModule: RefTuple[] = [];

  constructor(
    public readonly scope: Scope,
    public readonly importManager: ImportManager,
  ) {
    this.traverse(scope);
  }

  private traverse = (scope: Scope) => {  // find the reference to module
    scope.references.forEach(ref => {
      if (ref.resolved && ref.resolved.scope.type === 'module') {
        const idName = ref.identifier.name;
        let importNameInfo: ImportIdentifierInfo | null = null;
        if (this.importManager.idMap.get(idName)) {
          importNameInfo = this.importManager.idMap.get(idName)!;
        }
        this.refsToModule.push([ref, importNameInfo]);
      }
    });
    scope.childScopes.forEach(this.traverse);
  };

}

export class ModuleAnalyser {

  public readonly childFunctionScopeInfo: Map<string, ModuleChildScopeInfo> = new Map();

  constructor(
    public readonly name: string,
    public readonly module: any,
    public scopeManager: ScopeManager | null = null,
  ) { }

  /**
   * Set the default options
   * @returns {Object} options
   */
  defaultOptions() {
    return {
      optimistic: false,
      directive: false,
      nodejsScope: false,
      impliedStrict: false,
      sourceType: 'module', // one of ['script', 'module']
      ecmaVersion: 6,
      childVisitorKeys: null,
      fallback: 'iteration',
    };
  }

  analyze(tree: ESTree.Node, providedOptions?: any) {
    const options = this.updateDeeply(this.defaultOptions(), providedOptions);
    const scopeManager = new ScopeManager(options);
    const referencer = new Referencer(options, scopeManager);

    referencer.visit(tree);

    assert(
      scopeManager.__currentScope === null,
      'currentScope should be null.',
    );
    this.scopeManager = scopeManager;

    this.analyzeImportExport();
  }

  get moduleScope() {
    return this.scopeManager!.scopes[1] as ModuleScope; // default 1 is module Scope; 
  }

  public generateExportInfo(usedExport: string[]) {
    const importManager = this.moduleScope.importManager;
    const result = importManager.ids.filter(item => item.mustBeImported).map(
      item => ({ sourceName: item.sourceName, moduleName: item.moduleName})
    );

    const visitedScopeInfoSet = new WeakSet<ModuleChildScopeInfo>();

    const visitScopeInfo = (scopeInfo: ModuleChildScopeInfo) => {
      if (visitedScopeInfoSet.has(scopeInfo)) return;
      visitedScopeInfoSet.add(scopeInfo);

      scopeInfo.refsToModule.forEach(([ref, importIdInfo]) => {
        if (importIdInfo !== null) {
          result.push({
            sourceName: importIdInfo.sourceName,
            moduleName: importIdInfo.moduleName,
          });
        }

        if (this.childFunctionScopeInfo.has(ref.identifier.name)) {
          visitScopeInfo(this.childFunctionScopeInfo.get(ref.identifier.name)!);
        }

      });

    }

    // write dependent variable
    for (const [funName, scopeInfo] of this.childFunctionScopeInfo.entries()) {
      if (usedExport.indexOf(funName) < 0) continue; // this function scope is no used
      visitScopeInfo(scopeInfo);
    }
    return _.fromPairs(_.toPairs(_.groupBy(result, item => item.moduleName)).map(
        ([key, tuples]) => [key, _.union(tuples.map(item => item.sourceName))],
      ));
  }

  private analyzeImportExport() {
    const moduleScope = this.moduleScope;

    const { importManager, exportManager } = moduleScope;

    const dependentScopesGroup = _.groupBy(moduleScope.childScopes, (childScope: Scope) =>
        childScope.type === 'function' &&
        childScope.block.type === 'FunctionDeclaration' &&
        childScope.block.id !== null,
    );

    this.handleDependentScopes(dependentScopesGroup["true"]);
    this.handleIndependentScopes(dependentScopesGroup["false"]);

    const exportRefMap = _.groupBy(moduleScope.references, 'isExport');
    this.handleExportReference(exportRefMap["true"]);
    this.handleNotExportReference(exportRefMap["false"]);
  }

  private handleDependentScopes(scopes?: Scope[]) {
    if (_.isUndefined(scopes)) return;
    scopes.forEach(scope => {
      const idName = (scope.block as ESTree.FunctionDeclaration).id!.name;
      const info = new ModuleChildScopeInfo(scope, this.moduleScope.importManager);
      this.childFunctionScopeInfo.set(idName, info);
    });
  }

  private handleIndependentScopes(scopes?: Scope[]) {
    if (_.isUndefined(scopes)) return;
    scopes.forEach(scope => {
      const info = new ModuleChildScopeInfo(scope, this.moduleScope.importManager);
      info.refsToModule.forEach(([ref, info]) => {
        if (info !== null) {
          info.mustBeImported = true;
        }
      })
    })
  }

  private handleNotExportReference(refs?: Reference[]) {
    if (_.isUndefined(refs)) return;
    const ids = refs
      .filter(ref => ref.resolved && ref.resolved.scope.type === 'module')
      .map(ref =>
        this.moduleScope.importManager.idMap.get(ref.resolved!.name),
      )
      .filter(idInfo => !_.isUndefined(idInfo)) as ImportIdentifierInfo[];

    ids.forEach(idInfo => idInfo.mustBeImported = true);
  }

  private handleExportReference (refs?: Reference[]) {
    if (_.isUndefined(refs)) return;

  }

  private findChildScopeOfModule(ref: Reference): Scope | null {
    let scope = ref.from;
    while (scope.upper !== null) {
      if (scope.upper.type === 'module') {
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
        typeof value === 'object' &&
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

}
