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

  apply(compiler) {

    compiler.hooks.compilation.tap(pluginName, (compilation, data) => {
      let moduleInfo;

      compilation.hooks.normalModuleLoader.tap(pluginName, function(loaderContext, module) {
        moduleInfo = new ModuleInfo(module.resource, module);

        module.parser.hooks.program.tap(pluginName, ast => {
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
