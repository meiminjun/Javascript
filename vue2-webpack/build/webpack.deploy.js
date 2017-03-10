const fs = require('fs')
const path = require('path')
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
var cssnano = require('cssnano');

var env = process.env.NODE_ENV || process.argv[2] || 'prd';
env = env.replace(/--/g, '');
var client = process.argv[3] || 'web';
client = client.replace(/--/g, '');
console.log(process.env.NODE_ENV + ' | ' + process.argv[2] + ' | ' + env + ' ' + process.argv[3])

const publicPath = {
  'dev': '',
  'stg': '', // bank-static-stg.pingan.com.cn:8040/omm/mobile
  'prd': '' // bank-static.pingan.com.cn/omm/mobile
};

var common = [
  'babel-polyfill',
  'vue',
  'vuex',
  'flexible',
  //'aladdin',
  'bow',
  'ZDPAEBank',
  'dante'
];
const baseDir = '../src/container'
var entries = {
  'common': common
};
var chunks = [];
var entry = fs.readdirSync(path.join(__dirname, baseDir)).reduce((entries, dir) => {
  const fullDir = path.join(__dirname, baseDir + '/' + dir)
  // console.log(dir) // finance
  // console.log(fullDir)
  const entry = path.join(fullDir, 'index.js');
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    //native只打包首页
    // if (client == 'native') {
    //   if (dir == 'deposit_detail') {
    //     entries.deposit_detail = entry;
    //     chunks.push(dir);
    //   }
    // } else {
    //   entries[dir] = entry;
    //   chunks.push(dir);
    // }
    entries[dir] = entry;
    chunks.push(dir);

  }
  return entries
}, {});
// console.log(entry);

var plugins = [
  new CopyWebpackPlugin([
    { from: 'src/assets/lib/runtime-check.js', to: 'assets/js' },
    { from: 'src/assets/lib/aladdin.min.js', to: 'assets/js' },
    { from: 'src/assets/lib/aladdin.web.min.js', to: 'assets/js' },
    { from: 'src/assets/lib/bow.min.js', to: 'assets/js' },
    { from: 'src/assets/lib/dante.js', to: 'assets/js' },
  ]),
  new ExtractTextPlugin('assets/css/[name].css?[hash]', {
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
    'process.env.NODE_ENV': JSON.stringify('production'),
    'ENV': JSON.stringify(process.env.NODE_ENV || 'dev')
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }),
  new webpack.ProvidePlugin({
    aladdin: "aladdin",
    dante: "dante"
  })
];

chunks.forEach(function (name) {
  if (name !== 'app') {
    // console.log(name,name=='finance',typeof(name))
    plugins.push(new HtmlWebpackPlugin({
      filename: name + '.html',
      template: path.join(__dirname, baseDir + '/' + name) + '/index.html',
      chunks: [
        'common',
        name
      ],
      env: env
      // favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico'),
    }))
  }
})

const imgloader = client == 'native' ? 'file?context=client&name=assets/images/[name].[ext]&publicPath=../../&outputPath=assets/images/' : 'url?context=client&name=assets/images/[name].[ext]?[hash]&limit=8192&publicPath=../../&outputPath=assets/images/'

module.exports = {

  devtool: client == 'native' ? '' : 'cheap-source-map',
  // devtool: 'cheap-source-map',
  entry: Object.assign({}, entries, entry),

  output: {
    // path: path.join(__dirname, '../dist/' + env + '/omm/mobile'),
    path: path.join(__dirname, '../dist/' + env + '/deposit/mobile'),
    filename: 'assets/js/[name].js?[hash]',
    chunkFilename: 'assets/js/[id].chunk.js?[hash]',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.vue$/,
        loader: 'vue'
      }
      , {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      }
      , {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
      }, {
        test: /\.woff(\?.*)?$/,
        loader: 'url?prefix=fonts/&name=assets/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
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
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: imgloader
        // loader: 'url?context=client&name=assets/images/[name].[ext]?[hash]&limit=8192'
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
      'ZDPAEBank': path.resolve(__dirname, '../src/assets/lib/zhida-paebank.js'),
      'flexible': path.resolve(__dirname, '../src/assets/lib/flexible.js'),
      'swiper': path.resolve(__dirname, '../src/assets/lib/swiper.min.js'),
      'fastclick': path.resolve(__dirname, '../src/assets/lib/fastclick.js'),
      'scroller': path.resolve(__dirname, '../src/assets/lib/vue-scroller/index.js'),
      // 'aladdin': path.resolve(__dirname, client == 'native' ? '../src/assets/lib/aladdin.min.js' : '../src/assets/lib/aladdin.web.min.js'),
      'bow': path.resolve(__dirname, '../src/assets/lib/bow.min.js'),
      'dante': path.resolve(__dirname, '../src/assets/lib/dante.js')
    }
  },

  plugins: plugins.concat([
    new CleanPlugin([env], {
      root: path.join(__dirname, '../dist/')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]),

  externals: {
    aladdin: "aladdin"
  }

}
