# demo

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

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 参考

https://molunerfinn.com/Vue+Koa/

## server 依赖部分

```
"koa": "2.0.0-alpha.7",
"koa-bodyparser": "3.2.0",
"koa-router": "7.0.0",
"mysql": "^2.12.0",
"nunjucks": "^3.0.0",
"sequelize": "^3.28.0"

```

## [sequelize-auto从数据库表自动生成Sequelize模型(Model)](https://itbilu.com/nodejs/npm/41mRdls_Z.html)

安装：`sudo npm install -g sequelize-auto`

如果使用MySQL/MariaDB，需要安装mysql：

> sudo npm install -g mysql

运行：

> sequelize-auto -o "./server/models" -d mytest -h 127.0.0.1 -u root -p 3306 -x 123456 -e mysql



