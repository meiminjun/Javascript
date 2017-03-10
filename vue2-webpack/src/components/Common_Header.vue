<template>
     <header v-if="show">
        <div class="pec-header-left" @click="onLeft()">
            <i class="icon-back"></i>
        </div>
        <div class="pec-header-title">
            {{title}}
        </div>
        <div class="pec-header-right" v-if="isRightShow" @click="onRight()">
            <i class="icon-header-more"></i>
        </div>
    </header>
</template>

<script>
    import * as aladdin from 'aladdin';
    /**
     * 公共头部
     *
     */
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            onLeft: {
                type: Function,
                default: function () {
                    aladdin.navigator.back();
                }
            },
            onRight: {
                type: Function,
                default: function() {
                    alert("暂无事件")
                }
            },
            show: {
                type: Boolean,
                default: true
            },
            isRightShow: {
                type: Boolean,
                default:false
            }
        },
        created: function() {
            const processEnv = process.env.NODE_ENV
            // console.log(ald.env);
            if(processEnv == "dev" || aladdin.env.isBrowser) {
                 console.log("浏览器环境");
                 this.show = true;
            }else if(aladdin.env.isMobile){
                 console.log("手机环境")
                 this.show = false;
                 var options = {
                    title: this.title,
                    leftButtonText: "",
                    rightButtonText: "。。。",
                    color: "#F25E43",
                    backgroundColor: "#FFFFFF",
                    // fontSize: "16px",
                    leftButtonVisible: true,
                    rightButtonVisible: true,
                    // leftButtonFontSize: "16px",
                    // rightButtonFontSize: "16px",
                    leftButtonTextColor: "#F25E43",
                    leftButtonBackgroundColor: "#FFFFFF",
                    rightButtonTextColor: "#F25E43",
                    rightButtonBackgroundColor: "#FFF",
                    leftButtonCallback:  null,
                    rightButtonCallback: null
                 };
                 aladdin.header.config(options, function (err, data) {
                    if (err) {
                        alert("Native 返回报错")
                    } else {
                    
                    }
                });
            }
            // if (aladdin.env.isMobile) {
                 
            //  }else if(aladdin.env.isBrowser){
            //      console.log("浏览器环境");
            //      this.show = true;
            //  }
        },
        methods: {
            forward: function (item, eventId) {
                aladdin.track.record(eventId);
                if (item.native) {
                    aladdin.navigator.forward({
                        title: item.title,
                        url: item.url,
                        type: 'webapp'
                    });
                } else {
                    aladdin.navigator.forward({
                        title: item.title,
                        showHeader: true,
                        url: item.url,
                        tabIndex: 2,
                        tpl: 'webview'
                    });
                }
            }
        }
    };
</script>
