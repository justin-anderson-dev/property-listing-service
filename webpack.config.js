var path = require('path');
var webpack = require('webpack');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  // mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  target: 'node',
  output: {
    filename: 'main.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.m?js$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env.NODE_ENV': JSON.stringify('development')
  //   })
  // ]
};
