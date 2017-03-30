var path = require('path')
var webpack = require('webpack')

const isDebug = true  // 开发环境为true,生产环境为false

console.log(process.env.ENV)

const outputpath = process.env.ENV === 'web' ? path.join(__dirname, '../common/web') : path.join(__dirname, '../common/native')
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
  // new webpack.ProvidePlugin({
  //   aladdin: 'aladdin',
  //   bow: 'bow'
  // })
]

if (!isDebug) {
  plugin.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$', 'exports', 'require']
      },
      exclude: /\.min\.js$/,
      // mangle:true,
      compress: {warnings: false},
      output: {comments: false}
    })
  )
}

var lib = [
  'vue',
  'vue-router',
  'vuex',
  'flexible',
  'fastclick',
  'aladdin',
  'bow'
]

function resolve (dir) {
  return path.join(__dirname, '..', dir)
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
  devtool: '#source-map',
  resolve: {
    extensions: ['*', '.js'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'flexible': resolve('./src/assets/lib/flexible.js'),
      'aladdin': resolve(process.env.ENV === 'native' ? './node_modules/aladdin/aladdin.min.js' : './node_modules/aladdin/aladdin.web.min.js'),
      'bow': resolve(process.env.ENV === 'native' ? './node_modules/bow/dist/bow.min.js' : './node_modules/bow/dist/bow.web.min.js')
    }
  },
  plugins: plugin
}
