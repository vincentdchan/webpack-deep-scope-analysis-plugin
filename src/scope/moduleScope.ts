import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';
import { Definition } from '../definition';
import { Variable } from '../variable';
import { Reference } from '../reference';

export class ImportNameInfo {

  constructor(
    public readonly name: string,
    public used: boolean = false,
  ) {}

}

export class ImportModuleInfo {

  public readonly importNames: ImportNameInfo[];

  public constructor(
    public readonly moduleName: string,
  ) { }

}

export class ImportManager {

  public readonly moduleMap: Map<string, ImportModuleInfo> = new Map();

}

export class ExportNameInfo {

  public readonly relatedImportNames: ImportNameInfo[] = [];

  public constructor(
    public exportName: string,
  ) { }

}

export class ExportManager {

  private __names: ExportNameInfo[] = [];
  private __nameMap: Map<string, ExportNameInfo> = new Map();

  addExportNameInfo(exportInfo: ExportNameInfo) {
    this.__names.push(exportInfo);
    this.__nameMap.set(exportInfo.exportName, exportInfo);
    return this;
  }

  get names() {
    return this.__names;
  }

  get nameMap() {
    return this.__nameMap;
  }

}

export class ModuleScope extends Scope {

  public exportAllDeclaration: string[] = [];
  public readonly importManager: ImportManager = new ImportManager();
  public readonly exportManager: ExportManager = new ExportManager();
  private __isImporting: boolean = false;
  private __isExporting: boolean = false;

  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: any
  ) {
    super(scopeManager, 'module', upperScope, block, false);
  }

  public __define(node, def: Definition): Variable | null {
    const variable = super.__define(node, def);
    if (variable) {
      // variable.moduleInfo = new VariableModuleInfo();

      // if (this.__isExporting) {
      //   variable.moduleInfo.isExported = true;
      // }
    }
    return variable;
  }

  __referencing(
    node,
    assign?,
    writeExpr?,
    maybeImplicitGlobal?: boolean,
    partial?: boolean,
    init?: boolean
  ) {
    const ref = super.__referencing(
      node,
      assign,
      writeExpr,
      maybeImplicitGlobal,
      partial,
      init,
    );
    const name = ref.identifier.name;
    const variable = this.set.get(name);
    // if (this.__isImporting) {
    //   variable.moduleInfo.isImported = true;
    // }
    // if (this.__isExporting) {
    //   variable.moduleInfo.isExported = true;
    // }
    return ref;
  }

  public exportAlias(variableName: string, aliasName: string) {
    const variable = this.set.get(variableName);
    // variable.moduleInfo.exportAliasName = aliasName;
  }

  public importSource(variableName: string, sourceName: string) {
    const variable = this.set.get(variableName);
    // variable.moduleInfo.importSourceName = sourceName;
  }

  public startImport() {
    this.__isImporting = true;
  }

  public endImport() {
    this.__isImporting = false;
  }

  public startExport() {
    this.__isExporting = true;
  }

  public endExport() {
    this.__isExporting = false;
  }

}
