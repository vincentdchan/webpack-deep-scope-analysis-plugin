
const ExportType = {
  default: "default",
  named: "named",
  all: "all",
};

class ExportInfo {

  constructor(exportType) {
    this.type = exportType;
    this.__variable = null;
    this.__source = null;
  }

  get variable() {
    return this.__variable
  }

  set variable(value) {
    this.__variable = value;
  }

  get source() {
    return this.__source;
  }

  set source(value) {
    this.__source = value;
  }

}

ExportInfo.ExportType = ExportType;

module.exports = ExportInfo;
