var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'sourcemap',
  context: __dirname + '/src',
  entry: ['./app/app.js'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css?$/,  loader: ExtractTextPlugin.extract("style-loader", "css-loader", { publicPath: "/"})},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style","css!sass")},
      { test: /\.(woff$|woff2|svg|eot|ttf)/, loader: 'file-loader?name=assets/fonts/[name].[ext]'}

    ]
  },
  plugins: [
    new ExtractTextPlugin("assets/css/app.css")
  ]
};
