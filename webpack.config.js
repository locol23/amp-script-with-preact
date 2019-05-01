const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/app",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: false
    })
  ]
}
