<template>
  <header class="page-head"  v-if="isShowHeader">
    <div class="pec-header-left" @click="leftButtonCallback">
      <i class="icon-back"></i>
    </div>
    <div class="pec-header-title">
      {{title}}
    </div>
    <div class="pec-header-right" @click="rightButtonCallback" v-if="options.showIcon">
      <i class="icon-header-more"></i>
    </div>
    <div v-if="share" class="pec-spinnermenu">
      <ul>
        <li><i class="icon-share"></i>分享</li>
        <li><i class="icon-share"></i>返回首页</li>
      </ul>
    </div>
  </header>
</template>
<script>
  /**
   * 公共头部
   *
   */

  let dante = require('dante');
  export default {
    props: {
      options:{
        type: Object,
        'default':{
          title:"标题",
          showIcon:false,
          isSetBack:false
        }
      },
      title: {
        'type': String,
        'default': '定活宝-定活通'
      },
      methods: {}
    },
    computed: {
      headerOptions:function(){

        return Object.assign({},)
      }
    },
    data:function(){
      return {
        isShowHeader: !dante.env.APP.IS_PAEBANK,
        share:false
      }
    },
    created: function(){
      if(dante.env.APP.IS_PAEBANK){
        var IconUrl = "/bigAmount/assets/images/common/gathring_right_btn_img.png";
        //var IconUrl = "/common/assets/images/icon-header-more.svg";
        //var IconUrl = "/common/assets/images/gathring_right_btn_img.png";
        var options={
          title:this.options.title,
          rightButtonText: "",
          rightButtonVisible: false
        };
        options.leftButtonCallback = (function(){
          this.leftButtonCallback();
          //this.$emit('leftButtonCallback');
        }).bind(this);
        if(this.options.showIcon){
          options.rightButtonIcon = IconUrl;
          options.rightButtonVisible = true;
          options.rightButtonCallback = (function(){
            this.rightButtonCallback();
          }).bind(this)
        }
        bow.header.config(options, function (err, data) {
          if (err) {
          } else {
          }
        });
      }
    },
    methods: {
      leftButtonCallback: function() {
        if(this.options.isSetBack){
          this.$emit('leftButtonCallback');
        }else{
          if(dante.env.APP.IS_PAEBANK){
            bow.navigator.back();
          }else{
            history.go(-1);
          }
        }
      },
      rightButtonCallback:function(){
        this.share = !this.share;
        this.$emit('rightButtonCallback');

      }
    }
  };
</script>
