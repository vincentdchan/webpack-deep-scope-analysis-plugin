import * as ESTree from 'estree';
import { ImportIdentifierInfo } from './importManager';

export class LocalExportIdentifier {
  public dependentImportNames?: ImportIdentifierInfo[];

  public constructor(
    public readonly exportName: string,
    public readonly localName: string | null,
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
  public exportDefaultDeclaration: ESTree.Node | null = null;

  public addLocalExportIdentifier(exportId: LocalExportIdentifier) {
    this.localIdMap.set(exportId.exportName, exportId);
    if (exportId.exportName === 'default') {
      this.exportDefaultDeclaration = exportId.node as ESTree.ExportDefaultDeclaration;
    }
  }

  get localIds() {
    return [...this.localIdMap.values()];
  }

}
