<template id="template">
  <div>
    <Hd :options="options" @leftButtonCallback="leftButtonCallback"></Hd>
    <section>
      <div class="pec-list pec-LBP-list pec-margin-top40">
        <div class="pec-list-item" @click="handleLowerClick">
          <!--<div class="pec-list-item">-->
            <!--<div class="pec-item-head">-->
              <!--存入金额-->
            <!--</div>-->
            <!--<div class="pec-item-body">-->
              <!--{{amount}}-->
            <!--</div>-->
            <!--<p v-show="Chinese" class="pec-abs-tips">{{chineNum}}</p>-->
            <!--<p v-show="minimum" class="pec-abs-tips pec-color-FC1520">最低存款金额为:10,000.00</p>-->
            <!--<p v-show="deposit" class="pec-abs-tips pec-color-FC1520">请输入存款金额</p>-->
          <!--</div>-->
          <div class="pec-item-head">
            存入金额
          </div>
          <div class="pec-item-body">
            <div class="pec-position-relative">
              <!--<div class="pec-item-body">-->
                <!--{{amount}}-->
              <!--</div>-->
              <input @focus="onFocus" @blur="onBlur" v-model="value" @input="updateValue(value)" class="pec-input"
                     type="text" placeholder="10,000.00起存" mode>
            </div>
            <p v-show="Chinese" class="pec-abs-tips">{{chineNum}}</p>
            <p v-show="minimum" class="pec-abs-tips pec-color-FC1520">最低存款金额为:10,000.00</p>
            <p v-show="deposit" class="pec-abs-tips pec-color-FC1520">请输入存款金额</p>
          </div>
          <!--<pec-keyboard mode="amount" v-model="lowerVisible" @click="updateValue"></pec-keyboard>-->
        </div>
        <div class="pec-list-item">
          <div class="pec-item-head">
            存期
          </div>
          <div class="pec-item-body">
            {{saveDeadline}}
          </div>
        </div>
      </div>
      <div class="pec-list-title">到期利率 <span>{{interestRate}}</span>&emsp;到期利息：<span class="pec-color-FC1520" v-text="saveDead"></span>元</div>
      <div class="pec-list pec-LBP-list" style="height:1.4rem">
        <div class="pec-list-item">
          <div class="pec-item-head">
            推荐人
          </div>
          <div class="pec-item-body" style="margin-right: 0rem">
            <div class="pec-position-relative">
              <input @input="judgeValue($event.target.value)" class="pec-input" type="text" value=""
                     placeholder="请输入推荐人代码或UM号或手机号" maxlength="50">
            </div>
            <p v-show="attentionShow" class="pec-abs-tips">(非必填)</p>
            <p v-show="judgeShow" class="pec-abs-tips pec-color-FC1520">提示：推荐人信息只能输入字母、数字、“.”、“-”、“_”、“@”</p>
            <p v-show="judgeShowTwo" class="pec-abs-tips pec-color-FC1520">提示：首字符不能直接输入标点符号</p>
          </div>
        </div>
      </div>
      <div class="pec-read-agreement">
        <i :class="{ 'icon-check' : iconCheck , 'icon-checked' : iconChecked}" @click="isCheck" style="width:0.40rem;height:0.40rem"></i>
        <p style="font-size: 0.24rem;">我已阅读并同意<span class="pec-link" @click="agreement"><br>《平安银行个人定活通（增强型）产品服务协议》</span><br><span class="pec-link" @click="draw">《平安银行定活通（增强型）支取服务协议》</span>
        </p>
      </div>
      <div class="pec-btn-zone pec-margin-top60">
        <button @click="forward" size="big" :class="classObjectBtn">下一步</button>
      </div>
    </section>
  </div>
</template>
<!--<style>-->
  <!--div .v-modal{-->
    <!--opacity: 0;-->
  <!--}-->
<!--</style>-->
<script>
  import {
    mapState,
    mapActions
  } from 'vuex';
  import * as fit from '../../filters/deposit';
  import * as ald from '../../util/ald';
  import * as aladdin from 'aladdin'
  import bow from 'bow';
  import Hd from '../../components/Common_Header.vue';
  import * as deposit_detail from '../../api/deposit_detail';
  // import {MessageBox} from 'pa-ui/lib/index';
import { MessageBox } from 'mint-ui'

//  import peckeyboard from 'pa-ui/lib/index';
  //    import depositDetail from '../../store/modules/depositDetail';
  export default {
    data: function () {
      return {
        title: '定活通',
        model: {},
//        curMode: 'amount',
        importMoney: "",
        mode: {
          type: String,
          default: 'lower'  // 键盘模式/ lower小写 /upper大写/symbol符号 || number纯数字/amount金额
        },
        Chinese: false,//金额大写
        minimum: false,//最低存款金额
        deposit: false,//存款金额不能为空
        chineNum: "",
        lowerCaseVal: "",
        options:{
          title:"定活通（增强型）",
          showIcon:false,
          rightButtonText:'',
          isSetBack:true,
          setSelfShow:false
        },
        amount: "",
        systemTime: "",
        saveDead: "0.00",
        saveDeadline: fit.year(localStorage.getItem('saveDeadline')),
        interestRate: '0.000%',
        validation: false,
        lowerVisible: false,
        isChange: false,
        judgeShow: false,
        judgeShowTwo: false,
        attentionShow: true,
        classObjectBtn: {
          'pec-primary-btn': false,
          'pec-secondary-btn': true
        },
        'iconCheck': true,
        'iconChecked': false
      };
    },
    components: {
      Hd
    },
    created: function () {
      //TODO： 请求数据回来
    },
    methods: {
      handleLowerClick:function() {
        this.lowerVisible = true;
      },
      leftButtonCallback:function(){
        location.href = './deposit_detail.html';
      },
      forward:function(){
        if(this.Chinese && this.iconChecked && !this.judgeShow && !this.judgeShowTwo){
          this.getSystemTime();
        }
      },
      onBuy: function () {
        //TODO: to send buy request
        let val = this.value;
        deposit_detail.default.createOrder({
          url:'createOrder',
          env:'stg3',
          qs:{
            appType: '003',
            prdType: '09',
            sourceAppId: '222222',
            terminalType: "01",
            transAmt: fit.formatMoneyNumber(val),
            transType: '01'
          }
        }, function (res) {
//            bow.sharedMemory.setItem('subTradeOrderNo',res.subTradeOrderNo,true);
//            bow.sharedMemory.setItem('paySearialNo',res.paySearialNo,true);
          localStorage.setItem("subTradeOrderNo", res.subTradeOrderNo);
          localStorage.setItem("paySearialNo", res.paySearialNo);
          localStorage.setItem("_depositLightKey", 'deposit');
          ald.navigator.forward({
            title: '定活宝-定活通',
            showHeader: true,
            url: "https://bank-static-stg.pingan.com.cn/omm/stg2/omm/mobile/pay.html?prepayId=" + res.paySearialNo + '&' + 'securitySign=' + res.paySign,
            tpl: 'webview'
          });
        });
      },
      updateValue: function (value) {
//        this.amount = value;
        if (value !== '') {
          if (value[0] === '.') {
            this.amount = value.replace(/\./g, "");
          } else {
            this.amount = value.replace(/[^\d.]/g, "").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")
              .replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
            this.Chinese = true;
            this.chineNum = fit.chineseNum(value);//实时监听输入金额 并将其转为大写
          }
        } else {
          this.Chinese = false;
        }

      },
      isCheck: function () {
        this.iconCheck = !this.iconCheck;
        this.iconChecked = !this.iconChecked;

      },
      changeBtn: function () {
        this.classObjectBtn['pec-secondary-btn'] = !this.classObjectBtn['pec-secondary-btn'];
        this.classObjectBtn['pec-primary-btn'] = !this.classObjectBtn['pec-primary-btn'];
      },
      //推荐人校验
      judgeValue: function (value) {
        if (value !== "") {
          if (/[^\w,-\.\,@]/g.test(value) || /[\u4E00-\u9FA5]/i.test(value) || /[\,]/g.test(value)) {
            if (this.classObjectBtn['pec-primary-btn']) {
              this.changeBtn();
            }
            this.judgeShowTwo = false;
            this.attentionShow = false;
            this.judgeShow = true;
          } else if (/[^\w,_]/g.test(value[0]) || /[_]/.test(value[0])) {
            if (this.classObjectBtn['pec-primary-btn']) {
              this.changeBtn();
            }
            this.judgeShowTwo = true;
            this.judgeShow = false;
            this.attentionShow = false;
          } else {
            this.judgeShowTwo = false;
            this.judgeShow = false;
            this.attentionShow = true;
            if (!this.classObjectBtn['pec-primary-btn']&&this.Chinese && this.iconChecked) {
              this.changeBtn();
            }
          }
        } else {
          this.judgeShow = false;
          this.judgeShowTwo = false;
          this.attentionShow = true;
          if (!this.classObjectBtn['pec-primary-btn'] && this.Chinese && this.iconChecked) {
            this.changeBtn();
          }
        }
      },
      onBlur: function (item) {
        let me = this;
        let value = item.target.value;
        if (!value) {
          me.deposit = true; //输入存款提示语
          me.minimum = false; //输入存款提示语
          me.Chinese = false; //输入存款提示语
        } else if (value < 10000) {
          me.minimum = true; //输入存款提示语
          me.deposit = false; //输入存款提示语
          me.Chinese = false; //输入存款提示语
        } else {

          item.target.value = fit.formatMoneyNumber(me.value, "blur");
          deposit_detail.default.queryIntRate({
            url:'queryIntRate',
            env:'stg3',
            qs:{
              bussType:"9110",
              ccy:"RMB",
              gradeAmt:Number(value),
              saveDeadLine:localStorage.getItem('saveDeadline')
            }
          },function(res){
            me.minimum = false; //输入存款提示语
            me.deposit = false; //输入存款提示语
            me.Chinese = true; //输入存款提示语
//            me.isChange = false; //输入存款提示语
            me.saveDead = res.expireInt;
            me.interestRate = Number(res.expireRate).toFixed(3)+'%';
          });
        }
      },
      onFocus: function (item) {
        this.lowerVisible = true;
        this.minimum = false;
//        this.isChange = true;
        let tarVal = item.target.value;
        if (tarVal !== "") {
          this.Chinese = true;
          item.target.value = fit.formatMoneyNumber(this.value, "focus");
          if (!this.minimum && !this.deposit) {
            this.chineNum = fit.chineseNum(item.target.value);
          }

        }
      },
      agreement: function(){
        //http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/stg2/drawAgreement.html
//        ald.nav.forward({url: 'http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/stg2/depositAgreement.html'});
        ald.navigator.forward({
          title: '定活宝-定活通',
          showHeader: true,
          url: 'http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/stg2/depositAgreement.html',
          tpl: 'webview'
        });
      },
      draw: function(){
        //http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/stg2/drawAgreement.html
        ald.navigator.forward({
          title: '定活宝-定活通',
          showHeader: true,
          url: 'http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/stg2/drawAgreement.html',
          tpl: 'webview'
        });
      },
      getSystemTime:function(){
        let me = this;
        deposit_detail.default.getSystemDateTime({url:'getSystemDateTime'},function(res){
          if(res >= 23 && res <= 24){
            MessageBox.confirm({
              title:'温馨提示',
              message: '请您注意：我行系统正在进行每日日终清算处理，如现在存入，系统将在清算处理完毕后受理，可能导致起存日期为次日？',
              leftText:'继续存入',
              rightText:'取消',
              leftAction() {
                me.onBuy();
              },
              rightAction() {

              }
            });
          }else{
            me.onBuy();
          }
        });
      }
    },
    watch: {
      Chinese: function () {
        if (this.iconChecked) {
          this.changeBtn();
        }
      },
      iconChecked: function () {
        if (this.Chinese) {
          this.changeBtn();
        }
      }
    }
  }

</script>
