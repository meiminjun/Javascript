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

## [elm组件ui](http://mint-ui.github.io/docs/#!/zh-cn2/header)
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

## koa2部分参考

https://molunerfinn.com/Vue+Koa/

http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000


## sequelize api文档:
  
https://itbilu.com/nodejs/npm/VkYIaRPz-.html#api-init

## [sequelize-auto从数据库表自动生成Sequelize模型(Model)](https://itbilu.com/nodejs/npm/41mRdls_Z.html)

安装：`sudo npm install -g sequelize-auto`

如果使用MySQL/MariaDB，需要安装mysql：

> sudo npm install -g mysql

运行：

> sequelize-auto -o "./server/schema" -d mytest -h 127.0.0.1 -u root -p 3306 -x 123456 -e mysql

## JSON-WEB-TOKEN

参考：http://www.jianshu.com/p/576dbf44b2ae

> npm i koa-jwt -S

## 引入Axios

之前在学Vue的时候一直用的是vue-resource，不过后来Vue2出来之后，Vue官方不再默认推荐它为官方的ajax网络请求库了。替代地推荐了一些其他的库，比如就有我们今天要用的axios。我之前也没有用过它，不过看完它的star和简要介绍Promise based HTTP client for the browser and node.js，能够同时支持node和浏览器端的ajax请求工具（还是基于Promised的！），我想就有必要用一用啦。

> npm i axios -S

然后我们在src/main.js里面引入axios：


## 跨域

还没有大功告成，因为我们的界面跑在8080端口，但是Koa提供的API跑在3000端口，所以如果直接通过/auth/user这个url去post是请求不到的。就算写成localhost:8889/auth/user也会因为跨域问题导致请求失败。

这个时候有两种最方便的解决办法：

* 如果是跨域，服务端只要在请求头上加上CORS，客户端即可跨域发送请求。
* 变成同域，即可解决跨域请求问题。

第一种也很方便，采用kcors即可解决。
不过为了之后部署方便，我们采用第二种，变成同域请求。

webpack 自带反向代理，配置如下：

```
devServer: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
```

## 密码md5加密

> npm i md5 -S

