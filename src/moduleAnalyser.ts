import { ScopeManager } from './scopeManager';

import * as assert from 'assert';
import { Referencer } from './referencer';
import * as ESTree from 'estree';
import { Scope, ModuleScope, ImportIdentifierInfo } from './scope';
import { Reference } from './reference';
import * as _ from 'lodash';

export class ModuleScopeImportValueDependencyManager {

  public readonly map: Map<string, ImportIdentifierInfo[]> = new Map();

  addIdInfoToModuleScope(name: string, idInfo: ImportIdentifierInfo) {
    if (this.map.has(name)) {
      this.map.get(name)!.push(idInfo);
    } else {
      this.map.set(name, [idInfo]);
    }
  }

  normalize() {
    for (const [key, values] of this.map.entries()) {
      const normalized = _.unionBy(values, 'localName');
      this.map.set(key, normalized);
    }
  }

}

export class ModuleAnalyser {

  private moduleScopeDependency = new ModuleScopeImportValueDependencyManager();

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

  private analyzeImportExport() {
    const moduleScope = this.moduleScope;

    const { importManager, exportManager } = moduleScope;

    for (const value of importManager.moduleMap.values()) {
      value.importNames.forEach(item => {
        const { localName } = item;

        const variable = moduleScope.set.get(localName);

        if (typeof variable === 'undefined') {
          throw new TypeError('Variable is not found');
        }

        for (let i = 0; i < variable.references.length; i++) {
          const ref = variable.references[i];
          const childScopeOfModule = this.findChildScopeOfModule(ref);
          if (childScopeOfModule === null) {
            item.mustBeImported = true;
            break;
          }
          const block = childScopeOfModule.block;
          if (block.type === "FunctionDeclaration" && block.id !== null) {
            // this import variable is in the scope of this module variable
            this.moduleScopeDependency.addIdInfoToModuleScope(block.id.name, item);
          }
        }
      })
    }

    this.moduleScopeDependency.normalize();
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
