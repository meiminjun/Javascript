var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var fs = require('fs')

var vendors = [
  'vue',
  'vue-router',
  'vuex',
  'flexible',
  'bow',
  'aladdin'
]
const baseDir = '../src/container'
var entries = {
  'vendor': vendors
}

var entry = fs.readdirSync(path.join(__dirname, baseDir)).reduce((entryObj, dir) => {
  const fullDir = path.join(__dirname, baseDir + '/' + dir)
  const entry = path.join(fullDir, 'index.js')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entryObj[dir] = entry
  }
  return entryObj
}, {})

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

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
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      'flexible': resolve('src/assets/lib/flexible.js'),
      'aladdin': resolve(process.env.NODE_ENV === 'production' ? '../node_modules/aladdin/aladdin.min.js' : './node_modules/aladdin/aladdin.web.min.js'),
      'bow': resolve(process.env.NODE_ENV === 'production' ? '../node_modules/bow/dist/bow.min.js' : './node_modules/bow/dist/bow.web.min.js')
    }
  },
  module: {
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
  }
}
