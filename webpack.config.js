const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  node: {
    fs: 'empty'
  },
  entry: [`${SRC_DIR}/index.jsx`],
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          sourceMap: true
        }
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                exportGlobals: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
                hashPrefix: 'hash-that',
              },
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ]
};
