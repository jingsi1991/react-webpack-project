// config/build.js
const webpack = require('webpack');
const webpackConfig = require('./webpack.prod');

webpack(webpackConfig, function (err, stats) {
  if (err) {
    console.log('失败',err);
    return;
  }
  console.log('成功')
});
