import * as assert from "assert";

import { ScopeManager } from "./scopeManager";
import { Variable } from "./variable";
import { ModuleManager } from "./moduleManager";
import { ModuleAnalyser } from "./analyser";
import { Scope } from "./scope";
// const version = require("./package.json").version;

const moduleManager = new ModuleManager();

const pluginName = "WebpackDeepScopeAnalysisPlugin";

class WebpackDeepScopeAnalysisPlugin {

  apply(compiler: any) {

    compiler.hooks.compilation.tap(pluginName, (compilation: any, data: any) => {
      let moduleAnalyser: ModuleAnalyser;

      compilation.hooks.normalModuleLoader.tap(pluginName, function(
        loaderContext: any,
        module: any
      ) {
        moduleAnalyser = new ModuleAnalyser(module.resource, module);

        module.parser.hooks.program.tap(pluginName, (ast: any) => {
          if (!moduleManager.map.has(moduleAnalyser.name)) {
            moduleAnalyser.analyze(ast);
            debugger;
            moduleManager.map.set(moduleAnalyser.name, moduleAnalyser);
          }
        });
        
      });

    });
    
  }

}

export = WebpackDeepScopeAnalysisPlugin;
