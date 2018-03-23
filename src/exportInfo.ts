import { Reference } from './reference';

export enum ExportType {
  default = "default",
  named = "named",
  all = "all",
};

export class ExportInfo {

  public type: ExportType
  public refs: Reference[];
  public source: string | null;
  public alias: string | null;
  public determinable: boolean;

  constructor(exportType) {
    this.type = exportType;
    this.refs = [];
    this.source = null;
    this.alias = null;
    this.determinable = true;
  }

  get exportName() {
    if (this.alias) return this.alias;
    return this.refs[0].identifier.name;
  }

}
