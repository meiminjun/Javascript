let path = require('path')
let webpack = require('webpack')

var plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: true, // 删除所有的 `console` 语句
      collapse_vars: true, // 内嵌定义了但是只用到一次的变量
      reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
    },
    sourceMap: true
  })]

module.exports = function (option) {
  var isMin = option.isMin
  var config = {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: 'MEI',
      libraryTarget: 'umd'
    }
  }
  if (isMin === 'true') {
    config.plugins = plugins
    config.entry = {
      'mei.min': './src/index.js'
    }
  } else if (isMin === 'false'){
    config.entry = {
      'mei': ['./src/index.js']
    }
  } else {
    config.entry = {
      'mei': ['./src/index.js'],
      'mei.min': './src/index.js'
    }
  }
  return config
}
