<template id="template">
    <section>
        <div v-if="model.transStatus == '02' ? true : false">
            <div class="pec-result">
                <i class="icon-result-ok"></i>
                <p class="pec-result-txt">存入成功</p>
                <p class="pec-result-txt2 pec-color-6C7684">银行账号：平安银行账号 6222****1234 深圳</p>
                <p class="pec-result-txt2">存入金额：4,000.00元</p>
                <p class="pec-result-txt2">到期时间：2019-12-01</p>
            </div>
            <div class="pec-btn-zone pec-margin-top60">
                <button @click="myDeposit" size="big" class="pec-primary-btn">查看我的定存宝-定活通</button>
            </div>
        </div>
        <div v-if="model.transStatus !== '02' ? true : false">
            <div class="pec-result">
                <i class="icon-result-wrong"></i>
                <p class="pec-result-txt">存入失败</p>
                <p class="pec-result-txt2 pec-color-6C7684">失败原因：因为某某原因所以失败。</p>
                <p class="pec-result-txt2">（这里写错误码）</p>
            </div>
            <div class="pec-btn-zone pec-margin-top60">
                <button @click="goBuy" size="big" class="pec-primary-btn">重新存入</button>
            </div>
        </div>
    </section>
</template>

<script>
    import {
            mapState,
            mapActions
    } from 'vuex';
    import * as deposit_detail from '../../api/deposit_detail';
    import bow from 'bow';
    import api from '../../api/urls';
    export default {
        data() {
            return {
                model: {

                }
            };
        },
        created: function () {
          var me = this;
          var subTradeOrderNo = localStorage.getItem("subTradeOrderNo");
          var paySearialNo = localStorage.getItem("paySearialNo");
            //TODO： 请求数据回来
//          var subTradeOrderNo = window.sessionStorage.getItem("subTradeOrderNo") || "";
          deposit_detail.default.queryOrderStatus({
            paySearialNo:paySearialNo,
            subTradeOrderNo: subTradeOrderNo
          },function(res){
            me.model = res;
          });
        },
        methods: {
            goBuy: function(){
                //TODO: to send buy request
              bow.navigator.forward({
                title: '定活宝-定活通',
                showHeader: true,
                url: api.deposit_buy,
                tpl: 'webview'
              });
            },
          myDeposit:function(){
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
