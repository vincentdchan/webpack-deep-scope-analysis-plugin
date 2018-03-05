const assert = require("assert");

const ScopeManager = require("./scope-manager");
const Variable = require("./variable");
const ModuleManager = require("./module-manager");
const ModuleInfo = require("./module-info");
const Scope = require("./scope").Scope;
const version = require("./package.json").version;

const moduleManager = new ModuleManager();

class WebpackDeepScopeAnalysisPlugin {

  apply(compiler) {

    compiler.plugin("compilation", (compilation, data) => {
      let moduleInfo;

      compilation.plugin('normal-module-loader', function(loaderContext, module) {
        // this is where all the modules are loaded
        // one by one, no dependencies are created yet
        moduleInfo = new ModuleInfo(module.resource, module);

        module.parser.plugin("program", ast => {
          if (!moduleManager.contains(moduleInfo.name)) {
            // moduleInfo.analyze(ast);
            moduleManager.registerModule(moduleInfo);
            console.log(moduleInfo.name);
            debugger;
          }
        });
        
      });

    });
    
  }

}

module.exports = WebpackDeepScopeAnalysisPlugin;
