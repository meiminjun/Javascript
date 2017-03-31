;(function(){
    var GLOBAL = {
        guideClass: 'paebank-wechat-guide',
        dialogClass: 'paebank-zhida-dialog'
    }

    function openHandler(options, fromClick){
        var env = browser();

        if(env.isMicromessenger){
            //微信环境
            
            if(env.isIos && env.iosVersion >= 9){
                //ios9 使用通用链接打开
				if(fromClick){
					location.href = getRedirectUrl(options);
				}else{
					showGuideMask();
				}
				
            }else{
                //toDownload();
                showGuideMask();
            }

        }else{
            //非微信环境
            if(env.isAndroid || (env.isIos && env.iosVersion < 9)){
                tryOpenAppBySchema(options);
                showDialog();
            }else if(env.isIos && env.iosVersion >= 9){
                //ios9 使用通用链接打开
                if(fromClick){
					location.href = getRedirectUrl(options);
				}else{
					showDialog();
				}
                
            }else{
                showDialog();
            }

        }
    }

    function tryOpenAppBySchema(data){
        var schema = 'paebank://';

        if(data){
            schema =  schema + '?paebank=' + encodeURIComponent(JSON.stringify(data));
        }

        var ifrObj = document.createElement("iframe");
        ifrObj.setAttribute("src", schema);
        ifrObj.style.display = "none";
        document.querySelector("body").appendChild(ifrObj);
        ifrObj.remove();
    }
	

    /**
	 * 动态生成css代码 addCSS('#demo{ height: 30px; background:#f00;}');
	 */
	function addCSS(cssText) {
		var style = document.createElement('style'), //创建一个style元素
			head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
		style.type = 'text/css'; 
		//w3c浏览器中只要创建文本节点插入到style元素中就行了
		var textNode = document.createTextNode(cssText);
		style.appendChild(textNode);
		head.appendChild(style); //把创建的style元素插入到head中 
	}


    function bindDialogEvent(){
        document.getElementById('open-paebank-zhida').addEventListener('click', function(){
            openHandler(GLOBAL.prama, true);
        });

        document.getElementById('download-paebank').addEventListener('click', function(){
            toDownload();
        });
    }

    function showDialog(){

        if(document.getElementById(GLOBAL.dialogClass)){
            return;
        }

        var dialogHTML = [
            '<div class="link-win">',
                '<div class="link-box">',
                    '<div class="link-top">',
                        '<img src="http://fs-txt.pingan.com.cn/9990148353144003422749.png?imageView2/2/w/100">',
                        '<p>请在平安口袋银行APP内打开才可继续操作。若未安装请点击下载APP。</p>',
                    '</div>',
                    '<ul class="link-btn">',
                        '<li id="open-paebank-zhida">在APP内打开</li>',
                        '<li id="download-paebank">下载APP</li>',
                    '</ul>',
                '</div>',
           '</div>'
        ].join('');

        var css = [
            '.' + GLOBAL.dialogClass + ' .link-win { position: fixed; z-index: 999; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, 0.5); }',
            '.' + GLOBAL.dialogClass + ' .link-box { font-family: "Microsoft YaHei"; background-color: #FFFFFF; border-radius: 20px; position: absolute; left: 50%; top: 50%; width: 90%; z-index: 5; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }',
            '.' + GLOBAL.dialogClass + ' .link-top { text-align: center; padding: 20px; }',
            '.' + GLOBAL.dialogClass + ' .link-top img { width: 60px; display: inline-block; }',
            '.' + GLOBAL.dialogClass + ' .link-top p { font-size: 16px; line-height: 1.5em; color: #3f4145; text-align: left; margin: 30px 0 0; word-break: break-word; }',
            '.' + GLOBAL.dialogClass + ' .link-btn { text-align: center; padding: 0; margin: 0; list-style: none; }',
            '.' + GLOBAL.dialogClass + ' .link-btn li { border-top: 1px solid #e7e7e7; padding: 1em 10px; font-size: 18px; line-height: 1em; color: #f37937; }'
        ].join(' ');

        addCSS(css);

        var dialog = document.createElement('div');
        dialog.innerHTML = dialogHTML;
        dialog.id = GLOBAL.dialogClass;
        dialog.className = GLOBAL.dialogClass;
        document.body.appendChild(dialog);

        bindDialogEvent();
    }

    /**
     * 在微信内，提示外部浏览器打开
     */
    function showGuideMask(){
        var guideHTML = '<div class="link-win"><img src="http://fs-txt.pingan.com.cn/9990148353144520151134.png?imageView2/2/w/300" class="link-img"></div>',
            css = [
                '.' + GLOBAL.guideClass + ' .link-img { width: 200px; position: absolute; right: 30px; top: 20px; z-index: 10;}',
                '.' + GLOBAL.guideClass + ' .link-win { position: fixed; z-index: 999; top: 0; bottom: 0; left: 0; right: 0; background-color: rgba(0, 0, 0, 0.5); }'
            ].join(' ');
        
        addCSS(css);

        var guide = document.createElement('div');
        guide.innerHTML = guideHTML;
        guide.className = GLOBAL.guideClass;
        document.body.appendChild(guide);
    }

    function browser() {
        var u = navigator.userAgent.toLowerCase();
        return {
            txt: u, // 浏览器版本信息
            isIos: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), //ios终端
            isAndroid: u.indexOf('android') > -1, //android终端
            isMicromessenger: u.indexOf('micromessenger') > -1, //android终端
            iosVersion: iOSVersion(),
            isPaeBank: u.indexOf('pabank_app') > -1                 
        };
    }

    function iOSVersion() {
        if (window.MSStream) {
            // There is some iOS in Windows Phone...
            // https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
            return false;
        }
        var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
            version;

        if (match !== undefined && match !== null) {
            version = [
                parseInt(match[1], 10),
                parseInt(match[2], 10),
                parseInt(match[3] || 0, 10)
            ];
            return parseFloat(version.join('.'));
        }

        return false;
    }

    function toDownload(){
        var env = browser();
        if(env.isAndroid && env.isMicromessenger){
            location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.pingan.pabank.activity';   
        }else if(env.isIos){
            location.href = 'https://itunes.apple.com/cn/app/ping-kou-dai-yin-xing-ping/id439212087?l=en&mt=8';
        }else{
            location.href = 'http://download.pingan.com.cn/app/android/rym/PAAndroidBank_bank_rym_mpingan.apk';
        }
    }

    function getRedirectUrl(data){
        var href = 'https://test-scf-txt.pingan.com.cn/test/testopen/universal-links.html',
            key = '',
            parseJsonStr = null;
        if(data){
            href = changeParameter(href, 'paebank', encodeURIComponent(JSON.stringify(data)));
        }
        
        return href;
    }

    function changeParameter(url, arg, arg_val) {
        var pattern = arg + '=([^&]*)';
        var replaceText = arg + '=' + arg_val;
        if (url.match(pattern)) {
            var tmp = '/(' + arg + '=)([^&]*)/gi';
            tmp = url.replace(eval(tmp), replaceText);
            return tmp;
        } else {
            if (url.match('[\?]')) {
                return url + '&' + replaceText;
            } else {
                return url + '?' + replaceText;
            }
        }
        // return url + '\n' + arg + '\n' + arg_val;
    }

    var paebank = {
        tryOpen: function(options, fromClick){
            GLOBAL.prama = options || {};
			GLOBAL.fromClick = fromClick || false;
            openHandler(GLOBAL.prama, GLOBAL.fromClick)
        },
        showDialog: function(){
            showDialog();
        },
        showGuideMask: function(){
            showGuideMask();
        },
        toDownload: function(){
            toDownload();
        }
    };

    window.Paebank = paebank;
})();