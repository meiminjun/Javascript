<template id="template">
  <div>
    <Hd :title="title"></Hd>
    <section>
      <div class="pec-list pec-LBP-list pec-margin-top40">
        <div class="pec-list-item">
          <div class="pec-item-head">
            存入金额
          </div>
          <div class="pec-item-body">
            <div class="pec-position-relative">
              <input @focus="onFocus" @blur="onBlur" v-model="value"   @input="updateValue(value)" class="pec-input" type="text" placeholder="10,000.00起存">
            </div>
            <p v-show="Chinese" class="pec-abs-tips">{{chineNum}}</p>
            <p v-show="minimum" class="pec-abs-tips pec-color-FC1520">最低存款金额为:10,000.00</p>
            <p v-show="deposit" class="pec-abs-tips pec-color-FC1520">请输入存款金额</p>
          </div>
        </div>
        <div class="pec-list-item">
          <div class="pec-item-head">
            存期
          </div>
          <div class="pec-item-body">
            3年
          </div>
        </div>
      </div>
      <div class="pec-list-title">到期利率3.575%&emsp;到期利息：<span class="pec-color-FC1520">1,430.00</span>元</div>
      <div class="pec-list pec-LBP-list">
        <div class="pec-list-item">
          <div class="pec-item-head">
            推荐人
          </div>
          <div class="pec-item-body">
            <div class="pec-position-relative">
              <input @input="judgeValue($event.target.value)" class="pec-input" type="text" value="" placeholder="请输入推荐人代码或UM号或手机号">
            </div>
            <p v-show="attentionShow" class="pec-abs-tips">(非必填)</p>
            <p v-show="judgeShow" class="pec-abs-tips pec-color-FC1520">提示：推荐人信息只能输入字母、数字、“.”、“-”、“_”、“@”</p>
            <p v-show="judgeShowTwo" class="pec-abs-tips pec-color-FC1520">提示：提示：首字符不能直接输入标点符号</p>
          </div>
        </div>
      </div>
      <div class="pec-read-agreement">
        <i :class="{ 'icon-check' : iconCheck , 'icon-checked' : iconChecked}" @click="isCheck"></i>
        <p style="font-size: 0.24rem;">我已阅读并同意<span class="pec-link">《定活通客户协议》</span><br><span class="pec-link">《定活宝（定活通）客户服务协议》</span></p>
      </div>
      <div class="pec-btn-zone pec-margin-top60">
        <button @click = "onBuy" size="big" :class="classObjectBtn">下一步</button>
      </div>
    </section>
  </div>
</template>

<script>
    import {
            mapState,
            mapActions
    } from 'vuex';
    import * as fit from '../../filters/deposit';
    import * as ald from '../../util/ald';
    import api from '../../api/urls';
    import Hd from '../../components/Common_Header.vue';
    import * as deposit_detail from '../../api/deposit_detail';
//    import depositDetail from '../../store/modules/depositDetail';
    export default {
        data: function() {
            return {
              title:'定活通',
                model: {},
                importMoney:"",
                Chinese:false,//金额大写
                minimum:false,//最低存款金额
                deposit:false,//存款金额不能为空
                chineNum:"",
                value:"",
                validation:false,
                isChange:false,
                judgeShow:false,
                judgeShowTwo:false,
                attentionShow:true,
                classObjectBtn:{
                    'pec-primary-btn':false,
                    'pec-secondary-btn':true
                },
                'iconCheck':false,
                'iconChecked':true
            };
        },
      components:{
        Hd
      },
        created: function () {
            //TODO： 请求数据回来
        },
        methods: {
            onBuy:function() {
                //TODO: to send buy request
                if(this.Chinese && this.iconChecked){
                  deposit_detail.default.createOrder({
                    prdCode: '47301',
                    prdType:'09',
                    sourceAppId: '222222',
                    terminalType: "01",
                    transAmt: fit.formatMoneyNumber(this.value),
                    transType: '01'
                  },function(res){
//                    window.sessionStorage.setItem("subTradeOrderNo",res.subTradeOrderNo);
                    localStorage.setItem("subTradeOrderNo",res.subTradeOrderNo);
                    localStorage.setItem("paySearialNo",res.paySearialNo);
                    ald.navigator.forward({
                      title: '定活宝-定活通',
                      showHeader: true,
                      url: "https://bank-static-stg.pingan.com.cn/omm/stg2/omm/mobile/pay.html?prepayId="+res.paySearialNo+'&'+'securitySign='+res.paySign,
                      tpl: 'webview'
                    });
                  });
                }
            },
            updateValue:function(value){
                if(value !== ''){
                    if(value[0] === '.'){
                        this.value = value.replace(/\./g,"");
                    }else{
                        this.value = value.replace(/[^\d.]/g,"").replace(".","$#$").replace(/\./g,"").replace("$#$",".")
                                .replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
                        this.Chinese = true;
                        this.chineNum = fit.chineseNum(value);//实时监听输入金额 并将其转为大写
                    }
                }else{
                    this.Chinese = false;
                }

            },
            isCheck:function(){
                this.iconCheck = !this.iconCheck;
                this.iconChecked = !this.iconChecked;

            },
            changeBtn:function(){
                this.classObjectBtn['pec-secondary-btn'] = !this.classObjectBtn['pec-secondary-btn'];
                this.classObjectBtn['pec-primary-btn'] = !this.classObjectBtn['pec-primary-btn'];
            },
            //推荐人校验
            judgeValue:function(value){
                if(value !== ""){
                    if(/[^\w,-\.,@]/g.test(value) || /[\u4E00-\u9FA5]/i.test(value)){
                        if(this.classObjectBtn['pec-primary-btn']){
                            this.changeBtn();
                        }
                        this.judgeShowTwo = false;
                        this.attentionShow = false;
                        this.judgeShow = true;
                    }else if(/[^\w,_]/g.test(value[0])||/[_]/.test(value[0])){
                        if(this.classObjectBtn['pec-primary-btn']){
                            this.changeBtn();
                        }
                        this.judgeShowTwo = true;
                        this.judgeShow = false;
                        this.attentionShow = false;
                    }else{
                        this.judgeShowTwo = false;
                        this.judgeShow = false;
                        this.attentionShow = true;
                    }
                }else{
                    this.judgeShow = false;
                    this.judgeShowTwo = false;
                    this.attentionShow = true;
                    if(!this.classObjectBtn['pec-primary-btn'] &&this.Chinese && this.iconChecked){
                        this.changeBtn();
                    }
                }
            },
            onBlur:function(item){
                let value = item.target.value;
                if(!value){
                    this.deposit = true; //输入存款提示语
                    this.minimum = false; //输入存款提示语
                    this.Chinese = false; //输入存款提示语
                }else if(value < 10000){
                    this.minimum = true; //输入存款提示语
                    this.deposit = false; //输入存款提示语
                    this.Chinese = false; //输入存款提示语
                }else{
                    this.minimum = false; //输入存款提示语
                    this.deposit = false; //输入存款提示语
//                    this.chineNum = fit.chineseNum(value);//实时监听输入金额 并将其转为大写
                    item.target.value = fit.formatMoneyNumber(this.value,"blur");
                    this.Chinese = true ; //输入存款提示语
                    this.isChange = true ; //输入存款提示语
                }
            },
            onFocus:function(item){
                this.minimum = false;
                this.isChange = false;
                let tarVal = item.target.value;
                if(tarVal !== ""){
                    this.Chinese = true;
                    item.target.value = fit.formatMoneyNumber(this.value,"focus");
                    if(!this.minimum&&!this.deposit){
                        this.chineNum = fit.chineseNum(item.target.value);
                    }

                }
            }
        },
        watch:{
            isChange:function(){
                if(this.iconChecked){
                    this.changeBtn();
                }
            },
            iconChecked:function(){
                if(this.Chinese){
                    this.changeBtn();
                }
            }
        }
    }

    </script>
