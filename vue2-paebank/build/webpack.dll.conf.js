var config = require('../config')
var path = require('path')
var webpack = require('webpack')
var lib = [
  'vue',
  'vue-router',
  'vuex',
  'fastclick',
  'flexible'
]
const isDebug = process.env.DEBUG || false // 开发环境为true,生产环境为false

console.log(process.env.DEBUG)

const outputpath = isDebug ? path.join(__dirname, '../common/debug') : path.join(__dirname, '../common/js')
const plugin = [
  new webpack.DllPlugin({
    /**
     * path
     * 定义 manifest 文件生成的位置
     * [name]的部分由entry的名字替换
     */
    path: path.join(outputpath, 'manifest.json'),
    /**
     * name
     * dll bundle 输出到那个全局变量上
     * 和 output.library 一样即可。
     */
    name: '[name]',
    context: __dirname
  })
]

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

if (!isDebug) {
  console.log('-----prd----')
  plugin.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require']  // 防止这些变量被改变
      },
      exclude: /\.min\.js$/,  // 排除一些文件
      compress: {warnings: false},
      output: {comments: false},
      sourceMap: true // 这里要和webpack.prod.conf.js 中的保持一直
    })
  )
}

module.exports = {
  entry: {
    lib: lib
  },
  output: {
    path: outputpath,
    filename: '[name].js', // [name]的部分由entry的名字替换
    library: '[name]'
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  // devtool: '#source-map',
  resolve: {
    extensions: ['*', '.js'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'flexible': resolve('./static/lib/flexible.js')
      // 'aladdin': resolve(process.env.ENV === 'native' ? './node_modules/aladdin/aladdin.min.js' : './node_modules/aladdin/aladdin.web.min.js'),
      // 'bow': resolve(process.env.ENV === 'native' ? './node_modules/bow/dist/bow.min.js' : './node_modules/bow/dist/bow.web.min.js')
    }
  },
  plugins: plugin
}
