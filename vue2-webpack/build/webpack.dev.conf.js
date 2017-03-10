var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// var manifest = require('../dist/manifest.json')
var path = require('path')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// TODO:研究一下  vue-load 11才可以用
// const HappyPack = require('happypack')
// const os = require('os')
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

var plugins = [

  new webpack.DefinePlugin({
    'process.env': config.dev.env
  }),
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  // new HtmlWebpackPlugin({
  //   filename: 'index.html',
  //   template: 'index.html',
  //   inject: true
  // }),
  new FriendlyErrorsPlugin(),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    // name: '[name]',
    manifest: require('./dist/vendor-manifest.json')
  })
  // new HappyPack({
  //   id: 'js',
  //   tempDir: '.happypackDev/',
  //   loaders: ['babel'],
  //   threadPool: happyThreadPool,
  //   cache: true,
  //   verbose: true
  // }),
]

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  // console.log(name,name=='finance',typeof(name))
  // var templatesHtmlFile = config.assetsRoot + '/' + name + '/index.html'
  // console.log('模板文件路径')
  // console.log(templatesHtmlFile)

  plugins.push(new HtmlWebpackPlugin({
    filename: (name == 'finance' ? 'index' : name) + '.html',
    template: config.templatesDir + '/' + name + '/index.html',
    chunks: [
      name
    ],
    env: config.dev.env,
    title: name + ' App',
    inject: true
    // favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico'),
  }))
  // console.log(config.build.buildDir + '/vendor.dll.js')
  console.log('路径')
  console.log(require.resolve('./dist/vendor.dll.js'))
})

plugins.push(new AddAssetHtmlPlugin({ filepath: require.resolve('./dist/vendor.dll.js'), hash: true }))

// TODO:happypack暂时不支持webpack2
// var happyPlugins = [
//   createHappyPlugin('js-eslint', ['eslint-loader']),
//   createHappyPlugin('vue-eslint', ['eslint-loader']),
//   createHappyPlugin('babel', ['babel-loader']),
//   createHappyPlugin('vue', ['vue-loader'])
// ]
// function createHappyPlugin (id, loaders) {
//   return new HappyPack({
//     id: id,
//     loaders: loaders,
//     threadPool: happyThreadPool,
//     // 开启缓存
//     cache: process.env.HAPPY_CACHE === '1',
//     // make happy more verbose with HAPPY_VERBOSE=1
//     verbose: true
//   })
// }

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  // devtool: '#source-map',
  plugins: plugins
})
