/**
 * Created by zhanghao on 17/3/14.
 */
(function (win) {
  // 引入样式
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  // link.href = 'share-1.0.css?v=1.0';
  // link.href = 'https://bank-static.pingan.com.cn/brop-cmp/act/assets/share/share-1.0.css?v=20170223';
  link.href = 'https://bank-static-stg.pingan.com.cn/brop-cmp/act/assets/share/share-1.0.css?v=20170223';
  //
  // 微信js-SDK
  !function (a, b) {
    "function" == typeof define && (define.amd || define.cmd) ? define(function () {
      return b(a)
    }) : b(a, !0)
  }(this, function (a, b) {
    function c(b, c, d) {
      a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c), function (a) {
        g(b, a, d)
      }) : j(b, d)
    }

    function d(b, c, d) {
      a.WeixinJSBridge ? WeixinJSBridge.on(b, function (a) {
        d && d.trigger && d.trigger(a), g(b, a, c)
      }) : d ? j(b, d) : j(b, c)
    }

    function e(a) {
      return a = a || {}, a.appId = E.appId, a.verifyAppId = E.appId, a.verifySignType = "sha1", a.verifyTimestamp = E.timestamp + "", a.verifyNonceStr = E.nonceStr, a.verifySignature = E.signature, a
    }

    function f(a) {
      return {
        timeStamp: a.timestamp + "",
        nonceStr: a.nonceStr,
        "package": a.package,
        paySign: a.paySign,
        signType: a.signType || "SHA1"
      }
    }

    function g(a, b, c) {
      var d, e, f;
      switch (delete b.err_code, delete b.err_desc, delete b.err_detail, d = b.errMsg, d || (d = b.err_msg, delete b.err_msg, d = h(a, d), b.errMsg = d), c = c || {}, c._complete && (c._complete(b), delete c._complete), d = b.errMsg || "", E.debug && !c.isInnerInvoke && alert(JSON.stringify(b)), e = d.indexOf(":"), f = d.substring(e + 1)) {
        case"ok":
          c.success && c.success(b);
          break;
        case"cancel":
          c.cancel && c.cancel(b);
          break;
        default:
          c.fail && c.fail(b)
      }
      c.complete && c.complete(b)
    }

    function h(a, b) {
      var e, f, c = a, d = p[c];
      return d && (c = d), e = "ok", b && (f = b.indexOf(":"), e = b.substring(f + 1), "confirm" == e && (e = "ok"), "failed" == e && (e = "fail"), -1 != e.indexOf("failed_") && (e = e.substring(7)), -1 != e.indexOf("fail_") && (e = e.substring(5)), e = e.replace(/_/g, " "), e = e.toLowerCase(), ("access denied" == e || "no permission to execute" == e) && (e = "permission denied"), "config" == c && "function not exist" == e && (e = "ok"), "" == e && (e = "fail")), b = c + ":" + e
    }

    function i(a) {
      var b, c, d, e;
      if (a) {
        for (b = 0, c = a.length; c > b; ++b)d = a[b], e = o[d], e && (a[b] = e);
        return a
      }
    }

    function j(a, b) {
      if (!(!E.debug || b && b.isInnerInvoke)) {
        var c = p[a];
        c && (a = c), b && b._complete && delete b._complete, console.log('"' + a + '",', b || "")
      }
    }

    function k() {
      0 != D.preVerifyState && (u || v || E.debug || "6.0.2" > z || D.systemType < 0 || A || (A = !0, D.appId = E.appId, D.initTime = C.initEndTime - C.initStartTime, D.preVerifyTime = C.preVerifyEndTime - C.preVerifyStartTime, H.getNetworkType({
        isInnerInvoke: !0,
        success: function (a) {
          var b, c;
          D.networkType = a.networkType, b = "http://open.weixin.qq.com/sdk/report?v=" + D.version + "&o=" + D.preVerifyState + "&s=" + D.systemType + "&c=" + D.clientVersion + "&a=" + D.appId + "&n=" + D.networkType + "&i=" + D.initTime + "&p=" + D.preVerifyTime + "&u=" + D.url, c = new Image, c.src = b
        }
      })))
    }

    function l() {
      return (new Date).getTime()
    }

    function m(b) {
      w && (a.WeixinJSBridge ? b() : q.addEventListener && q.addEventListener("WeixinJSBridgeReady", b, !1))
    }

    function n() {
      H.invoke || (H.invoke = function (b, c, d) {
        a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d)
      }, H.on = function (b, c) {
        a.WeixinJSBridge && WeixinJSBridge.on(b, c)
      })
    }

    var o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;
    if (!a.jWeixin)return o = {
      config: "preVerifyJSAPI",
      onMenuShareTimeline: "menu:share:timeline",
      onMenuShareAppMessage: "menu:share:appmessage",
      onMenuShareQQ: "menu:share:qq",
      onMenuShareWeibo: "menu:share:weiboApp",
      onMenuShareQZone: "menu:share:QZone",
      previewImage: "imagePreview",
      getLocation: "geoLocation",
      openProductSpecificView: "openProductViewWithPid",
      addCard: "batchAddCard",
      openCard: "batchViewCard",
      chooseWXPay: "getBrandWCPayRequest"
    }, p = function () {
      var b, a = {};
      for (b in o)a[o[b]] = b;
      return a
    }(), q = a.document, r = q.title, s = navigator.userAgent.toLowerCase(), t = navigator.platform.toLowerCase(), u = !(!t.match("mac") && !t.match("win")), v = -1 != s.indexOf("wxdebugger"), w = -1 != s.indexOf("micromessenger"), x = -1 != s.indexOf("android"), y = -1 != s.indexOf("iphone") || -1 != s.indexOf("ipad"), z = function () {
      var a = s.match(/micromessenger\/(\d+\.\d+\.\d+)/) || s.match(/micromessenger\/(\d+\.\d+)/);
      return a ? a[1] : ""
    }(), A = !1, B = !1, C = {
      initStartTime: l(),
      initEndTime: 0,
      preVerifyStartTime: 0,
      preVerifyEndTime: 0
    }, D = {
      version: 1,
      appId: "",
      initTime: 0,
      preVerifyTime: 0,
      networkType: "",
      preVerifyState: 1,
      systemType: y ? 1 : x ? 2 : -1,
      clientVersion: z,
      url: encodeURIComponent(location.href)
    }, E = {}, F = {_completes: []}, G = {state: 0, data: {}}, m(function () {
      C.initEndTime = l()
    }), H = {
      config: function (a) {
        E = a, j("config", a);
        var b = E.check === !1 ? !1 : !0;
        m(function () {
          var a, d, e;
          if (b)c(o.config, {verifyJsApiList: i(E.jsApiList)}, function () {
            F._complete = function (a) {
              C.preVerifyEndTime = l(), G.state = 1, G.data = a
            }, F.success = function () {
              D.preVerifyState = 0
            }, F.fail = function (a) {
              F._fail ? F._fail(a) : G.state = -1
            };
            var a = F._completes;
            return a.push(function () {
              k()
            }), F.complete = function () {
              for (var c = 0, d = a.length; d > c; ++c)a[c]();
              F._completes = []
            }, F
          }()), C.preVerifyStartTime = l(); else {
            for (G.state = 1, a = F._completes, d = 0, e = a.length; e > d; ++d)a[d]();
            F._completes = []
          }
        }), E.beta && n()
      }, ready: function (a) {
        0 != G.state ? a() : (F._completes.push(a), !w && E.debug && a())
      }, error: function (a) {
        "6.0.2" > z || B || (B = !0, -1 == G.state ? a(G.data) : F._fail = a)
      }, checkJsApi: function (a) {
        var b = function (a) {
          var c, d, b = a.checkResult;
          for (c in b)d = p[c], d && (b[d] = b[c], delete b[c]);
          return a
        };
        c("checkJsApi", {jsApiList: i(a.jsApiList)}, function () {
          return a._complete = function (a) {
            if (x) {
              var c = a.checkResult;
              c && (a.checkResult = JSON.parse(c))
            }
            a = b(a)
          }, a
        }())
      }, onMenuShareTimeline: function (a) {
        d(o.onMenuShareTimeline, {
          complete: function () {
            c("shareTimeline", {
              title: a.title || r,
              desc: a.title || r,
              img_url: a.imgUrl || "",
              link: a.link || location.href,
              type: a.type || "link",
              data_url: a.dataUrl || ""
            }, a)
          }
        }, a)
      }, onMenuShareAppMessage: function (a) {
        d(o.onMenuShareAppMessage, {
          complete: function () {
            c("sendAppMessage", {
              title: a.title || r,
              desc: a.desc || "",
              link: a.link || location.href,
              img_url: a.imgUrl || "",
              type: a.type || "link",
              data_url: a.dataUrl || ""
            }, a)
          }
        }, a)
      }, onMenuShareQQ: function (a) {
        d(o.onMenuShareQQ, {
          complete: function () {
            c("shareQQ", {
              title: a.title || r,
              desc: a.desc || "",
              img_url: a.imgUrl || "",
              link: a.link || location.href
            }, a)
          }
        }, a)
      }, onMenuShareWeibo: function (a) {
        d(o.onMenuShareWeibo, {
          complete: function () {
            c("shareWeiboApp", {
              title: a.title || r,
              desc: a.desc || "",
              img_url: a.imgUrl || "",
              link: a.link || location.href
            }, a)
          }
        }, a)
      }, onMenuShareQZone: function (a) {
        d(o.onMenuShareQZone, {
          complete: function () {
            c("shareQZone", {
              title: a.title || r,
              desc: a.desc || "",
              img_url: a.imgUrl || "",
              link: a.link || location.href
            }, a)
          }
        }, a)
      }, startRecord: function (a) {
        c("startRecord", {}, a)
      }, stopRecord: function (a) {
        c("stopRecord", {}, a)
      }, onVoiceRecordEnd: function (a) {
        d("onVoiceRecordEnd", a)
      }, playVoice: function (a) {
        c("playVoice", {localId: a.localId}, a)
      }, pauseVoice: function (a) {
        c("pauseVoice", {localId: a.localId}, a)
      }, stopVoice: function (a) {
        c("stopVoice", {localId: a.localId}, a)
      }, onVoicePlayEnd: function (a) {
        d("onVoicePlayEnd", a)
      }, uploadVoice: function (a) {
        c("uploadVoice", {localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
      }, downloadVoice: function (a) {
        c("downloadVoice", {serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
      }, translateVoice: function (a) {
        c("translateVoice", {localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
      }, chooseImage: function (a) {
        c("chooseImage", {
          scene: "1|2",
          count: a.count || 9,
          sizeType: a.sizeType || ["original", "compressed"],
          sourceType: a.sourceType || ["album", "camera"]
        }, function () {
          return a._complete = function (a) {
            if (x) {
              var b = a.localIds;
              b && (a.localIds = JSON.parse(b))
            }
          }, a
        }())
      }, previewImage: function (a) {
        c(o.previewImage, {current: a.current, urls: a.urls}, a)
      }, uploadImage: function (a) {
        c("uploadImage", {localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
      }, downloadImage: function (a) {
        c("downloadImage", {serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
      }, getNetworkType: function (a) {
        var b = function (a) {
          var c, d, e, b = a.errMsg;
          if (a.errMsg = "getNetworkType:ok", c = a.subtype, delete a.subtype, c)a.networkType = c; else switch (d = b.indexOf(":"), e = b.substring(d + 1)) {
            case"wifi":
            case"edge":
            case"wwan":
              a.networkType = e;
              break;
            default:
              a.errMsg = "getNetworkType:fail"
          }
          return a
        };
        c("getNetworkType", {}, function () {
          return a._complete = function (a) {
            a = b(a)
          }, a
        }())
      }, openLocation: function (a) {
        c("openLocation", {
          latitude: a.latitude,
          longitude: a.longitude,
          name: a.name || "",
          address: a.address || "",
          scale: a.scale || 28,
          infoUrl: a.infoUrl || ""
        }, a)
      }, getLocation: function (a) {
        a = a || {}, c(o.getLocation, {type: a.type || "wgs84"}, function () {
          return a._complete = function (a) {
            delete a.type
          }, a
        }())
      }, hideOptionMenu: function (a) {
        c("hideOptionMenu", {}, a)
      }, showOptionMenu: function (a) {
        c("showOptionMenu", {}, a)
      }, closeWindow: function (a) {
        a = a || {}, c("closeWindow", {}, a)
      }, hideMenuItems: function (a) {
        c("hideMenuItems", {menuList: a.menuList}, a)
      }, showMenuItems: function (a) {
        c("showMenuItems", {menuList: a.menuList}, a)
      }, hideAllNonBaseMenuItem: function (a) {
        c("hideAllNonBaseMenuItem", {}, a)
      }, showAllNonBaseMenuItem: function (a) {
        c("showAllNonBaseMenuItem", {}, a)
      }, scanQRCode: function (a) {
        a = a || {}, c("scanQRCode", {
          needResult: a.needResult || 0,
          scanType: a.scanType || ["qrCode", "barCode"]
        }, function () {
          return a._complete = function (a) {
            var b, c;
            y && (b = a.resultStr, b && (c = JSON.parse(b), a.resultStr = c && c.scan_code && c.scan_code.scan_result))
          }, a
        }())
      }, openProductSpecificView: function (a) {
        c(o.openProductSpecificView, {pid: a.productId, view_type: a.viewType || 0, ext_info: a.extInfo}, a)
      }, addCard: function (a) {
        var e, f, g, h, b = a.cardList, d = [];
        for (e = 0, f = b.length; f > e; ++e)g = b[e], h = {card_id: g.cardId, card_ext: g.cardExt}, d.push(h);
        c(o.addCard, {card_list: d}, function () {
          return a._complete = function (a) {
            var c, d, e, b = a.card_list;
            if (b) {
              for (b = JSON.parse(b), c = 0, d = b.length; d > c; ++c)e = b[c], e.cardId = e.card_id, e.cardExt = e.card_ext, e.isSuccess = e.is_succ ? !0 : !1, delete e.card_id, delete e.card_ext, delete e.is_succ;
              a.cardList = b, delete a.card_list
            }
          }, a
        }())
      }, chooseCard: function (a) {
        c("chooseCard", {
          app_id: E.appId,
          location_id: a.shopId || "",
          sign_type: a.signType || "SHA1",
          card_id: a.cardId || "",
          card_type: a.cardType || "",
          card_sign: a.cardSign,
          time_stamp: a.timestamp + "",
          nonce_str: a.nonceStr
        }, function () {
          return a._complete = function (a) {
            a.cardList = a.choose_card_info, delete a.choose_card_info
          }, a
        }())
      }, openCard: function (a) {
        var e, f, g, h, b = a.cardList, d = [];
        for (e = 0, f = b.length; f > e; ++e)g = b[e], h = {card_id: g.cardId, code: g.code}, d.push(h);
        c(o.openCard, {card_list: d}, a)
      }, chooseWXPay: function (a) {
        c(o.chooseWXPay, f(a), a)
      }
    }, b && (a.wx = a.jWeixin = H), H
  });
  // 任意门SDK
  (function(window,undefined){
    if (typeof App === 'object') {
      return false;
    }
    var App = window.App = {
        callbacks: {}
      },
      slice = Array.prototype.slice;
    /**
     * 常量定义
     */
    var ua = navigator.userAgent.toUpperCase();
    // 当前环境是否为Android平台
    App.IS_ANDROID = ua.indexOf('ANDROID') != -1;
    // 当前环境是否为IOS平台
    App.IS_IOS = ua.indexOf('IPHONE OS') != -1;
    // 当前环境是否为WP平台
    App.IS_WP = ua.indexOf('WINDOWS') != -1 && ua.indexOf('PHONE') != -1;

    App.callbacks.__leftAction__ = function() {
      var haveLeftAction = typeof App.callbacks.leftAction === 'function',
        args = slice.call(arguments);
      if(haveLeftAction) {
        setTimeout(function() {
          App.callbacks.leftAction.apply(App.callbacks, args);
        },0);
        if(App.IS_ANDROID) {
          App.call(["called"]);
        } else if(App.IS_IOS) {
          return true;
        }
      }
    };


    //=======================Native 相关================================

    var callindex = 0, toString = Object.prototype.toString;
    /**
     * 调用一个Native方法
     * @param {String} name 方法名称
     */
    App.call = function(name) {
      // 获取传递给Native方法的参数
      var args = slice.call(arguments, 1);
      var successCallback = '' , errorCallback = '' , item = null ,returnArg;
      var methodName = name[name.length-1];

      if(App.IS_ANDROID){
        if(window.HostApp){
          var _str = "", newArguments = [];
          for(var i=0;i<args.length;i++){
            if(typeof args[i] === 'function'){
              var callbackName = methodName+'Callback'+callindex ;
              window[callbackName] = args[i] ;
              newArguments.push(callbackName);
              callindex++ ;
            }else if(typeof args[i] === 'object'){
              newArguments.push( JSON.stringify( args[i] ) ) ;
            }else{
              newArguments.push(args[i]) ;
            }
          }
          try{
            HostApp[methodName].apply(window.HostApp,newArguments);
          }catch(e){
            var params = slice.call(arguments, 0);
            setTimeout(function(){
              App["call"].apply(window.App,params);
            },300);
          }
        }else{
          var params = slice.call(arguments, 0);
          setTimeout(function(){
            App["call"].apply(window.App,params);
          },1000);
        }

      }else if(App.IS_IOS){
        var newArguments = "" , tempArgument = [];
        for(var i=0;i<args.length;i++ ){
//                tempArgument = args[i];
          if(typeof args[i] === 'function'){
            var callbackName = methodName+'Callback'+callindex ;
            window[callbackName] = args[i] ;
            tempArgument.push(callbackName);
            callindex++ ;
          }else{
            tempArgument.push(args[i]);
          }

        }
        //newArguments = '[' + Array.prototype.join.apply(tempArgument) + ']';
        callindex++;
        var iframe = document.createElement("iframe");
        console.log("tempArgument"+tempArgument);
        var _src = 'callnative://'+methodName+'/'+encodeURIComponent(JSON.stringify(tempArgument)) + '/' + callindex;
        console.log(_src);
//            console.log(encodeURIComponent(_src));
        iframe.src = _src;
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        iframe.parentNode.removeChild(iframe);
        iframe= null;
      }
      /*try {
       var len = name.length,temp = window.navigator, temp1;

       for(var i=0;i<len;i++){
       if(i === len -1) {
       temp1 = temp;
       }
       temp = temp[name[i]];

       }
       if(typeof temp === 'function'){
       returnArg = temp.apply(temp1,args);
       }else if(typeof temp !== 'function' && args.length == 0){
       returnArg = temp;
       }

       } catch(e) {
       console.log(e)
       }*/
    }

  }(window));
  // dom模板 分别是 分享按钮, 分享弹层, 微信提示蒙层
  // UI待确认项
  var shareButtonHtml = '<a id="J-btn-share-open" href="javascript:;" class="index-share webtrendsData" otitle="打开分享弹层" style="display: none"></a>',
    shareLayerHtml = '<aside id="J-share-layer" class="dialog-share-wrapper" style="display: none;">' +
      '<section class="dialog-share-main">' +
      '<h3 class="dialog-share-mt0 dialog-share-mb0">向好友推荐<a id="J-share-btn-close" href="javascript:;" class="dialog-share-close webtrendsData" otitle="关闭分享弹层"></a></h3>' +
      '<form action="">' +
      '<div class="dialog-share-area">' +
      '<p id="J-share-recNo-p" style="display: none;" class="dialog-share-pb0 dialog-share-mb0"><span class="dialog-share-f26">请输入业务员代码或UM号或手机号，成为推荐人</span><br/><span class="dialog-share-colff6600  dialog-share-f26">（如未填写，将无法记录到您的业绩或权益）</span></p>' +
      '<p id="J-share-disabled" class="dialog-um-text dialog-share-mt0 dialog-share-f38" style="display: none;">您的推荐信息：<span id="J-share-disabled-recNo"></span></p>' +
      '<input id="J-share-recNo-input" type="text" class="share-code webtrendsData" placeholder="请输入" otitle="输入推荐人信息" style="display: none">' +
      '<ul id="J-share-channel-icon" class="dialog-share-icon mt35" style="display: none">' +
      '<li>' +
      '<a id="J-share-btn-friends" href="javascript:;" class="wx1 webtrendsData" otitle="点击分享到微信好友">' +
      '<span class="share-img"></span>' +
      '<span class="share-label">微信好友</span>' +
      '</a>' +
      '<a id="J-share-btn-circle" href="javascript:;" class="wx2 webtrendsData" otitle="点击分享到微信朋友圈" style="display: none">' +
      '<span class="share-img"></span>' +
      '<span class="share-label">微信朋友圈</span>' +
      '</a>' +
      '<a id="J-share-btn-qqZone" href="javascript:;" class="qz webtrendsData" otitle="点击分享到QQ空间" style="display: none">' +
      '<span class="share-img"></span>' +
      '<span class="share-label">QQ空间</span>' +
      '</a>' +
      '<a id="J-share-bnt-sina" href="javascript:;" class="sina webtrendsData" otitle="点击分享到新浪微博" style="display: none">' +
      '<span class="share-img"></span>' +
      '<span class="share-label">新浪微博</span>' +
      '</a>' +
      '<a id="J-share-btn-qrcode" href="javascript:;" class="erweima webtrendsData" otitle="点击分享到二维码" style="display: none">' +
      '<span class="share-img"></span>' +
      '<span class="share-label">二维码</span>' +
      '</a>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</form>' +
        // '</section>' +
      '<div id="J-share-disabled-btnCollection" class="dialog-operation-btn">' +
      '<a id="J-share-disabled-cancel" href="javascript:;" role="cancel" otitle="推荐人不能修改弹层取消">取消</a>' +
      '<a id="J-share-disabled-submit" href="javascript:;" role="submit" otitle="推荐人不能修改弹层确认分享">分享</a>' +
      '</div>' +
      '</section>' +
      '</aside>',
    tipHtml = '<p id="J-share-tip" class="toast-tips" style="display: none;z-index: 99999999"></p>',
    shareWXTipsHtml = '<aside id="J-share-WXTips" class="dialog-share-wrapper" style="display: none;"><div class="share-tips"></div></aside>';
  // 添加dom到页面
  $('body').append(shareButtonHtml);
  $('body').append(shareLayerHtml);
  $('body').append(tipHtml);
  $('body').append(shareWXTipsHtml);
  // 判断运行环境
  var ua = window.navigator.userAgent.toLowerCase();
  // 待确认项
  var isWeiXin = ua.indexOf('micromessenger') > -1, // 是否是在微信
    isKDAPP3 = ua.indexOf('paebank') > -1, // 是否是在口袋APP
    isKDAPP = false, // 是否是在口袋APP
  // isKDEAPP = ua.indexOf('micromessenger') > -1, // 是否是在口袋E行销
  // isJGJAPP = ua.indexOf('micromessenger') > -1, // 是否是在金管家APP
    isAIKE = ua.indexOf('aike') > -1, // 是否是爱客app
    isRYM = ua.indexOf('anydoor') > -1; // 是否是在任意门
  var isIOS = false,
    isANDROID = false;
  if (ua.match(/ipad/i) || ua.match(/iphone/i)) {
    isIOS = true;
  }
  if (ua.match(/android/i)) {
    isANDROID = true;
  }
  var isAPP = false;
  if (isKDAPP || isAIKE || isKDAPP3 || isRYM) {
    isAPP = true
  }
  // 调QQ空间与新浪微博网页版实现分享
  // url 分享url, TITLE 分享标题 DESCRIPTION-分享简介
  var templatesURL = {
    // QQ空间
    qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{shareUrl}}&title={{title}}&desc={{title}}&summary={{content}}&pics={{picture}}',
    // 新浪微博
    weibo: 'http://service.weibo.com/share/share.php?url={{shareUrl}}&title={{title}}&pic={{picture}}&appkey='
    // qq          : 'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}',
    // tencent     : 'http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}',
    // wechat      : 'javascript:;',
    // douban      : 'http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11',
    // diandian    : 'http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link',
    // linkedin    : 'http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin',
    // facebook    : 'https://www.facebook.com/sharer/sharer.php?u={{URL}}',
    // twitter     : 'https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{SITE_URL}}',
    // google      : 'https://plus.google.com/share?url={{URL}}'
  };
  // 初始化变量参数
  var shareDataMode = {};
  var shareDataModeFun = function () {
    shareDataMode = {
      shareObj: {
        title: '',
        content: '',
        picture: '',
        shareUrl: ''
      },
      paramObj: {
        rec_no: '',
        rec_type: '',
        media_source: '',
        channel_source: '',
        source: '',
        outerSource: '',
        activity_Id: '',
        activity_FlowId: ''
      },
      shareUrlObj: {
        url: '',
        search: '',
        hash: ''
      },
      ucpParamObj: {
        appId: '',
        weappNo: '',
        ucp_url: '',
        backUrl: '',
        openid: ''
      },
      shareUrlParamUrl: '',
      sharChannelArr: {
        btn: '0',
        wx: '0',
        qqZone: '0',
        sina: '0',
        erweima: '0',
        changeRecNo: '0',
        recNoLayer: '1'
      },
      otherObj: {
        intentCust: '',
        productCode: '',
        pubOrgCode: '',
        sceneCode: ''
      },
      webtrendsTitle: '',
      environment: '',
      isKDAPP2: false,
      pactivityId: '',
      notFlowIdShare: false
    }
  };

  var shareMode = {
    /**
     * 外部初始化调用
     options = {
                // 分享4大项
                shareObj: {
                    title: '', // 分享title 必传
                    content: '', // 分享简介 必传
                    picture: '' // 分享缩略图 必传
                },
                // 分享url集合
                shareUrlObj: {
                    url: '', // 分享url, 包含请求协议,域名,目录,文件名 必传
                    search: '', // 分享页面需求参数, 可以为空, 如果有值以"?"开头
                    hash: '' // 分享页面需求hash值 可以为空
                },
                // 业绩统计8大项, umMode-默认为空,userType-破冰专用 根据实际需求传值
                paramObj: {
                    rec_no: '',
                    rec_type: '',
                    media_source: '',
                    channel_source: '',
                    source: '',
                    outerSource: '',
                    activity_Id: '',
                    activity_FlowId: '',
                    umMode: '',
                    userType: ''
                },
                // 调用ucp需求参数
                ucpParamObj: {
                    appId: param.appId, //  必传
                    weappNo: param.weappNo, //  必传
                    ucp_url: param.ucp_url, //  必传
                    backUrl: param.backUrl || location.origin, // 非必传, 默认为当前页面的域名(带协议, 不能带端口号)
                    openid: param.openid // 必传
                },
                // 页面按扭及弹层展示 0-不展示 1-展示
                sharChannelArr: {
                    btn: "0", // 分享按钮icon是否展示 0-不展示 1-展示
                    wx: "0", //  微信好友及朋友圈icon是否展示 0-不展示 1-展示
                    qqZone: "0", // QQ空间icon是否展示 0-不展示 1-展示
                    sina: "0", // 新浪微博icon是否展示 0-不展示 1-展示
                    erweima: "0", // 二维码icon是否展示 0-不展示 1-展示
                    changeRecNo: "0", // 推荐人有值时推荐人信息是否可修改
                    recNoLayer: "0" // 推荐人信息弹层是否展示, 0-不展示 1 展示
                },
                webtrendsTitle: '', // 埋点页面title
                environment: '', // 运行环境, stg, prd
                isKDAPP2: false, // 是否是口袋APP2.0
                pactivityId: '', // 当前活动ID 必传
                notFlowIdShare: false // 没有mgm活动流水号是否可以分享  false-不能分享  true-能分享
            }

     */
    // 分享初始化入口
    shareInit: function (options) {
      // 每次使用重新初始变量值, 预防单页项目变量窜页面
      shareDataModeFun();
      options = options || {};
      if (options.customCSS !== '1') {
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      // 接收数据
      options.otherObj = options.otherObj || {};
      options.shareObj = options.shareObj || {};
      options.shareUrlObj = options.shareUrlObj || {};
      options.sharChannelArr = options.sharChannelArr || {};
      options.ucpParamObj = options.ucpParamObj || {};
      shareDataMode.shareObj = $.extend(shareDataMode.shareObj, options.shareObj);
      shareDataMode.otherObj = $.extend(shareDataMode.otherObj, options.otherObj);
      shareDataMode.shareUrlObj = $.extend(shareDataMode.shareUrlObj, options.shareUrlObj);
      // shareDataMode.paramObj = $.extend(shareDataMode.paramObj, options.paramObj);
      shareDataMode.sharChannelArr = $.extend(shareDataMode.sharChannelArr, options.sharChannelArr);
      shareDataMode.ucpParamObj = $.extend(shareDataMode.ucpParamObj, options.ucpParamObj);
      shareDataMode.environment = options.environment || 'prd';
      shareDataMode.pactivityId = options.pactivityId || '';
      shareDataMode.webtrendsTitle = options.webtrendsTitle || document.title;
      shareDataMode.notFlowIdShare = options.notFlowIdShare || true;
      if (options.isKDAPP2) {
        isKDAPP = true;
        isAPP = true;
      }
      // 如果是微信去做微信授权
      if (isWeiXin) {
        this.weixinInit()
      }
      // 如果传过来的推荐人信息有值, 以传过来的为优化
      // 推荐人信息有记录功能, 储存在localStorage
      if (options.paramObj.rec_no) {
        shareDataMode.paramObj.rec_no = options.paramObj.rec_no;
      } else{
        window.localStorage = window.localStorage || {getItem: function(){return ''}, setItem: function () {return ''}};
        var _rec = '';
        _rec = window.localStorage && window.localStorage.getItem('SHARE_ASSEMBLY_RECNO') || '';
        shareDataMode.paramObj.rec_no = _rec;
      }
      if (!options.paramObj.activity_Id) {
        options.paramObj.activity_Id = options.pactivityId;
      }
      // 分享url参数重新封装
      this.urlParamChange(options.paramObj);
      // 页面埋点信息重置
      this.webtrendsFun(options.webtrendsTitle);
      // 添加指定的弹层
      this.changeUI();
      // 如果rec_no有值且flowId没有值那直接去获取mgm流水号
      /*var self = this;
       if (shareDataMode.paramObj.rec_no && !shareDataMode.paramObj.activity_FlowId) {
       this.getMgmFlowId(function (data) {
       self.getMgmFlowIdCallback(data);
       })
       }*/
      // 绑定事件
      this.eventFun(options);
      // window.alert(isKDAPP3);
      /*if (isKDAPP3) {
       this.KDAPPThreeShareEntrance();
       }*/
    },
    // 显示按钮弹层
    changeUI: function () {
      if (isKDAPP3) {
        // 如果是口袋3.0那么所有按钮都隐藏
        // if (shareDataMode.sharChannelArr.btn === '1') {
        this.KDAPPThreeShareEntrance();
        // } else {
        //     this.KDAPPThreeShareEntrance('1');
        // }
        $('#J-btn-share-open').hide();
        return false;
      }
      // 分享按扭
      if (shareDataMode.sharChannelArr.btn === '1') {
        $('#J-btn-share-open').show();
      } else {
        $('#J-btn-share-open').hide();
      }
      // 推荐人信息有值,能否修改
      if (shareDataMode.paramObj.rec_no && shareDataMode.sharChannelArr.changeRecNo === '0') {
        // 不能修改
        $('#J-share-disabled-recNo').html(shareDataMode.paramObj.rec_no);
        $('#J-share-disabled').show();
        $('#J-share-recNo-input').hide();
        $('#J-share-recNo-p').hide();
      } else {
        // 没值或能修改
        $('#J-share-recNo-input').val(shareDataMode.paramObj.rec_no);
        $('#J-share-recNo-input').show();
        $('#J-share-recNo-p').show();
        $('#J-share-disabled').hide();
      }
      if (isAPP) {
        $('#J-share-disabled-btnCollection').show();
        $('#J-share-channel-icon').hide();
      } else {
        // 微信好友与微信朋友圈
        $('#J-share-disabled-btnCollection').hide();
        $('#J-share-channel-icon').show();
        if (shareDataMode.sharChannelArr.wx === '1') {
          if (isWeiXin) {
            $('#J-share-btn-friends').show();
            $('#J-share-btn-circle').show();
          } else {
            $('#J-share-btn-friends').hide();
            $('#J-share-btn-circle').hide();
          }
        } else {
          $('#J-share-btn-friends').hide();
          $('#J-share-btn-circle').hide();
        }
        // QQ空间
        if (shareDataMode.sharChannelArr.qqZone === '1') {
          $('#J-share-btn-qqZone').show();
        } else {
          $('#J-share-btn-qqZone').hide();
        }
        // 新浪微博
        if (shareDataMode.sharChannelArr.sina === '1') {
          $('#J-share-bnt-sina').show();
        } else {
          $('#J-share-bnt-sina').hide();
        }
        // 二维码
        if (shareDataMode.sharChannelArr.erweima === '1') {
          $('#J-share-btn-qrcode').show();
        } else {
          $('#J-share-btn-qrcode').hide();
        }
      }

    },
    // 埋点相关信息重置
    webtrendsFun: function (webtrendsTitle) {
      var $otitleList = $('.webtrendsData') || '';
      for (var i = 0, len = $otitleList.length; i < len; i++) {
        var _otitle = $otitleList.eq(i).attr('otitle') || '';
        if (webtrendsTitle) {
          _otitle = webtrendsTitle + '-' + _otitle
        }
        $otitleList.eq(i).attr('otitle', _otitle)
      }
      window.WTjson = window.WTjson || {};
      window.WTjson['WT.SOURCE'] = shareDataMode.paramObj.source;
      window.WTjson['WT.OUTSOURCE'] = shareDataMode.paramObj.outerSource;
      window.WTjson['WT.CHANNELSOURCE'] = shareDataMode.paramObj.channel_source;
      window.WTjson['WT.MEDIASOURCE'] = shareDataMode.paramObj.media_source;
    },
    // 绑定事件集合
    eventFun: function (param) {
      var self = this,
        $body = $('body');
      // 显示分享弹层
      $body.off("click", "#J-btn-share-open");
      $body.on('click', '#J-btn-share-open', function () {
        // 如果rec_no有值且flowId没有值那直接去获取mgm流水号
        //  if (shareDataMode.paramObj.rec_no && !shareDataMode.paramObj.activity_FlowId) {
        self.getMgmFlowId(function (data) {
          self.getMgmFlowIdCallback(data);
        });
        // }
        if (isAPP && shareDataMode.sharChannelArr.recNoLayer === '0') {
          self.appShareFun();
        } else {
          $('#J-share-layer').show();
        }
      });
      // 隐藏分享弹层
      $body.off("click", "#J-share-btn-close");
      $body.on('click', "#J-share-btn-close", function () {
        $('#J-share-layer').hide();
      });
      // 分享微信好友
      $body.off("click", "#J-share-btn-friends");
      $body.on('click', "#J-share-btn-friends", function () {
        self.shareCheck(function () {
          $('#J-share-WXTips').show();
        });
      });
      $body.off("click", "#J-share-btn-circle");
      $body.on('click', "#J-share-btn-circle", function () {
        self.shareCheck(function () {
          $('#J-share-WXTips').show();
        });
      });
      // qq空间
      $body.off("click", "#J-share-btn-qqZone");
      $body.on('click', "#J-share-btn-qqZone", function () {
        self.shareCheck(function () {
          self.qqZoneOrSinaShare('qzone');
        });
      });
      // 新浪微博
      $body.off("click", "#J-share-bnt-sina");
      $body.on('click', "#J-share-bnt-sina", function () {
        self.shareCheck(function () {
          self.qqZoneOrSinaShare('weibo');
        });
      });
      // 二维码
      $body.off("click", "#J-share-btn-qrcode");
      $body.on('click', "#J-share-btn-qrcode", function () {
        self.shareCheck(function () {
          self.toQrcode();
        });
      });
      // 推荐人信息变更时,获取mgm流水号并装接到shareUrl
      $body.off("change", "#J-share-recNo-input");
      $body.on('change', "#J-share-recNo-input", function () {
        self.inputLimit();
        self.getMgmFlowId(function (data) {
          self.getMgmFlowIdCallback(data);
        });
      });
      // 推荐人信息只能输入字母、数字、“.”、“-”、“_”及“@”
      $body.off("blur", "#J-share-recNo-input");
      $body.on('blur', "#J-share-recNo-input", function () {
        self.inputLimit();
      });
      // 关闭微信分享提示层
      /*$body.off("click", "#J-share-WXTips");
       $body.on('click', "#J-share-WXTips", function () {
       $('#J-share-WXTips').hide();
       });*/
      $('#J-share-WXTips').on('click', function () {
        $('#J-share-WXTips').hide();
      });
      $body.off("click", "#J-share-disabled-cancel");
      $('#J-share-disabled-cancel').on('click', function () {
        $('#J-share-layer').hide();
      });
      $body.off("click", "#J-share-disabled-submit");
      $body.on('click', "#J-share-disabled-submit", function () {
        self.shareCheck(function () {
          self.appShareFun();
          $('#J-share-layer').hide();
        });
      });
    },
    // 分享前检查, 分享必须要有推荐人信息与mgm流水号
    shareCheck: function (callback) {
      var recNoCheck = this.inputLimit();
      if (!recNoCheck) {
        return false;
      }
      if (!shareDataMode.notFlowIdShare) {
        if (!shareDataMode.paramObj.activity_FlowId) {
          this.dialog('分享初始化异常，请刷新后重试！');
          return false;
        }
      }
      if (callback) {
        callback();
      }
    },
    // 提示信息框
    time: null,
    dialog: function (content, btnArr, callback) {
      window.clearTimeout(this.time);
      $('#J-share-tip').html(content);
      $('#J-share-tip').show();
      this.time = window.setTimeout(function () {
        $('#J-share-tip').hide();
      }, 3000);
    },
    // 分享统一入口 // 废弃
    shareFun: function (type) {
      var self = this;
      if (isKDAPP3) {
        this.KDAPPThreeShareEntrance();
      } else if (isWeiXin){
        $('#J-share-WXTips').show();
      } else if (isAPP) {
        this.appShareFun();
      }  else if (type === 'qzone') {
        self.shareCheck(function () {
          self.qqZoneOrSinaShare('qzone');
        });
      } else if (type === 'weibo') {
        self.shareCheck(function () {
          self.qqZoneOrSinaShare('weibo');
        });
      } else if (type === 'erweima') {
        self.shareCheck(function () {
          this.toQrcode();
        });
      }
    },
    // 分享统一入口
    shareNewFun: function (type) {
      var self = this;
      if (isKDAPP3) {
        this.KDAPPThreeShareEntrance();
      } else if (isAPP) {
        this.appShareFun();
      }  else {
        self.getMgmFlowId(function (data) {
          self.getMgmFlowIdCallback(data);
        });
        if (isAPP && shareDataMode.sharChannelArr.recNoLayer === '0') {
          self.appShareFun();
        } else {
          $('#J-share-layer').show();
        }
      }
    },
    // 口袋3.0分享入口
    KDAPPThreeShareEntrance: function () {
      var self = this;
      if (typeof bow === 'object') {
        var type = shareDataMode.sharChannelArr.btn;
        // self.dialog(type);
        // 重置右上角按钮
        if (type === '1') {
          // self.dialog('重置成分享按钮');
          bow.header.config({
            rightButtonVisible: true,
            rightButtonText: '分享',
            rightButtonTextColor: '#F37938',
            // rightButtonFontSize: 28,
            // rightButtonIcon: "http://icon.qiantucdn.com/images/show/defaultface_v2.png",
            rightButtonCallback: function () {
              // 先检查登录再去分享
              // window.alert('右上角单击回调');
              self.loginCheck();
            }
          });
        } else {
          // self.dialog('重置不显示');
          bow.header.config({
            rightButtonVisible: false
          });
        }
      }
    },
    // 3.0检查是否登录
    loginCheck: function () {
      var self = this;
      if (typeof bow === 'object') {
        bow.auth.launchLogin(function (err, data) {
          if (err) {
            console.log('登录模块异常');
          }
          if (data['state'] == 0) {
            // window.alert('登录成功');
            self.loginCallback();
          }
        });
      } else {
        this.dialog('您没有引入bow.js');
      }
    },
    // 3.0登录成功加调
    loginCallback: function () {
      var self = this;
      // window.alert('去获取mgm流水号');
      self.getMgmFlowId(function (res) {
        if (res && res.responseCode === '000000' && res.mgmFlowId) {
          self.urlParamChange({
            activity_FlowId: res.mgmFlowId || ''
          });
          self.KDAPPThreeShare();
        } else {
          // window.alert('mgm流水号异');
        }
      });
    },
    // 调用3.0分享
    KDAPPThreeShare: function () {
      if (typeof bow === 'object') {
        // console.log('发调调用口袋3.0分享');
        bow.share.msg({
          title: shareDataMode.shareObj.title,
          shareUrl: shareDataMode.shareObj.shareUrl,
          imgUrl: shareDataMode.shareObj.picture,
          shareText: shareDataMode.shareObj.content,
          activityName: shareDataMode.webtrendsTitle
        }, function (err) {
          if (err) {
            console.log('调用口袋3.0分享失败');
            return false;
          }
          console.log('调用口袋3.0分享成功');
        })
      } else {
        this.dialog('您没有引入bow.js');
      }
    },
    // app站内分享统一入口
    appShareFun: function () {
      var self = this;
      if (isKDAPP3) {
        this.KDAPPThreeShareEntrance();
      } else {
        this.shareCheck(function () {
          // self.dialog(isRYM)
          if (isRYM) {
            /**
             * 1120103025
             aaaaa55555
             */
            self.RYMshareFun();
          } else if (isKDAPP) {
            self.KDAPPshareFun();
          }

        });
      }
    },
    // 调用任意门分享
    RYMshareFun: function () {
      // this.dialog('ddd');
      App.call(['shareMessage'], function (res) {
        res = JSON.parse(res);
        console.log('调用任意门分享成功回调');
        console.log(res)
      }, function (error) {
        console.log('调用任意门分享失败回调');
        console.log(error)
      }, {
        title: shareDataMode.shareObj.title,
        content: shareDataMode.shareObj.content,
        imageUrl: shareDataMode.shareObj.picture,
        url: shareDataMode.shareObj.shareUrl,
        messageType: '4',
        shareThumbImage: shareDataMode.shareObj.picture
      });
    },
    // 调用KDapp分享
    KDAPPshareFun: function () {
      var data = {
        image_url: shareDataMode.shareObj.picture,
        share_url: shareDataMode.shareObj.shareUrl,
        title: window.encodeURIComponent(shareDataMode.shareObj.title),
        contexts: window.encodeURIComponent(shareDataMode.shareObj.content),
        mgmFlowId: shareDataMode.paramObj.activity_FlowId,
        flag: 'pabank_share_type_msg'
      };
      window.location.href = 'native://share_mgm/|' + JSON.stringify(data);
    },
    // 推荐人信息输入限制, 只能输入英文/数字/.-_@,且只能是以英文或数字开头
    oldRecNo: '',
    inputLimit: function () {
      var _recNo = $('#J-share-recNo-input').val() || '';
      _recNo = _recNo.replace(/\s/g, '');
      $('#J-share-recNo-input').val(_recNo);
      var reg = /^[0-9a-zA-Z\-\_\@\.]+$/;
      if (_recNo === '') {
        return true;
      }
      if (!_recNo) {
        // 如果推荐人信息为空
        shareDataMode.paramObj.rec_no = _recNo;
        this.urlParamChange({rec_no: _recNo});
        this.wxShareInfo(this.shareObj);
        // window.localStorage.setItem('SHARE_ASSEMBLY_RECNO', _recNo);
        $('#J-share-recNo-input').val(_recNo);
        window.localStorage.setItem('SHARE_ASSEMBLY_RECNO', _recNo);
        // $('#J-share-input-tip').show();
        return false;
      }
      if (_recNo.indexOf('_') === 0 || _recNo.indexOf('.') === 0 || _recNo.indexOf('@') === 0 || _recNo.indexOf('-') === 0 ) {
        // 推荐人信息不能以符号开头
        shareDataMode.paramObj.rec_no = '';
        this.urlParamChange({rec_no: ''});
        this.wxShareInfo(this.shareObj);
        $('#J-share-recNo-input').val('');
        this.dialog('首字符不能直接输入标点符号');
        window.localStorage.setItem('SHARE_ASSEMBLY_RECNO', '');
        // window.localStorage.setItem('SHARE_ASSEMBLY_RECNO', _recNo);
        return false;
      }
      if (reg.test(_recNo)) {
        // 如果推荐人信息符合要求
        shareDataMode.paramObj.rec_no = _recNo;
        this.oldRecNo = _recNo;
        // $('#J-share-input-tip').hide();
        window.localStorage.setItem('SHARE_ASSEMBLY_RECNO', shareDataMode.paramObj.rec_no);
        this.urlParamChange({rec_no: shareDataMode.paramObj.rec_no});
        return true;
      } else {
        // 如果推荐人不符合要求
        // $('#J-share-recNo-input').val(this.oldRecNo);
        shareDataMode.paramObj.rec_no = this.oldRecNo;
        this.dialog('推荐人信息只能输入字母、数字、“.”、“-”、“_”、“@”');
        window.localStorage.setItem('SHARE_ASSEMBLY_RECNO', shareDataMode.paramObj.rec_no);
        this.urlParamChange({rec_no: shareDataMode.paramObj.rec_no});
        return false;
      }
      // 推荐人信息要有记忆功能
      // window.localStorage.setItem('SHARE_ASSEMBLY_RECNO', shareDataMode.paramObj.rec_no);
      // this.urlParamChange({rec_no: shareDataMode.paramObj.rec_no});
      // $('#J-share-recNo-input').val(this.oldRecNo);
      // this.wxShareInfo(shareDataMode.shareObj);
    },
    // 分享QQ空间与微博
    qqZoneOrSinaShare: function (type) {
      var _url = templatesURL[type];
      _url = _url.replace(new RegExp('{{title}}', 'g'), window.encodeURIComponent(shareDataMode.shareObj.title));
      _url = _url.replace(new RegExp('{{shareUrl}}', 'g'), window.encodeURIComponent(shareDataMode.shareObj.shareUrl));
      _url = _url.replace(new RegExp('{{content}}', 'g'), window.encodeURIComponent(shareDataMode.shareObj.content));
      _url = _url.replace(new RegExp('{{picture}}', 'g'), window.encodeURIComponent(shareDataMode.shareObj.picture));
      $('#J-share-layer').hide();
      window.open(_url);
    },
    // 分享成二维码
    toQrcode: function () {
      var _shareObj = {
        shareUrl: shareDataMode.shareObj.shareUrl,
        title: shareDataMode.shareObj.title,
        pic: shareDataMode.shareObj.picture,
        content: shareDataMode.shareObj.content
      };
      var _shareStr = window.encodeURIComponent($.param(_shareObj));
      $('#J-share-layer').hide();
      window.open('https://bank-static.pingan.com.cn/brop-cmp/act/assets/share/qrcode.html?shareInfo=' + _shareStr);
    },
    // 获取流水号回调
    getMgmFlowIdCallback: function (res) {
      if (res && res.responseCode === '000000' && res.mgmFlowId) {
        this.urlParamChange({
          activity_FlowId: res.mgmFlowId || ''
        });
        jWeixin.showOptionMenu();
      }
    },
    // 从url上获取参数
    getParamVal: function (paramName) {
      var typeMatch = location.search.match(new RegExp('\\b' + paramName + '=([^&=]+)'));
      return typeMatch ? typeMatch[1] : '';
    },
    // 重新封装分享url参数
    urlParamChange: function (param) {
      var _obj = {},
        param = param || {};
      if (param.rec_type) {
        _obj.rec_type = param.rec_type;
      }
      if (param.rec_no) {
        _obj.rec_no = param.rec_no;
      } else {
        var _rec_type = this.getParamVal('rec_type') || '',
          _rec_no = this.getParamVal('rec_no') || '';
        if (_rec_type === '1' && _rec_no) {
          _obj.rec_no = _rec_no;
        }
      }
      if (param.media_source) {
        _obj.media_source = param.media_source;
      }
      if (param.channel_source) {
        _obj.channel_source = param.channel_source;
      }
      if (param.source) {
        _obj.source = param.source;
      }
      if (param.outerSource) {
        _obj.outerSource = param.outerSource;
      }
      if (param.activity_Id) {
        _obj.activity_Id = param.activity_Id;
      }
      if (param.activity_FlowId) {
        _obj.activity_FlowId = param.activity_FlowId;
      }
      if (param.umMode) {
        _obj.umMode = param.umMode;
      }
      if (param.userType) {
        _obj.userType = param.userType;
      }
      _obj = $.extend(shareDataMode.paramObj, _obj);
      var obj = {};
      $.each(_obj, function(key, val){
        if (key && val) {
          obj[key] = val;
        }
      });
      if (shareDataMode.shareUrlObj.search && shareDataMode.shareUrlObj.search.indexOf('?') > -1) {
        shareDataMode.shareUrlParamUrl = shareDataMode.shareUrlObj.search + '&' + $.param(obj);
      } else {
        shareDataMode.shareUrlParamUrl = '?' + $.param(obj);
      }
      shareDataMode.shareObj.shareUrl = '';

      shareDataMode.shareObj.shareUrl = shareDataMode.shareUrlObj.url + shareDataMode.shareUrlParamUrl + shareDataMode.shareUrlObj.hash;
      if (shareDataMode.shareUrlObj.hash) {
        // 防止第三方在url最后拼接信息造成hash值错误
        if (shareDataMode.shareUrlObj.hash.indexOf('?') === -1) {
          shareDataMode.shareUrlObj.hash = shareDataMode.shareUrlObj.hash + '?'
        }
      }
      // 重置微信分享信息
      this.wxShareInfo(shareDataMode.shareObj);
    },
    // 从mgm平台获取流水号
    getMgmFlowId: function (callback) {
      // if (!shareDataMode.paramObj.rec_no) {
      //     return false;
      // }
      shareDataMode.paramObj.rec_no = shareDataMode.paramObj.rec_no.replace(/\s/g, '');
      if (!shareDataMode.pactivityId) {
        this.dialog('pactivityId参数不能为空');
        return false;
      }
      var self = this,
        param = {
          activityId: shareDataMode.paramObj.activity_Id || shareDataMode.pactivityId, // 外源活动编码
          mediaSource: shareDataMode.paramObj.media_source || '', // 外部媒体来源
          recNo: shareDataMode.paramObj.rec_no, // 推荐者身份识别
          recType: shareDataMode.paramObj.rec_type || '', // 推荐者类型
          outerSource: shareDataMode.paramObj.outerSource || '', // 获客路径
          channelSource: shareDataMode.paramObj.channel_source || '', // 推广渠道编码
          pactivityId: shareDataMode.pactivityId || '', // 当前页面的活动编码
          shareChannelCode: '', // 分享渠道编码
          sceneUrl: window.encodeURIComponent(window.location.href), // 页面URL
          source: shareDataMode.paramObj.source || '', // 获客渠道
          intentCust: shareDataMode.otherObj.intentCust || '', // 意向客户
          productCode: shareDataMode.otherObj.productCode || '', // 产品编码
          pubOrgCode: shareDataMode.otherObj.pubOrgCode || '', // 推广单位代码
          sceneCode: shareDataMode.otherObj.sceneCode || '' // 分享页面类型
        };
      if (isKDAPP3) {
        param.needLogin = '1';
      } else {
        param.needLogin = '0';
      }
      param.activityId = param.activityId || param.pactivityId;
      if (!param.activityId) {
        console.log('获取mgm流水号缺失活动ID');
        return false;
      }
      var url = '//rsb.pingan.com.cn/BROP/cmp/openapi/brop_cmp.mgm.createMgmFlowId',
        urlLogin = 'https://rsb.pingan.com.cn/brop/cmp/cust/brop_cmp.mgm.createMgmFlowId?channel=4004';
      if (shareDataMode.environment === 'stg') {
        url = '//rsb-stg.pingan.com.cn/BROP/cmp/openapi/brop_cmp.mgm.createMgmFlowId';
        urlLogin = 'https://rsb-stg.pingan.com.cn/brop/cmp/cust/brop_cmp.mgm.createMgmFlowId?channel=4004';
      }
      // 2.13号加上, 后端数据库长度限制500
      if (param.sceneUrl.length > 999) {
        param.sceneUrl = param.sceneUrl.substr(0, 999);
      }
      var ajaxParam = {
        type: 'GET',
        data: param,
        dataType: 'json',
        success: function (result) {
          result = result || {};
          // window.alert('mgm接口成功返回');
          // window.alert(JSON.stringify(result));
          if (result.responseCode === '000000') {
            window.console.log('调用MGM流水号请求成功');
            if (callback && typeof callback === 'function') {
              callback(result)
            }
          } else if (result.responseCode === '900401' || result.responseCode === '650614' || result.responseCode === '650613') {
            self.loginOut();
          } else {
            window.console.log('调用MGM流水号接口中异常，请稍候再试！')
          }
        },
        error: function () {
          console.log('网络请求异常，请稍候再试！MGM error');
          // window.alert('目前无法接收到mgm返回信息,写死返回信息');
          // if (callback && typeof callback === 'function') {
          //     callback({mgmFlowId: 'm_E0LdC4hF3lDYCTAP', responseCode: '000000', responseMsg: '成功'})
          // }
        }
      };
      if (param.needLogin === '1') {
        ajaxParam.xhrFields = { withCredentials: true };
        ajaxParam.crossDomain = true;
        ajaxParam.url = urlLogin;
      } else {
        ajaxParam.url = url;
        ajaxParam.dataType = 'jsonp';
      }
      $.ajax(ajaxParam)
    },

    /**
     * 后端登录超时, 登出口袋
     */
    loginOut: function () {
      var self = this;
      if (typeof bow === 'object') {
        bow.auth.synLogout(function (err) {
          if (err) {
            console.log('登出口袋异常');
          } else {
            self.loginCheck();
          }
        })
      }
    },

    /**
     * 如果是微信, 去做微信初始化
     * param.appId appId
     * param.weappNo 微应用号, ucp平台分配
     * param.ucp_url 从upc获取accToken的请求地址
     * param.backUrl 绑定域名
     * param.openid 微信的唯一标识
     */
    weixinInit: function (param) {
      if (!isWeiXin) {
        return false;
      }
      var self = this;
      var param = shareDataMode.ucpParamObj || {};
      if (!(param.appId && param.weappNo && param.ucp_url && param.openid)) {
        console.log('ucp参数不能为空');
        return false;
      }
      self.shareObj = shareDataMode.shareObj || {};
      var WeiXin = {
        // 初始化微信配置
        initConfig: function () {
          // 注入微信参数,默认生产配置
          var config = {
            appId: param.appId, // wx95415c456652ce73',
            weappNo: param.weappNo,
            ucp_url: param.ucp_url,
            backUrl: param.backUrl || window.location.origin,
            openid: param.openid
          };
          if (WeiXin.config) {
            WeiXin.config = WeiXin.config;
          } else {
            WeiXin.config = config
          }
        },
        /**
         * 微信接口初始化
         * @param  {string}   openid   用户ID
         * @param  {boolean}   debug   是否调试
         * @param  {Function} callback 加签后的回调
         */
        init: function (openid, debug, callback) {
          if (openid === '') {
            return false
          }
          // 微信配置信息
          WeiXin.initConfig();
          WeiXin.config.openid = openid;
          // 获取签名
          WeiXin.getSignature(openid, WeiXin.config.weappNo, function (data) {
            // 注入微信参数
            var wxConfig = {
              debug: debug || false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: WeiXin.config.appId, // 微信公众号
              timestamp: data.timestamp, // 必填，生成签名的时间戳
              nonceStr: data.nonce, // 必填，生成签名的随机串
              signature: data.signature, // 必填，签名，见附录1
              jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'onMenuShareQQ'
              ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            };
            // 通过config接口注入权限验证配置
            jWeixin.config(wxConfig);
            // 通过error接口处理失败验证
            jWeixin.error(function (res) {
              window.console.log('JSSDK接口处理失败验证')
            });
            // 通过ready接口处理成功验证的回调
            jWeixin.ready(function () {
              if (!shareDataMode.notFlowIdShare) {
                // jWeixin.hideOptionMenu();
              }
              if (shareDataMode.paramObj.activity_FlowId) {
                jWeixin.showOptionMenu();
              }
              if (callback && typeof callback === 'function') {
                callback()
              }
            })
          })
        },
        /*
         * 获取加密accToken接口
         * @param  {string} openid     客户微信ID
         * @param  {string} weappNo    微应用号
         * @return {Function} callback 回调方法
         */
        getSignature: function (openid, weappNo, callback) {
          // 获取签名
          var url = WeiXin.config.ucp_url;
          $.ajax({
            url: url,
            type: 'GET',
            data: {openid: openid, weappNo: weappNo},
            dataType: 'jsonp',
            success: function (result) {
              if (result) {
                var data = JSON.parse(result) || {};
                if (callback && typeof callback === 'function') {
                  callback(data)
                }
              } else {
                window.console.log('UCP请求异常，请稍候再试！')
              }
            },
            error: function () {
              window.console.log('网络请求异常，请稍候再试！UCP error')
            }
          })
        },
        initWeixin: function () {
          // 初始化微信的分享信息
          self.wxShareInfo({
            title: self.shareObj.title,
            content: self.shareObj.content,
            shareUrl: self.shareObj.shareUrl,
            picture: self.shareObj.picture
          })
        }
      };
      WeiXin.init(shareDataMode.ucpParamObj.openid, false, $.proxy(WeiXin.initWeixin, this))
    },
    // 微信分享自定义信息统一处理
    wxShareInfo: function (shareObj) {
      // 分享到朋友圈
      var _shareObj = shareObj || {};
      // console.log(shareObj);
      jWeixin.onMenuShareTimeline({
        title: _shareObj.title || '',
        desc: _shareObj.content || '',
        link: _shareObj.shareUrl || '',
        imgUrl: _shareObj.picture || '',
        // 点击分享
        trigger: function (res) {
          // alert('用户点击分享到朋友圈');
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享成功
        success: function (res) {
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享取肖
        cancel: function (res) {
          // alert('已取消');
        },
        // 分享失败
        fail: function (res) {
          // $('#share-WXTips').hide();
        }
      });
      // 分享给微信好友
      jWeixin.onMenuShareAppMessage({
        title: _shareObj.title,
        desc: _shareObj.content,
        link: _shareObj.shareUrl,
        imgUrl: _shareObj.picture,
        // 点击分享
        trigger: function (res) {
          // alert('用户点击分享到朋友圈');
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享成功
        success: function (res) {
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享取肖
        cancel: function (res) {
          // alert('已取消');
        },
        // 分享失败
        fail: function (res) {
          // $('#share-WXTips').hide();
        }
      });
      // 微信分享到腾讯微博
      jWeixin.onMenuShareWeibo({
        title: _shareObj.title,
        desc: _shareObj.content,
        link: _shareObj.shareUrl,
        imgUrl: _shareObj.picture,
        // 点击分享
        trigger: function (res) {
          // alert('用户点击分享到朋友圈');
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享成功
        success: function (res) {
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享取肖
        cancel: function (res) {
          // alert('已取消');
        },
        // 分享失败
        fail: function (res) {
          // $('#share-WXTips').hide();
        }
      });
      // 微信分享到QQ空间
      jWeixin.onMenuShareQZone({
        title: _shareObj.title,
        desc: _shareObj.content,
        link: _shareObj.shareUrl,
        imgUrl: _shareObj.picture,
        // 点击分享
        trigger: function (res) {
          // alert('用户点击分享到朋友圈');
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享成功
        success: function (res) {
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享取肖
        cancel: function (res) {
          // alert('已取消');
        },
        // 分享失败
        fail: function (res) {
          // $('#share-WXTips').hide();
        }
      });
      // 微信分享到QQ好友
      jWeixin.onMenuShareQQ({
        title: _shareObj.title,
        desc: _shareObj.content,
        link: _shareObj.shareUrl,
        imgUrl: _shareObj.picture,
        // 点击分享
        trigger: function (res) {
          // alert('用户点击分享到朋友圈');
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享成功
        success: function (res) {
          $('#share-WXTips').hide();
          $('#J-share-layer').hide();
        },
        // 分享取肖
        cancel: function (res) {
          // alert('已取消');
        },
        // 分享失败
        fail: function (res) {
          // $('#share-WXTips').hide();
        }
      });
    }
  };

  if (typeof module != 'undefined' && module.exports) {
    module.exports = shareMode;
  } else if (typeof define == 'function' && define.amd) {
    define( function () { return shareMode; } );
  } else {
    window.shareMode = shareMode;
  }
})(window);
