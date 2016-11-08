/*
 * APP全局上下文环境参数配置
*/
require.config({
    baseUrl :"",
    shim    : {
        'zepto' : {
            exports : '$'
        }
    },
    paths : {
        zepto : 'libs/zepto/v1.1.6/zepto.min',
        components:'src/components'
    }
});

require(['zepto','components/alert'],function($,alert) {
   var body = $("body");
   console.log(body);
});