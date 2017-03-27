// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var url = require('./url')
var router = require('./router')
const isproxy = false // 是否开启代理
const noBuild = ['demo']  // 要排除的打包文件夹
// 接口路由的环境配置
const hostname = {
  stg: {
    default: 'https://rmb-stg.pingan.com.cn',
    stg2: 'https://rmb-stg2.pingan.com.cn',
    stg3: 'https://rmb-stg2.pingan.com.cn:6443'
  },
  prd: {
    default: 'https://bank.pingan.com.cn'
  }
}

// 跳转路由的环境配置,development是本地开发环境
const routerhost = {
  // 本地开发环境
  development: {
    login: 'https://bank-static-stg.pingan.com.cn', // app内部跳转登录不是用这个
    pay: 'https://bank-static-stg.pingan.com.cn/omm/stg2/omm/mobile/'
  },
  // CMS中的dev环境
  dev: {
    login: 'https://bank-static-stg.pingan.com.cn', // app内部跳转登录不是用这个
    default: 'http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/dev/deposit/mobile/',
    pay: 'https://bank-static-stg.pingan.com.cn/omm/stg2/omm/mobile/'
  },
  // CMS中的stg2环境
  stg: {
    default: 'http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/stg2/deposit/mobile/',
    pay: 'https://bank-static-stg.pingan.com.cn/omm/stg2/omm/mobile/'
  },
  prd: {
    default: 'https://bank-static.pingan.com.cn/'
  }
}

module.exports = {
  url: url,
  router: router,
  hostname: hostname,
  routerhost: routerhost,
  isproxy: isproxy,
  noBuild: noBuild,
  templatesDir: path.resolve(__dirname, '../src/container'),  // htmlplugin 的html模板地址
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
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
    // buildDir: path.resolve(__dirname, '../bulid')
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/api': 'http://localhost:3000'
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
