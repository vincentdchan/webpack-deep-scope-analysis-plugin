import { ModuleAnalyser } from "./analyser";

export class ModuleManager {
  public readonly map = new Map<string, ModuleAnalyser>();
}
