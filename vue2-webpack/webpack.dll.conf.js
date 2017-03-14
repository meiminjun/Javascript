var path = require('path')

var webpack = require('webpack')

var client = 'web'

var vendors = [
  'vue',
  'vue-router',
  'vuex',
  'flexible',
  'fastclick',
  'aladdin',
  'bow',
  'dante'
]

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, 'build/dist'),
    filename: '[name].dll.js', // [name]的部分由entry的名字替换
    library: '[name]_[hash]'
  },
  // devtool: '#source-map',
  resolve: {
    extensions: ['*'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'flexible': path.resolve(__dirname, './src/assets/lib/flexible.js'),
      'fastclick': path.resolve(__dirname, './src/assets/lib/fastclick.js'),
      'aladdin': path.resolve(__dirname, client === 'native' ? './src/assets/lib/aladdin.min.js' : './src/assets/lib/aladdin.web.min.js'),
      // 'bow': path.resolve(__dirname, client === 'native' ? './src/assets/lib/bow.min.js' : './src/assets/lib/bow.web.min.js'),
      'bow': path.resolve(__dirname, './src/assets/lib/bow.min.js'),
      'dante': path.resolve(__dirname, './src/assets/lib/dante.js')
    }
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'build/dist', '[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
}
