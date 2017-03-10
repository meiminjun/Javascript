import * as aladdin from 'aladdin';
import bow from 'bow';
import * as types from '../store/types';
import {tryLogin} from './acc';

/**
 * ald和bow接口封装
 *
 *
 */

function checkResponse(res){
}

let requestCount = 0;
const needLoginCode = ['291007','291005','291001'];
//请求相关
export const http = {
    request: function (options, cb) {
        if (requestCount++ === 0) {
            window.__store.commit(types.COMMON_LOADING, true)
        }
        bow.http.request(options, function (err, res) {
            if (requestCount === 0 || --requestCount === 0) {
                window.__store.commit(types.COMMON_LOADING, false)
            }
            //公共异常处理
            if (err) {
                return console.info('服务器异常', err);
            }
            // console.log(res);
            let json;
            try{
                json = JSON.parse(res.body);
            }catch(e){
                json = null;
            }
            let responseCode = json&&json.responseCode?json.responseCode:'';
            // 在列表内的代码需要登录～
            if(needLoginCode.indexOf(responseCode) != -1){
                tryLogin();
            }else{
                cb(json || {})
            }
        });
    },
    /**
     * JSONP跨域请求
     *
     *
     * @param options
     * @param cb
     */
    jsonp: function (options, cb) {
        // if(requestCount++ === 0) {
        //     storeInstance.commit("loading", true)
        // }
        let name,
            url = options.url,
            params = options.params || {},
            _parseData = function (data) {
                let ret = "";
                if (typeof data === "string") {
                    ret = data;
                } else if (typeof data === "object") {
                    for (let key in data) {
                        ret += "&" + key + "=" + encodeURIComponent(data[key]);
                    }
                }
                // 加个时间戳，防止缓存
                // ret += "&_time=" + (new Date()).getTime();
                ret = ret.substr(1);
                return ret;
            },
            _removeElement = function (elem) {
                let parent = elem.parentNode;

                if (parent && parent.nodeType !== 11) {
                    parent.removeChild(elem);
                }
            };

        url = url + (url.indexOf("?") === -1 ? "?" : "&") + _parseData(params);

        let match = /callback=(\w+)/.exec(url);

        if (match && match[1]) {
            name = match[1];
        } else {
            name = options.jsonpCallback || "jsonp_" + (new Date()).getTime() + '_' + Math.random().toString().substr(2);
            url = url.replace("callback=?", "callback=" + name);
            url = url.replace("callback=%3F", "callback=" + name);
        }

        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = "id_" + name;

        window[name] = function (json) {
            window[name] = undefined;
            let elem = document.getElementById("id_" + name);
            _removeElement(elem);
            // if(requestCount === 0 || --requestCount === 0){
            //     storeInstance.commit("loading", false)
            // }
            cb(json);
        };

        // 在head里面插入script元素
        let head = document.getElementsByTagName("head");
        if (head && head[0]) {
            head[0].appendChild(script);
        }
    }
};

//跳转相关
export const navigator = {
    forward: function (options) {
        bow.navigator.forward(options);
    },
    back: function () {
        bow.navigator.back();
    }
};

//存储相关
export const store = {
    localStorage: {
        setItem: function (options, cb) {
            aladdin.localStorage.setItem(options.key, options.value, true, '3DES', cb);
        },
        getItem: function (key, cb) {
            aladdin.localStorage.getItem(key, true, '3DES', cb);
        },
        removeItem: aladdin.localStorage.removeItem,
        clear: aladdin.localStorage.clear
    },
    sessionStorage: {
        setItem: aladdin.sessionStorage.setItem,
        getItem: aladdin.sessionStorage.getItem,
        removeItem: aladdin.sessionStorage.removeItem,
        clear: aladdin.sessionStorage.clear
    }
};

//埋点
export const track = {
    record: function (options) {
        console.info(options);
        bow.talkingData.trackEvent({ eventId: options });
    }
};

//事件
export const event = {
    on: function (event, cb) {
        bow.on && bow.on(event, cb);
    },
    off: function (event, cb) {
        bow.on && bow.off(event, cb);
    },
    once: function (event, cb) {
        bow.on && bow.once(event, cb);
    }
};

//环境检测
export const env = {
    ...(aladdin.env || {})
    //其它
};
