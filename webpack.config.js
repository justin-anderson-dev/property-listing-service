const path = require('path');
const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: [`${SRC_DIR}/index.jsx`],
  devtool: 'inline-source-map',
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
  plugins: []
};
