
const ExportType = {
  default: "default",
  named: "named",
  all: "all",
};

class ExportInfo {

  constructor(exportType) {
    this.type = exportType;
    this.__variables = [];
    this.__source = null;
    this.__alias = null;
  }

  get variables() {
    return this.__variables;
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

}

ExportInfo.ExportType = ExportType;

module.exports = ExportInfo;
