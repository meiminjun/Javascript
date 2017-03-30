<template>
  <div>
<common-header :options="options" @leftButtonCallback="leftButtonCallback"></common-header>
    <section>
<div class="pec-list pec-margin-top20">
  <mt-loadmore style="top: .9rem"  :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
  <div v-for= "(item,index) in resRender"  :data-index = "index" @click= "toExchangeDetail" style="padding-bottom: .2rem!important;" class= "pec-list-item pec-list-item2" >
  <i v-if="item.orderStatusCH === '处理中'" class="back-icon"> <div class="bord_h"></div></i>
  <i v-else class="back-icon2"> <div  v-if="index !== leng" class="bord_h2"></div></i>
  <div class="pec-item-body">
  <p>{{item.createdDate}}</p>
<p class="pec-tips">{{item.orderTypeCH}}&nbsp;&nbsp;{{item.addMinus}}{{item.transAmt}}元</p>
</div>
<div class="pec-item-foot pec-align-center">
  <div class="pec-text-right" style="margin-top: 0.2rem;">
  <p style="margin-bottom: 0.15rem;">{{item.orderStatusCH}}</p>
<p @click="revokeFun" v-if="item.canRevoke === '1'" :class="cancel">撤销</p>
  </div>
  <i class="icon-arrow"></i>
  </div>
  </div>

  <div slot="bottom" class="mint-loadmore-bottom">
  <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
<span v-show="bottomStatus === 'loading'">
  <mt-spinner type="snake"></mt-spinner>
  </span>
  </div>
  </mt-loadmore>

  </div>
  </section>
  </div>

</template>
  <style>
.mint-spinner-snake {
  display: inline-block;
  vertical-align: middle;
}
</style>
<script>
import bow from 'bow';
import  api from '../../api/urls';
import * as ald from '../../util/ald';
import { mapState,mapActions } from 'vuex';
import CommonHeader from '../../components/Common_Header'

import * as deposit_detail from '../../api/deposit_detail';

let cardSignData = JSON.parse(localStorage.getItem("cardSignData"));


export default {
  data: function(){
    return {
      options:{
        title:"交易明细",  //头部
        showIcon:false,   //是否展示头部右侧按钮  默认false
        rightButtonText:'',//头部右侧按钮文本
        isSetBack:true,//是否设置头部返回按钮  默认false 如果设置为true
        setSelfShow:false //如果用户自己设置了分享，将不处理右边按钮   默认true
      },
      //isLoadMore:false,
      //mt-ui
      pageIndex:1,
      allLoaded: false,
      bottomStatus: '',
      wrapperHeight: 0,
      scrolled:false,
      scrollFlag: true
    };
  },
  computed: {
    ...mapState([
      'dhtDetail'
    ]),
    resRender : function(){
      return  this.dhtDetail.records.lists;
    },
    cancel: function(){
      return {"pec-tips" : true, "pec-color-4477D2" :this.dhtDetail.sysFlag}
    },
    leng : function(){
      return  this.dhtDetail.records.lists.length - 1;
    }
  },
  created: function(){
    this.getRecords({
      bankCardSign: cardSignData.cardMask,
      depositNo : cardSignData.data.depositSerialNo,
      pageIndex : 1,
    })

  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll);
  },
  methods: {
    ...mapActions([
      'getRecords',
      'getPaySearialNo'
    ]),
    leftButtonCallback(){
      if(ald.env.isBrowser){
        location.href = "./order_detail.html";
      }else{
        ald.nav.forward({url:"orderDetailPage"});
      }
    },
    handleScroll (){
      this.scrolled = window.scrollY > 0;
      if(this.scrollFlag){
        this.$refs.loadmore.onBottomLoaded();
        this.scrollFlag = false;
      }

    },
    toExchangeDetail(event) {
      let index = event.currentTarget.getAttribute("data-index");
      localStorage.setItem("dhtRecordItem",JSON.stringify(this.resRender[index]));
      //window.location.href = "http://localhost:8088/exchange_detail.html?check=2";
      ald.nav.forward({
        url: "exchangeDetailCheck"
      });
    },
    revokeFun(e){
      let self = this;
      e.stopPropagation();
      let index = e.currentTarget.parentElement.parentElement.parentElement.getAttribute("data-index");
      deposit_detail.default.getSystemDateTime({
        url:"getSystemDateTime",
        qs:{}
      },function(res){
        if(res >= 9 && res < 16){
          localStorage.setItem("dhtRecordItem",JSON.stringify(self.resRender[index]));
          let dhtRecordItem= JSON.parse(localStorage.getItem("dhtRecordItem"));
          let cardSignData  = JSON.parse(localStorage.getItem("cardSignData"));
          //window.location.href = "http://localhost:8088/exchange_detail.html";
          self.getPaySearialNo({
            bankCardSign:cardSignData.cardMask,
            orderAmount:dhtRecordItem.transAmt,
            orderNo :dhtRecordItem.tradeOrderNo,
            cb:function(res){
              ald.nav.forward({
                title: '定活宝-定活通',
                showHeader: true,
                url: "pay",
                env:"pay",
                qs:{
                  prepayId:res.paySearialNo,
                  securitySign:res.paySign
                }
              });
            }
          });
        }else{
          //PecMessageBox.alert({
          //  title: '撤销功能仅支持在9:00-16:00之间使用'
          //});
          self.cancel["pec-color-4477D2"] = false;

        }
      });
    },
    //loadMore: function(){
    //    /*this.isLoadMore = true;
    //    if (this.fund.loading==1 || this.fund.loading == 2){
    //        return;
    //    };
    //    this.$store.commit("DHT_LOADING_STATE");*/
    //
    //    this.getRecords({
    //        pageNum:++this.pageNum
    //    })
    //},
    handleTopChange(status) {
      this.topStatus = status;
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    // 下拉刷新
    loadTop() {
      //if (this.$refs.my_scroller){
      //    this.$refs.my_scroller.loadingState = 0;
      //}

      let self = this;
      self.pageIndex = 1;
      if(self.allLoaded){
        self.allLoaded = false;
        self.$refs.loadmore.onBottomLoaded();
      }

      setTimeout(() => {
        self.getRecords({
          bankCardSign: cardSignData.cardMask,
          depositNo : cardSignData.data.depositSerialNo,
          pageIndex:1,
          cb : function(){
            self.$refs.loadmore.onTopLoaded();
          }
        })
      },1500)
    },
    // 上拉加载更多
    loadBottom() {
      let self = this;
      if(!self.scrolled){
        return;
      }
      setTimeout(() => {
        if (!(self.pageIndex*10>self.dhtDetail.total || self.dhtDetail.total<=10)) {
          self.getRecords({
            pageIndex:++self.pageIndex,
            bankCardSign: cardSignData.cardMask,
            depositNo : cardSignData.data.depositSerialNo,
            cb: function(){
              self.$refs.loadmore.onBottomLoaded();
            }
          })
        } else {
          self.allLoaded = true;// 若数据已全部获取完毕
          self.$refs.loadmore.onBottomLoaded();
        }

      },1500)
      // 注意在这个方法的最后需要手动调用 loadmore 的 onBottomLoaded 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。
      // 列表底部的上拉刷新与之类似


    }
  },
  components:{
    CommonHeader
  },
  directives: {
    scroll: {
      bind: function (el, binding){
        let self = this;
        window.addEventListener('scroll', ()=> {
          console.log(self);
        })
      }
    }
  }
}
</script>
