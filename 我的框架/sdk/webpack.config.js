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
