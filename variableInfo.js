
class VariableInfo {

  constructor(name) {
    this.__variableName = name;
    this.__isImported = false;
    this.__isExported = false;
    this.__exportedName = null;
  }

  get variableName() {
    return this.__variableName;
  }

  get isImported() {
    return this.__isExported;
  }

}
