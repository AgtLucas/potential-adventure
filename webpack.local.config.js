var webpack = require('webpack');

module.exports = {
  // Evaluate modules with source maps
  devtool: 'eval',

  // Entry point
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './src/js/app.jsx'
  ],

  // Output!
  output: {
    path: __dirname + '/build',
    filename: 'app.js',
    publicPath: 'http://localhost:9090/build'
  },

  // Plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // Webpack loaders
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] }
    ]
  },

  // Resolve extensions to require files without them
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}