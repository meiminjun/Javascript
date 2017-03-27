<template id="template">
    <div>
  <common-header :title=title :onLeft='leftClick'></common-header>

    <section>
  <div v-if= "model.transType === '01'">
  <div v-if= "model.transStatus == '02' ? true : false">
  <div class= "pec-result" >
  <i class= "icon-result-ok" > </i>
  <p class= "pec-result-txt" > 存入成功 </p>
  <p class= "pec-result-txt2 pec-color-6C7684" > 银行账号：{{model.bankName}}账号{{model.bankCardMask}} </p>
<p class= "pec-result-txt2" > 存入金额：{{model.transAmt}}元 </p>
<p class = "pec-result-txt2" > 到期时间：{{model.expiryDate}}</p>
        </div>
<div class = "pec-btn-zone pec-margin-top60">
  <button @click= "myDeposit" size = "big" class= "pec-primary-btn" > 查看我的定存宝 - 定活通 </button>
  </div>
  </div>
  <div v-if= "model.transStatus == '03' ? true : false" >
  <div class= "pec-result" >
  <i class= "icon-result-wrong" > </i>
  <p class = "pec-result-txt" > 存入失败 </p>
  <p class= "pec-result-txt2 pec-color-6C7684" > 失败原因：因为某某原因所以失败。</p>
<p class= "pec-result-txt2" >（这里写错误码）</p>
        </div>
<div class = "pec-btn-zone pec-margin-top60" >
  <button @click= "goBuy"size = "big" class= "pec-primary-btn" > 重新存入 </button>
  </div>
  </div>
  </div>
  <div v-else>
<div v-if= "model.transFlag">
  <div class= "pec-result">
  <i class= "icon-result-ok" > </i>
  <p class= "pec-result-txt" > 支取提交成功 </p>
  <p class= "pec-result-txt2 pec-color-6C7684" > 银行账号：{{model.bankName}}({{model.bankCardMaskFour}}) </p>
<p class= "pec-result-txt2" > 支取金额：{{model.transAmtFort}}元 </p>
<p class= "pec-result-txt2" > 预计到账时间：
 2016 - 12 - 11 24 :00:00前 </p>
</div>
</div>
<div v-if= "model.transStatus === '03' ? true : false" >
  <div class= "pec-result">
  <i class= "icon-result-wrong" > </i>
  <p class= "pec-result-txt" > 支取失败 </p>
  <p class= "pec-result-txt2 pec-color-6C7684" > 失败原因：因为某某原因所以失败。</p>
<p class= "pec-result-txt2" >（这里写错误码）</p>
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
    import bow from 'bow';
    import api from '../../api/urls';
//    import fit from '../../filters/deposit';
import CommonHeader from '../../components/Common_Header'
import  * as fit from '../../filters/deposit';


    export default {
        data() {
            return {
              title:"定活宝-定活通",
              model: {}
            }
        },
      components:{
        CommonHeader
      },
        created: function () {
          let me = this;
          //保存查询子订单接口所需要的参数

//          let subTradeOrderNo = bow.sharedMemory.getItem('subTradeOrderNo',true);
          let subTradeOrderNo = localStorage.getItem("subTradeOrderNo");
//          localStorage.getItem("subTradeOrderNo");
//          localStorage.getItem("paySearialNo");
          let paySearialNo = localStorage.getItem("paySearialNo");
//          let paySearialNo = bow.sharedMemory.getItem('paySearialNo',true);

          deposit_detail.default.queryOrderStatus({
            paySearialNo:paySearialNo,
            subTradeOrderNo: subTradeOrderNo
          },function(res){
            me.model = res;
            me.model.transAmtFort = fit.formatMoneyNumber(res.transAmt,"blur");
            me.model.bankCardMaskFour = res.bankCardMask.substr(-4);
            if(me.model.transStatus === "02" || me.model.transStatus === "05"){
              me.model.transFlag = true;
            }

            let Date = me.model.expiryDate;
            me.model.expiryDate = Date.substr(0,4)+'-'+Date.substr(4,2)+'-'+Date.substr(6,2);
            me.model.transAmt = fit.formatMoneyNumber(me.model.transAmt,'blur');
          });
        },
        methods: {
          // 左边头部按钮
          leftClick:function() {

            let item = "";
            let me = this;
            if(model.transType !== '01'){
              item = 'orderDetailPage';
            }else{
              item = 'deposit_detail';
            }
              ald.navigator.forward({
                url: api[item],
                type: 'webapp'
              });

          },
            goBuy: function(){

                //TODO: to send buy request
              let item = "";
              if (model.transType === '01') {
                item = "deposit_buy";
              } else {
                item = "withdrawPage";
              }
              bow.navigator.forward({
                title: '定活宝-定活通',
                showHeader: true,
                url: api[item],
                tpl: 'webview'
              });
            },
          myDeposit:function(){
            let me = this;
//            bow.sharedMemory.setItem('cardNo',me.model.bankCardSign);
            localStorage.setItem("cardNo",me.model.bankCardSign);
            bow.navigator.forward({
              title: '定活宝-定活通',
              showHeader: true,
              url: api.mylivedead,
              qs:{'car_id':'123'},
              tpl: 'webview'
            });
          }
        }
    }

    </script>
