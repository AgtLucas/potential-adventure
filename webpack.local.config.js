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

  // Output!
  output: {
    path: __dirname + '/build',
    filename: 'app.js',
    publicPath: 'http://localhost:9090/build'
  },
}