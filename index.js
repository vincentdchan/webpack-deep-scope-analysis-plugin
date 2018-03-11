const assert = require("assert");

const ScopeManager = require("./scope-manager");
const Variable = require("./variable");
const ModuleManager = require("./module-manager");
const ModuleInfo = require("./module-info");
const Scope = require("./scope").Scope;
const version = require("./package.json").version;

const moduleManager = new ModuleManager();

const pluginName = "WebpackDeepScopeAnalysisPlugin";

class WebpackDeepScopeAnalysisPlugin {

  apply(compiler) {

    compiler.hooks.compilation.tap(pluginName, (compilation, data) => {
      let moduleInfo;

      compilation.hooks.normalModuleLoader.tap(pluginName, function(loaderContext, module) {
        moduleInfo = new ModuleInfo(module.rawRequest, module);

        module.parser.hooks.program.tap(pluginName, ast => {
          if (!moduleManager.contains(moduleInfo.name)) {
            moduleInfo.analyze(ast);
            debugger;
            moduleManager.registerModule(moduleInfo);
          }
        });
        
      });

    });
    
  }

}

module.exports = WebpackDeepScopeAnalysisPlugin;
