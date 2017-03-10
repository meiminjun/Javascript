const os = require('os')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var cssnano = require('cssnano')

const happyThreadPool = HappyPack.ThreadPool({ size: 5 })

var env = process.env.NODE_ENV || process.argv[2] || 'dev'
env = env.replace(/--/g, '')
var client = process.argv[3] || 'web'
client = client.replace(/--/g, '')
//console.log(process.env.NODE_ENV + ' | ' + process.argv[2] + ' | '+env + ' '+process.argv[3])

var common = [
  'webpack-hot-middleware/client?path=/omm/mobile/__webpack_hmr',
  'babel-polyfill',
  'vue',
  'vuex',
  'flexible',
  'aladdin',
  'bow',
  'ZDPAEBank',
  'dante'
]
const baseDir = './src/container'
var entries = {
  'common': common
}
var chunks = []
var entry = fs.readdirSync(path.join(__dirname, baseDir)).reduce((entries, dir) => {
  const fullDir = path.join(__dirname, baseDir + '/' + dir)
  //console.log(dir) // finance
  // console.log(fullDir)
  const entry = path.join(fullDir, 'index.js')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entries[dir] = ['webpack-hot-middleware/client?path=/omm/mobile/__webpack_hmr', entry]
    chunks.push(dir)
  }
  return entries
}, {})
// console.log(entry)
var happyLoader = [
  new HappyPack({
    id: 'js',
    loaders: ['babel'],
    threadPool: happyThreadPool,
    cache: true,
    verbose: true
  }),
  new HappyPack({
    id: 'vue',
    cache: true,
    verbose: true,
    loaders: ['vue'],
    threadPool: happyThreadPool
  }),
  new HappyPack({
    id: 'url',
    cache: true,
    verbose: true,
    loaders: ['url'],
    threadPool: happyThreadPool
  }),
  new HappyPack({ id: 'css', threadPool: happyThreadPool, loaders: ['css'] })
]

var plugins = [
  new ExtractTextPlugin('assets/css/[name].css?[contenthash]', {
    disable: false,
    allChunks: false
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: Infinity
    // children: true,
    // chunks: chunks,
    // minChunks: chunks.length // 提取所有entry共同依赖的模块
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
  }),
  new webpack.ProvidePlugin({
    'dante': 'dante'
  })
]

// plugins.push(new HtmlWebpackPlugin({
//   filename: 'demo.html',
//   template: './src/index.html',
//   chunks: [
//     'common', 'app'
//   ],
//   env: 'dev'
//   // favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico'),
// }))
chunks.forEach(function (name) {
  plugins.push(new HtmlWebpackPlugin({
    filename: name + '.html',
    template: path.join(__dirname, baseDir + '/' + name) + '/index.html',
    chunks: [
      'common', name
    ],
    env: env
    // favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico'),
  }))
})

module.exports = {

  // devtool: 'inline-source-map',
  devtool: 'cheap-source-map',
  // entry:{
  //   app:['webpack-hot-middleware/client?path=/omm/mobile/__webpack_hmr','./src/app.js']
  // },
  entry: Object.assign({}, entries, entry),
  output: {
    path: path.join(__dirname, '../dist/' + env + '/deposit/mobile'),
    // path: path.join(__dirname, ''),
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[name].chunk.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'happypack/loader?id=js'
      }, {
        test: /\.vue$/,
        loader: 'happypack/loader?id=vue'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", 'happypack/loader?id=css')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", 'css!postcss!sass')
      }, {
        test: /\.woff(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=assets/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff',
      }, {
        test: /\.woff2(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=assets/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'
      }, {
        test: /\.otf(\?.*)?$/,
        loader: 'file?prefix=fonts/&name=assets/fonts/[name].[ext]&limit=10000&mimetype=font/opentype&publicPath=../../&outputPath=assets/fonts/'
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=assets/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file?prefix=fonts/&name=assets/fonts/[name].[ext]'
      }
      // , {
      //     test: /\.svg(\?.*)?$/,
      //     loader: 'url?prefix=fonts/&name=assets/fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
      // }
      , {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: 'url?context=client&name=assets/images/[name].[ext]?[hash]&limit=8192&publicPath=../../&outputPath=assets/images/'
      },
      {
        test: /vue-scroller.src.*?js$/,
        loader: 'happypack/loader?id=js'
      }
    ]
  },
  postcss: [
    cssnano({
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['> 0%', 'Android 2.3', 'iOS 3.2', 'Safari 3.1', 'IE 10']
      },
      discardComments: {
        removeAll: true
      },
      discardUnused: false,
      mergeIdents: false,
      reduceIdents: false,
      safe: true,
      sourcemap: true
    })
  ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src")]
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.scss'],
    alias: {
      'ZDPAEBank': path.resolve(__dirname, './src/assets/lib/zhida-paebank.js'),
      'flexible': path.resolve(__dirname, './src/assets/lib/flexible.js'),
      'swiper': path.resolve(__dirname, './src/assets/lib/swiper.min.js'),
      // 'scroller': path.resolve(__dirname, './src/assets/lib/vue-scroller/index.js'),
      'fastclick': path.resolve(__dirname, './src/assets/lib/fastclick.js'),
      'aladdin': path.resolve(__dirname, client == 'native' ? './src/assets/lib/aladdin.min.js' : './src/assets/lib/aladdin.web.min.js'),
      'bow': path.resolve(__dirname, './src/assets/lib/bow.min.js'),
      'share': path.resolve(__dirname, './src/assets/lib/share-1.0.js'),
      'dante': path.resolve(__dirname, './src/assets/lib/dante.js')
    }
  },
  plugins: plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ], happyLoader)

}
