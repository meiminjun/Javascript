<template>
    <div>
<div v-for= "(item,index) in data"  :data-index = "index" @click= "toExchangeDetail"  style="padding-bottom: 0.2rem!important;" class= "pec-list-item pec-list-item2" >
  <i v-if="item.orderStatusCH === '处理中'" style="z-index:3;" class="back-icon"> </i>
  <i v-else class="back-icon2"  style="z-index:3;"> </i>
  <div v-if="item.orderStatusCH === '处理中'" class="bord_h" style="top:.8rem!important;left:.5rem!important;" ></div>
  <div v-else-if="index !== len" class="bord_h2" style="top:.8rem!important;left:.5rem!important;" ></div>
  <div class="pec-item-body">
  <p>{{item.createdDate}}</p>
<p class="pec-tips pec-margin-top10">{{item.orderTypeCH}}&nbsp;&nbsp;{{item.addMinus}}{{item.transAmtFort}}元</p>
</div>
<div class="pec-item-foot pec-align-center">
  <div class="pec-text-right" style="margin-top: 0.2rem;">
  <p style="margin-bottom: 0.15rem;">{{item.orderStatusCH}}</p>
<p @click="directWith" v-if="item.canRevoke === '1'" :class="cancel">撤销</p>
  </div>
  <i class="icon-arrow"></i>
  </div>
  </div>
  </div>



</template>
<style>
.mint-spinner-snake {
    display: inline-block;
    vertical-align: middle;
}
</style>
<script>

//import * as filters from '../../filters/fund';
import  api from '../../api/urls';
//import * as finance from '../../util/finance';
import * as ald from '../../util/ald';
//import Loading from '../../components/Loading.vue';
import { mapState,mapActions } from 'vuex';
import {PecMessageBox} from 'pa-ui/lib/index';
import * as deposit_detail from '../../api/deposit_detail';


export default {
    props:{
        data:{
            type:Object|Array
        }
    },
    data: function(){
        return {
            //"cancel" : {
            //    "pec-tips" : true,
            //    "pec-color-4477D2" : new Date().getHours() >=9 && new Date().getHours()<16 ? true: false
            //},
          loadMore:false,
          pageNum:1,
          topStatus:"",
          wrapperHeight:0


        };
    },
    computed: {
        ...mapState([
            'dhtDetail'
        ]),
        cancel:function(){
          //querySysFlag
          return { "pec-tips" : true, "pec-color-4477D2" :this.dhtDetail.querySysFlag}
        },
        len : function(){
          return this.dhtDetail.records.lists.length-1;
        }
    },
    created: function(){

    },
    mounted() {
       //setTimeout(() => {
        //    this.$refs.my_scroller.resize();
        //})
    },

    methods: {
        ...mapActions([
            'getRecords',
          'getPaySearialNo'
        ]),
      toExchangeDetail(e) {
        var index = event.currentTarget.getAttribute("data-index");
        localStorage.setItem("dhtRecordItem",JSON.stringify(this.data[index]));
        //window.location.href = "http://localhost:8088/exchange_detail.html";
        ald.nav.forward({url: "exchangeDetail"});
      },
      directWith(e){
        let self = this;
        e.stopPropagation();
        let index = e.currentTarget.parentElement.parentElement.parentElement.getAttribute("data-index");
        deposit_detail.default.getSystemDateTime({
          url:"getSystemDateTime",
          qs:{}
        },function(res){
          if(res >= 9 && res < 16){
            self.direct(index);
          }else{
            //PecMessageBox.alert({
            //  title: '撤销功能仅支持在9:00-16:00之间使用'
            //});
            self.cancel["pec-color-4477D2"] = false;

          }
        });


      },
      direct(index){
        let self = this;

        localStorage.setItem("dhtRecordItem",JSON.stringify(self.data[index]));
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
        //handleTopChange(status) {
        //    this.topStatus = status;
        //},
        //handleBottomChange(status) {
        //    this.bottomStatus = status;
        //},
        // 下拉刷新
        loadTop(id) {
            //if (this.$refs.my_scroller){
            //    this.$refs.my_scroller.loadingState = 0;
            //}

            let self = this;
            setTimeout(() => {
                self.pageNum = 1;
                this.getRecords({
                    pageNum:1,
                    cb : function(){
                      //self.$refs.loadmore.onTopLoaded();
                      self.$broadcast('onTopLoaded',id);
                    }
                })
            },1500)
        },
        // 上拉加载更多
      loadMore() {
            let self = this;
        self.loadMore = true;
            setTimeout(() => {
                if (!(self.pageNum*10>self.dhtDetail.total || self.dhtDetail.total<=10)) {
                  self.loadMore = false;
                    this.getRecords({
                        pageNum:++self.pageNum,
                        cb: function(){

                        }
                    })
                }
            },1500)
            // 注意在这个方法的最后需要手动调用 loadmore 的 onBottomLoaded 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。
            // 列表底部的上拉刷新与之类似


        }
    },
    //directives: {
    //    scroll: {
    //        bind: function (el, binding){
    //          let self = this;
    //            window.addEventListener('scroll', ()=> {
    //
    //            })
    //        }
    //    }
    //}
}
</script>
