import * as assert from "assert";

import { ScopeManager } from "./scopeManager";
import { Variable } from "./variable";
import { ModuleManager } from "./moduleManager";
import { ModuleInfo } from "./moduleInfo";
import { Scope } from "./scope";
// const version = require("./package.json").version;

const moduleManager = new ModuleManager();

const pluginName = "WebpackDeepScopeAnalysisPlugin";

class WebpackDeepScopeAnalysisPlugin {

  apply(compiler: any) {

    compiler.hooks.compilation.tap(pluginName, (compilation: any, data: any) => {
      let moduleInfo: ModuleInfo;

      compilation.hooks.normalModuleLoader.tap(pluginName, function(
        loaderContext: any,
        module: any
      ) {
        moduleInfo = new ModuleInfo(module.resource, module);

        module.parser.hooks.program.tap(pluginName, (ast: any) => {
          if (!moduleManager.map.has(moduleInfo.name)) {
            moduleInfo.analyze(ast);
            debugger;
            moduleManager.map.set(moduleInfo.name, moduleInfo);
          }
        });
        
      });

    });
    
  }

}

export = WebpackDeepScopeAnalysisPlugin;
