define(['zepto'],function($) {
    'use strict';
    function Window(option) {
        this.cfg = {
            width:500,
            height:300,
            title:"系统消息",
            content:'',
            handler:null,
            hasCloseBtn:false,
            skinClassName:null,
            text4AlertBtn:'确定',
            handlerAlertBtn:null,
            handlerCloseBtn:null
        };
    }

    Window.prototype = {
      alert:function(cfg) {
          var CFG = $.extend(this.cfg,cfg),
              boundingBox = $('<div class="window_boundindBox"><div class="window_header">'+CFG.title+'</div><div class="window_body">'+CFG.content+'</div><div class="window_footer"><button class="window_button_confirm">'+CFG.text4AlertBtn+'</button></div></div>'),
          btn = boundingBox.find(".window_button_confirm");
          boundingBox.appendTo('body');

          btn.click(function() {
            CFG.handler && CFG.handler();
            boundingBox.remove();
          });
          boundingBox.css({
            width:CFG.width + 'px',
            height:CFG.height + 'px',
            // left:(CFG.x||(window.innerWidth - CFG.width)/2)+'px',
            // top:(CFG.y||(window.innerHeight - CFG.height)/2)+'px'
          })
      },
      comfirm:function() {}
    };
    return {
        Window:Window
    }
});