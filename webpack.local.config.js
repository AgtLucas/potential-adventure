var webpack = require('webpack');

module.exports = {
  // Evaluate modules with source maps
  devtool: 'eval',

  // Entry point
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './src/js'
  ],
}