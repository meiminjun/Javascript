var path = require('path')

var webpack = require('webpack')

var vendors = [
  'vue',
  'vue-router',
  'vuex',
  'ZDPAEBank',
  'flexible',
  'swiper',
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
    path: path.join(__dirname, 'build/dist'),
    filename: '[name].dll.js', // [name]的部分由entry的名字替换
    library: '[name]_[hash]'
  },
  devtool: '#source-map',
  resolve: {
    extensions: ['*'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'ZDPAEBank': path.resolve(__dirname, './src/assets/lib/zhida-paebank.js'),
      'flexible': path.resolve(__dirname, './src/assets/lib/flexible.js'),
      'swiper': path.resolve(__dirname, './src/assets/lib/swiper.min.js'),
      'fastclick': path.resolve(__dirname, './src/assets/lib/fastclick.js'),
      'aladdin': path.resolve(__dirname, './src/assets/lib/aladdin.min.js'),
      'bow': path.resolve(__dirname, './src/assets/lib/bow.min.js')
    }
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'build/dist', '[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
}
