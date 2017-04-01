<template>
    <div>
    <common-header :options="options" @leftButtonCallback="leftButtonCallback"></common-header>
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
        <span v-if="resRender.dueRate">{{resRender.dueRate}}%/{{resRender.dueInterest}}元</span>
        <span v-else></span>
    </div>
    </div>
    <div class="pec-list-item">
        <div class="pec-item-body pec-color-6C7684">
        T+1到账支取利率/利息
    </div>
    <div v-if="resRender.TDueRate !==''" class="pec-item-body pec-text-right">
        {{resRender.TDueRate}}%/{{resRender.TDueInterest}}元
    </div>
    <div v-else class="pec-item-body pec-text-right">
    存单未满90天不支持
    </div>
    </div>
    <div class="pec-list-item">
        <div class="pec-item-body pec-color-6C7684">
        实时支取利率/利息
        </div>
        <div class="pec-item-body pec-text-right">
          <span v-if="resRender.timeDueRate">{{resRender.timeDueRate}}%/{{resRender.timeDueInterest}}元</span>
        <span v-else></span>

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
        <div @click="more('recordsList')" v-if='dhtDetail.total>5' class="pec-list-foot">
        <div class="pec-list-foot-body">
        <p class="pec-link pec-text-center">查看更多</p>
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
      <span v-if="resRender.dueRate">{{resRender.dueRate}}%</span>
      <span v-else></span>
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
        </div>
        </div>
        <div class="pec-list-item">
        <div class="pec-item-head">
        起存日
        </div>
        <div class="pec-item-body">
  {{resRender.orderTimeFort}}
        </div>
        </div>
        <div class="pec-list-item">
        <div class="pec-item-head">
        到期日
        </div>
        <div class="pec-item-body">
  {{resRender.expiryDateFort}}
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
            <p @click="moreAgree"><a class="pec-link pec-font-size26">《平安银行个人定活通（增强型）产品服务协议》</a></p>
        <p @click="moreAgr"><a class="pec-link pec-font-size26">《平安银行定活通（增强型）支取服务协议》</a></p>
        </div>
        </div>
        </div>

        </div>
        <div @click="forward('withdrawPage')" class="pec-btn-zone pec-fiexd-btn pec-display-block">
        <button v-if="cardSign.data.corpusBalance === 0" size="big" class="pec-primary-btn pec-width100" style="background: #D9D9D9 !important;">支取</button>
        <button v-else size="big" class="pec-primary-btn pec-width100" >支取</button>
        <p class="pec-font-size24 pec-margin-top20 pec-text-center" v-if="cardSign.data.corpusBalance === 0" >您的剩余本金为零,已无可支取金额</p>

    </div>
        </section>
        </div>
</template>

<script>
import CommonHeader from '../../components/Common_Header'
import { mapState, mapActions, mapGetters } from 'vuex'
import types from '../../store/types.js'
import * as ald from '../../util/ald'
import Record from './Record.vue'
import bow from 'bow';
import  * as fit from '../../filters/deposit';
import * as deposit_detail from '../../api/deposit_detail'
let cardSignData = JSON.parse(localStorage.getItem("cardSignData"));
//car_id:"123",
//  cardNo:this.cardNo
//let backData = cardSignData.car_id? {car_id: cardSignData.car_id}: {cardNo:cardSignData.cardNo};
localStorage.setItem("cardNo",cardSignData.cardMask);

export default {
    data: function () {
        return {
            options:{
              title:"详情",  //头部
              showIcon:false,   //是否展示头部右侧按钮  默认false
              rightButtonText:'',//头部右侧按钮文本
              isSetBack:true,//是否设置头部返回按钮  默认false 如果设置为true
              setSelfShow:false //如果用户自己设置了分享，将不处理右边按钮   默认true
            },
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
      let self = this;
//amt=10000&bankCardSign=6230582000070450773&bussType=9110&ccy=RMB&depositNo=00001&queryType=0&businessType=00&orderType=00&pageIndex=1&pageSize=10&depositSerialNo=00001&queryType=0
        self.getOrderDetail({
          depositNo: cardSignData.data.depositSerialNo,
          amt: cardSignData.data.corpusBalance,
          bankCardSign: cardSignData.cardMask,
          businessType : "00",
          orderType:"00",
          pageIndex:1
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
        more(item){

          localStorage.setItem("payeeAcctNo_agreement",this.resRender.payeeAcctNo);
          ald.nav.forward({url:item});
        },
        moreAgr(e){
          e.stopPropagation();
          ald.nav.forward({url:'withdrawProtoOrder'});
        },
      moreAgree(e){
        e.stopPropagation();
        ald.nav.forward({url:'depositAgreement'});
      },
        showOrHide(){
            this.showHide("arrowUpDown","exchangeShow");
        },
        orderShowHide (){
            this.showHide("orderArrow","orderContainer");
        },
        showHide(item,type){
          let self = this;
          if(self[item].down){
            self[item].down = self[type] = false;
            self[item].up = true;
          }else{
            self[item].down = self[type] = true;
            self[item].up = false;
          }
        },
        forward: function(item) {
            if(item ==="withdrawPage"){
                if(Number(cardSignData.data.corpusBalance) === 0){
                    return;
                }
            }
          ald.nav.forward({url:item});
        },
        // 左边头部按钮
      leftButtonCallback:function() {
          //alert 需清除掉cardSignData
          //ald.navigator.forward({
          //  url: api.mylivedead,
          //  type: 'webapp'
          //});
          if(ald.env.isBrowser){
            location.href = "./mylivedead.html";
          }else{
            ald.nav.forward({url:"mylivedead"});
          }
        }
    },
    components:{
        Record,CommonHeader
    }
}
</script>
