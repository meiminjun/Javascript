var path = require('path')
var fs = require('fs')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var os = require('os')
var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
function _createHappyPlugin (id, loaders) {
  return new HappyPack({
    id: id,
    tempDir: process.env.NODE_ENV === 'production' ? '.happypack' : '.devhappypack',
    loaders: loaders,
    threadPool: happyThreadPool,
    // 开启缓存
    cache: true,
    // make happy more verbose with HAPPY_VERBOSE=1
    verbose: false
  })
}

var entry = fs.readdirSync(path.join(__dirname, config.baseDir)).reduce((entryObj, dir) => {
  const fullDir = path.join(__dirname, config.baseDir + '/' + dir)
  const entry = path.join(fullDir, 'index.js')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entryObj[dir] = entry
  }
  return entryObj
}, {})

module.exports = {
  entry: entry,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    // 只解析的目录
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'utils': resolve('src/utils'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'flexible': resolve('src/assets/lib/flexible.js')
    }
  },
  plugins: [
    // _createHappyPlugin('eslint-vue', ['eslint-loader']), // 暂时不支持vue
    // _createHappyPlugin('eslint-js', ['eslint-loader']),  // 暂时不支持vue
    _createHappyPlugin('js', ['babel-loader']),
    _createHappyPlugin('vue', ['vue-loader']),
    _createHappyPlugin('url', ['url-loader']),
    new HappyPack({
      tempDir: process.env.NODE_ENV === 'production' ? '.happypack' : '.devhappypack',
      threads: os.cpus().length,
      loaders: [{
        path: 'vue-loader',
        query: {
          vueLoaderConfig
        }
      }]
    })
  ],
  module: {
    // 这些库都是不依赖其它库的库 不需要解析他们可以加快编译速度
    noParse: /src\/assets\/lib\/(zepto|runtime-check|add-assets|aladdin.loading|aladdin.dialog|aladdin.toast|aladdin|bow|dante|flexible|\.js)/,
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'happypack/loader?id=vue',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'happypack/loader?id=js',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'happypack/loader?id=url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'happypack/loader?id=url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // 外部加载lib
  externals: {
    aladdin: 'aladdin',
    bow: 'bow'
  }
}
