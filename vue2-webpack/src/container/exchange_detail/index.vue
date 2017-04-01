<template>
    <div>
    <common-header :title=title :onLeft='leftClick'></common-header>
    <section>
        <div class="pec-list pec-LBP-list pec-margin-top20">
            <div class="pec-list-item">
            <div class="pec-item-head">交易类型</div>
            <div class="pec-item-body">{{dhtRecordItem.orderTypeCH}}</div>
        </div>
        <div class="pec-list-item">
            <div class="pec-item-head">银行账号</div>
            <div class="pec-item-body">平安银行互联网账户({{dhtRecordItem.payeeAcctNoFour}})</div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">币种</div>
            <div class="pec-item-body">人民币</div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">支取金额</div>
            <div class="pec-item-body">
            <p><span class="pec-color-F17940">{{dhtRecordItem.transAmtFort}}元</span></p>
        <p class="pec-abs-tips">{{dhtRecordItem.transAmtCH}}</p>
            </div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">到账金额</div>
            <div class="pec-item-body">
            <p><span class="pec-color-F17940">{{dhtRecordItem.interestFort}}元</span></p>
        <p class="pec-abs-tips">{{dhtRecordItem.interestCH}}</p>
            </div>
            </div>
        </div>
    <div class="pec-list pec-LBP-list pec-margin-top20">
            <div class="pec-list-item">
            <div class="pec-item-head">提交时间</div>
            <div class="pec-item-body">{{dhtRecordItem.createdDate}}</div>
        </div>
        <div v-if="dhtRecordItem.orderStatusCH !=='处理中'" class="pec-list-item">
            <div class="pec-item-head">处理时间</div>
            <div class="pec-item-body">{{dhtRecordItem.updatedDate}}</div>
        </div>
        <div class="pec-list-item">
            <div class="pec-item-head">处理结果</div>
            <div :class="resultClass">{{dhtRecordItem.orderStatusCH}}</div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">指令序号</div>
            <div class="pec-item-body">{{dhtRecordItem.bizSeqNo}}</div>
            </div>
            </div>

            <div @click="toWithdraw" class="pec-btn-zone pec-margin-top60">
            <button size="big" :class="submitClass">撤销</button>

            </div>
            <p class="pec-detail-p">2016-12-10 9:00-16:00可撤销</p>
    </section>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import api from '../../api/urls.js'
import types from '../../store/types.js'
import * as ald from '../../util/ald';
import CommonHeader from '../../components/Common_Header'
import {PecMessageBox} from 'pa-ui/lib/index';
import {Toast} from 'pa-ui/lib/index';
import  * as fit from '../../filters/deposit';
import * as deposit_detail from '../../api/deposit_detail';
let dhtRecordItem= JSON.parse(localStorage.getItem("dhtRecordItem"));
let cardSignData  = JSON.parse(localStorage.getItem("cardSignData"));


export default {
    data: function () {
        return {
            title:"交易详情",
            "submitClass" : {
                "pec-primary-btn" : true,
                "bgColorGray" : new Date().getHours() >=9 && new Date().getHours()<16 ? false: true
            },
            "resultClass": {
                "pec-item-body" : true,
                "pec-color-28B45F" : localStorage.getItem("testClass") === "succ"? true : false ,
                "pec-color-FC1520" : localStorage.getItem("testClass") === "fail"? true : false
            }
        };
    },
    computed: {
        resultCH : function(){

            if(localStorage.getItem("testClass") === "succ"){
                return "支取成功";
            }else if (localStorage.getItem("testClass") === "ing"){
                return "正在处理";
            }else if (localStorage.getItem("testClass") === "fail"){
                return "支取失败";
            }
        },
      dhtRecordItem : function(){
        //dhtRecordItem.payeeAcctNoFour = dhtRecordItem.payeeAcctNo.substr(-4);
        //dhtRecordItem.transAmtCH = fit.chineseNum(dhtRecordItem.transAmt);
        //let interest = Number(dhtRecordItem.interest) + Number(dhtRecordItem.transAmt);
        //dhtRecordItem.interestFort = fit.formatMoneyNumber(interest,"blur");
        //dhtRecordItem.interestCH = fit.chineseNum(interest);
        return dhtRecordItem;
      }
    },
    created () {
      let self = this;
        let url = window.location.href;
        if(url.split("?")[1] === 'check=1'){
          let subTradeOrderNo = dhtRecordItem.subTradeOrderNo;
          deposit_detail.default.queryOrderStatus({
            cancelOrderFlag : "Y",
            subTradeOrderNo:subTradeOrderNo
          },function(res){
            let title = res.transStatus === "04"? "撤销成功": "撤销失败";
            PecMessageBox.alert({
              title: title
            });
            if(res.transStatus === "04"){
              setTimeout(()=>{
                self.leftClick();
              },2000)
            }


          });
        }
    },
    methods: {
      ...mapActions([
        'getPaySearialNo'
      ]),
        toWithdraw() {
            let self = this;
            //if(new Date().getHours() >= 16){
            //  PecMessageBox.alert({
            //    title: '撤销功能仅支持在16:00之前使用'
            //  });
            //    this.submitClass.bgColorGray = true;
            //    return;
            //}
          self.getPaySearialNo({
            bankCardSign:cardSignData.cardMask,
            orderAmount:"10000",
            orderNo :dhtRecordItem.tradeOrderNo,
            cb:function(res){
              localStorage.setItem("subTradeOrderNo_withdraw",res.subTradeOrderNo);
              ald.navigator.forward({
                title: '定活宝-定活通',
                showHeader: true,
                url: "https://bank-static-stg.pingan.com.cn/omm/stg2/omm/mobile/pay.html?prepayId="+res.paySearialNo+'&'+'securitySign='+res.paySign,
                tpl: 'webview'
              });
            }
          });
        },
        // 左边头部按钮
        leftClick:function() {
            if (true) {
                ald.navigator.forward({
                    url: api.orderDetailPage,
                    type: 'webapp'
                });
            } else {
                ald.navigator.forward({
                    showHeader: true,
                    url: api.orderDetailPage,
                    tabIndex: 2,
                    tpl: 'webview'
                });
            }
        }
    },
    components:{
        CommonHeader
    }
}
</script>
