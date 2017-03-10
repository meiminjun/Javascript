<template>
    <div>
    <common-header :title=title :onLeft='leftClick'></common-header>
    <section>
        <div class="pec-list pec-LBP-list pec-margin-top20">
            <div class="pec-list-item">
            <div class="pec-item-head">交易类型</div>
            <div class="pec-item-body">T+1到账支取</div>
        </div>
        <div class="pec-list-item">
            <div class="pec-item-head">银行账号</div>
            <div class="pec-item-body">平安银行互联网账户(8888)</div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">币种</div>
            <div class="pec-item-body">人民币</div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">支取金额</div>
            <div class="pec-item-body">
            <p><span class="pec-color-F17940">10,000.00元</span></p>
        <p class="pec-abs-tips">壹万元整</p>
            </div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">到账金额</div>
            <div class="pec-item-body">
            <p><span class="pec-color-F17940">10,056.00元</span></p>
        <p class="pec-abs-tips">壹万伍拾陆元整</p>
            </div>
            </div>
        </div>
    <div class="pec-list pec-LBP-list pec-margin-top20">
            <div class="pec-list-item">
            <div class="pec-item-head">提交时间</div>
            <div class="pec-item-body">2017-12-10 12:00</div>
        </div>
        <div v-if="resultCH !=='正在处理'" class="pec-list-item">
            <div class="pec-item-head">处理时间</div>
            <div class="pec-item-body">2017-12-10 17:00</div>
        </div>
        <div class="pec-list-item">
            <div class="pec-item-head">处理结果</div>
            <div :class="resultClass">{{resultCH}}</div>
            </div>
            <div class="pec-list-item">
            <div class="pec-item-head">指令序号</div>
            <div class="pec-item-body">8967348482343854354354</div>
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
        }
    },
    created () {

    },
    methods: {
      ...mapActions([
        'getPaySearialNo'
      ]),
        toWithdraw() {
            let self = this;
            if(new Date().getHours() >= 16){
              PecMessageBox.alert({
                title: '撤销功能仅支持在16:00之前使用'
              });
                this.submitClass.bgColorGray = true;
                return;
            }
          self.getPaySearialNo({
            orderAmount:"1000",
            orderNo :"1234455",
            cb:function(res){
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
                    title: api.orderDetailPage,
                    type: 'webapp'
                });
            } else {
                ald.navigator.forward({
                    title: api.orderDetailPage,
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
