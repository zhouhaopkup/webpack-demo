const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    vendors: ["react", "react-dom", "lodash"],
  },
  output: {
    filename: "[name].dll.js",
    path: path.resolve(__dirname, "./dll"),
    library: "[name]",
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.resolve(__dirname, "./dll/[name].manifest.json"),
    }),
  ],
};
