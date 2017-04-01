<template>
  <div>
    <section v-if="car_id" >
      <common-header :options="options" @leftButtonCallback="leftButtonCallback"></common-header>
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

          <div class="pec-list-fixed">

            <div class="pec-list pec-LBP-list" >
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
          </div>
          <mt-loadmore :style="styleObject" :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method.prevent="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded=allLoaded :autoFill="false" ref="loadmore">


            <div  v-for="(item,index) in resRender.data"  class="pec-list pec-LBP-list pec-margin-top20" @click="orderdetail(index)">
              <div class="pec-list-item ">
                <div class="pec-item-head">
                  <p class="pec-color-3F4246 pec-font-size24">起存日{{item.acctOpenDate | changeDate}}</p>
                  <p class="pec-prodcut-desc">到期日{{item.curExpiryDate | changeDate}}</p>
                  <p class="pec-prodcut-desc">{{item.acctOpenDate | haveDate}}</p>
                </div>
                <div class="pec-item-body pec-text-right">
                  <p>本金<span class="pec-color-F17940">{{item.corpusBalance}}</span>元</p>
                  <p class="pec-prodcut-desc">到期利率{{item.intRate}}%</p>
                  <p class="pec-prodcut-desc">{{ rechargeCard}}</p>
                </div>
                <div class="pec-item-foot">
                  <i class="icon-arrow"></i>
                </div>
              </div>
            </div>

            <div slot="bottom" class="mint-loadmore-bottom">
              <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
              <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
            </div>
          </mt-loadmore>

        </div>
      </section>
      <Select-card v-if="select" @cancelselect="cancelSelect" @selectvalue="selectValue" :select-data="selectedCard"></Select-card>
    </section>


    <section v-else >
      <common-header :options="options" @leftButtonCallback="leftButtonCallback"></common-header>
      <div v-if="showlive">
        <nocarda :card-data="noCarddata" :scard-data="selectedCard"></nocarda>
      </div>
      <div v-else>
        <div  class="pec-list-fixed" >
          <div class="pec-list pec-LBP-list">
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
        </div>
        <mt-loadmore :style="styleObjecta" :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded=allLoaded  :autoFill="false" ref="loadmore">
          <div  v-for="(item,index) in resRender.data"  class="pec-list pec-LBP-list pec-margin-top20" @click="orderdetail(index)">
            <div class="pec-list-item ">
              <div class="pec-item-head">
                <p class="pec-color-3F4246 pec-font-size24">起存日{{item.acctOpenDate | changeDate}}</p>
                <p class="pec-prodcut-desc">到期日{{item.curExpiryDate | changeDate}}</p>
                <p class="pec-prodcut-desc">{{item.acctOpenDate | haveDate}}</p>

              </div>
              <div class="pec-item-body pec-text-right">
                <p>本金<span class="pec-color-F17940">{{item.corpusBalance}}</span>元</p>
                <p class="pec-prodcut-desc">到期利率{{item.intRate}}%</p>
                <p class="pec-prodcut-desc">{{ rechargeCard}}</p>
              </div>
              <div class="pec-item-foot">
                <i class="icon-arrow"></i>
              </div>
            </div>
          </div>
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
                <mt-spinner type="snake"></mt-spinner>
              </span>
          </div>
        </mt-loadmore>

        <Select-card v-if="select" @cancelselect="cancelSelect" @selectvalue="selectValue" :select-data="selectedCard"></Select-card>
      </div>

    </section>
  </div>
</template>
<style>
  .mint-spinner-snake {
    display: inline-block;
    vertical-align: middle;
  }
  header + section .pec-list-fixed{
    padding-top:1.00rem;
  }
  .pec-list-fixed {
    position: fixed;
    width: 100%;
    z-index: 1;
    left: 0;
    top: 0rem;
    padding-top: .2rem;
    background: #f8f8f8;
  }
</style>
<script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import CommonHeader from '../../components/Common_Header'
  import SelectCard from './SelectCard.vue';
  import * as aladdin from 'aladdin';
  import {date} from '../../util'
  import nocard from './nocard.vue';
  import nocarda from './nocarda.vue';
  import types from '../../store/types.js';
  import * as ald from '../../util/ald';
  import bow from 'bow';
import { MessageBox, Loadmore } from 'mint-ui'
  export default {
    components: {
      SelectCard,
      nocard,
      nocarda,
      CommonHeader
    },
    data: function () {
      return {
        selectedIndex: "",
        select: false,
        cardshow: true,
        currentPgs: 1,
        show: "",
        showlive: false,
        noCarddata: {},
        car_id: "",
        cardNo: "",
        cardName: "",
        refcardNo: "",       //给加载刷新加串号
        ordeaMask: "",      //传给详情的银行卡名
        cardMask: "",       //传给详情的卡号签串,
        options:{
          title:"我的定活通(增强型)",  //头部
          showIcon:false,
          rightButtonText:'',
          isSetBack:true,
          setSelfShow:false
        },
        styleObject:{
          "margin-top":'2.5rem'
        },
        styleObjecta:{
          "margin-top":'3.3rem'
        },
        allLoaded:false,
        bottomStatus:""

      }
    },
    filters:{
      changeNo(card){
        return card.substr(-4)
      },
      changeDate(data){
        return date.formatDate(data,"yyyy-MM-dd")
      },
      haveDate(data){
        var now=date.formatDate(new Date(),"yyyy-MM-dd");//获取当前时间
        var dat=date.formatDate(data,"yyyy-MM-dd");//获取开户时间
        var getPoorTime = function(startTime, endTime) {
          var ADAYTIME = 1000*60*60*24;
          function prevDayOfMonth(startTimeList,endTimeList){//判断初始日期在结束日期的前一个月距离月末的天数
            var prevMonthTime = [endTimeList[0],1,startTimeList[2]];
            if(endTimeList[1]==1){
              prevMonthTime[0]=endTimeList[0]-1;
              prevMonthTime[1] = 12;
            }else{
              prevMonthTime[1] = endTimeList[1]-1;
            }
            return ((new Date(endTimeList.join("-"))).getTime() - (new Date(prevMonthTime.join("-"))).getTime())/ADAYTIME-1;
          }
          function getTimeList(timeSting){
            var DateTime = new Date(timeSting);
            return [DateTime.getFullYear(),DateTime.getMonth()+1,DateTime.getDate()]
          }
          var startTimeList = getTimeList(startTime);
          var endTimeList = getTimeList(endTime);
          var prevDayEndTime = prevDayOfMonth(startTimeList,endTimeList);
          var result = [0,0,0];
          var datePoor  = endTimeList[2]-startTimeList[2];
          var MonthPoor = endTimeList[1]-startTimeList[1];
          if(datePoor<0){
            --MonthPoor;
            result[2] = endTimeList[2]+prevDayEndTime;
          }else{
            result[2] = datePoor;
          }

          var yearPoor  = endTimeList[0]-startTimeList[0];
          if(MonthPoor<0){
            --yearPoor;
            MonthPoor+=12;
          }
          result[0] = yearPoor;
          result[1] = MonthPoor;
          return "已存"+result[0]+"年"+result[1] + "月"+ result[2] + "天";


        };
        return getPoorTime(dat,now)
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
    this.car_id=localStorage.getItem('car_id');//获得从详情跳过来的标志付
    this.cardNo=localStorage.getItem("cardNo");//获得从支取,存入成功跳过来的标志付(为卡号对应密文)
    if(this.car_id){
      var carId=this.car_id;
      localStorage.removeItem('car_id');
      this.$store.dispatch("getMyliveCards",{}).then(res=>{
        if(res.data.length==0){
        carId=res.car_id;
        MessageBox.confirm({
          message:"您当前没有可用的银行卡账户,无法存入定活宝-定活通,请先开通互联网账户",
          leftText:'取消',
          rightText:'前往开通',
          leftAction() {
            ald.nav.forward({url:"depositDetail"});
          },
          rightAction() {
            //前往绑卡;
            ald.nav.forward({
              url:"https://bank-static-stg.pingan.com.cn/brac-ia/universal_h5/pages/openAccount/entrance.html",//测试环境地址,
              qs:{channel: '', umType: 1,discontinueUrl:"",navigatingUrl:api.orderDetailPage},
              tpl:"webview"
            });
          }
        });
      }else {
        this.selectedIndex="-1";
        carId=res.fa_id;
      }
    })};
    if(this.cardNo){
      var idNo=this.cardNo;
      localStorage.removeItem('cardNo');
      self.refcardNo=this.cardNo;
      this.$store.dispatch("getMyliveCards",{}).then(res=>{
        for(var i=0;i<res.data.length;i++){
        if(idNo==res.data[i].bankCardSign){
          var cNo=res.data[i].bankCardMask.substr(-4);
          var cName=res.data[i].bankName;
          self.selectedIndex=i;
          self.refcardNo=res.data[i].bankCardSign;    //加载刷新需要的加串号
          self.ordeaMask=res.data[i].bankName;    //传给详情的银行卡名
          self.cardMask=res.data[i].bankCardSign;  //传给详情的卡号签串
          let content = cName+"("+cNo+")";
          this.$store.commit("DHTWW_CHANGECARDSHOW",content);
        }
      };
      this.$store.dispatch("getMyliveDead",{bankCardSign:this.cardNo,currentPgs:"1",pageSize:"10"}).then(res=>{
        this.resRender.resmytotal=res.data;
    });
    });
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
    handleTopChange(status) {
      this.topStatus = status;
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    },
    selectValue(Data){
      this.selectedIndex=Data.index;
      let bankcard=Data.data.bankCardMask.substr(-4);
      let content = Data.data.bankName+"("+bankcard+")";
      this.$store.commit("DHT_CHANGECARDSHOW",content);
      this.refcardNo = Data.data.bankCardSign;    //加载刷新需要的加串号号
      this.ordeaMask=Data.data.bankName;    //传给详情的银行卡名
      this.cardMask=Data.data.bankCardSign;   //传给详情的卡号签串
      this.cardshow = false;
      this.cardNo=Data.data.bankCardSign;
      this.choosecard(Data.data)
    },
    //选卡
    choosecard(data){
      this.$store.dispatch("getMyliveDead",{bankCardSign:data.bankCardSign,currentPgs:"1",pageSize:"10"}).then(res=>{
        this.resRender.resmytotal=res.data;
      this.showlive = res.showlive;//测试用res.showlive改为true,记得改回来
      this.noCarddata=data;
//        if(res.data.holdNum<=10){
//          return
//        }
    })
    },
    leftButtonCallback(){
      ald.nav.forward({url:"depositDetail"});
    },
    orderdetail(index){
      var orderdData={
        data:this.resRender.data[index],
        cardnoMask:this.ordeaMask,
        cardMask:this.cardMask,
      };
      localStorage.setItem("cardSignData",JSON.stringify(orderdData));
      ald.nav.forward({
        url:"orderDetailPage"
      });

    },
    // 下拉刷新
    loadTop() {
      let self = this;
      setTimeout(() => {
        self.$store.dispatch("getMyliveDead", {
        bankCardSign:self.refcardNo,
        currentPgs: "1",
        pageSize: "10"
      }).then(res=> {
          self.currentPgs=1;
        self.$refs.loadmore.onTopLoaded();
      if ((self.currentPgs * 10 > self.fund.showlist.holdNum || self.fund.showlist.holdNum <= 10)) {
        self.allLoaded = true;// 若数据已全部获取完毕
        self.$refs.loadmore.onBottomLoaded();

      }
      self.allLoaded = false;
      self.$refs.loadmore.onBottomLoaded();
    })
    },1500)

    },
    // 上拉加载
    loadBottom() {
      let self = this;
      setTimeout(() => {
        self.$store.dispatch("getMyliveDead", {
          bankCardSign: self.refcardNo,
          currentPgs: self.currentPgs,
          pageSize: "10"
        }).then(res=> {
          self.currentPgs+=1;
          self.$refs.loadmore.onBottomLoaded();
          debugger;
          if ((self.currentPgs * 10 > self.fund.showlist.holdNum || self.fund.showlist.holdNum <= 10)) {
            self.allLoaded = true;// 若数据已全部获取完毕
            self.$refs.loadmore.onBottomLoaded();
          }
        })
      },1500)
    }


  }
  }
</script>


