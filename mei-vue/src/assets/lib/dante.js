// dante.js (PingAn Web Application) @ 2017
// ----------------------------------
// v1.0.5
//
// Copyright © PING AN INSURANCE (GROUP) COMPANY OF CHINA ，LTD. All Rights Reserved
// Distributed under MIT license
//
// http://bank.pingan.com/app/index.html?cid=cbank-sms-kdyh-xz 

var bow = window.bow = require("bow");

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.dante = factory());
}(this, (function () {
    'use strict';

    /**
     * Polyfill 新API垫片
     */

    if (!Array.prototype.find) {
        Object.defineProperty(Array.prototype, 'find', {
            value: function value(predicate) {
                'use strict';

                if (this == null) {
                    throw new TypeError('Array.prototype.find called on null or undefined');
                }
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var list = Object(this);
                var length = list.length >>> 0;
                var thisArg = arguments[1];

                for (var i = 0; i !== length; i++) {
                    if (predicate.call(thisArg, this[i], i, list)) {
                        return this[i];
                    }
                }
                return undefined;
            }
        });
    }

    if (!Array.prototype.includes) {
        Array.prototype.includes = function (searchElement /*, fromIndex*/) {
            'use strict';

            if (this == null) {
                throw new TypeError('Array.prototype.includes called on null or undefined');
            }

            var O = Object(this);
            var len = parseInt(O.length, 10) || 0;
            if (len === 0) {
                return false;
            }
            var n = parseInt(arguments[1], 10) || 0;
            var k;
            if (n >= 0) {
                k = n;
            } else {
                k = len + n;
                if (k < 0) {
                    k = 0;
                }
            }
            var currentElement;
            while (k < len) {
                currentElement = O[k];
                if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
                    return true;
                }
                k++;
            }
            return false;
        };
    }

    var classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    var createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();







    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var get$1 = function get$1(object, property, receiver) {
        if (object === null) object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent === null) {
                return undefined;
            } else {
                return get$1(parent, property, receiver);
            }
        } else if ("value" in desc) {
            return desc.value;
        } else {
            var getter = desc.get;

            if (getter === undefined) {
                return undefined;
            }

            return getter.call(receiver);
        }
    };

    var inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };











    var possibleConstructorReturn = function (self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };



    var set$1 = function set$1(object, property, value, receiver) {
        var desc = Object.getOwnPropertyDescriptor(object, property);

        if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);

            if (parent !== null) {
                set$1(parent, property, value, receiver);
            }
        } else if ("value" in desc && desc.writable) {
            desc.value = value;
        } else {
            var setter = desc.set;

            if (setter !== undefined) {
                setter.call(receiver, value);
            }
        }

        return value;
    };

    /**
     * 功能服务基础类
     */
    var Service = function () {
        function Service(app) {
            classCallCheck(this, Service);

            this.app = app;
        }

        /**
         * 声明挂载的对象命名空间
         * @param explicitName
         * @returns {Service}
         */


        createClass(Service, null, [{
            key: 'declareMountName',
            value: function declareMountName() {
                var explicitName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

                Object.defineProperty(this, 'explicitName', {
                    writable: false,
                    value: explicitName
                });
                return this;
            }

            /**
             * 功能挂载到应用上
             * @param Application
             * @returns {{enumerable: boolean, configurable: boolean, get: get, set: set}}
             */

        }, {
            key: 'mount',
            value: function mount(app) {
                var Srv = this;
                if (Srv.mounted) return;
                var name = Srv.explicitName.toLowerCase();
                if (!name) throw new Error('The service mounted name for application must be provided!');

                for (var _len = arguments.length, ops = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    ops[_key - 1] = arguments[_key];
                }

                var srv = new (Function.prototype.bind.apply(Srv, [null].concat([app], ops)))();
                Object.defineProperty(app, name, {
                    enumerable: true,
                    configurable: false,
                    get: function get() {
                        return srv;
                    },
                    set: function set() {
                        throw new Error('Application has already mounted :' + Srv.explicitName + ', unsupport re-mount or reset!');
                    }
                });
                Srv.mounted = true;
            }
        }]);
        return Service;
    }();

    /**
     * 格式处理器
     * （1）JS对象类型判断
     * （2）通用文本字符串格式处理
     * （3）邮箱、手机号、身份证、银行卡号、金额等格式处理
     */
    var RegUtil = {
        REG_MODE: {
            SPACE: /^\s+$/,
            PASSWORD: /^\d{6}$/,
            AMOUNT: /^(?:([1-9]\d+)|[0-9])(?:\.(\d[0-9]|[0-9]))?$/,
            PHONE: /^((\(\d{2,3}\))|(\d{3}\-))?1\d{1}\d{9}$/,
            TEL: /^((\(\d{2,3}\))|(\d{3}\-))?1\d{1}\d{9}|\d{10}|\d{11}|\d{12}$/,
            EMAIL: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
            SPECIAL_CHARSET: /^(\w|[\u4e00-\u9fa5])+$/
        },
        test: function test(mode, content) {
            return mode.test(content);
        }
    };

    //金融专业术语
    var FINANCE_TERMINOLOGY = {
        //币种映射
        CURRENCY_MAP: [['01', '人民币', 'RMB'], [undefined, '人民币', 'CNY'], ['23', '欧元', 'EUR'], ['28', '加拿大元', 'CAD'], ['13', '港币', 'HKD'], ['27', '日元', 'JPY'], ['15', '瑞士法郎', 'CHF'], ['14', '美元', 'USD'], ['18', '新加坡元', 'SGD'], ['29', '澳大利亚元', 'AUD'], ['12', '英镑', 'GBP'], [undefined, '澳门元', 'MOP'], [undefined, '马克', 'DEM'], [undefined, '法郎', 'FRF']],
        //币种映射
        CURRENCY_MAP2: [['156', '人民币'], ['250', '马克'], ['256', '法郎'], ['344', '港元'], ['392', '日元'], ['826', '英镑'], ['840', '美元'], ['954', '欧元']],
        //货币类型映射表
        CURRENCY_TYPE: {
            "RMB": "人民币",
            "USD": "美元",
            "HKD": "港币",
            "EUR": "欧元",
            "JPY": "日元",
            "GBP": "英镑",
            "CHF": "瑞士法郎",
            "AUD": "澳大利亚元",
            "SGD": "新加坡元",
            "CAD": "加拿大元",
            "CNY": "人民币",
            "DEM": "马克",
            "FRF": "法郎",
            "156": "人民币",
            "840": "美元",
            "344": "港币",
            "954": "欧元",
            "392": "日元",
            "826": "英镑",
            "250": "马克",
            "256": "法郎"
        },
        //账户类型
        ACCOUNT_TYPE: {
            '8101': '活期结算',
            '8102': '活期储蓄',
            '8103': '活期资本',
            '8104': '活期储蓄类',
            '8301': '活期支票',
            '8701': '活期预付卡',
            '8801': '活期委托',
            '8901': '活期结构',
            '9201': '零整',
            '9101': '整存整取',
            '9102': '大额整存整取',
            '9103': '整存整取资本',
            '9601': '通知存款',
            '9603': '通知存款资本',
            '9301': '存本取息',
            '8201': '定活两便'
        },
        //业务类型
        VOUCHER_TYPE: {
            'MR0000': '买入',
            'SH0000': '赎回',
            'ZUR000': '转换入',
            'ZUC000': '转换出',
            'ZIR000': '置换入',
            'ZIC000': '置换出',
            'DJ0000': '冻结',
            'JD0000': '解冻',
            'YYSH00': '预约赎回',
            'YYSHCX': '预约赎回撤销',
            'YYMR00': '预约买入',
            'YYMRCX': '预约买入撤销',
            'XJFH00': '现金分红',
            'JZFH00': '结转分红',
            'JZ0000': '结转本金',
            'GK0000': '改卡号',
            'HK0000': '易换通换卡'
        },
        CHANNEL_TYPE: {
            '01': '柜台',
            '02': '网银',
            '03': '电话IVR',
            '04': '电话坐席',
            '05': '自助',
            '06': '同业',
            '07': '手机',
            '08': '批量'
        },
        // 账户类型
        BUSS_TYPE: {
            "8101": "活期",
            "8102": "活期",
            "8104": "活期",
            "8301": "活期",
            "8201": "定活两便",
            "8202": "定活两便(存单)",
            "9101": "整整",
            "9102": "整整",
            "9104": "整整(存单)",
            "9106": "定活通",
            "9112": "整整",
            "9201": "零整",
            "9601": "通知存款",
            "9602": "通知存款(存单)",
            "014": "定期",
            "1100": "活期",
            "1200": "定期",
            "1209": "通知存款",
            "9105": "智能定期_整整",
            "9604": "智能定期_通知",
            "9108": "智能定期_定活通",
            "9999": "智能存款",
            "9109": "大额存款"
        }
    };

    var Formatter = function (_Service) {
        inherits(Formatter, _Service);

        function Formatter() {
            classCallCheck(this, Formatter);
            return possibleConstructorReturn(this, (Formatter.__proto__ || Object.getPrototypeOf(Formatter)).apply(this, arguments));
        }

        createClass(Formatter, [{
            key: 'maskDealMobileNumber',

            /**
             * 手机号掩码处理
             * @param {Object} mobilePhone : 完整手机号
             * @return 掩码手机号
             * @例：maskDealMobileNumber("13410979722"); //"134****722"
             */
            value: function maskDealMobileNumber(mobileNumber) {
                if (mobileNumber) {
                    var numLength = mobileNumber.length;
                    if (numLength < 6) {
                        return mobileNumber;
                    }
                    return mobileNumber.substring(0, 3) + "****" + mobileNumber.substring(numLength - 3, numLength);
                } else {
                    return mobileNumber;
                }
            }

            /**
             * [根据手机网银规范去除金额数字千分位], 规则：
             * 1.将带有逗号格式的金额，装换成常规数字
             * 2.有千分位金额数字会去除千分位
             *
             * @param {String | Number} moneyNum : 有千分位的金额数字或金额数字字符串
             * @return {String} : 去除千分位后的金额数字
             * @例: removeMoneyNumberComma("123,456.1278");//"123456.13"
             *
             * 注意：
             * 1.这里利用了JS的类型转换特性，永远不会报错
             * 2.isNaN==true默认给值0
             */

        }, {
            key: 'removeMoneyNumberComma',
            value: function removeMoneyNumberComma(moneyNum) {
                moneyNum = (moneyNum + '').replace(/,/g, "");
                moneyNum = isNaN((1 * moneyNum).toFixed(2)) ? Number(0).toFixed(2) : (1 * moneyNum).toFixed(2);
                return (moneyNum + '').replace(/\.00/g, '');
            }

            /**
             * [根据手机网银规范格式化金额数字]， 规则：
             * 1.金额数字小数后小于两位，补零到小数位两位
             * 2.金额数字小数后两位，不处理
             * 3.金额数字小数大于两位，四舍五入至小数位两位
             *
             * @param {String} moneyNum : 金额数字
             * @return {String} : 规范格式的金额数字
             * @例： formatMoneyNumber("7801224.4");//"7,801,224.40"
             *
             * 注意：
             * 1.这里利用了JS的类型转换特性，永远不会报错
             * 2.isNaN==true默认给值0.00
             */

        }, {
            key: 'formatMoneyNumber',
            value: function formatMoneyNumber(moneyNum) {
                var result = isNaN((1 * moneyNum).toFixed(2)) ? Number(0).toFixed(2) : (1 * moneyNum).toFixed(2);
                return (/\./.test(result) ? result.replace(/(\d{1,3})(?=(\d{3})+\.)/g, "$1,") : result.replace(/(\d{1,3})(?=(\d{3})+\b)/g, "$1,")
                );
            }
            /**
             * [根据手机网银规范格式化利率数字],  规则：
             * 1.去除利率数字小数后的无用零
             * 2.小数后位数小于等于4位，不处理
             * 3.小数后位数大于4位，四舍五入至小数位4位
             *
             * @param {String | Number} interestRate： 格式化前的利率数字或利率数字字符串
             * @return {Number} : 格式化后的利率数字
             * @例： formatInterestRate(0.45678);//0.4568
             *
             * 注意：
             * 1.这里利用了JS的类型转换特性，永远不会报错
             * 2.isNaN==true默认给值1
             */

        }, {
            key: 'formatInterestRate',
            value: function formatInterestRate(interestRate) {
                interestRate = isNaN((1 * interestRate).toFixed(4)) ? Number(1).toFixed(4) : (1 * interestRate).toFixed(4);
                return 1 * ('' + interestRate).replace(/0+$/, "");
            }
            /**
             * @description : 掩码处理完整卡号
             * @param {String}  cardNum : 银行卡号
             * @return {String} : 掩码卡号
             * @例： mashDealCardNum("6225380010777409");//6225****7409
             */

        }, {
            key: 'mashDealCardNum',
            value: function mashDealCardNum(cardNum) {
                try {
                    var numLength = cardNum.length;
                    if (numLength < 8) {
                        return cardNum;
                    }
                    return cardNum.substring(0, 4) + "****" + cardNum.substring(numLength - 4, numLength);
                } catch (err) {
                    return cardNum;
                }
            }
            /**
             * @description : 掩码处理完整的购证卡号
             * @param {String}  buyCardNum : 购证卡号
             * @return {String} : 掩码购证卡号
             * @例： maskDealBuyCardNum"0838011727");//083****727
             */

        }, {
            key: 'maskDealBuyCardNum',
            value: function maskDealBuyCardNum(buyCardNum) {
                try {
                    var numLength = buyCardNum.length;
                    if (numLength < 6) {
                        return buyCardNum;
                    }
                    return buyCardNum.substring(0, 3) + "****" + buyCardNum.substring(numLength - 3, numLength);
                } catch (err) {
                    return buyCardNum;
                }
            }
            /**
             * @description ：账户别名处理
             * @param {String} alias : 账户别名
             * @return {String} ：账户别名简化处理
             * @例：
             *  getSimplifiedAlias("生活消费类型卡");//"生活消.."
             *  getSimplifiedAlias();//"---"
             */

        }, {
            key: 'getSimplifiedAlias',
            value: function getSimplifiedAlias(alias) {
                var aliasStr = "";
                if (alias == null || "---" === alias || "" === alias) {
                    aliasStr = "---";
                } else {
                    aliasStr = alias;
                }
                if (aliasStr.length > 5) {
                    aliasStr = alias.substring(0, 3) + "..";
                }

                return aliasStr;
            }
            /**
             * @description 接受没有掩码的账户别名 和 没有掩码的银行账号，并将其拼凑成一个字符串
             * @param  {string}  alias : 没有掩码的账户别名
             * @param  {string}  accNum : 没有掩码的银行账号
             * @return {String}:  账户别名、银行账号拼凑成的字符串
             * @例： FormatService.joinAliasAndAccNum( "生活消费类型卡", "6225380010777409" ); //"生活消..： 6225****7409"
             */

        }, {
            key: 'joinAliasAndAccNum',
            value: function joinAliasAndAccNum(alias, accNum) {
                if (accNum != null) {
                    var aliasStr = "未命名";
                    var accNumStr = accNum;
                    if (alias != null) {
                        aliasStr = alias.toString();
                    }
                    aliasStr = this.getSimplifiedAlias(aliasStr);

                    accNumStr = aliasStr + "： " + this.mashDealCardNum(accNumStr);
                    return accNumStr;
                }
            }
            /**
             * @description 接受没有掩码的银行账号、没有掩码的账户别名和开户所在地，并将其拼凑成一个字符串
             * @param  {string}  alias : 没有掩码的账户别名
             * @param  {string}  accNum : 没有掩码的银行账号
             * @param  {string}  position ： 开户所在地
             * @return {String}:  银行账号、账户别名、开户所在地 拼凑成的字符串
             * @例：joinAccNumAliasPosition("6225380010777409", "生活消费类型卡", "深圳" ); //"6225****7409[生活消..]|深圳"
             */

        }, {
            key: 'joinAccNumAliasPosition',
            value: function joinAccNumAliasPosition(accNum, alias, position) {
                if (accNum != null) {
                    var accNumStr = accNum;
                    var aliasStr = alias != null ? alias.toString() : "未命名";
                    position = position || "";
                    aliasStr = this.getSimplifiedAlias(aliasStr);
                    accNumStr = this.mashDealCardNum(accNumStr) + "[" + aliasStr + "]";
                    if (position != "") {
                        accNumStr += "|" + position;
                    }
                    accNumStr = accNumStr.replace(/\[.+\]/, function (t) {
                        if (t.length <= 5) {
                            return t;
                        } else {
                            return '[' + t.substr(1, 3) + '..]';
                        }
                    });
                    return accNumStr;
                }
                return "";
            }

            /**
             * 格式化数字成中文大写数字
             * @param number {Number} 要格式化的数值，不支持小数的科学数字
             */

        }, {
            key: 'arabicToChinese',
            value: function arabicToChinese(number) {
                var chineseNum = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"];
                var chineseUnit = ["", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟", "万", "拾", "佰", "仟"];

                var a = /^\s*$/.test(number),
                    //空字符
                    b = isNaN(Number(number)),
                    //非数字
                    c = /e/.test(Number(number) + ""); //科学数字
                if (a || b || c) {
                    return "";
                }

                number = parseInt(Number(number)).toString();
                if (number.length > 15) return "";
                if (number == "0") return chineseNum[0];

                var result = "";
                for (var i = 0, len = number.length; i < len; i++) {
                    result += chineseNum[number.charAt(i)] + chineseUnit[len - i - 1];
                }

                result = result.replace(/(?:零[拾佰仟])+/g, "零").replace(/亿零*万/, "亿").replace(/零+([万亿])/g, "$1零").replace(/零+/g, "零").replace(/^(.+?)零*$/, "$1");

                return result;
            }

            /**
             * 金额数字转中文大写，支持到分
             */

        }, {
            key: 'convertToCHNumber',
            value: function convertToCHNumber(number) {
                if (!number) {
                    return "";
                }
                number = number.toString().trim().replace(/^[-+]/, "");
                if (!number || isNaN(number)) return "";

                number = "0" + number;
                number = number.indexOf(".") < 0 ? number + ".00" : number + "00";
                number = number.replace(/^(?:0(?!\.))*(\d+\.\d\d)\d*$/, "$1").replace(".", "").replace(/0*(\d+)$/, "$1");

                if (!/^\d+$/.test(number) || number.length > 17) return "";
                if (/^0+$/.test(number)) return "零元";

                var chineseNum = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"];
                var chineseUnit = ["分", "角", "元", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟", "万", "拾", "佰", "仟"];

                var result = "";
                for (var i = 0; i < number.length; i++) {
                    result += chineseNum[number.charAt(i)] + chineseUnit[number.length - i - 1];
                }

                result = result.replace(/(?:零[分角拾佰仟])+/g, "零").replace(/零+([元万亿])/g, "$1").replace(/亿零*万/, "亿").replace(/([万亿])零+元/, "$1元").replace(/零+/g, "零").replace(/零*$/, "").replace(/^元零+/, "").replace(/元$/, "元整");

                return result;
            }
            /**
             * 邮箱验证
             * @param emailCode
             * @returns {*}
             */

        }, {
            key: 'emailVerify',
            value: function emailVerify(email) {
                return RegUtil.test(RegUtil.REG_MODE.EMAIL, email);
            }
            /**
            * 手机验证
            * @param numberCode
            * @returns {*}
            */

        }, {
            key: 'phoneVerify',
            value: function phoneVerify(number) {
                return RegUtil.test(RegUtil.REG_MODE.PHONE, number);
            }
            /**
             * 固话验证和手机验证
             * @param numberCode
             * @returns {*}
             */

        }, {
            key: 'telVerify',
            value: function telVerify(number) {
                return RegUtil.test(RegUtil.REG_MODE.TEL, number);
            }
            /**
             * 金额验证
             * @param amountCode
             * @returns {*}
             */

        }, {
            key: 'amountVerify',
            value: function amountVerify(amount) {
                return RegUtil.test(RegUtil.REG_MODE.AMOUNT, amount);
            }
            /**
             * 空格验证
             * @param inputCode
             * @returns {*}
             */

        }, {
            key: 'spaceVerify',
            value: function spaceVerify(input) {
                return RegUtil.test(RegUtil.REG_MODE.SPACE, input);
            }
            /**
             * 6位交易密码验证
             * @param pwdCode
             * @returns {*}
             */

        }, {
            key: 'pwdVerify',
            value: function pwdVerify(pwd) {
                return RegUtil.test(RegUtil.REG_MODE.PASSWORD, pwd);
            }
            /**
             * 判断是否包括字母数字与汉字之外的字符
             * @param charsetCode
             * @returns {*}
             */

        }, {
            key: 'specialCharsetVerify',
            value: function specialCharsetVerify(charset) {
                return RegUtil.test(RegUtil.REG_MODE.SPECIAL_CHARSET, charset);
            }
            //账户类型

        }, {
            key: 'getAccountTypeName',
            value: function getAccountTypeName(code) {
                return FINANCE_TERMINOLOGY.ACCOUNT_TYPE[code] || '';
            }
            //业务类型对应中文名

        }, {
            key: 'getVoucherTypeName',
            value: function getVoucherTypeName(code) {
                return FINANCE_TERMINOLOGY.VOUCHER_TYPE[code] || '';
            }
            //获取渠道名

        }, {
            key: 'getChannelTypeName',
            value: function getChannelTypeName(code) {
                return FINANCE_TERMINOLOGY.CHANNEL_TYPE[code] || '';
            }
            //获取账户类型

        }, {
            key: 'getBussType',
            value: function getBussType(key) {
                return FINANCE_TERMINOLOGY.BUSS_TYPE[key] || "储蓄";
            }
            // 获取币种名称

        }, {
            key: 'getCurrType',
            value: function getCurrType(code) {
                return FINANCE_TERMINOLOGY.CURRENCY_TYPE[code] || " ";
            }
            /**
             * 根据code获取币种名称，支持的code有两种(简称 eg.RMB 或者是 数字 eg.01)，数值的映射有两种，通过useMap2来确定使用哪个map
             * @param code {String} 币种的code，支持多位code连传 eg. '0123' => '人民币, 欧元'
             * @param useMap2 {Boolean} true为使用map1，false为使用map2
             * @return {String} 币种名称
             */

        }, {
            key: 'getCurrencyName',
            value: function (_getCurrencyName) {
                function getCurrencyName(_x, _x2) {
                    return _getCurrencyName.apply(this, arguments);
                }

                getCurrencyName.toString = function () {
                    return _getCurrencyName.toString();
                };

                return getCurrencyName;
            }(function (code, useMap2) {
                function getName(code, map, key) {
                    var name = '';
                    map.forEach(function (item) {
                        if (item[key] === code) name = item[1];
                    });
                    return name;
                }

                code = (code || '').toString().toUpperCase();

                if (code.length < 2) return ''; //code 不低于2位数

                if (useMap2) return getName(code, FINANCE_TERMINOLOGY.CURRENCY_MAP2, 0);

                if (!/\d+/.test(code)) return getName(code, FINANCE_TERMINOLOGY.CURRENCY_MAP, 2);

                if (code.length === 2) return getName(code, FINANCE_TERMINOLOGY.CURRENCY_MAP, 0) || "";

                var ret = [],
                    val;
                for (var i = 0, len = code.length; i < len; i += 2) {
                    if (val = getCurrencyName(code.substr(i, 2))) ret.push(val);
                }
                return ret.join();
            })
            /**
             * 根据币种名反查code值
             * @param {String} 币种名，支持多个币种名用','连接查询
             * @return {String} 币种code值，如果查询的是多个币种code，是多个code一起返回
             * @example getCurrencyCode('人民币,欧元') => '0123'
             * @example getCurrencyCode('人民币') => '01'
             */

        }, {
            key: 'getCurrencyCode',
            value: function getCurrencyCode(names) {
                var ret = "";
                var names = names.split(",");
                var map = FINANCE_TERMINOLOGY.CURRENCY_MAP;

                for (var i = 0; i < names.length; i++) {
                    var name = names[i];
                    for (var k = 0; k < map.length; k++) {
                        if (map[k][1] == name) ret += map[k][0];
                    }
                }

                return ret;
            }
            // 判断账户类型是不是活期  活期的业务逻辑多

        }, {
            key: 'isDemand',
            value: function isDemand(code) {
                return "8101810281048301".indexOf(code) >= 0;
            }
        }]);
        return Formatter;
    }(Service);

    /**
     *  日期处理器
     */
    var Dater = function (_Service) {
        inherits(Dater, _Service);

        function Dater() {
            classCallCheck(this, Dater);
            return possibleConstructorReturn(this, (Dater.__proto__ || Object.getPrototypeOf(Dater)).apply(this, arguments));
        }

        createClass(Dater, [{
            key: "_parseToDate",

            /*
             * 将字符型数据转换成Date类型
             * 支持的格式为："2012.3.4 23:22:33"、 "2012.3.4"、 new Date()
             */
            value: function _parseToDate(date) {
                if (typeof date === "string") {
                    if (date.length == 8) {
                        var arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2)];
                    } else if (date.length == 14) {
                        var arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2), date.substr(8, 2), date.substr(10, 2), date.substr(12, 2)];
                    } else {
                        var arr = date.split(/[^0-9]+/);
                    }
                    date = new Date(arr[0], arr[1] - 1, arr[2], arr[3] || 0, arr[4] || 0, arr[5] || 0);
                }
                return date;
            }

            /**
             * 格式化日
             * @param {String| Date} date : 原始日期信息
             * @param {String} format : 格式化样式。 可选，默认为"yyyy-MM-dd hh:mm:ss"
             * @return 格式化结果
             * @例: formatDate("20130112"), //"2013-01-12 00:00:00"
             *     formatDate("20130112", "yyyy*MM*dd hh:mm:ss"), //"2013*01*12 00:00:00"
             */

        }, {
            key: "formatDate",
            value: function formatDate(date, format) {
                if (!date || date == "0") {
                    return "";
                }
                if (!format) {
                    format = "yyyy-MM-dd hh:mm:ss";
                }
                if (typeof date == "string") {
                    if (date.length == 8) {
                        var arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2)];
                    } else if (date.length == 14) {
                        var arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2), date.substr(8, 2), date.substr(10, 2), date.substr(12, 2)];
                    } else {
                        var arr = date.split(/[^0-9]+/);
                    }

                    format = format.replace(/([a-z])\1+/ig, function (all, $1) {
                        var result = {
                            y: ~~arr[0],
                            M: ~~arr[1],
                            d: ~~arr[2],
                            h: ~~arr[3],
                            m: ~~arr[4],
                            s: ~~arr[5]
                        }[$1];
                        if (result != undefined && result < 10) {
                            result = "0" + result;
                        }
                        return result || "";
                    });
                    return format;
                }
                format = format.replace(/([a-z])\1+/ig, function (all) {
                    var first = all.charAt(0);
                    if ("y M d h m s".indexOf(first) >= 0) {
                        if (first == "y") {
                            return all.length > 2 ? date.getFullYear() : (date.getFullYear() + "").substr(2);
                        }
                        var result = {
                            M: date.getMonth() + 1,
                            d: date.getDate(),
                            h: date.getHours(),
                            m: date.getMinutes(),
                            s: date.getSeconds()
                        }[first];
                        result != undefined && result < 10 && (result = "0" + result);
                        return result;
                    } else {
                        return all;
                    }
                });
                return format;
            }

            /*
             * 比较两个时间的大小
             * @param:
             * d1&d2: 支持的格式为 "2012.3.4 23:22:33"、 "2012.3.4"、 new Date()
             * @return:
             * d1>d2 → 1,  d1==d2 → 0, d1<d2 → -1
             */

        }, {
            key: "compare",
            value: function compare(d1, d2) {
                if (!d1 || !d2) {
                    return "";
                }
                d1 = this._parseToDate(d1);
                d2 = this._parseToDate(d2);
                var result = d1.getTime() - d2.getTime();
                return result === 0 ? 0 : result > 0 ? 1 : -1;
            }

            /**
             * 日期比较，前者是否大于后者
             * @param d1
             * @param d2
             * @returns {boolean}
             */

        }, {
            key: "largerThan",
            value: function largerThan(d1, d2) {
                return this.compare(d1, d2) == 1 ? true : false;
            }
            /**
             * 日期比较，前者是否小于后者
             * @param d1
             * @param d2
             * @returns {boolean}
             */

        }, {
            key: "lessThan",
            value: function lessThan(d1, d2) {
                return this.compare(d1, d2) == -1 ? true : false;
            }
            /**
             * 日期比较，前者是否等于后者
             * @param d1
             * @param d2
             * @returns {boolean}
             */

        }, {
            key: "equalTo",
            value: function equalTo(d1, d2) {
                return this.compare(d1, d2) == 0 ? true : false;
            }
            /*
             * 日期先后推算
             * @params:
             *  now 当前时间， 支持的格式有 "2012.3.4 23:22:33" "2012.3.4" new Date()
             *  num 推算的值
             *  unit 计算的单位
             * @return:
             * 延后的Date的类型数据
             */

        }, {
            key: "addDate",
            value: function addDate(now, num, unit) {
                if (!now || num == undefined || !unit) {
                    return "";
                }
                now = this._parseToDate(now);
                var unit = {
                    y: 1000 * 60 * 60 * 24 * 365,
                    m: 1000 * 60 * 60 * 24 * 30,
                    d: 1000 * 60 * 60 * 24
                }[unit];
                return new Date(now.getTime() + num * unit);
            }

            /*
             * 计算两个时间之间的间隔
             * @params:
             *  start/end 开始/结束时间 支持的数据格式为 "2012.3.4 23:22:33" "2012.3.4" new Date()
             * @return: 两个日期之间相差的天数
             */

        }, {
            key: "calculateInterval",
            value: function calculateInterval(start, end) {
                if (!start || !end) {
                    return false;
                }
                start = this._parseToDate(start);
                end = this._parseToDate(end);
                return parseInt(Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
            }

            /*
             * 倒计时，传入特定的特定的时间和HTML元素，显示倒计时
             * @params:
             *  sec {Number} 剩余时间，单位为秒
             *  elem {Object} 各时间值的占位元素
             *     {
             *         sec: $("sec")[0],    //秒占位
             *         min: $("min")[0],    //分占位
             *         hour: $("hour")[0]   //时占位
             *     }
             */

        }, {
            key: "countDown",
            value: function countDown(sec, elems) {
                var f = {
                    timer: null,
                    sec: parseInt(sec) || 0,
                    zero: function zero(n) {
                        var n = parseInt(n, 10);
                        if (n > 0) {
                            if (n <= 9) {
                                n = "0" + n;
                            }
                            return String(n);
                        } else {
                            return "00";
                        }
                    },
                    dv: function dv() {
                        f.sec--;

                        var pms = {
                            day: "00",
                            sec: "00",
                            min: "00",
                            hour: "00"
                        };
                        var remain = f.sec;

                        if (remain <= 0) {
                            clearTimeout(f.timer);
                            // delete f;
                            return pms;
                        }

                        if (remain > 0) {
                            var day = f.zero(Math.floor(remain / (24 * 3600)));
                            var hour = f.zero(Math.floor((remain - day * 24 * 3600) / 3600));
                            var min = f.zero(Math.floor((remain - day * 24 * 3600 - hour * 3600) / 60));
                            var sec = f.zero(Math.floor(remain - day * 24 * 3600 - hour * 3600 - min * 60));
                            pms = {
                                day: day,
                                hour: hour,
                                min: min,
                                sec: sec
                            };
                        }

                        return pms;
                    },
                    ui: function ui() {
                        var pms = f.dv();
                        if (elems.sec) elems.sec.innerHTML = pms.sec;
                        if (elems.min) elems.min.innerHTML = pms.min;
                        if (elems.hour) elems.hour.innerHTML = pms.hour;
                        if (elems.day) elems.day.innerHTML = pms.day;
                        f.timer = setTimeout(f.ui, 1000);
                    }
                };
                f.ui();
            }

            /**
             * 获取系统时间与本地时间的时间差
             */

        }, {
            key: "getBankServerTime",
            value: function getBankServerTime() {
                var succ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () { };
                var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () { };

                this.app.request.call('qryEbankSysTime', {
                    silent: true,
                    success: function success(res) {
                        if (res.errCode == "000" || res.ret_code == "000000") {
                            var resultBody = res.responseBody || res.response_body;
                            var currentSyetemDateTime = resultBody['current_date_time'] || resultBody['sysTime'];
                            succ(currentSyetemDateTime);
                        } else {
                            console.error("服务器时间获取失败。");
                            err();
                        }
                    },
                    error: function error() {
                        console.error("服务器时间获取失败。");
                        err();
                    }
                });
            }
        }]);
        return Dater;
    }(Service);

    /**
     * talkingdata
     */
    var TalkingData = function (_Service) {
        inherits(TalkingData, _Service);

        function TalkingData() {
            classCallCheck(this, TalkingData);
            return possibleConstructorReturn(this, (TalkingData.__proto__ || Object.getPrototypeOf(TalkingData)).apply(this, arguments));
        }

        createClass(TalkingData, [{
            key: "_loadURL",

            /**
             * 通过scheme协议通信
             * @param url
             * @private
             */
            value: function _loadURL(url) {
                var iFrame = document.createElement("iframe");
                iFrame.setAttribute("src", url);
                iFrame.setAttribute("style", "display:none;");
                iFrame.setAttribute("height", "0px");
                iFrame.setAttribute("width", "0px");
                iFrame.setAttribute("frameborder", "0");
                document.body.appendChild(iFrame);
                iFrame.parentNode.removeChild(iFrame);
                iFrame = null;
            }
        }, {
            key: "_exec",
            value: function _exec(funName, args) {
                if (!TalkingData.IS_TD_ENV) return;
                var cmd = { functionName: funName, arguments: args };
                this._loadURL("talkingdata:" + JSON.stringify(cmd));
            }
        }, {
            key: "getDeviceId",
            value: function getDeviceId(callBack) {
                this._exec("getDeviceId", [callBack.name]);
            }

            /**
             * 追踪事件
             * @param eventId
             */

        }, {
            key: "track",
            value: function track(eventId) {
                this._exec("trackEvent", [eventId]);
            }

            /**
             * 追踪事件
             * @param eventId
             * @param eventLabel
             */

        }, {
            key: "trackWithLabel",
            value: function trackWithLabel(eventId, eventLabel) {
                this._exec("trackEventWithLabel", [eventId, eventLabel]);
            }
        }, {
            key: "trackWithParams",
            value: function trackWithParams(eventId, eventLabel, eventData) {
                this._exec("trackEventWithParameters", [eventId, eventLabel, eventData]);
            }

            /**
             * 开始事件追踪
             * @param pageName
             */

        }, {
            key: "beginTrack",
            value: function beginTrack(pageName) {
                this._exec("trackPageBegin", [pageName]);
            }

            /**
             * 技术事件追踪
             * @param pageName
             */

        }, {
            key: "stopTrack",
            value: function stopTrack(pageName) {
                this._exec("trackPageEnd", [pageName]);
            }
        }, {
            key: "setLocation",
            value: function setLocation(latitude, longitude) {
                this._exec("setLocation", [latitude, longitude]);
            }
        }]);
        return TalkingData;
    }(Service);

    /**
     * 工具方法
     */
    /**
     *  一个简单的枚举类,主要和 getDataByKey方法配合使用
     */
    var DATA = {
        //枚举对象
        OBJECT: "object",
        //枚举字符
        STRING: "String",
        //枚举数组
        ARRAY: "Array",
        /**
         *  如果找不到相应数据,则根据dataType给出一个默认值
         *  @param {String} dataType 想要获取的数据类型,与UtilityService.DataType枚举相对应起来
         *  @return  默认值
         */
        getDefaultValue: function getDefaultValue(dataType) {
            switch (dataType) {
                case DATA.OBJECT:
                    return null; break;
                case DATA.STRING:
                    return ""; break;
                case DATA.ARRAY:
                    return []; break;
            }
            return null;
        },


        /**
         *  想要获取的数据类型是否是能处理的数据类型
         *  @param {String} dataType 数据类型,与UtilityService.DataType枚举相对应起来
         *  @return: 对应数据类型默认值
         */
        containType: function containType(dataType) {
            return [DATA.OBJECT, DATA.STRING, DATA.ARRAY].includes(dataType);
        }
    };

    var _callType = function _callType(object) {
        return Object.prototype.toString.call(object);
    };

    var Utility = function (_Service) {
        inherits(Utility, _Service);

        function Utility() {
            classCallCheck(this, Utility);
            return possibleConstructorReturn(this, (Utility.__proto__ || Object.getPrototypeOf(Utility)).apply(this, arguments));
        }

        createClass(Utility, [{
            key: "getDataByKey",


            /**
             * 获取数据
             *  @param {Object} obj 取值数据源
             *  @param {String} 想要获取的数据类型,与DATA枚举相对应起来
             *  @param {String} Key值
             *  @example:
             *          一层传递:responseBody
             *          多层传递:responseBody/FunInfo
             *  @return: 如果找不到key则返回相应类型对应的默认值
             */
            value: function getDataByKey(obj, dataType, keyStr) {
                if (obj != null && keyStr != null && dataType != null && DATA.containType(dataType)) {
                    //获取Key层次
                    var keyStrArrary = keyStr.split("/");
                    //一层层取值
                    for (var i = 0; i < keyStrArrary.length; i++) {
                        if (obj.hasOwnProperty(keyStrArrary[i])) {
                            //如果是最后一层
                            if (i == keyStrArrary.length - 1) {
                                var resultData = obj[keyStrArrary[i]];
                                if (resultData == null) {
                                    return DATA.getDefaultValue(dataType);
                                } else {
                                    return resultData;
                                }
                            } else {
                                //如果不是最后一层
                                obj = obj[keyStrArrary[i]];
                                if (obj == null) {
                                    return DATA.getDefaultValue(dataType);
                                }
                            }
                        } else {
                            //如果找不到对应的属性
                            break;
                        }
                    }
                } else {
                    console.log("getObjectByKey 方法参数 传递错误 ");
                }
                return DATA.getDefaultValue(dataType);
            }

            /**
             * 获取字符串数据
             *  @param {Object} obj 取值数据源
             *  @param {String} Key值
             *  @example :
             *          一层传递:responseBody
             *          多层传递:responseBody/FunInfo
             *  @return: 如果找不到对象则返回空字符值
             */

        }, {
            key: "getStringByKey",
            value: function getStringByKey(obj, keyStr) {
                return this.getDataByKey(obj, DATA.STRING, keyStr);
            }

            /**
             * 获取数组数据
             *  @param {Object} obj 取值数据源
             *  @param {String} Key值
             *  @example:
             *          一层传递:responseBody
             *          多层传递:responseBody/FunInfo
             *  @return: 如果找不到对象一个length为0的数组
             */

        }, {
            key: "getArrayByKey",
            value: function getArrayByKey(obj, keyStr) {
                return this.getDataByKey(obj, DATA.ARRAY, keyStr);
            }

            /**
             * 获取对象数据
             *  @param {Object} obj 取值数据源
             *  @param {String} Key值
             *  @example:
             *          一层传递:responseBody
             *          多层传递:responseBody/FunInfo
             *  @return: 如果找不到对象返回null
             */

        }, {
            key: "getObjectByKey",
            value: function getObjectByKey(obj, keyStr) {
                return this.getDataByKey(obj, DATA.OBJECT, keyStr);
            }
        }, {
            key: "isFunction",
            value: function isFunction(object) {
                return _callType(object) === "[object Function]";
            }
        }, {
            key: "isArray",
            value: function isArray(object) {
                return _callType(object) === "[object Array]";
            }
        }, {
            key: "isObject",
            value: function isObject(object) {
                return _callType(object) === "[object Object]";
            }
        }, {
            key: "isString",
            value: function isString(object) {
                return _callType(object) === "[object String]";
            }
        }, {
            key: "isNumber",
            value: function isNumber(object) {
                return _callType(object) === "[object Number]";
            }
        }]);
        return Utility;
    }(Service);

    var sheetStyle = '\n    .dante-dialog{\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 9999;\n        display: -webkit-box;\n        -webkit-box-orient: horizontal;\n        -webkit-box-pack: center;\n        -webkit-box-align: center;\n        background: rgba(0,0,0,.4);\n    }\n    \n    .dante-dialog-content{\n        border-radius: 6px;\n        width: 270px;\n        -webkit-background-clip: padding-box;\n        background-clip: padding-box;\n        pointer-events: auto;\n        background-color: rgba(253,253,253,.95);\n        position: relative;\n        font-size: 16px;\n    }\n    \n    .dante-dialog-header{\n        height: 48px;\n        line-height: 48px;\n        text-align: center;\n        position: relative; \n        border-bottom: 1px solid #ded8d8;\n    }\n    .dante-dialog-body{\n        min-height: 40px;\n        border-top-left-radius: 6px;\n        border-top-right-radius: 6px;\n        border-bottom: 1px solid #ded8d8;\n        padding: 18px;\n        display: -webkit-box;\n        display: box;\n        -webkit-box-pack: center;\n        -webkit-box-align: center;\n        -webkit-box-orient: vertical;\n    }\n    .dante-dialog-body>div{\n        width:100%;\n        text-align: center;\n    }\n    .dante-dialog-footer{\n        height: 42px;\n        line-height: 42px;\n        border-bottom-left-radius: 6px;\n        border-bottom-right-radius: 6px;\n        width: 100%;\n    }\n    .dante-dialog-footer-btn{\n        color: #ff6839;\n        text-align: center;\n        width: 100%;\n        line-height: 42px;\n        text-align: center;\n        display: inline-block;\n    }\n    .dante-dialog-footer-left{\n        color: #7b7b7b;\n        width: 49%;\n        border-right:1px solid #ded8d8;\n    }\n    .dante-dialog-footer-right{\n      width: 49%;\n    }\n';

    var Dialog = function () {
        function Dialog() {
            classCallCheck(this, Dialog);
        }

        createClass(Dialog, null, [{
            key: 'alert',


            /**
             *
             * @param opts
             *  message {string}:
             *  buttonText {string}:
             *  action {function}:
             */
            value: function alert() {
                var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.close();
                var message = opts.message || '';
                var buttonText = opts.buttonText || '确定';
                var buttonCallback = opts.action || function () { };
                var alertHtml = '<div class="dante-dialog">' + '<div class="dante-dialog-content">' + '<div class="dante-dialog-body"><div>' + message + '</div></div>' + '<div class="dante-dialog-footer">' + '<span class="dante-dialog-footer-btn">' + buttonText + '</span>' + '</div></div></div>';

                Dialog._createStyleTag();
                var alertElem = document.createElement('div');
                alertElem.className = 'dante-dialog';
                alertElem.innerHTML = alertHtml;
                document.body.appendChild(alertElem);
                Dialog.alertElem = alertElem;

                var btnElem = alertElem.getElementsByClassName('dante-dialog-footer-btn')[0];
                btnElem.addEventListener('click', function () {
                    buttonCallback();
                    Dialog.close();
                });
            }

            /**
             * @param opts
             *
             *
             */

        }, {
            key: 'confirm',
            value: function confirm() {
                var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.close();
                var message = opts.message || '请选择';
                var leftButtonText = opts.leftText || '取消';
                var leftButtonCallback = opts.leftAction || function () { };
                var rightButtonText = opts.rightText || '确定';
                var rightButtonCallback = opts.rightAction || function () { };

                var confirmHtml = '<div class="dante-dialog">' + '<div class="dante-dialog-content">' + '<div class="dante-dialog-body"><div>' + message + '</div></div>' + '<div class="dante-dialog-footer">' + '<span class="dante-dialog-footer-btn dante-dialog-footer-left">' + leftButtonText + '</span>' + '<span class="dante-dialog-footer-btn dante-dialog-footer-right">' + rightButtonText + '</span>' + '</div></div></div>';

                Dialog._createStyleTag();
                var confirmElem = document.createElement('div');
                confirmElem.className = 'dante-dialog';
                confirmElem.innerHTML = confirmHtml;
                document.body.appendChild(confirmElem);
                Dialog.confirmElem = confirmElem;

                var leftBtnElem = confirmElem.getElementsByClassName('dante-dialog-footer-left')[0];
                leftBtnElem.addEventListener('click', function () {
                    leftButtonCallback();
                    Dialog.close();
                });

                var rightBtnElem = confirmElem.getElementsByClassName('dante-dialog-footer-right')[0];
                rightBtnElem.addEventListener('click', function () {
                    rightButtonCallback();
                    Dialog.close();
                });
            }
        }, {
            key: '_createStyleTag',
            value: function _createStyleTag() {
                var cssCode = sheetStyle;
                var styleEl = document.createElement('style');
                styleEl.setAttribute("type", "text/css");

                if (styleEl.styleSheet) {
                    //ie
                    styleEl.styleSheet.cssText += cssCode;
                } else if (document.getBoxObjectFor) {
                    styleEl.innerHTML += cssCode; //火狐支持直接innerHTML添加样式表字串
                } else {
                    styleEl.appendChild(document.createTextNode(cssCode));
                }
                document.head.appendChild(styleEl);
                Dialog.styleDom = styleEl;
            }
        }, {
            key: 'close',
            value: function close() {
                if (Dialog.styleDom) {
                    var parent = Dialog.styleDom.parentElement;
                    parent && parent.removeChild(Dialog.styleDom);
                    delete Dialog.styleDom;
                }
                if (Dialog.alertElem) {
                    var _parent = Dialog.alertElem.parentElement;
                    _parent && _parent.removeChild(Dialog.alertElem);
                    delete Dialog.alertElem;
                }
                if (Dialog.confirmElem) {
                    var _parent2 = Dialog.confirmElem.parentElement;
                    _parent2 && _parent2.removeChild(Dialog.confirmElem);
                    delete Dialog.confirmElem;
                }
            }
        }]);
        return Dialog;
    }();

    /**
     * 权限认证
     */
    /*
     * 银行专业术语
     * @USER_TYPE  ：用户类型
     * @ACCOUT_TYPE：账户类型
     * @LOGIN_TYPE ：登录方式
     */
    var BANK_TERMINOLOGY = {
        USER_TYPE: {
            PURE_CREDIT_CARD: { ID: 1, DESC: "纯信用卡用户类型" },
            NORMAL: { ID: 2, DESC: "普通网银用户类型" },
            SENIOR_UKEY: { ID: 3, DESC: "高级网银未设置安全工具用户类型［高级网银UKEY用户］" },
            SENIOR_OTP: { ID: 4, DESC: "高级网银设置安全工具用户类型［高级网银OTP用户］" },
            CREDIT_CARD_SECCLS: { ID: 5, DESC: "二类户+信用卡用户类型" },
            PURE_SECCLS: { ID: 6, DESC: "纯二类户类型" }
        },
        ACCOUNT_TYPE: {
            CREDIT_CARD: { ID: 1, DESC: "信用卡账户类型" },
            DEBIT_CARD: { ID: 2, DESC: "借记卡账户类型" },
            VIRTUAL_CARD: { ID: 3, DESC: "虚拟卡账户类型" },
            CREDIT_CARD_VIRTUAL_CARD: { ID: 4, DESC: "信用卡+虚拟卡账户类型" }
        },
        LOGIN_TYPE: {
            OTP: { TAG: "OTP", DESC: "OTP登录" },
            GENERAL: { TAG: "GENERAL", DESC: "密码登录" },
            GESTURE: { TAG: "GESTURE", DESC: "手势登录" },
            FINGERPRINT: { TAG: "FINGERPRINT", DESC: "指纹登录" }
        }
    };

    /**
     * SPA内存中登录缓存数据
     */
    var _MOBILE_LOGIN_DATA_ = {
        IS_LOGIN: false,
        IS_FIRST_LOGON: undefined,
        LOGIN_TYPE: undefined,
        LOGIN_DATA: undefined,
        USER_TYPE: undefined,
        ACCOUNT_TYPE: undefined
    };
    var Authentication = function (_Service) {
        inherits(Authentication, _Service);

        function Authentication(app) {
            classCallCheck(this, Authentication);

            var _this2 = possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this, app));

            _this2.USER_TYPE = BANK_TERMINOLOGY.USER_TYPE;
            _this2.LOGIN_TYPE = BANK_TERMINOLOGY.LOGIN_TYPE;
            _this2._authRule = {
                verify: true,
                privilegedGroup: []
            };
            _this2.detectAuthRule();
            return _this2;
        }

        /**
         * 是否已经登录
         */


        createClass(Authentication, [{
            key: 'isLogin',
            value: function isLogin() {
                return !!_MOBILE_LOGIN_DATA_.IS_LOGIN;
            }
            /**
             * 是否首次登录口袋网银
             */

        }, {
            key: 'isFirstLogon',
            value: function isFirstLogon() {
                return !!_MOBILE_LOGIN_DATA_.IS_FIRST_LOGON;
            }
            /**
             * 获取用户登录类型
             */

        }, {
            key: 'getLoginType',
            value: function getLoginType() {
                return _MOBILE_LOGIN_DATA_.LOGIN_TYPE;
            }
            /**
             * 获取用户登录信息
             */

        }, {
            key: 'getLoginData',
            value: function getLoginData() {
                return _MOBILE_LOGIN_DATA_.LOGIN_DATA;
            }
            /**
             * 获取账户类型
             */

        }, {
            key: 'getAccountType',
            value: function getAccountType() {
                return _MOBILE_LOGIN_DATA_.ACCOUNT_TYPE;
            }
            /**
             * 获取用户类型
             */

        }, {
            key: 'getUserType',
            value: function getUserType() {
                return _MOBILE_LOGIN_DATA_.USER_TYPE;
            }
            /**
             * 获取登录态
             */

        }, {
            key: 'getLoginStatus',
            value: function getLoginStatus() {
                return _MOBILE_LOGIN_DATA_;
            }

            /**
             * 设置系统登录状态数据
             * @param {string} type 登录类型
             * @param {object} data  登录信息
             */

        }, {
            key: 'setLoginStatus',
            value: function setLoginStatus(type, data) {
                var loginTypes = [];
                Object.keys(BANK_TERMINOLOGY.LOGIN_TYPE).forEach(function (item) {
                    loginTypes.push(BANK_TERMINOLOGY.LOGIN_TYPE[item]["TAG"]);
                });

                if (typeof "" !== "string" || !loginTypes.includes(type) || !data) {
                    console.warn("登陆数据设置有误！");
                    return;
                }
                /**
                 *  @firstLogonFlag: 是否首次登录
                 *    "0":首次登录
                 *    "1":非首次登录
                 *  @userType：用户类型
                 *    0: 信用卡，
                 *    1: 网银，
                 *    2: 网银+信用卡，
                 *    3: 财富e,
                 *    4: 信用卡+财富e,
                 *    5: 信用卡+二类户,
                 *    6: 纯二类户,
                 *    7: 网银+信用卡+二类户
                 * @bankType：网银标志
                 *    0: 网银普通用户
                 *    1: 网银高级用户
                 * @isSetTool：是否设置安全工具
                 *    "0": 高级网银未设置安全工具用户类型(UEY用户类型)
                 *    "1": 高级网银设置安全工具用户类型［高级网银OTP用户］
                 *     "": 高级网银设置安全工具用户类型［高级网银OTP用户］
                 */
                var isFirstLogon = data.firstLogonFlag == "0";
                var userType = parseInt(data["userType"]);
                var bankType = data["bankType"] || "";
                var isSetTool = data["isSetTool"] || "";
                var uType = "",
                    accType = "";

                // 判断用户类型、账户类型
                switch (userType) {
                    case 0:
                        {
                            accType = BANK_TERMINOLOGY.ACCOUNT_TYPE.CREDIT_CARD;
                            uType = BANK_TERMINOLOGY.USER_TYPE.PURE_CREDIT_CARD;
                        } break;
                    case 3:
                    case 4:
                        {
                            accType = BANK_TERMINOLOGY.ACCOUNT_TYPE.CFE;
                            uType = BANK_TERMINOLOGY.USER_TYPE.CFE;
                        } break;
                    case 5:
                        {
                            accType = BANK_TERMINOLOGY.ACCOUNT_TYPE.CREDIT_CARD_VIRTUAL_CARD;
                            uType = BANK_TERMINOLOGY.USER_TYPE.CREDIT_CARD_SECCLS;
                        } break;
                    case 6:
                        {
                            accType = BANK_TERMINOLOGY.ACCOUNT_TYPE.VIRTUAL_CARD;
                            uType = BANK_TERMINOLOGY.USER_TYPE.PURE_SECCLS;
                        } break;
                    default:
                        {
                            accType = BANK_TERMINOLOGY.ACCOUNT_TYPE.DEBIT_CARD;

                            switch (bankType) {
                                case "1":
                                    {
                                        if (isSetTool == "0") {
                                            //没有设置安全工具 高级网银未设置安全工具用户类型
                                            uType = BANK_TERMINOLOGY.USER_TYPE.SENIOR_UKEY;
                                        } else if (isSetTool == "1" || isSetTool == "") {
                                            //高级网银设置安全工具用户类型［高级网银OTP用户］
                                            uType = BANK_TERMINOLOGY.USER_TYPE.SENIOR_OTP;
                                        }
                                    } break;
                                case "0":
                                    uType = BANK_TERMINOLOGY.USER_TYPE.NORMAL; break;
                            }
                        } break;
                }

                _MOBILE_LOGIN_DATA_["IS_LOGIN"] = true;
                _MOBILE_LOGIN_DATA_["IS_FIRST_LOGON"] = isFirstLogon;
                _MOBILE_LOGIN_DATA_["LOGIN_TYPE"] = type;
                _MOBILE_LOGIN_DATA_["LOGIN_DATA"] = data;
                _MOBILE_LOGIN_DATA_["USER_TYPE"] = uType;
                _MOBILE_LOGIN_DATA_["ACCOUNT_TYPE"] = accType;
            }
            /**
             * 清除系统登录状态
             */

        }, {
            key: 'clearLoginStatus',
            value: function clearLoginStatus() {
                _MOBILE_LOGIN_DATA_['IS_LOGIN'] = false;
                _MOBILE_LOGIN_DATA_['IS_FIRST_LOGON'] = undefined;
                _MOBILE_LOGIN_DATA_['LOGIN_TYPE'] = undefined;
                _MOBILE_LOGIN_DATA_['LOGIN_DATA'] = undefined;
                _MOBILE_LOGIN_DATA_['USER_TYPE'] = undefined;
                _MOBILE_LOGIN_DATA_['ACCOUNT_TYPE'] = undefined;
            }
            /**
             * 刷新登录态
             * @param {String} type
             * @param {Object} data
             */

        }, {
            key: 'refreshLoginStatus',
            value: function refreshLoginStatus(type, data) {
                this.clearLoginStatus();
                if (type && data) {
                    this.setLoginStatus(type, data);
                }
            }

            /**
             * H5页面登录
             * @param {String} type
             * @param {Object} data
             */

        }, {
            key: 'login',
            value: function login(type, data) {
                var loginTypes = [];
                Object.keys(BANK_TERMINOLOGY.LOGIN_TYPE).forEach(function (item) {
                    loginTypes.push(BANK_TERMINOLOGY.LOGIN_TYPE[item]["TAG"]);
                });

                if (typeof "" !== "string" || !loginTypes.includes(type) || !data) {
                    console.warn("登录数据异常！");
                    return;
                }

                this.refreshLoginStatus(type, data);
                var synData = {
                    LOGIN_TYPE: type,
                    LOGIN_DATA: data
                };
                //将登录数据同步给Native
                bow.auth.synLogin(synData, function (err) {
                    if (err) {
                        console.warn("H5登录数据同步给Native失败！");
                    } else {
                        console.info("成功将H5登录数据同步给Native！");
                        //发送登录成功广播
                        bow.broadcast('loginSuccess', {
                            login: 'success',
                            dataKey: 'Login_Info_Data'
                        }, function (err) {
                            if (err) {
                                console.warn("登录成功广播失败！");
                            }
                        });
                    }
                });
            }

            /**
             * H5页面登录
             */

        }, {
            key: 'logout',
            value: function logout(succCb) {
                var errCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () { };

                //清除H5内存中的登录数据
                this.clearLoginStatus();
                //清除缓存数据
                bow.sharedMemory.clear();
                //调用登出接口
                this.app.request.call("logout", {
                    success: function success(res) {
                        console.info("后台系统登出成功！");
                        //将登出状态同步通知Native
                        bow.auth.synLogout(function (err) {
                            if (err) {
                                console.warn("H5登出状态同步通知Native失败！");
                                errCb(err);
                            } else {
                                console.info("成功将H5登出状态同步给Native！");
                                succCb && succCb();
                            }
                        });
                    },
                    error: function error(err) {
                        console.warn("后台系统登出异常！");
                        errCb(err);
                    }
                });
            }

            //触发登录

        }, {
            key: 'launchLogin',
            value: function launchLogin() {
                bow.auth.launchLogin(function (err, data) {
                    // 登录模块功能异常
                    if (err) {
                        Dialog.alert({ message: "登录异常" });
                    }

                    if (data["state"] == 0) {
                        // 登录成功
                        window.location.reload(true);
                    } else if (data["state"] == 1) {
                        //取消登录
                        if (window.history.length <= 1) {
                            bow.navigator.back();
                        } else {
                            window.history.back();
                        }
                    }
                });
            }

            /**
             * 监听登录状态变化
             * 登录广播：例 {behave:"login", state: 0}
             *  @behave：行为， “login”-登录， “logout”-登出
             *  @state：状态， 0-成功，1-失败
             */

        }, {
            key: 'watchLoginStateChange',
            value: function watchLoginStateChange() {
                var self = this;
                bow.on('loginStateChanged', function () {
                    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    if (data.state == 0) {
                        // 状态变化成功
                        self._buildLoginStatus();
                        window.location.reload(true);
                    }
                });
            }

            /**
             * 获取系统的共享登录态数据
             * @param cb
             */

        }, {
            key: 'fetchLogin',
            value: function fetchLogin(cb) {
                //获取系统的共享登录态数据
                bow.auth.fetchLogin(function (err, data) {
                    if (err) {
                        return console.warn("共享登录态数据获取失败！");
                    }
                    cb && cb(data || {});
                });
            }

            /**
             *  依据系统层面共享的登录数据，建立H5页面内存中的登录态数据
             */

        }, {
            key: '_buildLoginStatus',
            value: function _buildLoginStatus(cb) {
                var _this = this;
                _this.fetchLogin(function () {
                    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                    _this.refreshLoginStatus(data.LOGIN_TYPE, data.LOGIN_DATA);
                    cb && cb();
                });
            }

            /**
             * 页面启动时，初始化登录数据。
             * @param cb
             */

        }, {
            key: 'initLoginOnStart',
            value: function initLoginOnStart(cb) {
                this._buildLoginStatus(cb);
            }

            /**
             * 检测当前页面权限要求
             */

        }, {
            key: 'detectAuthRule',
            value: function detectAuthRule() {
                var self = this;
                var auth = document.getElementById("__auth__");
                if (auth && auth.getAttribute("verify") === "true") {
                    this._authRule.verify = true;
                    var userType = auth.getAttribute("userType");
                    if (userType) {
                        var uType = userType.replace(/\[|\]|\,/g, "").replace(/\W/g, "");
                        uType.split('').forEach(function (item) {
                            self._authRule.privilegedGroup.push(Number.parseInt(item));
                        });
                    } else {
                        Object.keys(BANK_TERMINOLOGY.USER_TYPE).forEach(function (type) {
                            self._authRule.privilegedGroup.push(BANK_TERMINOLOGY.USER_TYPE[type]["ID"]);
                        });
                    }
                } else {
                    this._authRule.verify = false;
                }
            }

            /**
             * 获取页面权限设置
             */

        }, {
            key: 'getAuthRule',
            value: function getAuthRule() {
                return this._authRule;
            }
            /**
             * 进入页面时，判断登录状态
             */

        }, {
            key: 'verifyAccess',
            value: function verifyAccess() {
                var authRule = this.getAuthRule();
                if (!authRule.verify) return true;
                //检查是否需要登录
                if (!this.isLogin()) {
                    //跳转到登录页面
                    this.launchLogin();
                    return false;
                }
                //检查用户类型是否满足要求
                if (authRule.privilegedGroup.includes(this.getUserType()["ID"])) {
                    return true;
                } else {
                    //用户类型错误提醒
                    this.warnError();
                    return false;
                }
            }
            /**
             * 错误提示.
             * @param {object} option
             *         @prop FLAG 提醒标识
             *         @prop MSG  提示语
             *         @prop TYPE 展示模式。POPUP:弹窗展示(默认)，PAGE:页面展示.
             */

        }, {
            key: 'warnError',
            value: function warnError() {
                var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "POPUP";
                var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
                var msg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "用户不满足条件";

                var UNSUPPORT_WARNINGS = {
                    C1: "您尚未持有平安信用卡，暂不能使用此功能。",
                    C2: "您的网银下挂账户无平安银行信用卡，暂时不能使用此功能。",
                    D1: "您的网银下挂账户无平安银行借记卡，暂时不能使用此功能。",
                    D2: "您的网银下挂账户无平安银行借记卡，暂时不能使用此功能。添加银行账号。",
                    G1: "您是平安银行的普通网银客户，暂不能使用此功能。请到平安银行网点申请开通高级网银服务。",
                    S1: '您还没有设置手机银行的安全工具（手机动态密码），暂时不能使用此功能。请使用电脑登录平安一账通网上银行，在"个人设置- 手机银行安全工具设置"下设置，或持有效证件到我行网点办理。'
                };

                switch (type) {
                    case "POPUP":
                        {
                            //TODO 弹窗展示
                            Dialog.alert({ message: UNSUPPORT_WARNINGS[flag] || msg || "用户不满足条件" });
                        } break;
                    case "PAGE":
                        {
                            //TODO 跳转到统一报错页面
                        } break;
                }
            }
        }]);
        return Authentication;
    }(Service);

    /**
     * 环境侦测器
     */
    var VENDOR_SYMBOL = {
        OS: {
            IPAD: "ipad",
            IPOD: "ipod",
            IPHONE: "iphone",
            ANDROID: "android",
            WEBOS: "webos",
            BLACKBERRY: "blackberry"
        },
        BROWSER: {
            UC: "uc",
            IE: "ie",
            QQ: "qq",
            MIUI: "miui",
            OPPO: "oppo",
            2345: "2345",
            QIHU: "qihu",
            SOGOU: "sogou",
            OPERA: "opera",
            BAIDU: "baidu",
            MEIZU: "meizu",
            CHROME: "chrome",
            LIEBAO: "liebao",
            SAFARI: "safari",
            MAXTHON: "maxthon",
            SAMSUNG: "samsung",
            DOLPHIN: "dolphin",
            FIREFOX: "firefox"
        },
        APP: {
            QQ: "qq",
            WEIXIN: "weixin",
            WEIBO: "weibo",
            YOUKU: "youku",
            ALIPAY: "alipay",
            NEWSAPP: "newsapp",
            BAIDUBOX: "baidubox",
            PAEBANK: "paebank"
        }
    };

    var VENDOR_MATCHER = {
        OS: [[VENDOR_SYMBOL.OS.IPAD, /(ipad).*os\s([\d_]+)/], [VENDOR_SYMBOL.OS.IPOD, /(ipod)(.*os\s([\d_]+))?/], [VENDOR_SYMBOL.OS.WEBOS, /(webos|hpwos)[\s\/]([\d.]+)/], [VENDOR_SYMBOL.OS.IPHONE, /(iphone\sos)\s([\d_]+)/], [VENDOR_SYMBOL.OS.ANDROID, /(android);?[\s\/]+([\d.]+)?/], [VENDOR_SYMBOL.OS.BLACKBERRY, /(blackberry).*version\/([\d.]+)/]],
        BROWSER: [[VENDOR_SYMBOL.BROWSER.UC, /(?:ucweb|ucbrowser)\/?([\d\.]+)/], [VENDOR_SYMBOL.BROWSER.IE, /msie[ ](\d+\.\d+)/], [VENDOR_SYMBOL.BROWSER.QQ, /(?:qqbrowser|qqlivebrowser)\/([^\s]+)/], [VENDOR_SYMBOL.BROWSER.MIUI, /miuibrowser\/([\d\.]+)/], [VENDOR_SYMBOL.BROWSER.OPPO, /oppobrowser\/([\d\.]+)/], [VENDOR_SYMBOL.BROWSER.QIHU, /qihu|360se/], [VENDOR_SYMBOL.BROWSER.SOGOU, /(?:metasr|sogou[\w]*)[ \/]([\d\.]+)/], [VENDOR_SYMBOL.BROWSER.OPERA, /(?:opera|opr|oupeng)\/([\d\.]+)/], [VENDOR_SYMBOL.BROWSER.BAIDU, /(?:bidubrowser|baidubrowser)[\/ ]?([\d\.\w]+)/], [VENDOR_SYMBOL.BROWSER.MEIZU, / mz-/], [VENDOR_SYMBOL.BROWSER.CHROME, /chrome\/([\d\.]+)/], [VENDOR_SYMBOL.BROWSER.LIEBAO, /(?:lbbrowser|liebaofast)\/?([\d\.]+)?/], [VENDOR_SYMBOL.BROWSER.SAFARI, /safari\/([\d\.]+)/], [VENDOR_SYMBOL.BROWSER["2345"], /2345/], [VENDOR_SYMBOL.BROWSER.MAXTHON, /maxthon\/([\d\.]+)/], [VENDOR_SYMBOL.BROWSER.SAMSUNG, /samsungbrowser\/([\d\.]+)/], [VENDOR_SYMBOL.BROWSER.DOLPHIN, /aphone|apad/], [VENDOR_SYMBOL.BROWSER.FIREFOX, /firefox\/([\d\.\w]+)/]],
        APP: [[VENDOR_SYMBOL.APP.QQ, / qq\/([^\s]+)/], [VENDOR_SYMBOL.APP.WEIBO, / weibo /], [VENDOR_SYMBOL.APP.YOUKU, /youku/], [VENDOR_SYMBOL.APP.ALIPAY, /aplipay/], [VENDOR_SYMBOL.APP.WEIXIN, /micromessenger\/([^\s]+)/], [VENDOR_SYMBOL.APP.PAEBANK, /paebank/], [VENDOR_SYMBOL.APP.NEWSAPP, /newsapp/], [VENDOR_SYMBOL.APP.BAIDUBOX, /baiduboxapp|baiduboxpad/]]
    };

    var CURRENT_VENDOR = {
        OS: {
            VERSION: "",
            IS_IOS: false,
            IS_IPAD: false,
            IS_IPOD: false,
            IS_IPHONE: false,
            IS_ANDROID: false,
            IS_WEBOS: false,
            IS_BLACKBERRY: false
        },
        BROWSER: {
            VERSION: "",
            IS_IE: false,
            IS_QQ: false,
            IS_UC: false,
            IS_MIUI: false,
            IS_OPPO: false,
            IS_2345: false,
            IS_QIHU: false,
            IS_SOGOU: false,
            IS_OPERA: false,
            IS_BAIDU: false,
            IS_MEIZU: false,
            IS_CHROME: false,
            IS_LIEBAO: false,
            IS_SAFARI: false,
            IS_MAXTHON: false,
            IS_SAMSUNG: false,
            IS_DOLPHIN: false,
            IS_FIREFOX: false
        },
        APP: {
            VERSION: "",
            IS_QQ: false,
            IS_WEIBO: false,
            IS_YOUKU: false,
            IS_WEIXIN: false,
            IS_ALIPAY: false,
            IS_NEWSAPP: false,
            IS_PAEBANK: false,
            IS_BAIDUBOX: false
        }
    };

    var EnvironmentDetector = function () {
        function EnvironmentDetector() {
            classCallCheck(this, EnvironmentDetector);

            EnvironmentDetector.detect();
            this.OS = CURRENT_VENDOR.OS;
            this.APP = CURRENT_VENDOR.APP;
            this.BROWSER = CURRENT_VENDOR.BROWSER;
        }
        // 单例


        createClass(EnvironmentDetector, null, [{
            key: "getSingleInstance",
            value: function getSingleInstance() {
                return this.instance || (this.instance = new EnvironmentDetector());
            }

            /**
             * 监测当前环境
             */

        }, {
            key: "detect",
            value: function detect() {
                var AGENT = navigator.userAgent.toLowerCase();
                //监测OS环境
                VENDOR_MATCHER.OS.forEach(function (matcher) {
                    var info = AGENT.match(matcher[1]);
                    if (info) {
                        CURRENT_VENDOR.OS.VERSION = info[2];
                        switch (matcher[0]) {
                            case VENDOR_SYMBOL.OS.IPAD:
                                CURRENT_VENDOR.OS.IS_IPAD = true; break;
                            case VENDOR_SYMBOL.OS.IPOD:
                                CURRENT_VENDOR.OS.IS_IPOD = true; break;
                            case VENDOR_SYMBOL.OS.IPHONE:
                                CURRENT_VENDOR.OS.IS_IPHONE = true; break;
                            case VENDOR_SYMBOL.OS.WEBOS:
                                CURRENT_VENDOR.OS.IS_WEBOS = true; break;
                            case VENDOR_SYMBOL.OS.ANDROID:
                                CURRENT_VENDOR.OS.IS_ANDROID = true; break;
                            case VENDOR_SYMBOL.OS.BLACKBERRY:
                                CURRENT_VENDOR.OS.IS_BLACKBERRY = true; break;
                        }
                        CURRENT_VENDOR.OS.IS_IOS = !!(CURRENT_VENDOR.OS.IS_IPAD || CURRENT_VENDOR.OS.IS_IPOD || CURRENT_VENDOR.OS.IS_IPHONE);
                        return;
                    }
                });

                //监测Browser环境
                VENDOR_MATCHER.BROWSER.forEach(function (matcher) {
                    var info = AGENT.match(matcher[1]);
                    if (info) {
                        CURRENT_VENDOR.BROWSER.VERSION = info[1];
                        switch (matcher[0]) {
                            case VENDOR_SYMBOL.BROWSER.UC:
                                CURRENT_VENDOR.BROWSER.IS_UC = true; break;
                            case VENDOR_SYMBOL.BROWSER.IE:
                                CURRENT_VENDOR.BROWSER.IS_IE = true; break;
                            case VENDOR_SYMBOL.BROWSER.QQ:
                                CURRENT_VENDOR.BROWSER.IS_QQ = true; break;
                            case VENDOR_SYMBOL.BROWSER.MIUI:
                                CURRENT_VENDOR.BROWSER.IS_MIUI = true; break;
                            case VENDOR_SYMBOL.BROWSER.OPPO:
                                CURRENT_VENDOR.BROWSER.IS_OPPO = true; break;
                            case VENDOR_SYMBOL.BROWSER['2345']:
                                CURRENT_VENDOR.BROWSER.IS_2345 = true; break;
                            case VENDOR_SYMBOL.BROWSER.QIHU:
                                CURRENT_VENDOR.BROWSER.IS_QIHU = true; break;
                            case VENDOR_SYMBOL.BROWSER.SOGOU:
                                CURRENT_VENDOR.BROWSER.IS_SOGOU = true; break;
                            case VENDOR_SYMBOL.BROWSER.OPERA:
                                CURRENT_VENDOR.BROWSER.IS_OPERA = true; break;
                            case VENDOR_SYMBOL.BROWSER.BAIDU:
                                CURRENT_VENDOR.BROWSER.IS_BAIDU = true; break;
                            case VENDOR_SYMBOL.BROWSER.MEIZU:
                                CURRENT_VENDOR.BROWSER.IS_MEIZU = true; break;
                            case VENDOR_SYMBOL.BROWSER.CHROME:
                                CURRENT_VENDOR.BROWSER.IS_CHROME = true; break;
                            case VENDOR_SYMBOL.BROWSER.LIEBAO:
                                CURRENT_VENDOR.BROWSER.IS_LIEBAO = true; break;
                            case VENDOR_SYMBOL.BROWSER.SAFARI:
                                CURRENT_VENDOR.BROWSER.IS_SAFARI = true; break;
                            case VENDOR_SYMBOL.BROWSER.MAXTHON:
                                CURRENT_VENDOR.BROWSER.IS_MAXTHON = true; break;
                            case VENDOR_SYMBOL.BROWSER.SAMSUNG:
                                CURRENT_VENDOR.BROWSER.IS_SAMSUNG = true; break;
                            case VENDOR_SYMBOL.BROWSER.DOLPHIN:
                                CURRENT_VENDOR.BROWSER.IS_DOLPHIN = true; break;
                            case VENDOR_SYMBOL.BROWSER.FIREFOX:
                                CURRENT_VENDOR.BROWSER.IS_FIREFOX = true; break;
                        }
                        return;
                    }
                });

                //监测APP环境
                VENDOR_MATCHER.APP.forEach(function (matcher) {
                    var info = AGENT.match(matcher[1]);
                    if (info) {
                        switch (matcher[0]) {
                            case VENDOR_SYMBOL.APP.QQ:
                                CURRENT_VENDOR.APP.IS_QQ = true; break;
                            case VENDOR_SYMBOL.APP.WEIXIN:
                                CURRENT_VENDOR.APP.IS_WEIXIN = true; break;
                            case VENDOR_SYMBOL.APP.WEIBO:
                                CURRENT_VENDOR.APP.IS_WEIBO = true; break;
                            case VENDOR_SYMBOL.APP.YOUKU:
                                CURRENT_VENDOR.APP.IS_YOUKU = true; break;
                            case VENDOR_SYMBOL.APP.ALIPAY:
                                CURRENT_VENDOR.APP.IS_ALIPAY = true; break;
                            case VENDOR_SYMBOL.APP.NEWSAPP:
                                CURRENT_VENDOR.APP.IS_NEWSAPP = true; break;
                            case VENDOR_SYMBOL.APP.BAIDUBOX:
                                CURRENT_VENDOR.APP.IS_BAIDUBOX = true; break;
                            case VENDOR_SYMBOL.APP.PAEBANK:
                                CURRENT_VENDOR.APP.IS_PAEBANK = true; break;
                        }
                        return;
                    }
                });
            }
        }]);
        return EnvironmentDetector;
    }();

    /***
     * 系统运行时环境
     *  OS、Browser、App类型
     *  渠道号管理
     *  版本号管理
     */

    /**
     * 渠道标志
     * @type
     * APP_PAEBANK_ANDROID: 口袋网银APP（Android）
     * APP_PAEBANK_IPHONE: 口袋网银APP（iPhone）
     * APP_PAEBANK_IPAD: 口袋网银APP（iPad）
     * APP_WEIXIN: 微信
     * APP_ALIPAY: 支付宝
     * APP_QQ: QQ
     * APP_WANGLITONG: 万里通
     * APP_TXT: 天下通
     * BROWSER_ANDROID: Android浏览器
     * BROWSER_IOS: IOS浏览器
     * OTHER: 其他
     *
     */
    var CHANNEL_TYPE = {
        APP_PAEBANK_ANDROID: "3",
        APP_PAEBANK_IPHONE: "1",
        APP_PAEBANK_IPAD: "1",
        APP_WEIXIN: "4",
        APP_ALIPAY: "5",
        APP_QQ: "6",
        APP_WANGLITONG: "7",
        APP_TXT: "8",
        BROWSER_ANDROID: "x",
        BROWSER_IOS: "y",
        OTHER: "0"
    };

    /***  环境数据结构，下卦在env对象上
    {
    
        OS: {
            VERSION:"",
            IS_IOS:false,
            IS_IPAD:false,
            IS_IPOD:false,
            IS_IPHONE:false,
            IS_ANDROID:false,
            IS_WEBOS:false,
            IS_BLACKBERRY:false
        },
        BROWSER: {
            VERSION:"",
            IS_IE:false,
            IS_QQ:false,
            IS_UC:false,
            IS_MIUI:false,
            IS_OPPO:false,
            IS_2345:false,
            IS_QIHU:false,
            IS_SOGOU:false,
            IS_OPERA:false,
            IS_BAIDU:false,
            IS_MEIZU:false,
            IS_CHROME:false,
            IS_LIEBAO:false,
            IS_SAFARI:false,
            IS_MAXTHON:false,
            IS_SAMSUNG:false,
            IS_DOLPHIN:false,
            IS_FIREFOX:false
        },
        APP: {
            VERSION:"",
            IS_QQ:false,
            IS_WEIBO:false,
            IS_YOUKU:false,
            IS_WEIXIN:false,
            IS_ALIPAY:false,
            IS_NEWSAPP:false,
            IS_PAEBANK:false,
            IS_BAIDUBOX:false
        }
        CHANNEL_TYPE:"",
        APP_CONFIG :{},
        APP_VERSION:"",
        APP_MODE:"",
    }*/

    var Environment = function (_Service) {
        inherits(Environment, _Service);

        function Environment(app) {
            classCallCheck(this, Environment);

            var _this2 = possibleConstructorReturn(this, (Environment.__proto__ || Object.getPrototypeOf(Environment)).call(this, app));

            _this2.detectPlatform();
            _this2.detectChannelType();
            return _this2;
        }

        /**
         * 监测当前Platform环境
         */


        createClass(Environment, [{
            key: 'detectPlatform',
            value: function detectPlatform() {
                var DERECTOR = EnvironmentDetector.getSingleInstance();
                Object.defineProperties(this, {
                    OS: { value: DERECTOR.OS, writable: false, enumerable: true },
                    APP: { value: DERECTOR.APP, writable: false, enumerable: true },
                    BROWSER: { value: DERECTOR.BROWSER, writable: false, enumerable: true }
                });
            }

            /**
             * 侦测渠道类型
             */

        }, {
            key: 'detectChannelType',
            value: function detectChannelType() {
                var channelType = "";
                var DERECTOR = EnvironmentDetector.getSingleInstance();

                if (DERECTOR.APP.IS_PAEBANK && DERECTOR.OS.IS_IPHONE) {
                    channelType = CHANNEL_TYPE.APP_PAEBANK_IPHONE;
                } else if (DERECTOR.APP.IS_PAEBANK && DERECTOR.OS.IS_IPAD) {
                    channelType = CHANNEL_TYPE.APP_PAEBANK_IPAD;
                } else if (DERECTOR.APP.IS_PAEBANK && DERECTOR.OS.IS_ANDROID) {
                    channelType = CHANNEL_TYPE.APP_PAEBANK_ANDROID;
                } else if (DERECTOR.APP.IS_WEIXIN) {
                    channelType = CHANNEL_TYPE.APP_WEIXIN;
                } else if (DERECTOR.APP.IS_ALIPAY) {
                    channelType = CHANNEL_TYPE.APP_ALIPAY;
                } else if (DERECTOR.APP.IS_QQ) {
                    channelType = CHANNEL_TYPE.APP_QQ;
                } else if (DERECTOR.OS.IS_ANDROID) {
                    channelType = CHANNEL_TYPE.BROWSER_ANDROID;
                } else if (DERECTOR.OS.IS_IOS) {
                    channelType = CHANNEL_TYPE.BROWSER_IOS;
                } else {
                    channelType = CHANNEL_TYPE.OTHER;
                }

                Object.defineProperty(this, "CHANNEL_TYPE", {
                    value: channelType,
                    writable: false,
                    enumerable: true
                });
            }

            /**
             *  侦测APP上下文信息（
             *   版本信息：version、
             *   系统配置：config、
             *   后台环境：mode
             *   bow.app.getEnvironment((error, context)
             *   @context: {
                    config:{},//系统配置
                    version:"3.0.0",//App 版本
                }
             */

        }, {
            key: 'detectAppContext',
            value: function detectAppContext(normal) {
                var _this3 = this;

                var _this = this;
                if (!this.APP.IS_PAEBANK) {
                    (function () {
                        _this3.APP_VERSION = "3.0.0";
                        _this3.APP_MODE = _this3.app.getConfig()["mode"];
                        var APP_CONF_KEY = _this3.APP_MODE + "_app_config";

                        bow.sessionStorage.getItem(APP_CONF_KEY, function (err, data) {
                            if (err) return console.error("数据获取异常：" + APP_CONF_KEY);
                            if (data) {
                                _this.APP_CONFIG = data;
                                normal && normal();
                            } else {
                                _this.app.$request.registerUrl();
                                console.log("获取系统配置。");
                                _this.app.$request.call("app_config", {
                                    silent: true,
                                    success: function success(data) {
                                        _this.APP_CONFIG = JSON.parse(data.json()["data"]);
                                        bow.sessionStorage.setItem(APP_CONF_KEY, _this.APP_CONFIG);
                                        normal && normal();
                                    },
                                    error: function error() {
                                        console.error("系统配置文件读取异常。");
                                    }
                                });
                            }
                        });
                    })();
                } else {
                    bow.application.getEnvironment(function (error, context) {
                        if (error || !context) {
                            throw new Error("Fail to get Environment Info!");
                        }
                        _this.APP_VERSION = context.version;
                        _this.APP_CONFIG = context.config;
                        _this.APP_MODE = context.mode;
                        normal && normal();
                    });
                }
            }

            //检测渠道是否开发

        }, {
            key: 'detectChannelAccess',
            value: function detectChannelAccess(normal) {
                var support = this.app.getConfig()["support"];
                if (!this.APP.IS_PAEBANK && support !== "all") {
                    //TODO
                    // 跳转到特定提醒页面
                    Dialog.alert({ message: "业务服务不提供Web支持!" });
                    return;
                }
                normal && normal();
            }
        }]);
        return Environment;
    }(Service);

    var NOISE_COUNT = 0;
    var isLoading = false;

    var Requester = function (_Service) {
        inherits(Requester, _Service);

        function Requester(app) {
            classCallCheck(this, Requester);

            var _this = possibleConstructorReturn(this, (Requester.__proto__ || Object.getPrototypeOf(Requester)).call(this, app));

            _this._allUrls = {};
            return _this;
        }

        //基于dante的配置处理化接口


        createClass(Requester, [{
            key: "registerUrl",
            value: function registerUrl() {
                this._registerUrl(this.app.getConfig()["url"]);
            }

            /**
             * 注册系统环境接口
             * @param urlConf
             * @private
             */

        }, {
            key: "_registerUrl",
            value: function _registerUrl() {
                var urlConf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var allUrls = this._allUrls,
                    mode = this.app.env.APP_MODE;

                Object.keys(urlConf).forEach(function (key) {
                    if (key === mode) {
                        _extends(allUrls, urlConf[key]);
                    }
                });
            }

            /**
             * 通过URL key获取当前环境URL
             * @param {string} urlKey
             * @returns {string}
             */

        }, {
            key: "getUrl",
            value: function getUrl(urlKey) {
                if (!urlKey) return console.error("\u8BF7\u8BBE\u7F6E\u7F51\u7EDC\u8BF7\u6C42\u53C2\u6570\u3002");
                if (!this._allUrls[urlKey]) return console.error("\u5C1A\u672A\u672A\u8BBE\u7F6E\u7F51\u7EDC\u63A5\u53E3\uFF1A " + urlKey);
                var url = this._allUrls[urlKey];
                var SUFFIX_REF = /(\?{1}(?:[-\+=&;%@.\w_]*))|(#{1}(?:[\w]*))$/g;
                //若URL没有"?"或"#", 则默认加上时间戳
                return SUFFIX_REF.test(url) ? url : url + "?" + new Date().getTime();
            }

            /**
             * 网络请求
             * @param {string} urlKey
             * @param {object} opts
             *          @prop {String} method 请求类型,默认post
             *          @prop {object} qs 请求查询参数,会被拼接在url后面
             *          @prop {object} body 请求查询参数,在请求体中传递
             *          @prop {number} timeout 超时时间（默认：60000）
             *          @prop {Object} headers Http头部信息
             *          @prop {String} retry 重试次数(默认为0)
             *          @prop {function} error 失败回调
             *          @prop {function} success 成功回调
             */

        }, {
            key: "call",
            value: function call(urlKey) {
                var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                var URL = this.getUrl(urlKey);
                if (!URL) return console.error("\u4E0D\u5B58\u5728\u7F51\u7EDC\u63A5\u53E3:" + urlKey);

                opts.url = URL;
                opts.method = opts.method || "post";
                opts.timeout = opts.timeout || 60000;

                var _beforeSend = opts.beforeSend || function () { };
                var _complete = opts.complete || function () { };
                var _error = opts.error || function () { };
                var _success = opts.success || function () { };

                var beforeSend = function beforeSend() {
                    if (!opts.silent) {
                        NOISE_COUNT++;
                        if (!isLoading) {
                            isLoading = true;

                            if (bow.loading) {
                                bow.loading.start({ canCancel: false });
                            } else {
                                console.warn("bow.loading plugin is needed!");
                            }
                        }
                    }
                    _beforeSend();
                };

                var complete = function complete() {
                    if (!opts.silent) {
                        NOISE_COUNT--;
                        if (NOISE_COUNT <= 0 && isLoading) {
                            isLoading = false;

                            if (bow.loading) {
                                bow.loading.stop();
                            } else {
                                console.warn("bow.loading plugin is needed! ");
                            }
                        }
                    }
                    _complete();
                };

                beforeSend();
                bow.http.request(opts, function (error, data) {
                    if (error) {
                        _error(error);
                    } else {
                        _success(data);
                    }
                    complete();
                });
            }
        }]);
        return Requester;
    }(Service);

    function forEach() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var fn = arguments[1];

        Object.keys(obj).forEach(function (key) {
            fn(key, obj[key]);
        });
    }
    var class2type = {};
    forEach("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function $type(obj) {
        return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    }
    function isWindow(obj) {
        return obj != null && obj == obj.window;
    }
    function isObject$1(obj) {
        return $type(obj) == "object";
    }
    function isPlainObject(obj) {
        return isObject$1(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    }
    var isArray$1 = Array.isArray || function (object) {
        return object instanceof Array;
    };

    function serialize(params, obj, traditional, scope) {
        var type,
            array = isArray$1(obj),
            hash = isPlainObject(obj);
        forEach(obj, function (key, value) {
            type = $type(value);
            if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
            // handle data in serializeArray() format
            if (!scope && array) params.add(value.name, value.value);
            // recurse into nested objects
            else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key); else params.add(key, value);
        });
    }

    var param = function param(obj, traditional) {
        var params = [];
        params.add = function (key, value) {
            if (typeof value === "function") value = value();
            if (value == null) value = "";
            this.push(escape(key) + '=' + escape(value));
        };
        serialize(params, obj, traditional);
        return params.join('&').replace(/%20/g, '+');
    };

    var GlobalFilter = {
        _filters: [{ errCode: "000", errMsg: "", tip: "成功返回" }, { errCode: "001", errMsg: "系统处理出错", tip: "业务级错误,具体含义见接口返回的errMsg字段" }, { errCode: "100", errMsg: "系统处理出错", tip: "Session中没有客户信息 " }, { errCode: "101", errMsg: "系统处理出错", tip: "非受邀客户，暂不能使用 " }, { errCode: "102", errMsg: "用户名或密码错误", tip: "用户名或密码错误" }, { errCode: "104", errMsg: "验证码过期", tip: "登陆时验证码过期" }, { errCode: "105", errMsg: "验证码错误", tip: "登陆时验证码错误" }, { errCode: "200", errMsg: "OTP校验失败", tip: "OTP校验失败" }, { errCode: "250", errMsg: "用户信息不完整", tip: "用户信息不完整" }, { errCode: "201", errMsg: "OTP发送失败", tip: "OTP发送失败" }, { errCode: "400", errMsg: "登录超时", tip: "session超时" }, { errCode: "999", errMsg: "系统处理出错", tip: "自定义错误 并返回BODY（需解释XML）" }, { errCode: "900", errMsg: "用户已在别处重新登录，强制下线!", tip: "用户已在别处重新登录，强制下线!" }],
        _getMsg: function _getMsg(errCode) {
            var target = this._filters.find(function (item) {
                return item["errCode"] === errCode;
            });

            return target ? target.errMsg : "";
        },
        doFilter: function doFilter(app, response) {
            var normal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () { };

            var errCode = response['errCode'];
            var errMsg = response.errMsg || this._getMsg(errCode) || "系统处理出错";

            switch (errCode) {
                // 用户信息不完整
                case "250":
                    {
                        Dialog.alert({ message: errMsg });
                        app.auth.logout();
                    } break;
                // session无用户信息
                case "100":
                // session超时
                case "400":
                    {
                        Dialog.alert({ message: errMsg });
                        app.auth.logout(function () {
                            //跳转到首页
                            bow.navigator.backTop();
                        });
                    } break;
                // 单点登录
                case "900":
                    {
                        Dialog.alert({ message: errMsg });
                        app.auth.logout(function () {
                            //跳转到登录页面
                            app.auth.launchLogin();
                        });
                    } break;
                default:
                    normal(response); break;
            }
        }
    };

    var BankRequester = function (_Service) {
        inherits(BankRequester, _Service);

        function BankRequester(app) {
            classCallCheck(this, BankRequester);
            return possibleConstructorReturn(this, (BankRequester.__proto__ || Object.getPrototypeOf(BankRequester)).call(this, app));
        }

        /**
         * 请求个人网银接口
         * @param urlKey
         * @param option
         *    @data
         *    @type
         *    @retry
         *    @traditional
         *    @success
         *    @error
         *
         */


        createClass(BankRequester, [{
            key: 'call',
            value: function call(urlKey) {
                var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                    data: {}, type: "post", retry: 0, success: function success() { },
                    error: function error() { }
                };

                var _this = this;
                option.body = option.data || {};
                option.type = option.type || "post";
                option.retry = option.retry || 0;
                option.success = option.success || function () { };
                option.error = option.error || function () { };
                option.headers = _extends({}, option.headers, { 'Content-Type': 'application/x-www-form-urlencoded' });

                _extends(option.body, {
                    channelType: this.app.env.CHANNEL_TYPE,
                    nativeVersion: this.app.env.APP_VERSION,
                    responseDataType: "json"
                });
                option.body = param(option.body, option.traditional);
                delete option.traditional;
                delete option.data;
                var _succ = option.success;
                option.success = function (response) {
                    GlobalFilter.doFilter(_this.app, response.json(), _succ);
                };
                this.app.$request.call(urlKey, option);
            }
        }, {
            key: 'getUrl',
            value: function getUrl(urlKey) {
                return this.app.$request.getUrl(urlKey);
            }
        }, {
            key: '_param',
            value: function _param(data, traditional) {
                return param(data, traditional);
            }
        }]);
        return BankRequester;
    }(Service);

    /**
     * 日志
     * 为了方便Native与H5的调试，提供页面调试能力：
     * （1）接管console
     * （2）html body尾部Append调试区域：
     *       （1）显示Log（不同级别）
     *       （2）提供console区域，执行输入的JS代码，支持直接实时调试。
     *
     */
    //系统密钥配置
    var CIPHER_MODE = {
        //个人网银系统
        PAEBANK: {
            RSA: {
                PUBLIC_EXP: "10001",
                PRD_MODULUS: "BB955F6C6185B341C1A42EBF1FF9971B273878DBDAB252A0F1C305EBB529E116D807E0108BE6EDD47FF8DC5B6720FFE7F413CBB4ACDFB4C6BE609A5D60F5ADB261690A77755E058D4D9C0EC4FC2F5EB623DEBC88896003FBD8AFC4C3990828C66062A6D6CE509A2B0F8E06C4E332673FB86D235164B62B6110C1F1E0625B20ED",
                STG_MODULUS: "D6D2402F1C98E208FF2E863AA29334BD65AE1932A821502D9E5673CDE3C713ACFE53E2103CD40ED6BEBB101B484CAE83D537806C6CB611AEE86ED2CA8C97BBE95CF8476066D419E8E833376B850172107844D394016715B2E47E0A6EECB3E83A361FA75FA44693F90D38C6F62029FCD8EA395ED868F9D718293E9C0E63194E87"
            },
            SM2: {
                PRD: {
                    XHEX: "76D26598B8F8FBAFB714DC2324DDC8184B384F9FFAA8F9BF0B87BFD5EC1DCF20",
                    YHEX: "2753FBFBCB99D89A2A356FEC8216765702B50C0C4F92C85D01EB42719B30238C"
                },
                STG: {
                    XHEX: "F1342ADB38855E1F8C37D1181378DE446E52788389F7DB3DEA022A1FC4D4D856",
                    YHEX: "66FC6DE253C822F1E52914D9E0B80C5D825759CE696CF039A8449F98017510B7"
                }
            }
        }
    };

    var Crypto = function (_Service) {
        inherits(Crypto, _Service);

        function Crypto() {
            classCallCheck(this, Crypto);
            return possibleConstructorReturn(this, (Crypto.__proto__ || Object.getPrototypeOf(Crypto)).apply(this, arguments));
        }

        createClass(Crypto, [{
            key: "_bankRSAEncrypt",

            /**
             * 个人网银系统RSA加密接口
             * @param {string} message 加密内容
             * @param {function} cb
             */
            value: function _bankRSAEncrypt() {
                var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () { };

                var RSA = CIPHER_MODE.PAEBANK.RSA;
                var PUBLIC_EXP = RSA.PUBLIC_EXP;
                var MODULUS = this.app.env.APP_MODE === "prd" ? RSA.PRD_MODULUS : RSA.STG_MODULUS;

                var opts = {
                    mode: 'RSA',
                    source: message,
                    params: {
                        secretKeyE: PUBLIC_EXP,
                        secretKeyN: MODULUS
                    }
                };
                bow.crypto.encrypt(opts, function (err, data) {
                    if (err) {
                        console.error("RSA数据加密异常");
                        return;
                    }
                    cb && cb(data);
                });
            }

            /**
             * 个人网银系统SM2加密接口
             * @param message
             * @param cb
             * @returns {*}
             */

        }, {
            key: "_bankSM2Encrypt",
            value: function _bankSM2Encrypt() {
                var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () { };

                var SM2 = CIPHER_MODE.PAEBANK.SM2;
                var PAIRS = this.app.env.APP_MODE === "prd" ? SM2.PRD : SM2.STG;

                this.app.dater.getBankServerTime(function (serverTime) {
                    var timeLen = (serverTime.length + '').length == 1 ? '0' + serverTime.length : serverTime.length + '';
                    var messageLen = (message.length + '').length == 1 ? '0' + message.length : message.length + '';
                    var content = timeLen + serverTime + messageLen + message;
                    bow.crypto.encrypt({
                        mode: 'SM2',
                        source: content,
                        params: {
                            secretKeyX: PAIRS.XHEX,
                            secretKeyY: PAIRS.YHEX,
                            format: "16"
                        }
                    }, function (err, data) {
                        if (err) {
                            console.error("SM2数据加密异常");
                            return;
                        }
                        cb && cb('CN-S' + data.toUpperCase());
                    });
                });
            }

            /**
             * 账户密码、交易密码加密
             * 个人网银系统加密接口 (依据Config开关自动切换RSA/SM2加密方式)
             * @param {string} message
             * @param cb
             */

        }, {
            key: "bankEncrypt",
            value: function bankEncrypt() {
                var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                var cb = arguments[1];

                var cryptoMode = this.app.env.APP_CONFIG.params.cryptoMode.toLowerCase().trim();
                switch (cryptoMode) {
                    case "rsa":
                        this._bankRSAEncrypt(message, cb); break;
                    case "sm2":
                    default:
                        this._bankSM2Encrypt(message, cb); break;

                }
            }
        }]);
        return Crypto;
    }(Service);

    /**
     * 日志
     * 为了方便Native与H5的调试，提供页面调试能力：
     * （1）接管console
     * （2）html body尾部Append调试区域：
     *       （1）显示Log（不同级别）
     *       （2）提供console区域，执行输入的JS代码，支持直接实时调试。
     *
     */
    var cs = {};
    for (var fn in console) {
        if (typeof console[fn] === 'function') {
            cs[fn] = console[fn];
        }
    }

    var Console = function () {
        function Console() {
            classCallCheck(this, Console);

            Console.el = Console.createConsoleEl();
            Console.button = Console.createDebugButton();
            document.body.appendChild(Console.el);
            document.body.appendChild(Console.button);
        }

        createClass(Console, null, [{
            key: 'createButton',
            value: function createButton() {
                var el = document.createElement('div');

                this.setButtonStyle(el);

                el.addEventListener('touchstart', function (e) {
                    e.stopPropagation();

                    var touch = e.touches[0];

                    this.drag = true;
                    this.x = touch.pageX;
                    this.y = touch.pageY;

                    this.style.transition = 'opacity .3s';
                    this.style.opacity = '1';
                });

                el.addEventListener('touchmove', function (e) {
                    e.stopPropagation();

                    var touch = e.touches[0];

                    if (this.drag) {
                        var right = parseFloat(this.style.right);
                        var bottom = parseFloat(this.style.bottom);

                        var newBottom = this.y - touch.pageY + bottom;
                        var maxBottom = document.body.clientHeight - this.clientHeight;

                        newBottom = newBottom < 0 ? 0 : newBottom;
                        newBottom = newBottom > maxBottom ? maxBottom : newBottom;

                        this.style.right = this.x - touch.pageX + right + 'px';
                        this.style.bottom = newBottom + 'px';

                        this.x = touch.pageX;
                        this.y = touch.pageY;
                    }
                }, false);

                el.addEventListener('touchend', function (e) {
                    e.stopPropagation();

                    var width = document.body.clientWidth;

                    this.drag = false;

                    if (width / 2 > parseFloat(this.style.right)) {
                        this.style.right = '10px';
                    } else {
                        this.style.right = width - this.clientWidth - 10 + 'px';
                    }

                    this.style.opacity = '.5';
                    this.style.transition = 'all .3s';
                }, false);

                return el;
            }
        }, {
            key: 'createDebugButton',
            value: function createDebugButton() {
                var self = this;
                var el = this.createButton();

                var style = el.style;

                style.position = 'absolute';
                style.width = '50px';
                style.height = '50px';
                style.lineHeight = '50px';
                style.bottom = '20px';
                style.right = '10px';
                style.zIndex = '9999';

                el.innerHTML = '调试';

                el.addEventListener('click', function () {
                    self.el.style.display = '';
                    this.style.display = 'none';
                    self.input.focus();
                }, false);

                return el;
            }
        }, {
            key: 'createConsoleEl',
            value: function createConsoleEl() {
                var el = document.createElement('div');
                var style = el.style;

                style.boxSizing = 'border-box';
                style.width = window.screen.width + 'px';
                style.height = window.screen.height + 'px';
                style.background = '#fff';
                style.border = '1px solid #eee';
                style.position = 'absolute';
                style.top = '0';
                style.left = '0';
                style.zIndex = '9998';
                style.display = 'none';
                style.overflow = 'auto';
                style.wordBreak = 'break-all';
                style.opacity = '.8';
                style.margin = '0';
                style.background = '#000';

                this.consoleContentCantainer = this.createConsoleContent();
                this.content = this.createConsoleContentInner();
                this.consoleContentCantainer.style.width = '100%';
                this.consoleContentCantainer.style.height = window.screen.height - 51 + 'px';
                this.consoleContentCantainer.appendChild(this.content);

                this.input = this.createConsoleInput();
                this.input.style.width = '100%';
                this.input.style.height = '50px';

                el.appendChild(this.consoleContentCantainer);
                el.appendChild(this.input);
                el.appendChild(this.createCloseButton());

                return el;
            }
        }, {
            key: 'createConsoleContent',
            value: function createConsoleContent() {
                var el = document.createElement('div');

                el.style.boxSizing = 'border-box';
                el.style.overflow = 'auto';

                return el;
            }
        }, {
            key: 'createConsoleContentInner',
            value: function createConsoleContentInner() {
                var el = document.createElement('div');

                el.style.overflow = 'auto';

                return el;
            }
        }, {
            key: 'createConsoleInput',
            value: function createConsoleInput() {
                var el = document.createElement('input');
                var style = el.style;

                style.boxSizing = 'border-box';
                style.border = '0';
                style.borderTop = '1px solid #999';
                style.padding = '0 10px';

                el.addEventListener('keyup', function (e) {
                    if (e.keyCode === 13) {
                        var val = this.value;
                        this.value = '';
                        Console.evalCode(val);
                        Console.consoleContentCantainer.scrollTop = Console.consoleContentCantainer.scrollHeight;
                    }
                }, false);

                return el;
            }
        }, {
            key: 'createCloseButton',
            value: function createCloseButton() {
                var self = this;
                var el = this.createButton();
                var style = el.style;

                style.position = 'absolute';
                style.width = '50px';
                style.height = '50px';
                style.lineHeight = '50px';
                style.bottom = window.screen.availHeight - 60 + 'px';
                style.right = '10px';
                style.zIndex = '9999';

                el.innerHTML = 'close';

                el.addEventListener('click', function () {
                    self.el.style.display = 'none';
                    self.button.style.display = '';
                }, false);

                return el;
            }
        }, {
            key: 'setButtonStyle',
            value: function setButtonStyle(el) {
                var style = el.style;
                style.boxSizing = 'border-box';
                style.position = 'fixed';
                style.borderRadius = '50%';
                style.background = '#fff';
                style.border = '2px solid #eee';
                style.textAlign = 'center';
                style.color = '#999';
                style.opacity = '.5';
            }
        }, {
            key: 'addLog',
            value: function addLog(text) {
                var el = document.createElement('div');

                text.replace(/\n/g, '<br>');

                el.innerHTML = text;

                this.content.appendChild(el);

                return el;
            }
        }, {
            key: 'logItem',
            value: function logItem(text) {
                return '<div style="border-bottom: 1px solid #999;margin: 5px;color: #fff;">' + text + '</div>';
            }
        }, {
            key: 'warnItem',
            value: function warnItem(text) {
                return '<div style="color: yellow; border-bottom: 1px solid lightgoldenrodyellow;;margin: 5px;">' + text + '</div>';
            }
        }, {
            key: 'errorItem',
            value: function errorItem(text) {
                return '<div style="color: red; border-bottom: 1px solid darkred;margin: 5px;">' + text + '</div>';
            }
        }, {
            key: 'evalCode',
            value: function evalCode(code) {
                try {
                    var output = eval(code);
                    Console.addLog(Console.logItem(output));
                } catch (e) {
                    Console.addLog(Console.errorItem(e.stack));
                }
            }
        }]);
        return Console;
    }();

    var Logger = function (_Service) {
        inherits(Logger, _Service);

        function Logger(app) {
            classCallCheck(this, Logger);

            var _this = possibleConstructorReturn(this, (Logger.__proto__ || Object.getPrototypeOf(Logger)).call(this));

            var self = _this;

            window.addEventListener('load', function () {
                if (app.getConfig().debug) {
                    self._console = new Console();
                }
            }, false);

            var _loop = function _loop(_fn) {
                if (typeof cs[_fn] === 'function') {
                    _this[_fn] = function (data) {
                        if (app.getConfig().debug) {
                            cs[_fn].apply(console, arguments);

                            if (self._console) {
                                Console.evalCode(data);
                            }
                        }
                    };
                    console[_fn] = _this[_fn];
                }
            };

            for (var _fn in cs) {
                _loop(_fn);
            }
            return _this;
        }

        createClass(Logger, [{
            key: 'str',
            value: function str(data) {
                try {
                    this.log(JSON.stringify(data));
                } catch (e) {
                    this.log(data);
                }
            }
        }]);
        return Logger;
    }(Service);

    var debug = false;
    var mode = "$APP_RUNNING_MODE";
    var support = "all";
    var pluginPath = "/xxxxxx/pages/";
    var url = {};
    var AppConfig = {
        debug: debug,
        mode: mode,
        support: support,
        pluginPath: pluginPath,
        url: url
    };

    // import Booter          from './capacity/booter'


    //检测Dante依赖
    var checkDeps = function checkDeps() {
        if (!window.bow) throw new Error('Bow still not loaded which forcely relied on by dante framework!');
    };

    var Application = function () {
        function Application() {
            classCallCheck(this, Application);

            this._config = AppConfig;
            checkDeps();
            this._ready = false;
            this._cbQueue = [];
        }

        /**
         * 加挂服务组件
         * @param Service
         */


        createClass(Application, [{
            key: 'use',
            value: function use(Service) {
                if (typeof Service !== "function") throw new Error('Mounted on dante should be a service function!');
                if (Service.mounted) return;
                var args = Array.prototype.slice.call(arguments);
                args.shift();
                args.unshift(this);

                if (typeof Service.mount === 'function') {
                    Service.mount.apply(Service, args);
                } else {
                    throw new Error('The capacity service unsupport mount behavior!');
                }

                Service.mounted = true;
                return this;
            }

            //单例

        }, {
            key: 'start',


            //系统处初始化
            value: function start(cb) {
                var self = this;
                //初始化页面环境
                self.env.detectChannelAccess(function () {
                    self.env.detectAppContext(function () {
                        //依据config.url注册网络接口
                        self.$request.registerUrl();
                        //初始化登录状态
                        self.auth.initLoginOnStart(function () {
                            //页面初始化检查登录状态
                            if (self.auth.verifyAccess()) {
                                //监听登录态变化
                                // self.auth.watchLoginStateChange();
                                cb && cb();
                                self._ready = true;
                                self._triggerReadyCbQueue();
                            }
                        });
                    });
                });
            }
        }, {
            key: '_triggerReadyCbQueue',
            value: function _triggerReadyCbQueue() {
                if (!this._ready) return;
                var len = this._cbQueue.length;
                for (var i = 0; i < len; i++) {
                    var cb = this._cbQueue.shift();
                    typeof cb === "function" && cb();
                }
            }
        }, {
            key: 'ready',
            value: function ready(cb) {
                if (!this._ready) return this._cbQueue.push(cb);
                cb && cb();
            }

            /**
             * 系统配置
             */

        }, {
            key: 'config',
            value: function config() {
                var conf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                var config = this.getConfig();
                Object.keys(conf).forEach(function (key) {
                    config[key] = conf[key];
                });
            }
            //获取系统配置

        }, {
            key: 'getConfig',
            value: function getConfig() {
                return this._config;
            }
        }, {
            key: 'getPluginRootPath',
            value: function getPluginRootPath() {
                var pluginPath$$1 = this.getConfig()["pluginPath"];
                return location.href.substring(0, location.href.indexOf(pluginPath$$1));
            }
        }], [{
            key: 'getInstance',
            value: function getInstance() {
                return this.instance || (this.instance = new Application());
            }
        }]);
        return Application;
    }();

    var dante = Application.getInstance();
    dante.use(Authentication.declareMountName("auth"));
    dante.use(Environment.declareMountName("env"));
    dante.use(Requester.declareMountName("$request"));
    dante.use(BankRequester.declareMountName("request"));
    dante.use(TalkingData.declareMountName("talkingData"));
    dante.use(Dater.declareMountName("dater"));
    dante.use(Formatter.declareMountName("formatter"));
    dante.use(Utility.declareMountName("util"));
    dante.use(Crypto.declareMountName("crypto"));
    dante.use(Logger.declareMountName("logger"));

    return dante;

})));