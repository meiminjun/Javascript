var url = require('./url');

// 目前环境
const ENV = 'dev';

const hostname = {
  dev: {
    paebank: 'https://bank.pingan.com.cn',
    rmb: 'http://localhost:49581/api/',
    news: '',
    static: ''
  },
  stg: {
    paebank: 'https://ibp-uat5.pingan.com.cn',
    rmb: 'https://rmb-stg.pingan.com.cn',
    news: 'http://stg5.pingan.com.cn:60880',
    static: 'https://bank-static-stg.pingan.com.cn'
  },
  prd: {
    paebank: 'https://bank.pingan.com.cn',
    rmb: 'https://rmb.pingan.com.cn',
    news: 'https://b.pingan.com',
    static: 'https://bank-static.pingan.com.cn',
  }
}

function nativeOrWeb() {
  let ua = window.navigator.userAgent;
  return ua.indexOf("AladdinHybrid") > 0 ? "" : hostname[ENV].static;
}

module.exports = {
  url:url,
  hostname:hostname,
  env:ENV
}
