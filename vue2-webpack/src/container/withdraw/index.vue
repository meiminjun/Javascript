<template>
    <div>
    <common-header :title=title :onLeft='leftClick'></common-header>
    <section>
    <div class="pec-list pec-LBP-list pec-margin-top20">
        <div class="pec-list-head">
        <div class="pec-list-head-head">支取方式</div>
        </div>
        <div class="pec-list-item"  @click="checkFun">
        <div class="pec-item-body">
        <p class="pec-color-6C7684">实时支取</p>
        <p class="pec-tips pec-margin-top10">当前利率{{currentInterest}}%</p>
    </div>
    <div class="pec-item-foot">
        <i  :class="{'icon-checked' : iconCheck.iconCh, 'icon-check' : iconCheck.iconChed}"></i>
    </div>
        </div>
        <div class="pec-list-item"  @click="checkFunc">
        <div class="pec-item-body">
        <p class="pec-color-6C7684">T+1到账支取</p>
    <p v-if="withdrawData.isDrawFlag==='1'" class="pec-tips pec-margin-top10">当前利率{{withdrawData.tRate}}%&emsp;预计到账时间：后端待定 前</p>
    <p v-else class="pec-tips pec-margin-top10">不满90天提示语</p>

</div>
    <div class="pec-item-foot">
        <i :class="{'icon-checked' : iconCheck.iconChed, 'icon-check' : iconCheck.iconCh}"></i>
        </div>
        </div>
        </div>
        <div class="pec-list pec-margin-top20">
        <div class="pec-list-item">
        <div class="pec-item-head">
        <p class="">支取金额</p>
        <p></p>
        </div>
        <div class="pec-item-body">
        <div class="pec-position-relative">
        <input v-on:blur="validateInputVal" v-model="value" v-on:input="inputPutin($event.target.value)" @click="keyBoardShow" class="pec-input" type="text" onkeyup="value=value.replace(/[^\-?\d.]/g,'')" :placeholder="placeHolderCon">
        </div>
        <p id="transCh" class="pec-tips pec-margin-top10">{{chineseNumWithdraw}}</p>
        </div>
        </div>
        </div>
        <div class="pec-list-title">到账金额 {{toAccountAmt.accountAmt}}元,其中利息{{toAccountAmt.drawInterest}}元</div>
    <div v-show="protoShowFlag" class="pec-read-agreement">
        <i @click="agreeFun" :class="agreeIcon"></i>
        <p>我已阅读并同意<span @click="toAgreement" class="pec-link">《定期存款收益权转让及定期存款质押合同》</span></p>
    </div>
    <div class="pec-btn-zone pec-margin-top110">
        <button size="big" :class="btnClass" @click="toSuccessPage">下一步</button>
        </div>
        </section>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import api from '../../api/urls.js'
import types from '../../store/types.js'
import * as ald from '../../util/ald'
import CommonHeader from '../../components/Common_Header'
import  * as fit from '../../filters/deposit';
let dante = require('dante');

export default {
    data: function () {
        return {
            title:"定存宝-定活通",
            "agreeIcon" : {
                "icon-checked" : true,
                "icon-check" : false
            },
            "inputFlag": false,
            "agreeFlag" : true,
            "btnClass" :{
                "pec-primary-btn" : true,
                "bgColorGray" : true
            },
            "changeFlag":false,
            "changeFlag2" : false,
            "value":""
        };
    },
    computed: {
        ...mapState([
            'dhtDetail'
        ]),
        withdrawData : function(){
            return this.dhtDetail.withdraw.data;
        },
        //t0
        iconCheck : function(){
            return this.dhtDetail.radioCheck;

        },
        chineseNumWithdraw : function(){
            return this.dhtDetail.chineseNumWithdraw;
        },
        protoShowFlag : function(){
            return this.dhtDetail.protoShow.protoSh;
        },
        placeHolderCon : function(){
            return this.dhtDetail.protoShow.placeCon;
        },
        toAccountAmt : function(){
            return this.dhtDetail.toAccountAmt;
        },
      currentInterest : function(){
        return this.dhtDetail.currentInterest;
      }


    },
    created () {
        //let self = this;
      let cardSignData = bow.sharedMemory.getItem("cardSignData");

        this.getWithdraw({
          queryType: "1",
          inputVal:0,
          cardNo: cardSignData.bankCardSign||"6230582000070450773",
          currentDay:"20170309",
          depSerialNo: cardSignData.depositSerialNo ||"00013",
          endDate:"20140101",
          startDate:"20170101",
          tranId:cardSignData.depositSerialNo ||"00013",
          ecifNo:"630000312134",
        });
        this.getWithdraw({
          queryType:"0",
          inputVal:0,
          cardNo: cardSignData.bankCardSign||"6230582000070450773",
          currentDay:"20170309",
          depSerialNo: cardSignData.depositSerialNo ||"00013",
          endDate:"20140101",
          startDate:"20170101",
          tranId:cardSignData.depositSerialNo ||"00013",
          ecifNo:"630000312134",
        });
    },
    mounted:function(){
        //console.log(this.$store.getters.fundOnDate)
        // console.log(this.fund)
        //this.getWithdraw({});
    },
    methods: {
        ...mapActions([
            'getWithdraw',
            'getInterest',
            'creatOrder'
        ]),
        //t1
        checkFunc(){
            if(this.withdrawData.isDrawFlag !== "1"){
                return;
            }
            this.changeFlag = false;
            this.$store.commit("DHT_PROTOSHOWAGAIN", true);
            this.trueOrFalse(this.value,"t1");
        },
        //t0
        checkFun(){
          if(this.withdrawData.isDrawFlag !== "1"){
            return;
          }
            this.changeFlag = true;
            this.$store.commit("DHT_PROTOSHOWAGAIN", false);
            this.trueOrFalse(this.value,"t0");
        },
        agreeFun (){
            if(this.agreeIcon["icon-checked"]){
                this.agreeIcon["icon-checked"] = this.agreeFlag = false;
                this.agreeIcon["icon-check"] = true;
                this.btnClass["bgColorGray"] = true;
            }else{
                this.agreeIcon["icon-checked"] = this.agreeFlag = true;
                this.agreeIcon["icon-check"] = false;
                if(this.inputFlag){
                    this.btnClass["bgColorGray"] = false;
                }
            }

        },
        validateInputVal(item) {
            let self = this;
            let inputVal = self.value.replace(/[^\d|\.]/g, '');
            item.target.value = fit.formatMoneyNumber(inputVal,"blur");
            if(!this.inputFlag){
                return;
            }
            self.inputFlag = true;
            let queryTypeTran = self.dhtDetail.radioCheck.tFlag ==="t0"? "02":"03";
          let cardSignData = bow.sharedMemory.getItem("cardSignData");
            self.getWithdraw({
              queryType:queryTypeTran,
              flag:"calc",
              inputVal:inputVal,
              cardNo: cardSignData.bankCardSign||"6230582000070450773",
              currentDay:"20170309",
              depSerialNo: cardSignData.depositSerialNo ||"00013",
              endDate:"20140101",
              startDate:"20170101",
              tranId:cardSignData.depositSerialNo ||"00013",
              ecifNo:"620079418271",
            });
            if(self.agreeFlag){
                self.btnClass["bgColorGray"] = false;
            }
        },
        trueOrFalse(inputVal,tFlag){
            let self = this,content = "";
            inputVal = inputVal.replace(/[^\d|\.]/g, '');
            if(inputVal === ""){
                content = `请输入支取金额`;
                self.inputFlag = false;
                self.btnClass["bgColorGray"] = true;
            }

            let compareLeast = tFlag === "t0" ? 0.01 : self.withdrawData.leastAmt;

            if(Number(inputVal) < compareLeast){
                content = `最低支取金额为${compareLeast}元`;
                self.inputFlag = false;
                self.btnClass["bgColorGray"] = true;
            }

            let compareCapital = tFlag === "t0" ? self.withdrawData.capital - 1000 : self.withdrawData.capital;
            if(Number(inputVal) > compareCapital){
                content = `最多可支取${compareCapital}元`;
                self.inputFlag = false;
                self.btnClass["bgColorGray"] = true;

            }

            if(!((self.withdrawData.capital - Number(inputVal))=== 0 || (self.withdrawData.capital - Number(inputVal)) >= self.withdrawData.leastAmt)){
                if( compareCapital >= 2*self.withdrawData.leastAmt){
                    content = `请减少支取金额或全额支取`;
                    self.inputFlag = false;
                    self.btnClass["bgColorGray"] = true;
                }
                if(compareCapital < 2*self.withdrawData.leastAmt){
                    content = `支取后剩余本金需=0或>=${self.withdrawData.leastAmt}.您需要全额支取`;
                    self.inputFlag = false;
                    self.btnClass["bgColorGray"] = true;
                }
            }

            if(content !== ""){
                self.$store.commit("DHT_CHINESENUM", content);
            }else{
                self.inputFlag = true;
            }
        },
        toSuccessPage() {
            let self = this;

            //if(self.dhtDetail.radioCheck.tFlag === "t1" && !self.withdrawData.amountQuota){
            //    alert("对不起,系统T+1到账支取总额度已用完,请您改用实时支取方式");
            //    return;
            //}
          let tFlagCH = self.dhtDetail.radioCheck.tFlag ==="t0"? "02":"03";
            if(self.inputFlag && self.agreeFlag){
              let cardSignData = bow.sharedMemory.getItem("cardSignData");
                self.creatOrder({
                  transAmt: self.value,
                  transType :tFlagCH,
                  bankCardSign:"e0c16e089852e27368e52e5ac5287f26",
                  cb:function(res){
                    ald.navigator.forward({
                      title: '定活宝-定活通',
                      showHeader: true,
                      url: "https://bank-static-stg.pingan.com.cn/omm/stg2/omm/mobile/pay.html?prepayId="+res.paySearialNo+'&'+'securitySign='+res.paySign,
                      tpl: 'webview'
                    });
                  }
                })
                //if (true) {
                //    ald.navigator.forward({
                //        url: api.withdrawResult,
                //        title: api.withdrawResult,
                //        type: 'webapp'
                //    });
                //} else {
                //    ald.navigator.forward({
                //        title: api.withdrawResult,
                //        showHeader: true,
                //        url: api.withdrawResult,
                //        tabIndex: 2,
                //        tpl: 'webview'
                //    });
                //}
            }
        },
        toAgreement (){
            console.log("agreement");
            location.href = "agreement.html";
        },
        keyBoardShow (){
            let opts = {
                module : "decimal",
                currentYPos : 0
            };
            //bow.safeKeyBoard.arouse(opts,function(data){
            //});
        },
        inputPutin(value){
            value = value+"";
            this.trueOrFalse(value,this.dhtDetail.radioCheck.tFlag);


            let content = fit.chineseNum(value);
            if(this.inputFlag){
                this.$store.commit("DHT_CHINESENUM", content);
            }
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
    watch:{
        changeFlag : function(){
            this.$store.commit("DHT_RADIO");
            //this.withdrawData.iconCh = !this.withdrawData.iconCh;
            //this.withdrawData.iconChed = !this.withdrawData.iconChed;
            //if(this.changeFlag == false){
            //    this.withdrawData.tFlag = "t1";
            //}else{
            //    this.withdrawData.tFlag = "t0";
            //}
            //this.changeFlag = false;
        }
    },
    components:{
        CommonHeader
    }
}
</script>
