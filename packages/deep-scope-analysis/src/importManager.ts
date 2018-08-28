export enum ImportType {
  Default = "Default",
  Identifier = "Identifier",
  Namespace = "Namespace",
}

export class ImportIdentifierInfo {
  constructor(
    public readonly localName: string,
    public readonly sourceName: string,
    public readonly moduleName: string,
    public readonly type: ImportType,
  ) {}
}

export class ImportManager {
  public readonly idMap: Map<
    string,
    ImportIdentifierInfo
  > = new Map();

  public addImportId(importId: ImportIdentifierInfo) {
    this.idMap.set(importId.localName, importId);
  }

  get ids() {
    return [...this.idMap.values()];
  }
}
