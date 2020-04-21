var path = require('path');
// var webpack = require('webpack');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
var htmlTemplate = path.join(__dirname, 'client/src/index.html');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: htmlTemplate,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  mode: 'development',
  entry: [`${SRC_DIR}/index.jsx`],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
