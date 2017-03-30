<template>
    <div>
    <common-header :options="options" @leftButtonCallback="leftButtonCallback"></common-header>
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
        <i style="height:.6rem!important;" :class="{'icon-checked' : iconCheck.iconCh, 'icon-check' : iconCheck.iconChed}"></i>
    </div>
        </div>
        <div class="pec-list-item"  @click="checkFunc">
        <div class="pec-item-body">
        <p class="pec-color-6C7684">T+1到账支取</p>
    <p v-if="withdrawData.isDrawFlagFinal" class="pec-tips pec-margin-top10">当前利率{{withdrawData.tRate}}%&emsp;预计到账时间：{{withdrawData.nextWorkDayFort}}&nbsp;24:00前</p>
    <p v-else class="pec-tips pec-margin-top10">{{withdrawData.t1Content}}</p>

</div>
    <div class="pec-item-foot">
        <i style="height:.6rem!important;" :class="{'icon-checked' : iconCheck.iconChed, 'icon-check' : iconCheck.iconCh}"></i>
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
        <p id="transCh" :class="pClass">{{chineseNumWithdraw}}</p>
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
import * as deposit_detail from '../../api/deposit_detail'
// import {PecKeyboard} from 'pa-ui/lib/index';
// import {PecMessageBox} from 'pa-ui/lib/index';
import { MessageBox } from 'mint-ui'
import  * as fit from '../../filters/deposit';
let cardSignData = JSON.parse(localStorage.getItem("cardSignData"));

export default {
    data: function () {
        return {
            options:{
              title:"定活宝-定活通",  //头部
              showIcon:false,   //是否展示头部右侧按钮  默认false
              rightButtonText:'',//头部右侧按钮文本
              isSetBack:true,//是否设置头部返回按钮  默认false 如果设置为true
              setSelfShow:false //如果用户自己设置了分享，将不处理右边按钮   默认true
            },
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
            "value":"",
            "pClass":{
              "pec-color-FC1520":false,
              "pec-tips":true,
              "pec-margin-top10" : true
            }
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
      let dt = new Date();
      let dty = dt.getFullYear()+"";
      let dtm = dt.getMonth()+1>10? dt.getMonth()+1+"":"0"+(dt.getMonth()+1);
      let dtd = dt.getDate()+"";
      let currentDate = dty + dtm + dtd;
        this.getWithdraw({
          queryType: "1",
          inputVal:cardSignData.data.corpusBalance,
          bankCardSign: cardSignData.cardMask,
          currentDay:currentDate,
          depSerialNo: cardSignData.data.depositSerialNo
        });
        //this.getWithdraw({
        //  queryType:"0",
        //  inputVal:0,
        //  bankCardSign: cardSignData.cardMask,
        //  currentDay:currentDate,
        //  depSerialNo: cardSignData.data.depositSerialNo
        //});
    },
    mounted:function(){
    },
    methods: {
        ...mapActions([
            'getWithdraw',
            'creatOrder',
            'canDraw',
            'queryDraw'
        ]),
        //t1
        checkFunc(){
            if(!this.withdrawData.isDrawFlagFinal){
                return;
            }
            this.changeFlag = false;
            this.$store.commit("DHT_PROTOSHOWAGAIN", true);
            this.trueOrFalse(this.value,"t1");
          if(this.inputFlag){
            this.checkInterest("1");
          }
          if(this.inputFlag && this.agreeFlag){
            this.btnClass["bgColorGray"] = false;
          }else{
            this.btnClass["bgColorGray"] = true;
          }
        },
        //t0
        checkFun(){
          if(!this.withdrawData.isDrawFlagFinal){
            return;
          }
            this.changeFlag = true;
            this.$store.commit("DHT_PROTOSHOWAGAIN", false);
            this.trueOrFalse(this.value,"t0");
          if(this.inputFlag){
            this.checkInterest("0");
            this.btnClass["bgColorGray"] = false;
          }else{
            this.btnClass["bgColorGray"] = true;
          }
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
            let queryTypeTran = self.dhtDetail.radioCheck.tFlag === "t1" ? "1" : "0";
            self.checkInterest(queryTypeTran);
            if(self.agreeFlag){
                self.btnClass["bgColorGray"] = false;
            }
        },
      checkInterest(queryTypeTran){
        let self = this;
        let inputVal = self.value.replace(/[^\d|\.]/g, '');

        let dt = new Date();
        let dty = dt.getFullYear()+"";
        let dtm = dt.getMonth()+1>10? dt.getMonth()+1+"":"0"+(dt.getMonth()+1);
        let dtd = dt.getDate()+"";
        let currentDate = dty + dtm + dtd;
        self.queryDraw({
          queryType:queryTypeTran,
          flag:"calc",
          inputVal:inputVal,
          bankCardSign: cardSignData.cardMask,
          transDate:currentDate,
          depSerialNo: cardSignData.data.depositSerialNo
        });
      },
        trueOrFalse(inputVal,tFlag){
            let self = this,content = "";
            inputVal = inputVal.replace(/[^\d|\.]/g, '');
            if(inputVal === ""){
                content = `请输入支取金额`;
                self.inputFlag = false;
              self.pClass["pec-color-FC1520"] = !self.inputFlag;
            }

            let compareLeast = tFlag === "t0" ? 0.01 : Number(self.withdrawData.preDrawInfos[1].depositAmtMin);

            if(Number(inputVal) < compareLeast){
                content = `最低支取金额为${compareLeast}元`;
                self.inputFlag = false;
              self.pClass["pec-color-FC1520"] = !self.inputFlag;
            }

            let compareCapital = Number(cardSignData.data.corpusBalance);
            if(Number(inputVal) > compareCapital){
                content = `最多可支取${compareCapital}元`;
                self.inputFlag = false;
              self.pClass["pec-color-FC1520"] = !self.inputFlag;
            }else{
              if(!((compareCapital - Number(inputVal))=== 0 || (compareCapital - Number(inputVal)) >= Number(self.withdrawData.preDrawInfos[1].depositAmtMin))){
                if(compareCapital >= 2*self.withdrawData.preDrawInfos[1].depositAmtMin){
                  content = `请减少支取金额或全额支取`;
                  self.inputFlag = false;
                  self.pClass["pec-color-FC1520"] = !self.inputFlag;
                }
                if(compareCapital < 2*self.withdrawData.preDrawInfos[1].depositAmtMin){
                  content = `支取后剩余本金需=0或>=${self.withdrawData.preDrawInfos[1].depositAmtMin}.您需要全额支取`;
                  self.inputFlag = false;
                  self.pClass["pec-color-FC1520"] = !self.inputFlag;
                }
              }
            }



            if(content !== ""){
                self.$store.commit("DHT_CHINESENUM", content);
            }else{
              self.$store.commit("DHT_CHINESENUM", "");
              self.inputFlag = true;
              self.pClass["pec-color-FC1520"] = !self.inputFlag;
            }
        },
      //currentDate
        toSuccessPage() {
          let self = this;
          if((self.inputFlag && self.agreeFlag && self.dhtDetail.radioCheck.tFlag === "t1") || (self.inputFlag && self.dhtDetail.radioCheck.tFlag==="t0")){
            //if(self.dhtDetail.radioCheck.tFlag === "t1" && self.residueFlag.indexOf("剩余") !==-1){
            //  MessageBox.alert({
            //    title: ""
            //  });
            //  return;
            //}
            let optionsReq = {
              url:"getSystemDateTime",
              qs:{}
            };
            let dt = new Date();
            let dty = dt.getFullYear()+"";
            let dtm = dt.getMonth()+1>10? dt.getMonth()+1+"":"0"+(dt.getMonth()+1);
            let dtd = dt.getDate()+"";
            let currentDate = dty + dtm + dtd;
            if(self.dhtDetail.radioCheck.tFlag === "t0"){
              deposit_detail.default.getSystemDateTime(optionsReq,function(res){
                self.remindBox(res);
              });
            }else if(self.dhtDetail.radioCheck.tFlag === "t1"){
              self.canDraw({
                queryType: "1",
                inputVal:self.value,
                bankCardSign: cardSignData.cardMask,
                currentDay:currentDate,
                depSerialNo: cardSignData.data.depositSerialNo,
                cb:function(dte){
                  if(dte.isDrawFlag !== "1"){
                    let co = fit.disableWithdraw(dte.isDrawFlag);
                    MessageBox.alert({
                      title: '温馨提示',
                      message: co
                    })
                  }else{
                    dte.currentDate = Number(dte.currentDate);
                    self.remindBox(new Date(dte.currentDate).getHours());
                  }
                }
              });
            }
          }
        },
      remindBox(rd){
        let self = this;
        if(rd >= 23 || rd < 2){
          MessageBox.confirm({
            title:'温馨提示',
            message: '请您注意: 我行系统正在进行每日日终清算处理,如现在支取,系统将视为提前支取,为了避免利息损失,建议您三个小时后再支取。',
            leftText:'继续支取',
            rightText:'取消',
            leftAction() {
              self.onWithdraw();
            },
            rightAction() {
              return;
            }
          });
        }else{
          self.onWithdraw();
        }

      },
      onWithdraw(){
        let self = this;
        let tFlagCH = self.dhtDetail.radioCheck.tFlag === "t1" ? "03" : "02";
        self.creatOrder({
          transAmt: self.value,
          transType :tFlagCH,
          bankCardSign:cardSignData.cardMask,
          depositSerialNo : cardSignData.data.depositSerialNo,
          valueDate:cardSignData.data.acctOpenDate,
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
            localStorage.setItem("wd_result_type_dht", JSON.stringify({tFlagCH : tFlagCH, estimated_wd_dht:self.withdrawData.nextWorkDayFort}));
            localStorage.setItem("_depositLightKey", 'withdraw_dth');
            localStorage.setItem("subTradeOrderNo", res.subTradeOrderNo);
            localStorage.setItem("paySearialNo", res.paySearialNo);
          }
        })
      },
        toAgreement (){

          ald.nav.forward({url:"withdrawProto"});
            //location.href = "agreement.html";
        },
        keyBoardShow (){
            let opts = {
                module : "decimal",
                currentYPos : 0
            };
        },
        inputPutin(value){
            value = value+"";
            this.trueOrFalse(value,this.dhtDetail.radioCheck.tFlag);
            let content = fit.chineseNum(value);
            if(this.inputFlag){
                this.$store.commit("DHT_CHINESENUM", content);
            }
          if(this.dhtDetail.radioCheck.tFlag === "t1"){
            if(this.inputFlag && this.agreeFlag){
              this.btnClass["bgColorGray"] = false;
            }else{
              this.btnClass["bgColorGray"] = true;
            }
          }else if(this.dhtDetail.radioCheck.tFlag === "t0"){
            if(this.inputFlag){
              this.btnClass["bgColorGray"] = false;
            }else{
              this.btnClass["bgColorGray"] = true;
            }
          }
        },
        // 左边头部按钮
      leftButtonCallback:function() {
        if(ald.env.isBrowser){
          location.href = "./order_detail.html";
        }else{
          ald.nav.forward({url:"orderDetailPage"});
        }
          //ald.navigator.forward({
          //  url: api.orderDetailPage,
          //  type: 'webapp'
          //});
        }
    },
    watch:{
        changeFlag : function(){
            this.$store.commit("DHT_RADIO");
        }
    },
    components:{
        CommonHeader
    }
}
</script>
