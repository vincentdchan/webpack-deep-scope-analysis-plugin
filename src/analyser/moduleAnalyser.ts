import { ScopeManager } from '../scopeManager';

import * as assert from 'assert';
import { Referencer } from '../referencer';
import * as ESTree from 'estree';
import { Scope, ModuleScope  } from '../scope';
import { Reference } from '../reference';
import * as R from 'ramda';
import { ImportIdentifierInfo, ImportManager } from '../importManager';
import { ModuleChildScopeInfo } from './moduleChildScopeInfo';


export interface Dictionary<T> {
  [index: string]: T,
}

export class ModuleAnalyser {

  public constructor(
    public readonly name: string,
    public readonly module: any,
    public scopeManager: ScopeManager | null = null,
  ) {}

  public readonly childFunctionScopeInfo: Map<string, ModuleChildScopeInfo> = new Map();

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

  private analyzeImportExport() {
    const moduleScope = this.moduleScope;

    const { importManager, exportManager } = moduleScope;

    // find all the function & class scopes under modules
    const dependentScopesGroup = R.groupBy(
      (childScope: Scope) => ((
        (childScope.type === 'function' || childScope.type === 'class') &&
        (
          childScope.block.type === 'FunctionDeclaration'  ||
          childScope.block.type === 'ClassDeclaration'
        ) &&
        childScope.block.id !== null
      ).toString()),
      moduleScope.childScopes, 
    );

    // deep scope analysis of all child scopes
    const scopesHandler: Dictionary<(scopes: Scope[]) => void> = {
      "true": this.handleDependentScopes,
      "false": this.handleIndependentScopes,
    }

    R.toPairs(dependentScopesGroup).map(
      ([key, scopes]) => scopesHandler[key](scopes)
    );

    // find references that is not in export specifiers
    this.handleNotExportReferences(
      moduleScope.references.filter(ref => !ref.isExport)
    );
  }

  public generateExportInfo(usedExport: string[]) {
    const moduleScopeIds = this.findExportLocalNames(usedExport);
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

    // find all related scopes
    [...this.childFunctionScopeInfo.entries()]
      .filter(([funName, scopeInfo]) => R.contains(funName, moduleScopeIds))
      .forEach(([funName, scopeInfo]) => visitScopeInfo(scopeInfo));

    return R.toPairs<string[]>(result.reduce(  // to pairs
        (acc: Dictionary<string[]>, item) => {  // group by moduleName
          const { moduleName } = item;
          (acc[moduleName] || (acc[moduleName] = [])).push(item.sourceName);  // check the map and push
          return acc;
        },
        {},
      ))
      .map(([moduleName, sourceNames]): [string, string[]] => [ // uniq the sourceNames
        moduleName,
        R.uniq(sourceNames),
      ])
      .reduce(  // from tuples to map
        (acc: Dictionary<string[]>, [moduleName, sourceNames]) => {
          acc[moduleName] = sourceNames;
          return acc;
        },
        {}
      );
  }

  private findExportLocalNames(usedExport: string[]) {
    return usedExport.map(id =>
      this.moduleScope.exportManager.localIdMap.get(id)!
    )
    .filter(info => info.localName !== null)
    .map(info => info.localName)
  }

  private handleDependentScopes = (scopes: Scope[]) =>
    scopes.forEach(scope => {
      const idName = (scope.block as (ESTree.FunctionDeclaration | ESTree.ClassDeclaration)).id!.name;
      const info = new ModuleChildScopeInfo(scope, this.moduleScope.importManager);
      this.childFunctionScopeInfo.set(idName, info);
    });

  private handleIndependentScopes = (scopes: Scope[]) =>
    scopes.forEach(scope => {
      const info = new ModuleChildScopeInfo(scope, this.moduleScope.importManager);
      info.refsToModule.forEach(([ref, info]) => {
        if (info !== null) {
          info.mustBeImported = true;
        }
      })
    });

  private handleNotExportReferences = (refs: Reference[]) => {
    const ids = refs
      .filter(ref => ref.resolved && ref.resolved.scope.type === 'module')
      .map(ref =>
        this.moduleScope.importManager.idMap.get(ref.resolved!.name),
      )
      .filter(idInfo => typeof idInfo !== 'undefined') as ImportIdentifierInfo[];

    ids.forEach(idInfo => idInfo.mustBeImported = true);
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

  get moduleScope() {
    return this.scopeManager!.scopes[1] as ModuleScope; // default 1 is module Scope; 
  }

}
