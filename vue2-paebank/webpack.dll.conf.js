var path = require('path')
var webpack = require('webpack')

// 如果是要native的请配置为'native'或者'web'
var client = 'native'
var outputpath = client === 'web' ? 'build/web' : 'build/native'

var vendors = [
  'vue',
  'vue-router',
  'vuex',
  'flexible',
  'fastclick',
  'aladdin',
  'bow'
]

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, outputpath),
    filename: '[name].dll.js', // [name]的部分由entry的名字替换
    library: '[name]_[hash]'
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
      'aladdin': resolve(client === 'native' ? './node_modules/aladdin/aladdin.min.js' : './node_modules/aladdin/aladdin.web.min.js'),
      'bow': resolve(client === 'native' ? './node_modules/bow/dist/bow.min.js' : './node_modules/bow/dist/bow.web.min.js')
    }
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, outputpath, '[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
}
