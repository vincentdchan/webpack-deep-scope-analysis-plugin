import { ScopeManager } from '../scopeManager';

import * as assert from 'assert';
import { Referencer } from '../referencer';
import * as ESTree from 'estree';
import { Scope, ModuleScope  } from '../scope';
import { Reference } from '../reference';
import * as R from 'ramda';
import { ImportIdentifierInfo, ImportManager } from '../importManager';
import { ModuleChildScopeInfo } from './moduleChildScopeInfo';
import { Variable } from '../variable';
import { Definition } from '../definition';
import { Declaration, DeclarationType } from './Declaration';

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

    const declarations: Declaration[] = [];
    for (let i = 0; i < moduleScope.variables.length; i++) {
      const variable = moduleScope.variables[i];
      const def = variable.defs[0];
      if (def.node.type === 'FunctionDeclaration') {
        declarations.push(
          new Declaration(
            DeclarationType.Function,
            variable.name,
            def.node,
            this.scopeManager!.__nodeToScope.get(def.node)!,
          ),
        );
      } else if (def.node.type === 'ClassDeclaration') {
        declarations.push(
          new Declaration(
            DeclarationType.Class,
            variable.name,
            def.node,
            this.scopeManager!.__nodeToScope.get(def.node)!,
          ),
        );
      } else if (
        def.kind === 'const' &&
        def.node.type === 'VariableDeclarator' && 
        def.node.init
      ) {
        const { init } = def.node;
        if (init.type === 'ClassExpression') {
          declarations.push(
            new Declaration(
              DeclarationType.Class,
              variable.name,
              init,
              this.scopeManager!.__nodeToScope.get(init)!,
            ),
          );
        } else if (
          init.type === 'FunctionExpression' ||
          init.type === 'ArrowFunctionExpression'
        ) {
          declarations.push(
            new Declaration(
              DeclarationType.Function,
              variable.name,
              init,
              this.scopeManager!.__nodeToScope.get(init)!,
            ),
          );
        }
      }
    }

    const isFunction = (node: ESTree.Node) => R.contains(node.type, [
      'FunctionDeclaration',
      'ArrowFunctionExpression',
    ]);
    if (
      exportManager.exportDefaultDeclaration
    ) {
      if (isFunction(exportManager.exportDefaultDeclaration)) {
        const declaration = exportManager.exportDefaultDeclaration;
        declarations.push(
          new Declaration(
            DeclarationType.Function,
            'default',
            declaration,
            this.scopeManager!.__nodeToScope.get(declaration)!,
          )
        );
      } else if (exportManager.exportDefaultDeclaration.type === 'Identifier') {
        const id = exportManager.exportDefaultDeclaration as ESTree.Identifier;
        const idName = id.name;
        const variable = moduleScope.set.get(idName)!;
        declarations.push(
          new Declaration(
            DeclarationType.Function,
            'default',
            id,
            this.scopeManager!.__nodeToScope.get(variable.defs[0].node)!,
          )
        );
      }
    }

    // find all the function & class scopes under modules
    const dependentScopes = R.flatten<Scope>(
      R.map<Declaration, Scope[]>(
        decl => decl.scopes,
        declarations,
      ),
    );

    // deep scope analysis of all child scopes
    const visitedSet = new WeakSet();
    this.handleDeclarations(declarations, visitedSet);

    const independentScopes = R.filter<Scope>(
      item => !visitedSet.has(item),
      moduleScope.childScopes,
    )
    this.handleIndependentScopes(independentScopes);

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
    .filter(info => info.localName !== null || info.exportName === 'default')
    .map(info => (info.localName || info.exportName))
  }

  private handleDeclarations = (decls: Declaration[], visitedSet: WeakSet<Scope>) =>
    decls.forEach(decl => {
      decl.scopes.forEach(scope => {
        visitedSet.add(scope);
        const info = new ModuleChildScopeInfo(
          scope,
          this.moduleScope.importManager,
        );
        this.childFunctionScopeInfo.set(decl.name, info);
      })
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
