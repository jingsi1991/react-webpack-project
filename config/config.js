// config/config.js
/**
 * __dirname : 当前模块的目录名
 */
const path = require("path");

module.exports = {
  assetsRoot: path.resolve(__dirname, "../dist"),
  assetsDirectory: "static",
  publicPath: "/",
  indexPath: path.resolve(__dirname, "../public/index.html"),
};
