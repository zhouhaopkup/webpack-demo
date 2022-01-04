const path = require("path");

// module.exports = {
//   mode: "development",
//   entry: {
//     index: {
//       import: "./src/index.js",
//       dependOn: "shared",
//     },
//     another: {
//       import: "./src/another-module.js",
//       dependOn: "shared",
//     },
//     shared: "lodash",
//   },
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   optimization: {
//     runtimeChunk: "single",
//   },
// };
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
    },
  },
};
