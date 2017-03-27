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
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//   console.log(`********`)
//   console.log(name);
//   baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

// TODO:研究一下  vue-load 11才可以用
const HappyPack = require('happypack')
// const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: 5 })

var plugins = [
  //  new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   minChunks: Infinity
  //   // children: true,
  //   // chunks: chunks,
  //   // minChunks: chunks.length // 提取所有entry共同依赖的模块
  // }),
  new webpack.DefinePlugin({
    'process.env': config.dev.env
  }),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   minChunks: Infinity
  // }),
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrorsPlugin(),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    // name: '[name]',
    manifest: require('./dist/vendor-manifest.json')
  })
]

console.log('________测试_____')
console.log(config.dev.env)

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
  // console.log(name,name=='finance',typeof(name))
  // var templatesHtmlFile = config.assetsRoot + '/' + name + '/index.html'
  // console.log('模板文件路径')
  // console.log(templatesHtmlFile)
  console.log(name);
  plugins.push(new HtmlWebpackPlugin({
    filename: name + '.html',
    template: config.templatesDir + '/' + name + '/index.html',
    chunks: [
      name
    ],
    env: 'dev',
    title: name + ' App'
    // inject: true
    // favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico'),
  }))
  // console.log(config.build.buildDir + '/vendor.dll.js')
  // console.log('路径')
  // console.log(require.resolve('./dist/vendor.dll.js'))
})

plugins.push(new AddAssetHtmlPlugin({ filepath: require.resolve('./dist/vendor.dll.js'), hash: true }))

// TODO:happypack暂时不支持webpack2
var happyPlugins = [
  // createHappyPlugin('js-eslint', ['eslint-loader']),
  // createHappyPlugin('vue-eslint', ['eslint-loader']),
  createHappyPlugin('js', ['babel-loader'])
  // createHappyPlugin('sass', ['sass-loader'])
  // createHappyPlugin('vue-js', ['vue-loader'])
]
function createHappyPlugin (id, loaders) {
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

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  // devtool: '#cheap-module-eval-source-map',
  devtool: '#source-map',
  // plugins: plugins
  plugins: plugins.concat(happyPlugins)
})
