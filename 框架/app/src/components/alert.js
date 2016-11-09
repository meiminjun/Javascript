define(function() {
    'use strict';
    function Window() {}

    Window.prototype = {
      alert:function() {},
      comfirm:function() {}
    };
    return {
        Window:Window
    }
});