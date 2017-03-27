<template>
  <div>
<common-header :title=title :onLeft='leftClick'></common-header>
    <section>
<div class="pec-list pec-margin-top20">
  <mt-loadmore autoFill="false" style="top: .9rem"  :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
  <div v-for= "(item,index) in data"  :data-index = "index" @click= "toExchangeDetail" class= "pec-list-item pec-list-item2" >
  <i v-if="item.tranStatus === '01'" class="back-icon"> <div class="bord_h"></div></i>
  <i v-else class="back-icon2"> <div class="bord_h2"></div></i>
  <div class="pec-item-body">
  <p>{{item.createdDate}}</p>
<p class="pec-tips">{{item.orderTypeCH}}&nbsp;&nbsp;{{item.addMinus}}{{item.transAmt}}元</p>
</div>
<div class="pec-item-body pec-text-right">
  <p>{{item.orderStatusCH}}</p>
<p v-if="item.canRevoke === '1'" :class="cancel">撤销</p>
  </div>
  <div class="pec-item-foot">
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

<script>
import bow from 'bow';
//import * as filters from '../../filters/fund';
import  api from '../../api/urls';
//import * as finance from '../../util/finance';
import * as ald from '../../util/ald';
//import Loading from '../../components/Loading.vue';
import { mapState,mapActions } from 'vuex';
import CommonHeader from '../../components/Common_Header'
//import Scroller from 'vue-scroller'
let cardSignData = JSON.parse(localStorage.getItem("cardSignData"));


export default {
  data: function(){
    return {
      "title":"交易明细",
      "cancel" : {
        "pec-tips" : true,
        "pec-color-4477D2" : new Date().getHours() >=9 && new Date().getHours()<16 ? true: false
      },
      //isLoadMore:false,
      pageNum:1,
      //mt-ui
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
    //setTimeout(() => {
    //    this.$refs.my_scroller.resize();
    //})
  },
  methods: {
    ...mapActions([
      'getRecords'
    ]),
    leftClick(){
      ald.navigator.forward({
        url: api.orderDetailPage,
        type: 'webapp'
      });
    },
    handleScroll (){
      this.scrolled = window.scrollY > 0;
      if(this.scrollFlag){
        this.$refs.loadmore.onBottomLoaded();
        this.scrollFlag = false;
      }

    },
    toExchangeDetail(item) {
      var index = event.currentTarget.getAttribute("data-index");

      ald.navigator.forward({
        url: api.exchangeDetail,
        type: 'webapp'
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
      if(!self.allLoaded){
        self.allLoaded = true;
        self.$refs.loadmore.onBottomLoaded();
      }

      setTimeout(() => {
        self.pageNum = 1;
        self.getRecords({
          pageNum:1,
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
        if (!(self.pageNum*10>self.dhtDetail.total || self.dhtDetail.total<=10)) {
          self.getRecords({
            pageNum:++this.pageNum,
            cb: function(){
              self.$refs.loadmore.onBottomLoaded();
            }
          })
        } else {
          self.allLoaded = true;// 若数据已全部获取完毕
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
