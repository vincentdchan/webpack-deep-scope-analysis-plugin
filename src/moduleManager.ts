import { ModuleAnalyser } from "./moduleAnalyser"

export class ModuleManager {

  private __map: Map<string, ModuleAnalyser>;

  constructor() {
    this.__map = new Map();
  }

  get map() {
    return this.__map;
  }

}
