var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var path = require('path')
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: 5 })

function _createHappyPlugin (id, loaders) {
  return new HappyPack({
    id: id,
    loaders: loaders,
    threadPool: happyThreadPool,
    // 开启缓存
    cache: true,
    // make happy more verbose with HAPPY_VERBOSE=1
    verbose: true
  })
}

var plugins = [
  _createHappyPlugin('js', ['babel-loader']),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    // name: '[name]',
    manifest: require('./dist/vendor-manifest.json')
  })
]

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  if(name != 'vendor') {
    console.log(name)
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
    // console.log(baseWebpackConfig.entry)
    plugins.push(new HtmlWebpackPlugin({
      filename: name + '.html',
      template: config.templatesDir + '/' + name + '/index.html',
      chunks: [
        name
      ],
      env: 'dev',
      title: name + ' App',
      // inject: true
      // favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico'),
    }))
  }
})

console.log('*****入口打印********')
console.log(baseWebpackConfig.entry)

plugins.push(new AddAssetHtmlPlugin({ filepath: require.resolve('./dist/vendor.dll.js'), hash: true }))


// var happyPlugins = [
//   // createHappyPlugin('js-eslint', ['eslint-loader']),
//   // createHappyPlugin('vue-eslint', ['eslint-loader']),
//   createHappyPlugin('js', ['babel-loader'])
//   // createHappyPlugin('sass', ['sass-loader'])
//   // createHappyPlugin('vue-js', ['vue-loader'])
// ]


module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  // devtool: '#cheap-module-eval-source-map',
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new FriendlyErrorsPlugin()
  ].concat(plugins)
})
