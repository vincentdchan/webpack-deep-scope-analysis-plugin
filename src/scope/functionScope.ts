import { Syntax } from 'estraverse';
import { Scope } from './scope';
import { ScopeManager } from '../scopeManager'

import * as assert from 'assert';
import { Variable } from '../variable';
import { Reference } from '../reference';
import * as ESTree from 'estree';

export class FunctionScope extends Scope<ESTree.Function | ESTree.Program> {
  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.Function | ESTree.Program,
    isMethodDefinition: boolean,
  ) {
    super(scopeManager, 'function', upperScope, block, isMethodDefinition);

    // section 9.2.13, FunctionDeclarationInstantiation.
    // NOTE Arrow functions never have an arguments objects.
    if (this.block.type !== Syntax.ArrowFunctionExpression) {
      this.__defineArguments();
    }
  }

  isArgumentsMaterialized() {
    // TODO(Constellation)
    // We can more aggressive on this condition like this.
    //
    // function t() {
    //     // arguments of t is always hidden.
    //     function arguments() {
    //     }
    // }
    if (this.block.type === Syntax.ArrowFunctionExpression) {
      return false;
    }

    if (!this.isStatic()) {
      return true;
    }

    const variable = this.set.get('arguments');

    assert(typeof variable !== 'undefined', 'Always have arguments variable.');
    return variable!.tainted || variable!.references.length !== 0;
  }

  isThisMaterialized() {
    if (!this.isStatic()) {
      return true;
    }
    return this.thisFound;
  }

  __defineArguments() {
    this.__defineGeneric('arguments', this.set, this.variables, null);
    this.taints.set('arguments', true);
  }

  // References in default parameters isn't resolved to variables which are in their function body.
  //     const x = 1
  //     function f(a = x) { // This `x` is resolved to the `x` in the outer scope.
  //         const x = 2
  //         console.log(a)
  //     }
  __isValidResolution(ref: Reference, variable: Variable): boolean {
    // If `options.nodejsScope` is true, `this.block` becomes a Program node.
    if (this.block.type === 'Program') {
      return true;
    }

    const bodyStart = this.block.body.range![0];

    // It's invalid resolution in the following case:
    return !(
      variable.scope === this &&
      ref.identifier.range![0] < bodyStart && // the reference is in the parameter part.
      variable.defs.every(d => d.name!.range![0] >= bodyStart)
    ); // the variable is in the body.
  }
}
