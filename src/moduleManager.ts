import { ModuleInfo } from "./moduleInfo"

export class ModuleManager {

  private __map: Map<string, ModuleInfo>;

  constructor() {
    this.__map = new Map();
  }

  get map() {
    return this.__map;
  }

}
