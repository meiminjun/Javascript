// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var fs = require('fs')

// 迁移配置开始
var env = process.env.NODE_ENV || process.argv[2] || 'prd'
env = env.replace(/--/g, '')
var client = process.argv[3] || 'web'
client = client.replace(/--/g, '')
console.log(process.env.NODE_ENV + ' | ' + process.argv[2] + ' | ' + env + ' ' + process.argv[3])

var vendor = [
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
const baseDir = '../src/container'
var entries = {
  'vendor': vendor
}
var entry = fs.readdirSync(path.join(__dirname, baseDir)).reduce((entryObj, dir) => {
  const fullDir = path.join(__dirname, baseDir + '/' + dir)
  // console.log(dir) // finance
  // console.log(fullDir)
  const entry = path.join(fullDir, 'main.js')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    // native只打包首页
    if (client === 'native') {
      if (dir === 'finance') {
        entryObj.finance = entry
        // chunks.push(dir)
      }
    } else {
      entryObj[dir] = entry
    }
  }
  return entryObj
}, {})

// 结束

module.exports = {
  templatesDir: path.resolve(__dirname, '../src/container'),
  entry: entry,
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    buildDir: path.resolve(__dirname, '../bulid')
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': 'http://localhost:3000'
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
