var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ],
  // 下面是添加的，但是没发现有啥作用
  presets: ["es2015-node6", { "modules": false }],
  plugins: [
    ['transform-runtime', {
      polyfill: true, // TODO:查询一下这个是什么意思
      regenerator: false  // TODO:查询一下这个是什么意思
    }]
  ]
}
