module.exports = {
  entry: __dirname + '/src/js/app.jsx',
  output: {
    path: __dirname + '/build/js',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}