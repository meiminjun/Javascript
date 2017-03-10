<template>
    <div>
    <common-header :title=title :onLeft='leftClick'></common-header>
    <section>
    <div class="order-details-over">
        <p class="momey">{{corpusBalance}}</p>
    <p>剩余本金(元)</p>
    </div>
    <div class="pec-list">
        <div class="pec-list-head">
        <div class="pec-list-head-head">收益参考</div>
        </div>
        <div class="pec-list-item">
        <div class="pec-item-body pec-color-6C7684">
        到期利率/利息
        </div>
        <div class="pec-item-body pec-text-right">
        {{resRender.dueRate}}%/{{resRender.dueInterest}}元
    </div>
    </div>
    <div class="pec-list-item">
        <div class="pec-item-body pec-color-6C7684">
        T+1到账支取利率/利息
    </div>
    <div class="pec-item-body pec-text-right">
        {{resRender.TDueRate}}%/{{resRender.TDueInterest}}元
    </div>
    </div>
    <div class="pec-list-item">
        <div class="pec-item-body pec-color-6C7684">
        实时支取利率/利息
        </div>
        <div class="pec-item-body pec-text-right">
        {{resRender.timeDueRate}}%/{{resRender.timeDueInterest}}元
    </div>
    </div>
    </div>
<div class="pec-list pec-margin-top20">
    <div class="pec-list-head" @click="showOrHide">
    <div class="pec-list-head-head">交易明细</div>
    <div class="pec-list-head-foot">
    <i :class="arrowUpDown"></i>
    </div>
    </div>
    <div v-show="exchangeShow">

        <Record v-if="dhtDetail.total != 0" :data="dhtDetail.records.lists"></Record>
        <div v-else class="pec-list-item">
        <div class="pec-item-body pec-text-center pec-color-ABABAB">
        暂无交易
        </div>
        </div>
    </div>



    </div>

        <div @click="orderShowHide" class="pec-list pec-margin-top20 pec-margin-bottom200">
        <div class="pec-list-head">
        <div class="pec-list-head-head">订单详情</div>
        <div class="pec-list-head-foot">
        <i :class="orderArrow"></i>
        </div>
        </div>
        <div v-show="orderContainer">
        <div class="pec-list-item">
        <div class="pec-item-head">
        银行账号
        </div>
        <div class="pec-item-body">
        平安银行账户  尾号({{resRender.lastFourNum}})
    </div>
    </div>
    <div class="pec-list-item">
        <div class="pec-item-head">
        币种
        </div>
        <div class="pec-item-body">
  {{resRender.currency}}
        </div>
        </div>
        <div class="pec-list-item">
        <div class="pec-item-head">
        到期利率
        </div>
        <div class="pec-item-body">
        3.575%
        </div>
        </div>
        <div class="pec-list-item">
        <div class="pec-item-head">
        存期
        </div>
        <div class="pec-item-body">
  {{resRender.saveDeadLine}}
    </div>
    </div>
    <div class="pec-list-item">
        <div class="pec-item-head">
        存入金额
        </div>
        <div class="pec-item-body">
        <p>{{resRender.transAmtFort}}</p>
    <p class="pec-abs-tips">{{resRender.transAmtCH}}</p>
        </div>
        </div>
        <div class="pec-list-item">
        <div class="pec-item-head">
        起存日
        </div>
        <div class="pec-item-body">
        2017-12-10
        </div>
        </div>
        <div class="pec-list-item">
        <div class="pec-item-head">
        到期日
        </div>
        <div class="pec-item-body">
        2017-12-10
        </div>
        </div>
        <div class="pec-list-item">
        <div class="pec-item-head">
        指令序号
        </div>
        <div class="pec-item-body">
        {{resRender.bizSeqNo}}
        </div>
        </div>
            <div class="pec-list-item">
            <div class="pec-item-head">
            协议
            </div>
            <div class="pec-item-body">
            <p><a href="#" class="pec-link pec-font-size26">《定活通客户协议》</a></p>
        <p><a href="#" class="pec-link pec-font-size26">《定活宝（定活通）客户服务协议》</a></p>
        </div>
        </div>
        </div>

        </div>
        <div @click="forward('withdrawPage')" class="pec-btn-zone pec-fiexd-btn pec-display-block">
        <button v-if="resRender.remainCapital === '0'" size="big" class="pec-primary-btn pec-width100" style="background: #D9D9D9 !important;">支取</button>
        <button v-else size="big" class="pec-primary-btn pec-width100" >支取</button>
        <p class="pec-font-size24 pec-margin-top20 pec-text-center" v-if="resRender.remainCapital === '0'" >您的剩余本金为零,已无可支取金额</p>

    </div>
        </section>
        </div>
</template>

<script>
import CommonHeader from '../../components/Common_Header'
import { mapState, mapActions, mapGetters } from 'vuex'
import api from '../../api/urls.js'
import types from '../../store/types.js'
import * as ald from '../../util/ald'
import Record from './Record.vue'
import bow from 'bow';

export default {
    data: function () {
        return {
            title:"定存宝-定活通",
            "arrowUpDown" :{
                "icon-arrow" : true,
                "curr":true
            },
            "exchangeShow" : true,
            "orderArrow" :{
                "icon-arrow" : true,
                "curr":true
            },
            "orderContainer" : true,
            "corpusBalance":"2000"

        };
    },
    computed: {
        ...mapState([
            'dhtDetail'
        ]),
        resRender : function(){
            return this.dhtDetail.orderDetail.lists;
        }
    },
    created () {
      let cardSignData = bow.sharedMemory.getItem("cardSignData");
        //let self = this;
//amt=10000&bankCardSign=6230582000070450773&bussType=9110&ccy=RMB&depositNo=00001&queryType=0&businessType=00&orderType=00&pageIndex=1&pageSize=10&depositSerialNo=00001&queryType=0
        this.getOrderDetail({
          depositNo: cardSignData.data.depositSerialNo||"00001",
          amt: cardSignData.data.corpusBalance||"1000",
          bankCardSign: cardSignData.cardnoMask || "6230582000070450831",
          businessType : "00",
          orderType:"00",
          pageIndex:1,
          //brcpSessionTicket:"1111"
        });
        //this.getRecords({pageNum:1});
    },
    mounted:function(){
        //console.log(this.$store.getters.fundOnDate)
        // console.log(this.fund)

    },
    methods: {
        ...mapActions([
            'getOrderDetail',
            'getRecords'
        ]),
        //getOrderDetail : api.getOrderDetail,

        toWithdraw() {
            location.href = "withdraw.html";
        },
        showOrHide(){
            let self = this;
            if(self.arrowUpDown.curr){
                self.arrowUpDown.curr = self.exchangeShow = false;
            }else{
                self.arrowUpDown.curr = self.exchangeShow = true;
            }
        },
        orderShowHide (){
            let self = this;
            if(self.orderArrow.curr){
                self.orderArrow.curr = self.orderContainer = false;
            }else{
                self.orderArrow.curr = self.orderContainer = true;
            }
        },
        forward: function(item) {
            if(item ==="withdrawPage"){
                if(this.resRender.remainCapital === "0"){
                    return;
                }
            }
            //ald.track.record(item);
            if (true) {
                ald.navigator.forward({
                    url: api[item],
                    title: api[item],
                    type: 'webapp'
                });
            } else {
                ald.navigator.forward({
                    title: api[item],
                    showHeader: true,
                    url: api[item],
                    tabIndex: 2,
                    tpl: 'webview'
                });
            }
        },
        // 左边头部按钮
        leftClick:function() {
          ald.navigator.forward({
            url: api.mylivedead,
            type: 'webapp'
          });
        }
    },
    components:{
        Record,CommonHeader
    }
}
</script>
