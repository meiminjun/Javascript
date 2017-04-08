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
var cssnano = require('cssnano')
var UglifyJsParallelPlugin = require('webpack-uglify-parallel')
var os = require('os')
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
var env = config.build.env

// 渠道部署
var deployEnv = process.argv[2]
deployEnv = deployEnv.replace(/--/g, '')
var flag = 'js'
console.log('---部署环境---')
console.log(deployEnv)

var dll = {
  basePath: '../common/' + flag,
  fileName: '../common/' + flag + '/lib.js',
  manifest: '../common/' + flag + '/manifest.json',
  outputPath: '/static/common/' + flag,  // 生成目录
  publicPath: '/static/common/' + flag   // 注入地址
}

var plugins = []
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = baseWebpackConfig.entry[name]
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
        // 更多选项请参考:
        // https://github.com/kangax/html-minifier#options-quick-reference
    },
    chunksSortMode: 'dependency',
    inject: true
  }))
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
    path: path.resolve(config.build.assetsRoot, deployEnv),
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env,
      'ENV': JSON.stringify(process.env.ENV)
    }),
    new UglifyJsParallelPlugin({
      workers: os.cpus().length,
      mangle: {
        except: ['$super', '$', 'exports', 'require']  // 防止这些变量被改变
      },
      compressor: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句，可以兼容ie浏览器
        drop_console: deployEnv === 'prd',
        // 删除所有的 `debugger`语句
        drop_debugger: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: deployEnv === 'prd',
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true
      },
      sourceMap: false
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
                removeAll: deployEnv === 'prd'
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
    // 分离 .css 文件输出路径
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
        from: path.resolve(__dirname, '../src/assets/lib'),
        to: config.build.assetsSubDirectory + '/js',
        ignore: ['.*']
      }
    ]),
    new webpack.DllReferencePlugin({
      context: __dirname,
      // name: '[name]',
      manifest: require(dll.manifest)
    })
  ].concat(plugins)
})

webpackConfig.plugins.push(new AddAssetHtmlPlugin({
  filepath: require.resolve(dll.fileName),
  hash: true
}))

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