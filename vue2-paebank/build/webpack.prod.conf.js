var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var UglifyJsParallelPlugin = require('webpack-uglify-parallel')  // 还未添加
var os = require('os')
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

function _createHappyPlugin (id, loaders) {
  return new HappyPack({
    id: id,
    loaders: loaders,
    threadPool: happyThreadPool,
    // 开启缓存
    cache: false,
    // make happy more verbose with HAPPY_VERBOSE=1
    verbose: true
  })
}

var env = config.build.env
// console.log('--------=====')
// console.log(env.NODE_ENV)

var plugins = []
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  console.log(name)
  // if (name !== 'vendor') {  // 这个if可以在开发环境删除
  baseWebpackConfig.entry[name] = baseWebpackConfig.entry[name]
    // console.log(baseWebpackConfig.entry)
  plugins.push(new HtmlWebpackPlugin({
    filename: name + '.html',
    template: config.templatesDir + '/' + name + '/index.html',
    chunks: [
      'manifest', 'vendor', name
    ],
    env: 'production',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
    },
    chunksSortMode: 'dependency',
    inject: true
  }))
  // }
})

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env,
      'ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // new UglifyJsParallelPlugin({
    //   workers: os.cpus().length,
    //   mangle: true,
    //   compressor: {
    //     warnings: true,
    //     drop_console: false,
    //     drop_debugger:true
    //   },
    //   sourceMap: true
    // }),

    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: config.build.index,
    //   template: 'index.html',
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //     // more options:
    //     // https://github.com/kangax/html-minifier#options-quick-reference
    //   },
    //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //   chunksSortMode: 'dependency'
    // }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      },
      { from: 'src/assets/lib/add-assets.js', to: 'static/js' },
      { from: 'src/assets/lib/zepto.js', to: 'static/js' },
      { from: 'src/assets/lib/runtime-check.js', to: 'static/js' },
      { from: 'src/assets/lib/aladdin.min.js', to: 'static/js' },
      { from: 'src/assets/lib/aladdin.web.min.js', to: 'static/js' },
      { from: 'src/assets/lib/bow.min.js', to: 'static/js' },
      { from: 'src/assets/lib/bow.web.min.js', to: 'static/js' },
      { from: 'src/assets/lib/aladdin.loading.min.js', to: 'static/js' },
      { from: 'src/assets/lib/aladdin.loading.web.min.js', to: 'static/js' }
    ]),
    _createHappyPlugin('js', ['babel-loader']),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   // name: '[name]',
    //   manifest: require(config.build.dll.manifest)
    // })
  ].concat(plugins)
})

// webpackConfig.plugins.push(new AddAssetHtmlPlugin({
//   filepath: require.resolve(config.build.dll.fileName),
//   hash: true
// }))

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
