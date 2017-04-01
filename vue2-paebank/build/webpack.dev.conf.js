var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
var cssnano = require('cssnano')
var HappyPack = require('happypack')
var os = require('os')
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
// 渠道部署
// var client = process.argv[3] || 'web'
// client = client.replace(/--/g, '')
var flag = 'debug'
var dll = {
  basePath: '../common/' + flag,
  fileName: '../common/' + flag + '/lib.js',
  manifest: '../common/' + flag + '/manifest.json',
  outputPath: '/static/common/' + flag,  // 生成目录
  publicPath: '/static/common/' + flag   // 注入地址
}

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
  new webpack.DefinePlugin({
    ENV: JSON.stringify(process.env.NODE_ENV)  // 接口环境
  }),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../src/assets/lib'),
      to: config.build.assetsSubDirectory + '/js',
      ignore: ['.*']
    }
  ]),
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: require(dll.manifest)
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: function () {
        return [
          cssnano({
            autoprefixer: {
              // 兼容级别
              browsers: ['iOS >= 5', 'android >= 4.0', 'Safari >= 3.1', 'IE >= 8'],
              add: true,
              // 禁止移除样式
              remove: false
            },
            discardComments: {
              // 删除标记为重要的所有评论
              removeAll: true
            },
            // 禁止使用不安全的options 注意！！！
            safe: true,
            // 是否输出.map文件
            sourcemap: false
          })
        ]
      }
    }
  }),
  _createHappyPlugin('js', ['babel-loader'])
  // _createHappyPlugin('vue', ['vue-loader'])
]

console.log('打印环境')
var env = config.dev.env
console.log(env.NODE_ENV)
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
  // console.log(baseWebpackConfig.entry)
  plugins.push(new HtmlWebpackPlugin({
    filename: name + '.html',
    template: config.templatesDir + '/' + name + '/index.html',
    chunks: [
      name
    ],
    env: 'development',
    title: name + ' App',
    inject: true,
    chunksSortMode: 'dependency'
    // favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico'),
  }))
})

// console.log('*****入口打印********')
// console.log(baseWebpackConfig.entry)

// console.log(path.resolve(__dirname, config.dev.dll.fileName))
// console.log(path.join(config.dev.dll.outputPath))
// console.log(path.join(config.dev.dll.publicPath))

plugins.push(
  new AddAssetHtmlPlugin([
    {
      filepath: require.resolve(dll.fileName),
      hash: true
    }
  ]))
// plugins.push(new AddAssetHtmlPlugin([{
//   filepath: path.resolve(__dirname, config.dev.dll.fileName),
//   outputPath: path.join(config.dev.dll.outputPath),
//   publicPath: path.join(config.dev.dll.publicPath),
//   includeSourcemap: true
// }]))

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
  devtool: '#cheap-module-eval-source-map',
  // devtool: '#cheap-eval-source-map',
  // devtool: '#source-map',
  output: {
    path: config.dev.assetsRoot,
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/chunk.[id].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
      'ENV': JSON.stringify(process.env.ENV)  // 部署环境
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new FriendlyErrorsPlugin()
  ].concat(plugins)
})
