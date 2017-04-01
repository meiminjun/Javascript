var path = require('path')
var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var cssnano = require('cssnano')

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
    // cssnano({
    //   autoprefixer: {
    //     add: true,
    //     remove: true,
    //     browsers: ['> 0%', 'Android 2.3', 'iOS 3.2', 'Safari 3.1', 'IE 10']
    //   },
    //   discardComments: {
    //     removeAll: true
    //   },
    //   discardUnused: false,
    //   mergeIdents: false,
    //   reduceIdents: false,
    //   safe: true,
    //   sourcemap: true
    // })
  ]
}
// if (/production/.test(process.env.NODE_ENV)) {
//   module.exports.postcss.aplice(0, 1, cssnano({
//     autoprefixer: {
//       // 详情请参考：https://github.com/ai/browserslist
//       browsers: ['> 0%', 'Android 2.3', 'iOS 3.2', 'Safari 3.1', 'IE 10']
//     },
//     discardComments: {
//       // 删除标记为重要的所有评论
//       removeAll: true
//     },
//     // 禁止使用不安全的options 注意！！！
//     safe: true,
//     // 是否输出.map文件
//     sourcemap: false
//   }))
// }
