var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

// TODO:研究一下  vue-load 11才可以用
// const HappyPack = require('happypack');
// const os = require('os')
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

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
  new FriendlyErrorsPlugin()
  // new HappyPack({
  //       id: 'js',
  //       // tempDir: '.happypackDev/',
  //       loaders: [ 'babel' ],
  //       threadPool: happyThreadPool,
  //       cache: true,
  //       verbose: true
  //   })
]

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    if (name !== 'app') {
        // console.log(name,name=='finance',typeof(name))
        plugins.push(new HtmlWebpackPlugin({
            filename: (name == 'finance' ? 'index' : name) + '.html',
            template: config.templatesDir+'/'+name+'/index.html',
            chunks: [
                'common',
                name
            ],
            env: config.dev.env,
            title: name +' App',
            inject: true
            // favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico'),
        }))
    }
})

console.log("-------------")
console.log(baseWebpackConfig.happyLoader)

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: plugins
})
