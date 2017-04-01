<template>
    <div>
<div v-for= "(item,index) in data"  :data-index = "index" @click= "toExchangeDetail" class= "pec-list-item pec-list-item2" >
      <i v-if="item.tranStatus === '01'" class="back-icon"> <div class="bord_h"></div></i>
      <i v-else class="back-icon2"> <div class="bord_h2"></div></i>
      <div class="pec-item-body">
      <p>{{item.createdDate}}</p>
    <p class="pec-tips">{{item.orderTypeCH}}&nbsp;&nbsp;{{item.addMinus}}{{item.transAmtFort}}元</p>
    </div>
    <div class="pec-item-body pec-text-right">
      <p>{{item.orderStatusCH}}</p>
    <p v-if="item.canRevoke === '1'" :class="cancel">撤销</p>
      </div>
      <div class="pec-item-foot">
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


export default {
    props:{
        data:{
            type:Object|Array
        }
    },
    data: function(){
        return {
            "cancel" : {
                "pec-tips" : true,
                "pec-color-4477D2" : new Date().getHours() >=9 && new Date().getHours()<16 ? true: false
            },
          loadMore:false,
            pageNum:1,
          topStatus:"",
          wrapperHeight:0


        };
    },
    computed: {
        ...mapState([
            'dhtDetail'
        ])
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
            'getRecords'
        ]),
      toExchangeDetail(e) {
        var index = event.currentTarget.getAttribute("data-index");
        localStorage.setItem("dhtRecordItem",JSON.stringify(this.data[index]));
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
