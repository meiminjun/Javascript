var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var path = require('path')
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
  new webpack.DefinePlugin({
    ENV: JSON.stringify(process.env.NODE_ENV),  // 环境
    DEBUG: true
  }),
  new CopyWebpackPlugin([
    { from: 'src/assets/lib/add-assets.js', to: 'assets/js' },
    { from: 'src/assets/lib/share.js', to: 'assets/js' },
    { from: 'src/assets/lib/zepto.js', to: 'assets/js' }
  ]),
  _createHappyPlugin('js', ['babel-loader']),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    // name: '[name]',
    manifest: require('./web/vendor-manifest.json')
  })
]

console.log('打印环境')
var env = config.dev.env
console.log(env.NODE_ENV)
console.log(env)

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  console.log(name)
  if (name !== 'vendor') {  // 这个if可以在开发环境删除
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
    // console.log(baseWebpackConfig.entry)
    plugins.push(new HtmlWebpackPlugin({
      filename: name + '.html',
      template: config.templatesDir + '/' + name + '/index.html',
      chunks: [
        name
      ],
      // env: env.NODE_ENV,
      env: 'development',
      title: name + ' App'
      // inject: true
      // favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico'),
    }))
  }
})

console.log('*****入口打印********')
console.log(baseWebpackConfig.entry)

plugins.push(new AddAssetHtmlPlugin({ filepath: require.resolve('./web/vendor.dll.js'), hash: true }))

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
  // devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
      'ENV': JSON.stringify(process.env.NODE_ENV),  // 部署环境
      'DEBUG': true
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new FriendlyErrorsPlugin()
  ].concat(plugins)
})
