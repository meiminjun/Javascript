<template>
  <header class="page-head"  v-if="isShowHeader">
    <div class="pec-header-left" @click="leftButtonCallback">
      <i class="icon-back"></i>
    </div>
    <div class="pec-header-title">
      {{this.options.title}}
    </div>
    <div class="pec-header-right" @click="rightButtonCallback" v-if="options.showIcon">
      <i :class="options.rightButtonText?'':'icon-header-more'">{{options.rightButtonText}}</i>
    </div>
  </header>
</template>
<script>
  import * as aladdin from 'aladdin'
  /**
   * 公共头部
   *
   */
  export default {
    props: {
      options:{
        type: Object,
        'default':{
          title:"定活通(增强型)",
          showIcon:false,
          rightButtonText:'',
          isSetBack:false,
          setSelfShow:false

        }
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
        isShowHeader: aladdin.env.isBrowser
      }
    },
    created: function(){
      if(!aladdin.env.isBrowser){
        var IconUrl = "./bigAmount/assets/images/common/gathring_right_btn_img.png";
        //var IconUrl = "/common/assets/images/icon-header-more.svg";
        //var IconUrl = "/common/assets/images/gathring_right_btn_img.png";
        var options={
          title:this.options.title
        };
        options.leftButtonCallback = (function(){
          this.leftButtonCallback();
          //this.$emit('leftButtonCallback');
        }).bind(this);
        if(!this.options.setSelfShow){//如果用户自己设置了分享，将不处理右边按钮
          if(this.options.showIcon&&this.options.rightButtonText==""){
            options.rightButtonIcon = IconUrl;
            options.rightButtonVisible = true;
            options.rightButtonCallback = (function(){
              this.rightButtonCallback();
            }).bind(this)
          }else{
            if(!!this.options.rightButtonText){
              options.rightButtonVisible = true;
              options.rightButtonText = this.options.rightButtonText;
              options.rightButtonCallback = (function(){
                this.rightButtonCallback();
              }).bind(this)
            }else {
              options.rightButtonText = "";
              options.rightButtonVisible = false;
            }
          }
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
//          if(!aladdin.env.isBrowser){
//              bow.navigator.back();
//          }else{
          history.go(-1);
//          }
        }
      },
      rightButtonCallback:function(){
        this.$emit('rightButtonCallback');
      }
    }
  };
</script>
