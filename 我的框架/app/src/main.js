/*
 * APP全局上下文环境参数配置
 */
require.config({
  baseUrl: "",
  shim: {
    'zepto': {
      exports: '$'
    }
  },
  paths: {
    zepto: 'libs/zepto/v1.1.6/zepto.min',
    components: 'src/components'
  }
});

require(['zepto', 'components/alert', 'components/Tab'], function($, w, t) {
  var body = $("body");
  console.log(body);
  // var AlertView = new w.Window().alert({
  //      title:'提示',
  //      content:'这是一个提示内容',
  //      text4AlertBtn:'取消',
  //      handler:function() {
  //          alert(1111);
  //      }
  //  });

  var option = {
    ele: 'main',
    dock: 'bottom',
    items: [{
      text: '222sdf',
      handler: function(ele, index) {

        getData();
      },
      targetDomId: 'tabOne',
    }, {
      text: '测试',
      handler: function(ele, index) {
        // alert(11);
      },
      targetDomId: 'tabTwo',
      contentHeight: 55,
    }, {
      text: 'dfadf',
      handler: function(ele, index) {
        // alert(22);
      },
      targetDomId: 'tabThree',
      contentHeight: 55,
    }, {
      text: '首页',
      handler: function(ele, index) {
        // alert(33);
      },
      targetDomId: 'tabFour',
      contentHeight: 55,
    }]
  }

  // var tab = new t.Tab().init(option)

  function getData() {
    $.getJSON('./mockData.json', function(data) {
      // Supposing this JSON payload was received:
      //   {"project": {"id": 42, "html": "<div>..." }}
      // append the HTML to context object.
    })
  }
});