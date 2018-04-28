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

  /**
   * Main interface function. Takes an Espree syntax tree and returns the
   * analyzed scopes.
   * @function analyze
   * @param {espree.Tree} tree - Abstract Syntax Tree
   * @param {Object} providedOptions - Options that tailor the scope analysis
   * @param {boolean} [providedOptions.optimistic=false] - the optimistic flag
   * @param {boolean} [providedOptions.directive=false]- the directive flag
   * @param {boolean} [providedOptions.ignoreEval=false]- whether to check 'eval()' calls
   * @param {boolean} [providedOptions.nodejsScope=false]- whether the whole
   * script is executed under node.js environment. When enabled, escope adds
   * a function scope immediately following the global scope.
   * @param {boolean} [providedOptions.impliedStrict=false]- implied strict mode
   * (if ecmaVersion >= 5).
   * @param {string} [providedOptions.sourceType='script']- the source type of the script. one of 'script' and 'module'
   * @param {number} [providedOptions.ecmaVersion=5]- which ECMAScript version is considered
   * @param {Object} [providedOptions.childVisitorKeys=null] - Additional known visitor keys. See [esrecurse](https://github.com/estools/esrecurse)'s the `childVisitorKeys` option.
   * @param {string} [providedOptions.fallback='iteration'] - A kind of the fallback in order to encounter with unknown node. See [esrecurse](https://github.com/estools/esrecurse)'s the `fallback` option.
   * @returns {ScopeManager} ScopeManager
   */
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
   * @param {Object} target - Options
   * @param {Object} override - Updates
   * @returns {Object} Updated options
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
