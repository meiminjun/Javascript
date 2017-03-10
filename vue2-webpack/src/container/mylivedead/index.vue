<template>
<div>
<common-header :title=title :onLeft='leftClick'></common-header>
  <div v-if="car_id" style="padding-top: 0.8rem">
  <section v-if="cardshow" >
  <div class="pec-list pec-LBP-list pec-margin-top20">
  <div class="pec-list-item">
  <div class="pec-item-head">
  银行账号
  </div>
  <div class="pec-item-body" @click="selectRechargeCard">
  <p class="pec-color-B2B2B2">请先选择银行账号</p>
  </div>
  <div class="pec-item-foot">
  <i class="icon-arrow"></i>
  </div>
  </div>
  </div>
  </section>
  <section v-else>

<div v-if="showlive">
  <nocard :card-data="noCarddata" :scard-data="selectedCard"></nocard>
  </div>
  <div v-else >
<div class="pec-list pec-LBP-list pec-margin-top20" >
  <div class="pec-list-item" @click="selectRechargeCard">
  <div class="pec-item-head">
  银行账号
  </div>
  <div class="pec-item-body">
  {{rechargeCard}}
</div>
<div class="pec-item-foot">
  <i class="icon-arrow"></i>
  </div>
  </div>
  <div class="pec-list-item ">
  <div class="pec-item-head">共{{resRender.resmytotal.holdNum}}笔</div>
<div class="pec-item-foot pec-text-right">共计<span class="pec-color-F17940">{{resRender.resmytotal.holdBalance}}</span>元</div>
</div>
</div>

<div  v-for="(item,index) in resRender.data"  class="pec-list pec-LBP-list pec-margin-top20" @click="orderdetail(index)">
  <div class="pec-list-item ">
  <div class="pec-item-head">
  <p class="pec-color-3F4246 pec-font-size28">{{item.acctOpenDate | changeDate}}</p>
<p class="pec-prodcut-desc">到期日{{item.curExpiryDate | changeDate}}</p>
<p class="pec-prodcut-desc">已存{{item.saveDeadline}}</p>
</div>
<div class="pec-item-body pec-text-right">
  <p>剩余本金<span class="pec-color-F17940">{{item.corpusBalance}}</span>元</p>
<p class="pec-prodcut-desc">到期利率{{item.intRate}}%</p>
<p class="pec-prodcut-desc">{{ rechargeCard}}</p>
</div>
<div class="pec-item-foot">
  <i class="icon-arrow"></i>
  </div>
  </div>
  </div>



  </div>
  </section>
  <Select-card v-if="select" @cancelselect="cancelSelect" @selectvalue="selectValue" :select-data="selectedCard"></Select-card>

  </div>
  <div v-else style="padding-top: 0.8rem">
  <div class="pec-list pec-LBP-list pec-margin-top20">
  <div class="pec-list-item" @click="selectRechargeCard">
  <div class="pec-item-head">
  银行账号
  </div>
  <div class="pec-item-body">
  {{rechargeCard}}
</div>
<div class="pec-item-foot">
  <i class="icon-arrow"></i>
  </div>
  </div>
  <div class="pec-list-item ">
  <div class="pec-item-head">共{{resRender.resmytotal.holdNum}}笔</div>
<div class="pec-item-foot pec-text-right">共计<span class="pec-color-F17940">{{resRender.resmytotal.holdBalance}}</span>元</div>
</div>
</div>


<div  v-for="(item,index) in resRender.data"  class="pec-list pec-LBP-list pec-margin-top20" @click="orderdetail(index)">
  <div class="pec-list-item ">
  <div class="pec-item-head">
  <p class="pec-color-3F4246 pec-font-size28">{{item.acctOpenDate | changeDate}}</p>
<p class="pec-prodcut-desc">到期日{{item.curExpiryDate | changeDate}}</p>
<p class="pec-prodcut-desc">已存{{item.saveDeadline}}</p>
</div>
<div class="pec-item-body pec-text-right">
  <p>剩余本金<span class="pec-color-F17940">{{item.corpusBalance}}</span>元</p>
<p class="pec-prodcut-desc">到期利率{{item.intRate}}%</p>
<p class="pec-prodcut-desc">{{ rechargeCard}}</p>
</div>
<div class="pec-item-foot">
  <i class="icon-arrow"></i>
  </div>
  </div>
  </div>

  <Select-card v-if="select" @cancelselect="cancelSelect" @selectvalue="selectValue" :select-data="selectedCard"></Select-card>

  </div>
  </div>

  </template>
  <style>
    /*.mint-spinner-snake {*/
    /*display: inline-block;*/
    /*vertical-align: middle;*/
    /*}*/
  </style>
  <script>
  let dante = require('dante');
import { mapState, mapActions, mapGetters } from 'vuex';
import CommonHeader from '../../components/Common_Header'
import SelectCard from './SelectCard.vue';
import nocard from './nocard.vue';
import api from '../../api/urls.js'
import types from '../../store/types.js';
import * as ald from '../../util/ald';
import bow from 'bow';
import {PecMessageBox} from 'pa-ui/lib/index';
export default {
  components: {
    SelectCard,
    nocard,
    CommonHeader
  },
  data: function () {
    return {
      selectedIndex:"",
      select:false,
      cardshow:true,
      currentPgs:1,
      show:"",
      title:"定存宝-定活通",
      showlive:false,
      noCarddata:{},
      car_id:"",
      cardNo:"",
      cardName:"",
      refcardNo:"",
      ordeaMask:""

    }
  },
  filters:{
    changeNo(card){
      return card.substr(-4)
    },
    changeDate(date){
      return dante.dater.formatDate(date,"yyyy-MM-dd")
    },
  },
  props: {
    data: {
      type: Object,
      default: function() {
        return {

        }
      }
    }
  },
  computed: {
    ...mapState([
      'fund',
    ]),
    selectedCard : function() {
      return {
        index:this.selectedIndex,
        data: this.fund.mycard.lists
      }
    },
    resRender : function(){

      return {data:this.fund.myliveDead.lists,
        resmytotal:this.fund.showlist,

      };
    },
    rechargeCard: function() {
      return this.fund.changecard;
    },

  },
  created () {
    let  self=this;
    //获得从详情跳过来的标志付
    this.car_id=localStorage.getItem('car_id');

//          this.car_id =true;
    // 获得从支取,存入成功过来的卡号;
    //     let cardNo=this.getUrl().carNo;
//            this.cardNo="6230582000070450773";
    if(this.car_id){
      this.$store.dispatch("getMyliveCards",{}).then(res=>{
        if(res.data.length==0){
          this.car_id=res.car_id;
          PecMessageBox.confirm({
            message:"您当前没有可用的银行卡账户,无法存入定活宝-定活通,请先开通互联网账户",
            leftText:'取消',
            rightText:'前往开通',
            leftAction() {
              ald.navigator.back();
            },
            rightAction() {
              //               var gourl;
//                debugger;
//                if(dante.env.APP_PAEBANK){
//                  gourl=""
//                }
//                //前往绑卡;
              ald.navigator.forward({
                url:"https://bank-static-stg.pingan.com.cn/brac-ia/universal_h5/pages/openAccount/entrance.html",
                qs:{channel: '', umType: 1,discontinueUrl:"",navigatingUrl:""},
                tpl:"webview"
              });              //前往绑卡;
            }
          });
        }else {
          this.selectedIndex="-1"
          this.car_id=res.fa_id;
        }
      })
    };
    if(this.cardNo){
      this.$store.dispatch("getMyliveDead",{cardNo:this.cardNo,currentPgs:"1",pageSize:"10"}).then(res=>{
        this.resRender.resmytotal=res.data;
        this.$store.dispatch("getMyliveCards",{}).then(res=>{

          for(var i=0;i<res.data.length;i++){
            if(self.cardNo===res.data[i].bankCardNo){
              var cNo=self.cardNo.substr(-4);
              var cName=res.data[i].bankName;
              this.selectedIndex=i;
              this.fund.changecard=cName+"(尾号"+cNo+")";

              self.refcardNo=self.cardNo;    //加载刷新需要的卡号
              self.ordeaMask=res.data[i].bankCardNo;    //传给详情的卡号掩码
            }
          }
        });
      })
    };
  },
  mounted : function(){

  },
  methods: {
    ...mapActions([
      'getMyliveDead',
      'getMyliveCards'
    ]),
    selectRechargeCard() {
      this.select = true;
    },
    cancelSelect(){
      this.select = false;
    },
    selectValue(Data){
      this.selectedIndex=Data.index;

      let bankcard=Data.data.bankCardMask.substr(-4);
      let content = Data.data.bankName+"(尾号"+bankcard+")";
      this.$store.commit("DHT_CHANGECARDSHOW",content);
//                this.refcardNo=Data.data.bankCardNo;    //加载刷新需要的卡号
      this.ordeaMask=Data.data.bankCardNo;    //给详情传的卡号
      this.cardshow = false;
      this.choosecard(Data.data)
    },
    choosecard(data){
      this.$store.dispatch("getMyliveDead",{cardNo:data.bankCardSign,currentPgs:"1",pageSize:"10"}).then(res=>{
        this.resRender.resmytotal=res.data
        this.showlive = res.showlive;
        this.noCarddata=data;
      })
    },

    geturl(){
      function setParms(args) {
        var parms = {}, newParms = '?';
        //把location.search解析成对象parms
        var query = location.search.substring(1).split('&');
        for (var i = 0; i < query.length; i++) {
          var pos = query[i].split('=');
          if (pos[0]) {
            parms[pos[0]] = pos[1] ? pos[1] : '';
          }
        }
        //如果没有传设置的args,则直接返回parms
        if (!args) {
          return parms;
        }
        //设置parms,属性存在则更新,不存在则添加
        for (var argKey in args) {
          for (var parmskey in parms) {
            if (argKey === parmskey) {
              parms[parmskey] = args[parmskey];
              break;
            }
          }
          parms[argKey] = args[argKey];
        }
        //字符串化parms并返回
        for (var key in parms) {
          newParms += key + '=' + parms[key] + '&';
        }
        return newParms.substring(0, newParms.length - 1);
      }
    },
    leftClick(){
      ald.navigator.back();
    },
    orderdetail(index){
      bow.sharedMemory.setItem("cardSignData",{
        data:this.resRender.data[index],
        cardnoMask:this.ordeaMask
      },true);
      ald.navigator.forward({
        url:api.orderDetailPage
      });

    },
    // 下拉刷新
    loadTop() {
      let self = this;
      setTimeout(() => {
        self.pageNum = 1;
        self.getMyliveDead({
          currentPgs:1,
          cardNo:self.refcardNo,
          pageSize:"10",
          cb : function(){
            self.$refs.loadmore.onTopLoaded();
          }
        })
      },1500)
    },
    // 上拉加载
    loadBottom() {
      let self = this;
      if (!(this.pageNum*2>this.fund.showlist.total || this.fund.showlist.total<=2)) {
        self.getMyliveDead({
          currentPgs:++this.currentPgs,
          cardNo:self.refcardNo,
          pageSize:"10",
          cb: function(){
            self.$refs.loadmore.onBottomLoaded();
          }
        })
      } else {
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
      }
      // 注意在这个方法的最后需要手动调用 loadmore 的 onBottomLoaded 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。
      // 列表底部的上拉刷新与之类似
    }

  }
}
</script>


