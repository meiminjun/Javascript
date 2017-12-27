let path = require('path')
let webpack = require('webpack')

var plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true
  })]

module.exports = function (option) {
  var isMin = option.isMin
  var config = {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: 'SDK',
      libraryTarget: 'umd'
    }
  }
  if (isMin === 'true') {
    config.plugins = plugins
    config.entry = {
      'sdk.min': './src/index.js'
    }
  } else {
    config.entry = {
      'sdk': ['./src/index.js']
    }
  }
  return config
}
