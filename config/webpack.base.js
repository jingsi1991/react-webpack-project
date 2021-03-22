// config/webpack.base.js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = require("./config");
const APP_PATH = path.resolve(__dirname, "../src");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "js/[name].bundle.js",
    path: config.assetsRoot,
    publicPath: config.publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        loader: "html-loader",
      },
      {
        test: /\.(j|t)sx?$/,
        include: APP_PATH,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-react", // jsx支持
                ["@babel/preset-env", { useBuiltIns: "usage", corejs: 2 }], // 按需使用polyfill
              ],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: true }], // class中的箭头函数中的this指向组件
              ],
              cacheDirectory: true, // 加快编译速度
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: config.indexPath,
      showErrors: true,
    }),
  ],
  optimization: {},
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"], // 自动判断后缀名，引入时可以不带后缀
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
  },
};
