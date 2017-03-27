<template id="template">
    <div>
  <common-header :options='options' @leftButtonCallback='leftButtonCallback'></common-header>

    <section>
  <div v-if= "model.transType === '01'">
  <div v-if= "model.transStatus == '02' ? true : false">
  <div class= "pec-result" >
  <i class= "icon-result-ok" > </i>
  <p class= "pec-result-txt" > 存入成功 </p>
  <p class= "pec-result-txt2 pec-color-6C7684" > 银行账号：{{model.bankName}}  {{model.bankType}} ({{model.bankCardMaskFour}})</p>
    <!--<p class= "pec-result-txt2 pec-color-6C7684">{{model.bankCardMask}}</p>-->
<p class= "pec-result-txt2" > 存入金额：{{model.transAmt}}元 </p>
<p class = "pec-result-txt2" > 到期时间：{{model.expiryDate}}</p>
        </div>
<div class = "pec-btn-zone pec-margin-top60">
  <button @click= "myDeposit" size = "big" class= "pec-primary-btn" > 查看我的定活通（增强型） </button>
  </div>
  </div>
  <div v-else>
  <div class= "pec-result" >
  <i class= "icon-result-wrong" > </i>
  <p class = "pec-result-txt" > 存入失败 </p>
  <p class= "pec-result-txt2 pec-color-6C7684" > 失败原因：{{model.failure}}</p>
<p class= "pec-result-txt2" >{{model.failCode}}</p>
        </div>
<div class = "pec-btn-zone pec-margin-top60" >
  <button @click= "goBuy"size = "big" class= "pec-primary-btn" > 重新存入 </button>
  </div>
  </div>
  </div>
  <div v-else>
<div v-if= "model.transFlag==='02'">
  <div class= "pec-result">
  <i class= "icon-result-ok" > </i>
  <p class= "pec-result-txt" > {{withdrawCon}} </p>
  <p class= "pec-result-txt2 pec-color-6C7684" > 银行账号：{{model.bankName}} {{model.bankType}} ({{model.bankCardMaskFour}}) </p>
<p class= "pec-result-txt2" > 支取金额：{{model.transAmt}}元 </p>
<p class= "pec-result-txt2" > {{estimatedTime}} </p>
</div>
</div>
<div v-if="model.transFlag === 'fail'">
  <div class= "pec-result">
  <i class= "icon-result-wrong" > </i>
  <p class= "pec-result-txt" > 支取失败 </p>
  <p class= "pec-result-txt2 pec-color-6C7684" > 失败原因：{{model.failure}}</p>
<p class= "pec-result-txt2" >{{model.failCode}}</p>
</div >
<div class= "pec-btn-zone pec-margin-top60" >
  <button @click= "goBuy" size = "big" class= "pec-primary-btn"> 重新支取 </button>
  </div>
  </div>
  </div>
    </section>
  </div>
</template>

<script>
    import {
            mapState,
            mapActions
    } from 'vuex';
    import * as deposit_detail from '../../api/deposit_detail';
    import * as aladdin from 'aladdin'
    import bow from 'bow';
    import * as ald from '../../util/ald';
    import api from '../../api/urls';
//    import fit from '../../filters/deposit';
import CommonHeader from '../../components/Common_Header'
import  * as fit from '../../filters/deposit';
let wd_result_type_dht = JSON.parse(localStorage.getItem("wd_result_type_dht"));
localStorage.removeItem("wd_result_type_dht");

    export default {
        data() {
            return {
              title:"定活宝-定活通",
              model: {},
              options:{
                title:"定活通(增强型)",
                showIcon:false,
                rightButtonText:'',
                isSetBack:true,
                setSelfShow:false
              },
              withdrawCon: wd_result_type_dht && wd_result_type_dht.tFlagCH === "02"?"支取成功!":"T+1到账支取申请提交成功!",
              estimatedTime : wd_result_type_dht && wd_result_type_dht.tFlagCH === "03"?`预计到账时间:${wd_result_type_dht.estimated_wd_dht} 24:00:00前`:"",
            }
        },
      components:{
        CommonHeader
      },
        created: function () {
          let me = this;
          //保存查询子订单接口所需要的参数

          let subTradeOrderNo = localStorage.getItem("subTradeOrderNo");
          let paySearialNo = localStorage.getItem("paySearialNo");

          let key = localStorage.getItem("_depositLightKey");
          localStorage.removeItem("_depositLightKey");
          //筛选存入还是支出
          let transTypeDHT = key === 'deposit' ? '01' : '02' ;

          deposit_detail.default.queryOrderStatus({
            url:'queryOrderStatus',
            env:'stg3',
            xhrFields:{withCredentials:true},
            qs:{
              paySearialNo:paySearialNo,
              subTradeOrderNo: subTradeOrderNo
            }
          },function(res){

            if(typeof res.data !== 'undefined' && res.data.transStatus !=="03"){
              me.model = res.data;
              let wdAmt = res.data.transAmt || 0;
              me.model.transType = transTypeDHT;
              if(me.model.transStatus === "02" || me.model.transStatus === "05"){
                me.model.transFlag = "02";
              }
              if(me.model.cardType){
                me.model.bankType = me.model.cardType === "1"? "储蓄卡": "互联网账户";
              }else{
                me.model.bankType = "";
              }


              let Date = me.model.expiryDate;
              me.model.expiryDate = Date? Date.substr(0,4)+'-'+Date.substr(4,2)+'-'+Date.substr(6,2):"";
              me.model.transAmt = me.model.transAmt? fit.formatMoneyNumber(me.model.transAmt,'blur') : "";
              me.model.bankCardMaskFour = res.data.bankCardMask? res.data.bankCardMask.substr(-4) :"";
              if(me.model.transFlag === '02' && me.model.transType ==='02'){
                let cardSignData = JSON.parse(localStorage.getItem("cardSignData"));
                if(me.model.availBalance){
                  cardSignData.data.corpusBalance = me.model.availBalance;
                }else{
                  cardSignData.data.corpusBalance = Number(cardSignData.data.corpusBalance) - wdAmt;
                }
                localStorage.setItem("cardSignData",JSON.stringify(cardSignData));
              }
            }else{
              me.model = res;
              me.model.transType = transTypeDHT;
              me.model.transFlag = "fail";
              me.model.transStatus = '03';
              if(!(res.data && res.data.transStatus ==="03")){
                me.model.failure = res.responseMsg? `${res.responseMsg}。`: "";
                me.model.failCode = res.responseCode? `(${res.responseCode})`:"";
              }else if(res.data && res.data.transStatus === '03'){
                me.model.failure =  "";
                me.model.failCode = "";
              }

            }
          });
        },
        methods: {
          // 左边头部按钮
//          leftClick:function() {
//
//            let item = "";
//            let me = this;
//            if(me.model.transType !== '01'){
//              item = 'orderDetailPage';
//            }else{
//              item = 'deposit_detail';
//            }
//              ald.nav.forward({
//                url: item
//              });
//
//          },
          leftButtonCallback:function(){
            let item = "";
            let me = this;
            if(me.model.transType !== '01'){
              item = 'orderDetailPage';
            }else{
              item = 'depositDetail';
            }
//            location.href = item;
            ald.nav.back({index:-2});
          },
            goBuy: function(){
              let me = this;
                //TODO: to send buy request
              let item = "";
              if (me.model.transType === '01') {
                item = "depositBuy";
              } else {
                item = "withdrawPage";
              }
//              location.href = item;
              ald.nav.back({index:-1});
            },
          myDeposit:function(){
            let me = this;
//            bow.sharedMemory.setItem('cardNo',me.model.bankCardSign);
            localStorage.setItem("cardNo",me.model.bankCardSign);
            ald.nav.forward({url: 'mylivedead',replace : true});
          }
        }
    }

    </script>
