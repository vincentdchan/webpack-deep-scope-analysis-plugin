import { Scope } from './scope';
import { ScopeManager } from '../scopeManager';
import { Definition } from '../definition';
import { Variable } from '../variable';
import { Reference } from '../reference';
import * as ESTree from 'estree';

export enum ImportType {
  Default = 'Default',
  Identifier = 'Identifier',
  Namespace = 'Namespace',
}

export class ImportIdentifierInfo {
  public mustBeImported: boolean = false;
  public module?: ImportModuleInfo;

  constructor(
    public readonly localName: string,
    public readonly sourceName: string,
    public readonly type: ImportType,
  ) {}

  get moduleName() {
    return this.module!.moduleName;
  }

}

export class ImportModuleInfo {
  public readonly importIds: ImportIdentifierInfo[] = [];
  public readonly map: Map<string, ImportIdentifierInfo> = new Map();

  public constructor(
    public readonly moduleName: string,
    public readonly manager: ImportManager,
  ) {}

  public addImportId(importId: ImportIdentifierInfo) {
    if (this.map.has(importId.localName)) {
      throw new TypeError('Variable is already exist');
    }

    importId.module = this;
    this.map.set(importId.localName, importId);
    this.importIds.push(importId);
    this.manager.addImportId(importId);
  }
}

export class ImportManager {
  public readonly moduleMap: Map<string, ImportModuleInfo> = new Map();
  public readonly ids: ImportIdentifierInfo[] = [];
  public readonly idMap: Map<string, ImportIdentifierInfo> = new Map();

  public findOrCreateModuleInfo(name: string) {
    if (this.moduleMap.has(name)) {
      return this.moduleMap.get(name)!;
    } else {
      const newModuleMap = new ImportModuleInfo(name, this);
      this.moduleMap.set(name, newModuleMap);
      return newModuleMap;
    }
  }

  public addImportId(importId: ImportIdentifierInfo) {
    this.ids.push(importId);
    this.idMap.set(importId.localName, importId);
  }
}

export class LocalExportIdentifier {
  public dependentImportNames?: ImportIdentifierInfo[];

  public constructor(
    public readonly exportName: string,
    public readonly node: ESTree.Node,
  ) {}
}

export enum ExternalModuleType {
  Identifier = 'Identifier',
  Namespace = 'Namespace',
}

export class ExternalIdentifierInfo {
  public constructor(
    public readonly exportName: string,
    public readonly sourceName: string,
  ) {}
}

export class ExternalModuleInfo {
  public readonly idInfos: ExternalIdentifierInfo[] = [];
  public readonly idInfoMap: Map<string, ExternalIdentifierInfo> = new Map();

  public constructor(
    public readonly moduleName: string,
    public readonly exportType: ExternalModuleType,
  ) {}

  public addExternalIdentifierInfo(idInfo: ExternalIdentifierInfo) {
    if (this.idInfoMap.has(idInfo.exportName)) {
      throw new TypeError('Export name is already exist');
    }
    this.idInfoMap.set(idInfo.exportName, idInfo);
    this.idInfos.push(idInfo);
  }
}

export class ExportManager {
  public readonly localNames: LocalExportIdentifier[] = [];
  public readonly localNameMap: Map<string, LocalExportIdentifier> = new Map();
  public readonly externalModules: ExternalModuleInfo[] = [];
  public readonly externalModuleMap: Map<
    string,
    ExternalModuleInfo
  > = new Map();

  public addLocalExportIdentifier(exportId: LocalExportIdentifier) {
    this.localNames.push(exportId);
    this.localNameMap.set(exportId.exportName, exportId);
  }

  public findOrCreateExternalModuleNameInfo(
    moduleName: string,
    type:ExternalModuleType
  ) {
    if (this.externalModuleMap.has(moduleName)) {
      return this.externalModuleMap.get(moduleName)!;
    } else {
      const module = new ExternalModuleInfo(moduleName, type);
      this.externalModuleMap.set(moduleName, module);
      this.externalModules.push(module);
      return module;
    }
  }
}

export class ModuleScope extends Scope {
  public readonly importManager: ImportManager = new ImportManager();
  public readonly exportManager: ExportManager = new ExportManager();
  public isExportingNamedDeclaration: boolean = false;

  public constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: ESTree.Node,
  ) {
    super(scopeManager, 'module', upperScope, block, false);
  }
  
  public __define(node: ESTree.Node, def: Definition): Variable | null {
    const ancestor = super.__define(node, def);
    if (ancestor !== null) {
      this.exportManager.addLocalExportIdentifier(new LocalExportIdentifier(
        ancestor.name,
        ancestor.defs[0].node
      ));
    }
    return ancestor;
  }

}
