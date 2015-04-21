var webpack = require('webpack');

module.exports = {
  entry: './src/js',

  output: {
    path: __dirname + '/build/',
    filename: 'app.js'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loaders' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}