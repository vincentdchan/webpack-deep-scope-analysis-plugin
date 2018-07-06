# Webpack Deep Scope Analysis Plugin

![](https://travis-ci.org/vincentdchan/webpack-deep-scope-analysis-plugin.svg?branch=master)

A webpack plugin for deep scope analysis.
It's a project of [GSoC 2018](https://summerofcode.withgoogle.com/organizations/4657420148670464/#projects) webpack organization.

Student: [@Vincent](https://github.com/vincentdchan)   Mentor: [@Tobias](https://github.com/sokra)

Demo: [https://vincentdchan.github.io/webpack-deep-scope-demo/](https://vincentdchan.github.io/webpack-deep-scope-demo/)

# Install

Install the plugin:

```bash
$ yarn add webpack-deep-scope-plugin
```

## Require

- Node.js 8 \+
- webpack 4.14.0 \+

# Usage

Enable the plugin in `webpack.config.js`:

```javascript
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;

module.export = {
  ...,
  plugins: [
    ...,
    new WebpackDeepScopeAnalysisPlugin(),
  ],
}
```

**Notice:** the plugin only works for `import` and `export` syntax module. If your code are transpiled to `module.export` and `require` syntax, the analyzer can't work correctly.

The plugin will analyze the scope and determine if the variables should be imported automatically.

## Pure Annotation

As you know, it's difficult for ECMAScript to analyze the side effects. Hence, `PURE` annotation is introduced, which is from [Uglify](https://github.com/mishoo/UglifyJS2):

> A function call is marked as "pure" if a comment annotation /\*@__PURE__\*/ or /\*#__PURE__\*/ immediately precedes the call. For example: /\*@__PURE__\*/foo();

# About Escope

Now the `src/` includes a Typescript version of [escope](https://github.com/estools/escope),
because the plugin needs some internal changes of the escope manager. So I didn't import the 
escope directly. 

When the plugin is nearly finished, I will make some PRs to the original escope repo.
