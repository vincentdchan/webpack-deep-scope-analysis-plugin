import * as ESTree from "estree";
import { ImportIdentifierInfo } from "./importManager";

export enum ExternalType {
  Identifier = "identifier",
  All = "all",
}

export enum ExportVariableType {
  Local = "local",
  External = "external",
}

export interface LocalExportVariable {
  type: ExportVariableType.Local;
  exportName: string;
  localName: string | null;
  node: ESTree.Node;
}

export interface ExternalVariable {
  type: ExportVariableType.External;
  moduleName: string;
  moduleType: ExternalType;
  names?: {
    exportName: string;
    sourceName: string;
  };
}

export type ExportVariable = LocalExportVariable | ExternalVariable;

export class ExportManager {
  public readonly exportsMap: Map<string, ExportVariable> = new Map();
  public readonly localVariables: LocalExportVariable[] = [];
  public readonly externalVariables: ExternalVariable[] = [];
  public exportDefaultDeclaration: ESTree.Node | null = null;

  public addLocalExportVariable(exportVar: LocalExportVariable) {
    this.exportsMap.set(exportVar.exportName, exportVar);
    this.localVariables.push(exportVar);
    if (exportVar.exportName === "default") {
      this.exportDefaultDeclaration = exportVar.node as ESTree.ExportDefaultDeclaration;
    }
  }

  public addExternalVariable(external: ExternalVariable) {
    this.externalVariables.push(external);
    if (external.moduleType === ExternalType.Identifier) {
        this.exportsMap.set(external.names!.exportName, external);
    }
  }

}
