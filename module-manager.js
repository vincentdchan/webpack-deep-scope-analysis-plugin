
class ModuleManager {

  constructor() {
    this.__map = new Map();
  }

  registerModule(info) {
    this.__map.set(info.name, info);
  }

  getModule(name) {
    return this.__map.get(name);
  }

  contains(name) {
    return this.__map.has(name);
  }

  get size() {
    return this.__map.size;
  }

}

module.exports = ModuleManager;
