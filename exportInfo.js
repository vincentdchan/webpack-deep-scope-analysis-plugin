
const ExportType = {
  default: "default",
  named: "named",
  all: "all",
};

class ExportInfo {

  constructor(exportType) {
    this.type = exportType;
    this.__refs = [];
    this.__source = null;
    this.__alias = null;
    this.__determinable = true;
  }

  get exportName() {
    if (this.__alias) return this.__alias;
    return this.__refs[0].identifier.name;
  }

  get source() {
    return this.__source;
  }

  set source(value) {
    this.__source = value;
  }

  get alias() {
    return this.__alias;
  }

  set alias(value) {
    this.__alias = value;
  }

  get determinable() {
    return this.__determinable;
  }

  set determinable(value) {
    this.__determinable = value;
  }

}

ExportInfo.ExportType = ExportType;

module.exports = ExportInfo;
