
<template>
  <section>
    <section v-if="cardshow" >
      <div><common-header :title=title :onLeft='leftClick'></common-header></div>
      <div class="pec-list pec-LBP-list pec-margin-top20">
        <div class="pec-list-item"  @click="selectRechargeCard">
          <div class="pec-item-head">
            银行账号
          </div>
          <div class="pec-item-body">
            <p>{{rechargeCard}}</p>
          </div>
          <div class="pec-item-foot">
            <i class="icon-arrow"></i>
          </div>
        </div>
        <div class="pec-list-item ">
          <div class="pec-item-head">共0笔</div>
          <div class="pec-item-foot pec-text-right">共计<span class="pec-color-F17940">0.00</span>元</div>
        </div>
      </div>
      <p class="pec-text-center pec-margin-top60 pec-color-B2B2B2 pec-font-size24">您当前还没有存定活宝-定活通存款</p>
      <div class="pec-btn-zone pec-margin-top110">
        <button size="big" class="pec-primary-btn" @click="rightcun">立即存入</button>
      </div>
    </section>

    <section v-else>
      <div class="pec-list pec-LBP-list pec-margin-top20">
        <div class="pec-list-item"  @click="selectRechargeCard">
          <div class="pec-item-head">
            银行账号
          </div>
          <div class="pec-item-body">
            <p>{{rechargeCard}}</p>
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
            <p class="pec-prodcut-desc">{{item.acctOpenDate | haveDate}}</p>
          </div>
          <div class="pec-item-body pec-text-right">
            <p>剩余本金<span class="pec-color-F17940">{{item.corpusBalance}}</span>元</p>
            <p class="pec-prodcut-desc">到期利率{{item.intRate}}%</p>
            <p class="pec-prodcut-desc">{{rechargeCard}}</p>
          </div>
          <div class="pec-item-foot">
            <i class="icon-arrow"></i>
          </div>
        </div>
      </div>
    </section>
    <Select-card v-if="select" @cancelselect="cancelSelect" @selectvalue="selectValue" :select-data="scardData"></Select-card>
  </section>
</template>

<script>
  import {
    mapState,
    mapActions
  } from 'vuex';
  import SelectCard from './SelectCard.vue';
  import * as types from '../../store/types'
  import api from '../../api/urls.js'
  import * as ald from '../../util/ald';
  import bow from 'bow';

  export default {
    props: {
      cardData: {
        type: Object,
        default: ""
      },
      scardData:{
        type:Object,
        default: ""
      }

    },
    data: function () {
      return {
        select:false,
        cardshow:true,
        ordeaMask:"",      //传给详情的银行卡名
        cardMask:"" ,        //传给详情的卡号签串
        selectedIndex:""
      }

    },
    filters:{
      changeNo(card){
        return card.substr(-4)
      },
      changeDate(date){
        return dante.dater.formatDate(date,"yyyy-MM-dd")
      },
      haveDate(date){
        var now=dante.dater.formatDate(new Date(),"yyyy-MM-dd");//获取当前时间
        var date=dante.dater.formatDate(date,"yyyy-MM-dd");//获取开户时间
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
        return getPoorTime(date,now)
      },
    },
    methods: {
      ...mapActions([
        'getMyliveDead',

      ]),
      selectRechargeCard() {
        this.select = true;
      },
      cancelSelect(){
        this.select = false;
      },
      selectValue(Data){
        this.scardData.index=Data.index;
        let bankcard=Data.data.bankCardMask.substr(-4);
        let content = Data.data.bankName+"("+bankcard+")";
        this.$store.commit("DHT_CHANGECARDSHOW",content);
        this.ordeaMask=Data.data.bankName;    //传给详情的银行卡名
        this.cardMask=Data.data.bankCardSign;  //传给详情的卡号签串
        this.choosecard(Data.data)
      },
      choosecard(data){
        this.$store.dispatch("getMyliveDead",{bankCardSign:data.bankCardSign,currentPgs:"1",pageSize:"10"}).then(res=>{
          this.cardshow = res.cardshow;
        })
      },
      rightcun(){
        ald.navigator.forward({
          url:api.deposit_buy
        });

      },
      leftClick(){
        ald.navigator.back();
      },
      //点击去详情
      orderdetail(index){
        var orderdData={
          data:this.resRender.data[index],
          cardnoMask:this.ordeaMask,
          cardMask:this.cardMask
        };
        localStorage.setItem("cardSignData",JSON.stringify(orderdData));
        ald.navigator.forward({
          url:api.orderDetailPage
        });
      },

    },
    computed: {
      ...mapState([
        'fund',
      ]),
      resRender : function(){
        return {data:this.fund.myliveDead.lists,
          resmytotal:this.fund.showlist,

        };
      },
      rechargeCard: function() {
        return this.fund.changecard;
      },

    },
    components: {
      SelectCard
    },
    created: function () {


    },
    mounted:function(){

    },
  }
</script>

