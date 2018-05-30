const assert = "assert";

const {
  ScopeManager,
  Variable,
  ModuleManager,
  ModuleAnalyser,
  Scope,
} = require("webpack-deep-scope-analysis");
// const version = require("./package.json").version;


const pluginName = "WebpackDeepScopeAnalysisPlugin";

class WebpackDeepScopeAnalysisPlugin {

  constructor() {
    this.moduleMap = new Map();
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(
      pluginName,
      (compilation, { normalModuleFactory }) => {
        // let moduleAnalyser = new ModuleAnalyser(;

        const handler = (parser, parserOptions) => {
					if (
						typeof parserOptions.harmony !== "undefined" &&
						!parserOptions.harmony
					)
            return;

          parser.hooks.import.tap(
            pluginName,
            (statement, source) => {
              // console.log(parser);
              // debugger;
            }
          );

          parser.hooks.importSpecifier.tap(
            pluginName,
            (statement, source, id, name) => {
              // console.log(parser);
              // debugger;
            }
          );


          parser.hooks.program.tap(
            pluginName,
            (ast) => {
              // console.log(normalModuleFactory);
              // if (this.moduleMap.has())
              const resourceName = parser.state.module.resource;
              if (!this.moduleMap.has(resourceName)) {
                // console.log(resourceName);
                const analyser = new ModuleAnalyser(resourceName, parser.state.module);
                analyser.analyze(ast);
                this.moduleMap.set(resourceName, analyser);
                parser.state.deepScopeAnalyserMap = this.moduleMap;
              }
              // debugger;
              // if (
              //   !moduleManager.map.has(moduleAnalyser.name)
              // ) {
              //   moduleAnalyser.analyze(ast);
              //   moduleManager.map.set(
              //     moduleAnalyser.name,
              //     moduleAnalyser,
              //   );
              // }
            },
          );
				};

        normalModuleFactory.hooks.parser
          .for("javascript/auto")
          .tap(pluginName, handler);
        normalModuleFactory.hooks.parser
          .for("javascript/esm")
          .tap(pluginName, handler);

        // compilation.hooks.normalModuleLoader.tap(
        //   pluginName,
        //   (loaderContext, module) => {
        //     moduleAnalyser = new ModuleAnalyser(
        //       module.resource,
        //       module,
        //     );

        //     const parser = module.parser;

        //   },
        // );
      },
    );
  }
}

module.exports = {
  default: WebpackDeepScopeAnalysisPlugin,
  ModuleAnalyser,
};
