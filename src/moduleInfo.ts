import { ScopeManager } from './scopeManager';

import * as assert from 'assert';
import { Referencer } from './referencer';
import * as ESTree from 'estree';

export class ModuleInfo {

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

    this.analyzeVariables();
  }

  analyzeVariables() {
    const moduleScope = this.scopeManager!.scopes[1]; // default 1 is module Scope;
  }

  /**
   * Preform deep update on option object
   */
  updateDeeply(target: any, override: any) {

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
