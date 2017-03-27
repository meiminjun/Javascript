<template>
  <div>
    <common-header :title=title :onLeft='leftClick'></common-header>
    <section v-if="car_id" >
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
                <p class="pec-prodcut-desc">到期日{{item.curExpiryDate | changeDate | alertDate}}</p>
                <p class="pec-prodcut-desc">{{item.acctOpenDate | haveDate}}</p>
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

    </section>
    <section v-else >
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
            <p class="pec-prodcut-desc">{{item.acctOpenDate | haveDate}}</p>

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

    </section>
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
        title:"定活宝-定活通",
        showlive:false,
        noCarddata:{},
        car_id:"",
        cardNo:"",
        cardName:"",
        refcardNo:"",       //给加载刷新加串号
        ordeaMask:"",      //传给详情的银行卡名
        cardMask:""         //传给详情的卡号签串

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
                //前往绑卡;
                ald.navigator.forward({
                  url:"https://bank-static-stg.pingan.com.cn/brac-ia/universal_h5/pages/openAccount/entrance.html",//测试环境地址,
                  qs:{channel: '', umType: 1,discontinueUrl:"",navigatingUrl:api.orderDetailPage},
                  tpl:"webview"
                });
              }
            });
          }else {
            this.selectedIndex="-1";
            this.car_id=res.fa_id;
          }
        })};
      if(this.cardNo){
        this.$store.dispatch("getMyliveDead",{bankCardSign:this.cardNo,currentPgs:"1",pageSize:"10"}).then(res=>{
          this.resRender.resmytotal=res.data;
          this.$store.dispatch("getMyliveCards",{}).then(res=>{
            for(var i=0;i<res.data.length;i++){
              if(self.cardNo==res.data[i].bankCardSign){
                var cNo=res.data[i].bankCardMask.substr(-4);
                var cName=res.data[i].bankName;
                this.selectedIndex=i;
                this.fund.changecard=cName+"("+cNo+")";
                self.refcardNo=self.cardNo;    //加载刷新需要的加串号
                self.ordeaMask=res.data[i].bankName;    //传给详情的银行卡名
                self.cardMask=res.data[i].bankCardSign;  //传给详情的卡号签串

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
        let content = Data.data.bankName+"("+bankcard+")";
        this.$store.commit("DHT_CHANGECARDSHOW",content);
//                this.refcardNo=Data.data.bankCardNo;    //加载刷新需要的卡号
        this.ordeaMask=Data.data.bankName;    //传给详情的银行卡名
        this.cardMask=Data.data.bankCardSign;   //传给详情的卡号签串
        this.cardshow = false;
        this.choosecard(Data.data)
      },
      //选卡
      choosecard(data){
        this.$store.dispatch("getMyliveDead",{bankCardSign:data.bankCardSign,currentPgs:"1",pageSize:"10"}).then(res=>{
          this.resRender.resmytotal=res.data
          this.showlive = res.showlive;//测试用res.showlive改为true,记得改回来
          this.noCarddata=data;
        })
      },
      //时间存期
      leftClick(){
        ald.navigator.back();
      },
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


