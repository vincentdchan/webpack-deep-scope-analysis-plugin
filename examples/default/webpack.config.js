const path = require('path');
const WebpackDeepScopeAnalysisPlugin = require('../../lib');
const webpackMajorVersion = require('webpack/package.json').version.split('.')[0];

module.exports = {
  context: __dirname,
  entry: './example.js',
  output: {
    path: path.join(__dirname, 'dist/webpack-' + webpackMajorVersion),
    publicPath: '',
    filename: 'bundle.js'
  },
  mode: "development",
  plugins: [
    new WebpackDeepScopeAnalysisPlugin(),
  ]
};
