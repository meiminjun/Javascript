# paynow

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


下载依赖项：
npm install mint-ui vuex vue-router --save-dev

server(koa2) 下载依赖项：
    "koa": "2.0.0-alpha.7",
    "koa-bodyparser": "3.2.0",
    "koa-router": "7.0.0",
    "mysql": "^2.12.0",
    "nunjucks": "^3.0.0",
    "sequelize": "^3.28.0",
    "mz": "^2.6.0"
    
    "babel-core": "^6.20.0",
    "babel-loader": "^6.2.10",
    "babel-polyfill": "^6.22.0",
    "babel-preset-es2015-node6": "^0.4.0",
    "babel-preset-stage-3": "^6.22.0"

应用elm组件ui
参考：https://github.com/mint-ui/mint-ui-starter/blob/master/webpack.config.js

style-loader css-loader

{
  test: /\.css$/,
  loader: 'style-loader!css-loader'
}


易错点：
1、在index.html 中的head配置
```
 		<meta http-equiv="Access-Control-Allow-Origin" content="*">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="viewport" id="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
```




