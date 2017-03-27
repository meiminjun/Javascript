import * as aladdin from 'aladdin'
export function share(){
  if (!aladdin.env.isBrowser) {
    $.ajax = function(options) {
      var args = Array.prototype.slice.call(arguments);

      if (!options.headers) {
        options.headers = {};
      }

      if (!options.headers['Content-Type']) {
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }

      if (!options.data) {
        options.data = {
          responseDataType: "JSON"
        };
      }

      return bow.http.ajax.apply(bow.http, args);
    }
  }
  var WeiXin = {
    getParamVals: function() {
      var item, obj = {},
        href = location.search,
        str = href.substr(href.lastIndexOf('?') + 1),
        arr = [];
      if (str) {
        arr = str.split('&')
      }
      $.each(arr, function(k, v) {
        item = v.split('=');
        obj[item[0]] = item[1];
      });
      return obj;
    },
    paramFilter: function(str) {
      var _str = str || location.search,
        _obj = this.getParamVals(_str),
        returnStr = '';
      $.each(_obj, function(key, val) {
        if (key !== 'rec_no' && key !== 'rec_type' && key !== 'media_source' &&
          key !== 'channel_source' && key !== 'source' && key !== 'outerSource' && key !== 'activity_Id' && key !== 'activity_FlowId' && key !== 'umMode' && key !== 'userType' && key !== 'isKDAPP2') {
          returnStr += ('&' + key + '=' + val);
        }
      });
      if (returnStr) {
        returnStr = returnStr.replace('&', '?')
      }
      return returnStr;
    },
    init: function() {
      var getParamVals = this.getParamVals(),
        options = {},
        _search = this.paramFilter();

      options = {
        // 分享4大项
        shareObj: {
          title: '定活通（增强型）：随存随取，实时到账', // 分享title 必传
          content: '存满90天更可申请T+1到账支取，收益率最高可达3.5%', // 分享简介 必传
          picture: 'https://b.pingan.com/app_images/b/v10/youhui/kaimenhong/share-icon.jpg' // 分享缩略图 必传
        },
        // 分享url集合
        shareUrlObj: {
          url: location.origin + location.pathname, // 分享url, 包含请求协议,域名,目录,文件名 必传
          search: _search, // 分享页面需求参数, 可以为空, 如果有值以"?"开头 umMode userType 破冰业务逻辑字段,非公共,在此传递
          hash: '' // 分享页面需求hash值 可以为空 如果有值以"#"开头
        },
        // 业绩统计8大项, umMode-默认为空,userType-破冰专用 根据实际需求传值
        paramObj: {
          rec_no: '', // 根据需要才传这个参数
          rec_type: '', // 根据需要才传这个参数
          media_source: getParamVals.media_source,
          channel_source: getParamVals.channel_source,
          source: getParamVals.source,
          outerSource: getParamVals.outerSource,
          activity_Id: getParamVals.activity_Id,
          activity_FlowId: '' // 如果有值且不修改推荐人信息, 那不会去调用mgm平台获取流水号
        },
        // 调用ucp需求参数
        ucpParamObj: {
          appId: 'wx95415c456652ce73', //  必传
          weappNo: 'bank', //  必传
          ucp_url: location.protocol + '//eim.pingan.com.cn/bank/getSignature', //  必传
          backUrl: location.origin, // 非必传, 默认为当前页面的域名(带协议, 不能带端口号)
          openid: 'oiBF4juARSrSbe1-bHAl2zQc8P3w' // 必传
        },
        // 页面按扭及弹层展示 0-不展示 1-展示
        sharChannelArr: {
          btn: "1", // 分享按钮
          wx: "1", //  微信好友及朋友圈
          qqZone: "1", // QQ空间
          sina: "1", // 新浪微博
          erweima: "1", // 二维码
          changeRecNo: "1", // 推荐人(rec_no)有值时推荐人信息是否可修改 0-不能修改  1-能修改
          recNoLayer: "1" // 推荐人信息弹层是否展示, 0-不展示 1 展示 只在app内设置为0才有效
        },
        // 其他统计参数, 非必传,
        otherObj: {
          intentCust: 'test-intentCust', // 意向客户
          productCode: 'test-productCode', // 产品编码
          pubOrgCode: 'test-pubOrgCode' // 推广单位代码
        },
        webtrendsTitle: '大额存单（增强型）', // 埋点页面title
        environment: 'stg', // 运行环境, stg, prd
        isKDAPP2: getParamVals.isKDAPP2 === '1' ? true : false, // 是否是口袋APP2.0
        pactivityId: 'DECD', // 当前活动ID,必传
        notFlowIdShare: true // 没有mgm活动流水号是否可以分享  false-不能分享  true-能分享
      };

      shareMode.shareInit(options);
    }
  };
  WeiXin.init();
}

