<template id="template">
  <div>
    <Hd :title="title"></Hd>
    <section>
      <div class="pec-list">
        <!--<my-header :options="headerOptions" @leftButtonCallback="leftButtonCallback" @rightButtonCallback="rightButtonCallback"></my-header>-->
        <div class="pec-list-item pec-display-block">
          <p class="LBP-p1">本产品由平安银行提供</p>
          <p class="LBP-p2" v-text="obj.interestRate"></p>
          <p class="LBP-p1">-到期年利率-</p>
          <div class="LBP-desc">
            <div>
              <p class="LBP-p1">起存金额</p>
              <p v-text="obj.depositAmtMin/10000+'万'"></p>
            </div>
            <div>
              <p class="LBP-p1">存期</p>
              <p v-text="obj.saveDeadline"></p>
            </div>
            <div>
              <p class="LBP-p1">付息方式</p>
              <p v-text="obj.frequency === '1' ? '到期付息' : '定期付息'"></p>
            </div>
          </div>
        </div>
        <div class="pec-list-foot" @click="myDeposit">
          <div class="pec-list-foot-head">
            <p>我的定活宝-定活通</p>
          </div>
          <div class="pec-list-foot-foot">
            <i class="icon-arrow"></i>
          </div>
        </div>
      </div>
      <div class="pec-margin-top20">
        <div class="pec-navbar pec-navbar-full">
          <div @click="showChart" class="pec-navbar-item" :class="{'curr':isChart}">
            <div class="pec-tab-item-icon"></div>
            <span class="pec-tab-item-label">T+1到账支取</span>
          </div>
          <div @click="showChartTwo" class="pec-navbar-item" :class="{'curr':isChartTwo}">
            <div class="pec-tab-item-icon"></div>
            <span class="pec-tab-item-label">实时支取</span>
          </div>
        </div>
      </div>

      <div>
        <div v-if="isChart" class="LBP-Trend">
          <!--<p class="LBP-p1 pec-text-left">历史支取利率%</p>-->
          <vue-charts :options="polar" auto-resize  style="margin:0 auto;padding:.2rem 0;width: 100%;height:5rem"></vue-charts>
          <p class="LBP-p1 pec-margin-top10">说明：采用T+1到账支取方式，资金将于下一个交易日到账</p>
        </div>

        <div v-if="isChartTwo" class="LBP-Trend2">
          <!--<p class="LBP-p1 pec-text-left">历史支取利率%</p>-->
          <vue-charts :options="polar2"  auto-resize style="margin:0 auto;padding:.2rem 0;width: 100%;height:5rem"></vue-charts>
          <p class="LBP-p1 pec-margin-top10">说明：采用T+1到账支取方式，资金将于下一个交易日到账</p>
        </div>
      </div>


      <div class="pec-list pec-margin-top20">
        <div class="pec-list-head">
          <div class="pec-list-head-head">产品规则</div>
          <div class="pec-list-head-foot">
            <i @click="curr" :class="classObject"></i>
          </div>
        </div>
        <div v-show="iShow">
          <div class="pec-list-item">
            <div class="pec-item-head">
              币种
            </div>
            <div class="pec-item-body" v-text="obj.ccy">{{obj.ccy}}</div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              存期
            </div>
            <div class="pec-item-body" v-text="obj.saveDeadline"></div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              起存金额
            </div>
            <div class="pec-item-body" v-text="obj.depositAmtMin/10000+'万'"></div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              到期年利率
            </div>
            <div class="pec-item-body" v-text="obj.interestRate"></div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              付息方式
            </div>
            <div class="pec-item-body" v-text="obj.frequency === '1' ? '到期付息' : '定期付息'"></div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              能否提前支取
            </div>
            <div class="pec-item-body" v-text="obj.preDrawFlag === '0' ? '否' : '是' ">

            </div>
          </div>
        </div>
      </div>
      <div class="pec-list pec-margin-top20 pec-margin-bottom200">
        <div class="pec-list-head">
          <div class="pec-list-head-head">常见问题</div>
          <div class="pec-list-head-foot">
            <i :class="classObjectTwo" @click="currTwo"></i>
          </div>
        </div>
        <div v-show="iSue">
          <div class="pec-list-item">
            <div class="pec-item-body">
              <p class="pec-color-63666B">1、定活宝-定活通有几种支取方式？</p>
            </div>
            <div class="pec-item-foot">
              <i class="icon-arrow"></i>
            </div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-body">
              <p class="pec-color-63666B">2、T+1到账支取具体到账时间是什么？</p>
            </div>
            <div class="pec-item-foot">
              <i class="icon-arrow"></i>
            </div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-body">
              <p class="pec-color-63666B">3、定活宝-定活通提前支取的话利率怎么算？</p>
            </div>
            <div class="pec-item-foot">
              <i class="icon-arrow"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="share"><i class="icon-share"></i>
        <p>分享</p></div>
      <div class="pec-btn-zone pec-fiexd-btn">
        <button @click="forward" size="big" class="pec-primary-btn">立即存入</button>
        <!--<button @click="forward" size="mid" class="pec-primary-btn">存入</button>-->
      </div>
    </section>
  </div>
</template>

<script>
    import {
            mapState,
            mapActions
    } from 'vuex';
    import * as ald from '../../util/ald';
    import * as acc from '../../util/acc';
    import api from '../../api/urls';
//    import myHeader from './MyHeader.vue';
    import Hd from '../../components/Common_Header.vue';
    // import {PecMessageBox} from 'pa-ui/lib/index';
    const bow = require('bow');
    import fit from '../../filters/deposit';
    import {tryLogin} from '../../util/acc';
    import {checkLogin} from '../../util/acc';
    export default {
        data: function () {

            var htmlFontSize =+document.getElementsByTagName("html")[0].style.fontSize.replace("px","");

            return {
              title:'定活通',
                iShow: true,
                iSue: true,
                isChart: true,
                isChartTwo: false,
                iSChange: false,
                //产品规则
                classObject: {
                    'icon-arrow': true,
                    'curr': true
                },
                //常见问题
                classObjectTwo: {
                    'icon-arrow': true,
                    'curr': true
                },
                polar:{
                    title: {
                        show:true,
                        text: '历史支取利率',
                        left:"center",
                        textStyle:{
                            color: "#6C7684",
                            fontSize: 0.15*htmlFontSize,
                            fontWeight:"normal"
                        }
                    },
                    tooltip: {
                        show:true,
                        trigger: 'axis',
                        textStyle:{
                            fontSize: 0.15*htmlFontSize,
                        }
                    },
                    grid:{
                        bottom: 0.8*htmlFontSize
                    },
                    color:["#4175D5","#F37938"],
                    legend: {
                        itemGap:50,
                        top:"bottom",
                        padding:[20,0,0,0],
                        textStyle:{
                            color: "#6C7684",
                            fontSize: 0.26*htmlFontSize,
                            fontWeight:"normal"
                        },
                        data:[{
                            name:'90天<存期<180天',
                            icon:"roundRect",
                            textStyle:{
                                color:"#4175D5"
                            }
                        },{name:'存期≥180天',
                            icon:"roundRect",
                            textStyle:{
                                color:"#F37938"
                            }
                        }]
                    },
                    toolbox: {
                        show: false,
                        feature: {
                            magicType: {show: false, type: ['stack', 'tiled']},
                            saveAsImage: {show: false}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四'],
                        axisLabel:{
                            textStyle:{
                                fontSize:0.15*htmlFontSize
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name:"支取利率（%）",
                        textStyle:{
                            fontSize: 0.18*htmlFontSize,
                        },
                        axisLabel:{
                            textStyle:{
                                fontSize:0.18*htmlFontSize
                            }
                        },
                        nameTextStyle:{
                            fontSize: 0.18*htmlFontSize,
                        }
                    },
                    series: [
                        {
                            name: '90天<存期<180天',
                            type: 'line',
                            smooth: true,
                            data: [30, 182, 434, 791],
                            itemStyle : {
                                normal : {
                                    areaStyle: {color:'rgba(0, 255, 255,0.1)'},
                                    lineStyle:{
                                        color:'#4175D5'
                                    }
                                }
                            },
                            markPoint: {
                                show:false,
                                symbol:'pin',
                                symbolSize:[htmlFontSize,htmlFontSize],
                                symbolOffset:[0,-5],
                                textStyle:{
                                    fontSize:38*htmlFontSize
                                },
                                data: [
                                    {type: 'max', name: '最大值'}
                                    //{type: 'min', name: '最小值'}
                                ]
                            },
                            //  markLine: {
                            //      data: [
                            //          {type: 'average', name: '平均值'}
                            //      ]
                            //  }
                        },
                        {
                            name: '存期≥180天',
                            type: 'line',
                            smooth: true,
                            data: [1320, 1132, 601, 234],
                            itemStyle : {
                                normal : {
                                    areaStyle: {color:'rgba(0, 255, 255,0.1)'},
                                    lineStyle:{
                                        color:'#F37938'
                                    }
                                }
                            },
                        }]
                },
                polar2:{
                    color: ['#3398DB'],
                    tooltip : {
                        show:false,
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            name:"持有时间",
                            nameTextStyle:{
                                fontSize: 0.18*htmlFontSize,
                            },
                            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                            axisLabel:{
                                textStyle:{
                                    fontSize:0.18*htmlFontSize
                                }
                            },
                            axisTick: {
                                //alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            name:"支取利率（%）",
                            nameTextStyle:{
                                fontSize: 0.18*htmlFontSize
                            },
                            axisLabel:{
                                textStyle:{
                                    fontSize:0.20*htmlFontSize
                                }
                            }
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '100%',
                            data:[10, 52, 200, 334, 390, 330]
                        }
                    ]
                },
                headerOptions:{
                  title:"定活宝-定活通",//标题(*)
                  showIcon:true,//是否显示右边的icon
                  isSetBack:true//是否设置了返回函函数如果没执行默认返回，如果有设置，执行设置返回
                }

            };
        },
        components:{
          Hd
        },
        computed: {
            ...mapState([
                'depositDetail'
            ]),
        obj : function(){
                return this.depositDetail.aipFund.lists;
            }
        },
        created: function () {
            //TODO： 请求数据回来
            this.getAipRecommend();
            this.getCreateOrder();
        },
        methods: {
            ...mapActions([
                'getAipRecommend',
                    'getCreateOrder'
            ]),
            forward: function() {
//            bow.sharedMemory.setItem('test','xxxx');
//            PecMessageBox.confirm({
//              title: '确认删除真英雄？',
//              leftAction() {
//                console.log('不删除');
//              },
//              rightAction() {
//                console.log('删除真英雄');
//              }
//            });

            bow.navigator.forward({
              title: '定活宝-定活通',
              showHeader: true,
              url: api.deposit_buy,
              tpl: 'webview'
            });

//              if(!Dante.auth.isLogin()){
//                Dante.auth.launchLogin();
//              }else{
//                if(Dante.auth.getLoginType == '0'){
//                  PecMessageBox.confirm({
//                    title: '确认删除真英雄？',
//                    leftAction() {
//                      console.log('不删除');
//                    },
//                    rightAction() {
//                      console.log('删除真英雄');
//                    }
//                  });
//                }else{
//                  ald.navigator.forward({
//                    title: '定活宝-定活通',
//                    showHeader: true,
//                    url: api.deposit_buy,
//                    tpl: 'webview'
//                  });
//                }
//
//              }
            },
          myDeposit:function(){
            localStorage.setItem('car_id','123');
            bow.navigator.forward({
              title: '定活宝-定活通',
              showHeader: true,
              url: api.mylivedead,
              tpl: 'webview'
            });
          },
            curr: function () {
                if (this.iShow === true) {
                    this.iShow = false;
                    this.classObject.curr = false;
                } else {
                    this.iShow = true;
                    this.classObject.curr = true;
                }
            },
            currTwo: function () {
                if (this.iSue === true) {
                    this.iSue = false;
                    this.classObjectTwo.curr = false;
                } else {
                    this.iSue = true;
                    this.classObjectTwo.curr = true;
                }
            },
            showChart: function () {
                this.isChart = true;
                this.isChartTwo = false;
            },
            showChartTwo: function () {
                this.isChart = false;
                this.isChartTwo = true;
            }
        }
    }

</script>
