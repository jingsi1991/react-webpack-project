// webpack.dev.js 开发环境的配置
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base");
const config = require("./config");

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    filename: "js/[name].[hash:8].js",
    publicPath: config.publicPath, // 这里可以省略
  },
  module: {
    rules: [],
  },
});
