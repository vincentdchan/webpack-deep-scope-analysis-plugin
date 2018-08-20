const { ModuleAnalyser } = require("webpack-deep-scope-analysis");
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

        compilation.hooks.dependencyReference.tap(
          pluginName,
          (depRef, dep, module) => {
            if (dep.type === "harmony import specifier") {
              const moduleScopeAnalyser = this.moduleMap.get(module.resource);
              let { usedExports } = dep.originModule;

              if (usedExports === false) usedExports = [];

              if (
                usedExports &&
                dep.id &&
                !dep.namespaceObjectAsContext &&
                Array.isArray(usedExports)
              ) {
                const exportInfo = moduleScopeAnalyser.generateExportInfo(usedExports);
                if (dep.request in exportInfo) {
                  const names = exportInfo[dep.request];
                  if (names.indexOf(dep.id) >= 0) {
                    return depRef;
                  } else {
                    return null;
                  }
                } else {
                  return null;
                }
              }
            }
          },
        );

        const handler = (parser, parserOptions) => {
          if (
            typeof parserOptions.harmony !== "undefined" &&
            !parserOptions.harmony
          ) {
            return;
          }

          parser.hooks.program.tap(pluginName, (ast, comments) => {
            const resourceName = parser.state.module.resource;
            if (!this.moduleMap.has(resourceName)) {
              const analyser = new ModuleAnalyser(resourceName, parser.state.module);
              analyser.analyze(ast, {
                comments,
              });
              this.moduleMap.set(resourceName, analyser);
            }
          });
        };

        normalModuleFactory.hooks.parser
          .for("javascript/auto")
          .tap(pluginName, handler);
        normalModuleFactory.hooks.parser
          .for("javascript/esm")
          .tap(pluginName, handler);

      },
    );
  }
}

module.exports = {
  default: WebpackDeepScopeAnalysisPlugin,
  ModuleAnalyser,
};
