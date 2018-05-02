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

  constructor(
    public readonly localName: string,
    public readonly sourceName: string,
    public readonly moduleName: string,
    public readonly type: ImportType,
  ) {}

}

export class ImportManager {
  public readonly idMap: Map<string, ImportIdentifierInfo> = new Map();

  public addImportId(importId: ImportIdentifierInfo) {
    this.idMap.set(importId.localName, importId);
  }

  get ids() {
    return [...this.idMap.values()];
  }
}

export class LocalExportIdentifier {
  public dependentImportNames?: ImportIdentifierInfo[];

  public constructor(
    public readonly exportName: string,
    public readonly node: ESTree.Node,
  ) {}
}

export enum ExternalType {
  Identifier = 'Identifier',
  All = 'All',
}

export class ExternalInfo {
  public constructor(
    public readonly moduleName: string,
    public readonly moduleType: ExternalType,
    public readonly names?: {
      exportName: string,
      sourceName: string,
    },
  ) {}
}

export class ExportManager {
  public readonly localIdMap: Map<string, LocalExportIdentifier> = new Map();
  public readonly externalInfos: ExternalInfo[] = [];

  public addLocalExportIdentifier(exportId: LocalExportIdentifier) {
    this.localIdMap.set(exportId.exportName, exportId);
  }

  get localIds() {
    return [...this.localIdMap.values()];
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
