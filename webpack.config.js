// require('dotenv').config();
const path = require('path');
// var webpack = require('webpack');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');
const htmlTemplate = path.join(__dirname, 'client/src/index.html');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   title: 'Development',
//   template: htmlTemplate,
//   filename: 'index.html',
//   inject: 'body'
// });
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [`${SRC_DIR}/index.jsx`],
  devtool: 'inline-source-map',
  // performance: {
  //   hints: process.env.NODE_ENV === 'production' ? "warning" : false
  // },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  devServer: {
    host: 'localhost',
    https: true,
    port: 8080,
    hot: true,
    contentBase: DIST_DIR,
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-react',
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // HTMLWebpackPluginConfig
  ]
};
