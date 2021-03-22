// webpack.prod.js 生产环境打包配置

const {merge} = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  devtool: 'source-map',
  output: {
    filename: "js/[name].[contenthash:8].js", // contenthash:只有模块的内容改变，擦词汇改变hash的值
  },
  plugins: [new CleanWebpackPlugin()],
});
