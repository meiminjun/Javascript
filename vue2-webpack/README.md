# vue2-webpack

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## koa2

Koa需要节点v7.6.0或更高版本的ES2015和异步功能支持。


## eslint 错误解释

Missing space before opening brace
在大括号之前缺少空格

Expected space(s) after "if"
“if”之后的缺少空格

Missing space before =>
在=> 之前缺少空格


## webpack

webpack2: https://doc.webpack-china.org/guides/get-started/
webpack资源: https://github.com/webpack-china/awesome-webpack-cn

webpack : https://segmentfault.com/a/1190000006871991

## [配置说明](http://stephenzhao.github.io/2016/06/13/webpack-doc-configuration/)

### 插件


#### [ExtractTextPlugin](https://github.com/zhengweikeng/blog/issues/9)
new ExtractTextPlugin([id: string], filename: string, [options])

作用：将样式抽取出来为独立的文件
将require引入的样式嵌入js文件中，有好处也有坏处。好处是减少了请求数，坏处也很明显，就是当你的样式文件很大时，造成编译的js文件也很大。

1. 该插件实例的唯一标志，一般是不会传的，其自己会生成。

2. 文件名。可以是[name]、[id]、[contenthash]
[name]：将会和entry中的chunk的名字一致
[id]：将会和entry中的chunk的id一致
[contenthash]：根据内容生成hash值
options
allchunk： 是否将所有额外的chunk都压缩成一个文件
disable：禁止使用插件


####
