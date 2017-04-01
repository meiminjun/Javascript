var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var fs = require('fs')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
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
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'flexible': resolve('src/assets/lib/flexible.js')
      // 'aladdin': resolve(process.env.ENV === 'prd' ? '../node_modules/aladdin/aladdin.min.js' : './node_modules/aladdin/aladdin.web.min.js'),
      // 'bow': resolve(process.env.ENV === 'prd' ? '../node_modules/bow/dist/bow.min.js' : './node_modules/bow/dist/bow.web.min.js')
    }
  },
  module: {
    // 这些库都是不依赖其它库的库 不需要解析他们可以加快编译速度
    noParse: /src\/assets\/lib\/(zepto|runtime-check|add-assets|aladdin.loading|aladdin.dialog|aladdin.toast|aladdin|bow|dante|flexible|\.js)/,
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: "pre",
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // loader: 'happypack/loader?id=vue',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        // loader: 'babel-loader',
        loader: 'happypack/loader?id=js',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
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
