<template>
    <div>
    <common-header :options="options" @leftButtonCallback="leftButtonCallback"></common-header>
    <section>
        <div class="pec-list pec-LBP-list pec-margin-top20">
            <div class="pec-list-item">
            <div class="pec-item-head">交易类型</div>
            <div class="pec-item-body">{{dhtRecordItem.orderTypeCH}}</div>
        </div>
        <div class="pec-list-item">
            <div class="pec-item-head">银行账号</div>
            <div class="pec-item-body">{{dhtRecordItem.cardnoMask}}({{dhtRecordItem.payeeAcctNoFour}})</div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">币种</div>
            <div class="pec-item-body">{{dhtRecordItem.rmbCH}}</div>
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
            <div class="pec-item-body">{{dhtRecordItem.orderTime}}</div>
        </div>
        <div class="pec-list-item">
            <div class="pec-item-head">处理结果</div>
            <div :class="dhtRecordItem.resultClass">{{dhtRecordItem.orderStatusCH}}</div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">指令序号</div>
            <div class="pec-item-body">{{dhtRecordItem.bizSeqNo}}</div>
            </div>
            </div>
            <div v-if="dhtRecordItem.showFlag">
                <div @click="toWithdraw" class="pec-btn-zone pec-margin-top60">
                <button size="big" :class="{'pec-primary-btn':true,'bgColorGray':sysTime}">撤销</button>
                </div>
                <p class="pec-detail-p">{{current_date_time_fort}} 9:00-16:00可撤销</p>
            </div>

    </section>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import api from '../../api/urls.js'
import types from '../../store/types.js'
import * as ald from '../../util/ald';
import CommonHeader from '../../components/Common_Header'
// import {MessageBox} from 'pa-ui/lib/index';
import { MessageBox } from 'mint-ui'

import {Toast} from 'mint-ui';


import  * as fit from '../../filters/deposit';
import * as deposit_detail from '../../api/deposit_detail';
let dhtRecordItem= JSON.parse(localStorage.getItem("dhtRecordItem"));
let cardSignData  = JSON.parse(localStorage.getItem("cardSignData"));


export default {
    data: function () {
        return {
          options:{
            title:"交易详情",  //头部
            showIcon:false,   //是否展示头部右侧按钮  默认false
            rightButtonText:'',//头部右侧按钮文本
            isSetBack:true,//是否设置头部返回按钮  默认false 如果设置为true
            setSelfShow:false //如果用户自己设置了分享，将不处理右边按钮   默认true
          },
          "sysTime":"",
          "current_date_time_fort":""
        };
    },
    computed: {
      dhtRecordItem : function(){
        dhtRecordItem.cardnoMask = cardSignData.cardnoMask || "";
        dhtRecordItem.payeeAcctNoFour = dhtRecordItem.payeeAcctNo? dhtRecordItem.payeeAcctNo.substr(-4):"";
        dhtRecordItem.transAmtCH = fit.chineseNum(dhtRecordItem.transAmt);
        dhtRecordItem.showFlag = false;
        if((dhtRecordItem.tranStatus === "01" || dhtRecordItem.tranStatus === "05") && dhtRecordItem.businessType === "03"){
          dhtRecordItem.showFlag = true;
        }
        dhtRecordItem.rmbCH = fit.monetaryUnit(dhtRecordItem.currency);
        let interest = Number(dhtRecordItem.interest) + Number(dhtRecordItem.transAmt);
        dhtRecordItem.interestFort = fit.formatMoneyNumber(interest,"blur");
        dhtRecordItem.interestCH = fit.chineseNum(interest);
        //处理结果颜色
        if(dhtRecordItem.orderStatusCH && dhtRecordItem.orderStatusCH.indexOf("成功")!== -1){
            dhtRecordItem.resultClass = {"pec-item-body" : true, "pec-color-28B45F" : true , "pec-color-FC1520" : false};
        }else if(dhtRecordItem.orderStatusCH && dhtRecordItem.orderStatusCH.indexOf("失败")!== -1){
          dhtRecordItem.resultClass = {"pec-item-body" : true, "pec-color-28B45F" : false , "pec-color-FC1520" : true};
        }else{
          dhtRecordItem.resultClass = {"pec-item-body" : true, "pec-color-28B45F" : false , "pec-color-FC1520" : false};
        }

        return dhtRecordItem;
      }
    },
    created () {
      let self = this;
      //如果是支取 处理中状态 才展示撤销按钮
      if((dhtRecordItem.tranStatus === "01" || dhtRecordItem.tranStatus === "05") && dhtRecordItem.businessType === "03"){
        deposit_detail.default.getSystemDateTime({
          url:"getSystemDateTime",
          qs:{}
        },function(res,current_date_time){
          self.sysTime = res >= 9 && res < 16? false : true;
          let y = new Date(current_date_time).getFullYear();
          let m = new Date(current_date_time).getMonth()+1<10? "0"+(new Date(current_date_time).getMonth()+1) :new Date(current_date_time).getMonth()+"";
          let d = new Date(current_date_time).getDate();
          self.current_date_time_fort = `${y}-${m}-${d}`;
        });
      }
      //判断撤销结果页
        let url = window.location.href;
        if(url.split("?")[1] === 'check=1'){
          let subTradeOrderNo = dhtRecordItem.subTradeOrderNo;
          deposit_detail.default.queryOrderStatus({
            url:"queryOrderStatus",
            env:"stg3",
            qs:{
              cancelOrderFlag : "Y",
              subTradeOrderNo:subTradeOrderNo
            }
          },function(res){
            let title = res.responseCode === "000000"&& res.data.transStatus === "04"? "撤销成功": res.responseMsg;
            Toast ({
              message: title,
              position: 'middle',
              duration: 2000
            });
            if(res.responseCode === "000000" && res.data.transStatus === "04"){
              setTimeout(()=>{
                self.leftButtonCallback();
              },2000);
              if(res.data.availBalance){
                cardSignData.data.corpusBalance = res.data.availBalance;
              }else{
                cardSignData.data.corpusBalance = Number(cardSignData.data.corpusBalance) + Number(dhtRecordItem.transAmt);
              }
              localStorage.setItem("cardSignData",JSON.stringify(cardSignData));
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
          deposit_detail.default.getSystemDateTime({
            url:"getSystemDateTime",
            qs:{}
          },function(res){
            if(res<9 || res>=16){
              MessageBox.alert({
                title: '撤销功能仅支持在9:00-16:00之间使用'
              });
              self.sysTime = true;
            }else{
              self.getWithdrawNo();
            }
          });
        },
        getWithdrawNo(){
          let self = this;
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
        // 左边头部按钮
      leftButtonCallback:function() {
          //let item = window.location.href.split("?")[1] === 'check=2'?"records_list": "order_detail";
        let item = window.location.href.split("?")[1] === 'check=2'? "recordsList": "orderDetailPage";
        let urlFor = window.location.href.split("?")[1] === 'check=2'? './records_list.html': "./order_detail.html";

        if(ald.env.isBrowser){
            location.href = urlFor;
        }else{
          ald.nav.forward({url:item});
        }
      }
    },
    components:{
        CommonHeader
    }
}
</script>
