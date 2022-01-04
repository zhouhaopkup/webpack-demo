const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    hot: "webpack/hot/dev-server.js",
    client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    hot: false,
    client: false,
  },
};
