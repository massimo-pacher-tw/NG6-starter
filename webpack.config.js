var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!sass")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
};
