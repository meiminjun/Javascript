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
    // require('autoprefixer')({
    //   browsers: ['last 2 versions']
    // }),
    cssnano({
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['> 0%', 'Android 2.3', 'iOS 3.2', 'Safari 3.1', 'IE 10']
      },
      discardComments: {
        removeAll: true
      },
      discardUnused: false,
      mergeIdents: false,
      reduceIdents: false,
      safe: true,
      sourcemap: true
    })
  ]
}
