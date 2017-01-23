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




