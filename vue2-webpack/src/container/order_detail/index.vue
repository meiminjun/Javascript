<template>
    <div>
    <common-header :title=title :onLeft='leftClick'></common-header>
    <section>
    <div class="order-details-over">
        <p class="momey">{{cardSign.corpusBal}}</p>
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

        <Record v-if="dhtDetail.total != 0 && dhtDetail.recordsFlag" :data="dhtDetail.records.lists"></Record>
        <div v-else class="pec-list-item">
        <div class="pec-item-body pec-text-center pec-color-ABABAB">
        暂无交易
        </div>
        </div>
    </div>

  <div v-if='dhtDetail.total>5' class="pec-list-foot">
  <div class="pec-list-foot-body">
  <p class="pec-link pec-text-center">查看更多</p>
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
  {{cardSign.cardnoMask}}({{resRender.lastFourNum}})
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
  {{resRender.dueRate}}%
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
        <button v-if="cardSign.data.corpusBalance === 0" size="big" class="pec-primary-btn pec-width100" style="background: #D9D9D9 !important;">支取</button>
        <button v-else size="big" class="pec-primary-btn pec-width100" >支取</button>
        <p class="pec-font-size24 pec-margin-top20 pec-text-center" v-if="corpusBalance === '0'" >您的剩余本金为零,已无可支取金额</p>

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
import  * as fit from '../../filters/deposit';
let cardSignData  = JSON.parse(localStorage.getItem("cardSignData"));

export default {
    data: function () {
        return {
            title:"定存宝-定活通",
            "arrowUpDown" :{
                "icon-arrow" : true,
                "down":true,
                "up":false
            },
            "exchangeShow" : true,
            "orderArrow" :{
              "icon-arrow" : true,
              "down":true,
              "up":false
            },
            "orderContainer" : true

        };
    },
    computed: {
        ...mapState([
            'dhtDetail'
        ]),
        resRender : function(){
            return this.dhtDetail.orderDetail.lists;
        },
      cardSign:function(){
        cardSignData.corpusBal = fit.formatMoneyNumber(cardSignData.data.corpusBalance,"blur");
        cardSignData.data.corpusBalance = Number(cardSignData.data.corpusBalance);
        return cardSignData;
      }
    },
    created () {
//amt=10000&bankCardSign=6230582000070450773&bussType=9110&ccy=RMB&depositNo=00001&queryType=0&businessType=00&orderType=00&pageIndex=1&pageSize=10&depositSerialNo=00001&queryType=0
        this.getOrderDetail({
          depositNo: cardSignData.data.depositSerialNo,
          amt: cardSignData.data.corpusBalance,
          bankCardSign: cardSignData.cardMask,
          businessType : "00",
          orderType:"00",
          pageIndex:1,
          //brcpSessionTicket:"1111"
        });
    },
    mounted:function(){
    },
    methods: {
        ...mapActions([
            'getOrderDetail',
            'getRecords'
        ]),
        showOrHide(){
            this.showHide("arrowUpDown");
        },
        orderShowHide (){
            this.showHide("orderArrow");
        },
        showHide(item){
          let self = this;
          if(self[item].down){
            self[item].down = self.exchangeShow = false;
            self[item].up = true;
          }else{
            self[item].down = self.exchangeShow = true;
            self[item].up = false;
          }
        },
        forward: function(item) {
            if(item ==="withdrawPage"){
                if(cardSignData.data.corpusBalance === "0"){
                    return;
                }
            }
            ald.navigator.forward({
              url: api[item],
              type: 'webapp'
            });
        },
        // 左边头部按钮
        leftClick:function() {
          //alert 需清除掉cardSignData
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
