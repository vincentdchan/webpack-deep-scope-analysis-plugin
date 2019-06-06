# Webpack Deep Scope Analysis Plugin

![](https://travis-ci.org/vincentdchan/webpack-deep-scope-analysis-plugin.svg?branch=master)
[![npm version](https://badge.fury.io/js/webpack-deep-scope-plugin.svg)](https://badge.fury.io/js/webpack-deep-scope-plugin)

A webpack plugin for deep scope analysis.
It's a project of [GSoC 2018](https://summerofcode.withgoogle.com/organizations/4657420148670464/#projects) webpack organization.

**It's a plugin to improve tree-shaking.** It can make webpack eliminate the unused imports related to the unused exports. It solves the issue [6254](https://github.com/webpack/webpack/issues/6264) for webpack.

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

module.exports = {
  ...,
  plugins: [
    ...,
    new WebpackDeepScopeAnalysisPlugin(),
  ],
}
```

**Notice:** the plugin only works for `import` and `export` syntax module. If your code are transpiled to `module.export` and `require` syntax, the analyzer can't work correctly.

The plugin will analyze the scope and determine if the variables should be imported automatically.

## Articles

[Medium](https://medium.com/webpack/better-tree-shaking-with-deep-scope-analysis-a0b788c0ce77)

[中文版](https://vincentdchan.github.io/2018/05/better-tree-shaking-with-scope-analysis/)

## Pure Annotation

As you know, it's difficult for ECMAScript to analyze the side effects. Hence, `PURE` annotation is introduced, which is from [Uglify](https://github.com/mishoo/UglifyJS2):

> A function call is marked as "pure" if a comment annotation /\*@\_\_PURE\_\_\*/ or /\*#\_\_PURE\_\_\*/ immediately precedes the call. For example: /\*@\_\_PURE\_\_\*/foo();

# Changelog

### v1.6.1

- Upgrade tslint for security issue
- Fix: #12 : Add README to npm

### v1.6.0

 - rename package *webpack-deep-scope-analysis* to *deep-scope-analyser*, which is published as a new npm package. It's aimed to be a standalone analyser.

### v1.5.4

 - Fix [#7](https://github.com/vincentdchan/webpack-deep-scope-analysis-plugin/issues/7): `import * from 'xxx'` syntax

### v1.5.3

 - Fix [#5](https://github.com/vincentdchan/webpack-deep-scope-analysis-plugin/issues/5)

### v1.5.2

 - Improve performance and code quality

### v1.5.0

 - Introduce `VirtualScope` to simulate module variable

### v1.4.0

 - Fix #4
 - Publish

# Contributing

Use `lerna` to build and test:
```sh
$ lerna run build
$ lerna run tslint
$ lerna run test
```

# About Escope

Now the `src/` includes a Typescript version of [escope](https://github.com/estools/escope),
because the plugin needs some internal changes of the escope manager. So I didn't import the 
escope directly. 

When the plugin is nearly finished, I will make some PRs to the original escope repo.
