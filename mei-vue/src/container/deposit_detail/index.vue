<template id="template">
  <div>
    <Hd :options="options" @leftButtonCallback="leftButtonCallback"></Hd>
    <section>
      <div class="pec-list">
        <!--<my-header :options="headerOptions" @leftButtonCallback="leftButtonCallback" @rightButtonCallback="rightButtonCallback"></my-header>-->
        <div class="pec-list-item pec-display-block">
          <p class="LBP-p1">本产品由平安银行提供</p>
          <p class="LBP-p2" v-text="obj.aipFund.lists.interestRate"></p>
          <p class="LBP-p1">-到期年利率-</p>
          <div class="LBP-desc">
            <div>
              <p class="LBP-p1">起存金额</p>
              <p v-text="obj.aipFund.lists.depositAmtMin/10000+'万元'"></p>
            </div>
            <div>
              <p class="LBP-p1">存期</p>
              <p v-text="obj.aipFund.lists.saveDeadline"></p>
            </div>
            <div>
              <p class="LBP-p1">付息方式</p>
              <p v-text="obj.aipFund.lists.frequency === '1' ? '到期付息' : '定期付息'"></p>
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
          <vue-charts :options="polar" auto-resize
                      style="margin:0 auto;padding:.2rem 0;width: 100%;height:5rem"></vue-charts>
          <p class="LBP-p1 pec-margin-top10">说明：采用T+1到账支取方式，资金将于下一个交易日到账</p>
        </div>

        <div v-if="isChartTwo" class="LBP-Trend2">
          <!--<p class="LBP-p1 pec-text-left">历史支取利率%</p>-->
          <vue-charts :options="polar2" auto-resize
                      style="margin:0 auto;padding:.2rem 0;width: 100%;height:5rem"></vue-charts>
          <p class="LBP-p1 pec-margin-top10">说明：实际支取利率以起存日的执行利率为准</p>
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
            <div class="pec-item-body" v-text="obj.aipFund.lists.ccy">{{obj.ccy}}</div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              存期
            </div>
            <div class="pec-item-body" v-text="obj.aipFund.lists.saveDeadline"></div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              起存金额
            </div>
            <div class="pec-item-body" v-text="obj.aipFund.lists.depositAmtMin2+'元'"></div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              到期年利率
            </div>
            <div class="pec-item-body" v-text="obj.aipFund.lists.interestRate"></div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              付息方式
            </div>
            <div class="pec-item-body" v-text="obj.aipFund.lists.frequency === '1' ? '到期付息' : '定期付息'"></div>
          </div>
          <div class="pec-list-item">
            <div class="pec-item-head">
              能否提前支取
            </div>
            <div class="pec-item-body" v-text="obj.aipFund.lists.preDrawFlag === '0' ? '否' : '是' ">

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
          <div class="pec-list-item" @click="goToProblemsOne">
            <div class="pec-item-body">
              <p class="pec-color-63666B">1、什么是“T+1到账支取”，为什么收益这么高，是否有风险？</p>
            </div>
            <div class="pec-item-foot">
              <i class="icon-arrow"></i>
            </div>
          </div>
          <div class="pec-list-item" @click="goToProblemsTwo">
            <div class="pec-item-body">
              <p class="pec-color-63666B">2、产品有什么特点？</p>
            </div>
            <div class="pec-item-foot">
              <i class="icon-arrow"></i>
            </div>
          </div>
          <div class="pec-list-item" @click="goToProblemsThree">
            <div class="pec-item-body">
              <p class="pec-color-63666B">3、 提前支取时收益如何计算？</p>
            </div>
            <div class="pec-item-foot">
              <i class="icon-arrow"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="pec-btn-zone pec-fiexd-btn">
        <button @click="forward" size="big" class="pec-primary-btn">立即存入</button>
      </div>
    </section>
  </div>
</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
import * as ald from 'utils/ald'
import Hd from 'components/Common_Header.vue'
import { MessageBox } from 'mint-ui'
import bow from 'bow'
import * as fit from '@/filters/deposit'
import {share} from 'utils/share'
import depositDetail from '@/api'
export default {
  data: function () {
    var htmlFontSize = +document.getElementsByTagName('html')[0].style.fontSize.replace('px', '')
    return {
      title: '定活通',
      rightButtonText: '分享',
      Id: 'J-btn-share-open',
      iShow: true,
      iSue: true,
      history: {},
      options: {
        title: '定活通(增强型)',
        showIcon: false,
        rightButtonText: '分享',
        isSetBack: true,
        setSelfShow: true
      },
      isChart: true,
      isChartTwo: false,
      iSChange: false,
      // 产品规则
      classObject: {
        'icon-arrow': true,
        'curr': true
      },
      // 常见问题
      classObjectTwo: {
        'icon-arrow': true,
        'curr': true
      },
      polar: {
        title: {
          show: true,
          text: '历史支取利率',
          left: 'center',
          textStyle: {
            color: '#6C7684',
            fontSize: 0.15 * htmlFontSize,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          textStyle: {
            fontSize: 0.15 * htmlFontSize
          }
        },
        grid: {
          bottom: 0.8 * htmlFontSize
        },
        color: ['#4175D5', '#F37938'],
        legend: {
          itemGap: 50,
          top: 'bottom',
          padding: [20, 0, 0, 0],
          textStyle: {
            color: '#6C7684',
            fontSize: 0.26 * htmlFontSize,
            fontWeight: 'normal'
          },
          data: [{
            name: '90天<存期<180天',
            icon: 'roundRect',
            textStyle: {
              color: '#4175D5'
            }
          }, {
            name: '存期≥180天',
            icon: 'roundRect',
            textStyle: {
              color: '#F37938'
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
          data: [fit.getCountDays(1), fit.getCountDays(2), fit.getCountDays(3), fit.getCountDays(4)],
          axisLabel: {
            textStyle: {
              fontSize: 0.15 * htmlFontSize
            }
          }
        },
        yAxis: {
          type: 'value',
          name: '支取利率（%）',
          textStyle: {
            fontSize: 0.18 * htmlFontSize
          },
          axisLabel: {
            textStyle: {
              fontSize: 0.18 * htmlFontSize
            }
          },
          nameTextStyle: {
            fontSize: 0.18 * htmlFontSize
          }
        },
        series: [
          {
            name: '90天<存期<180天',
            type: 'line',
            smooth: true,
            data: [],
            itemStyle: {
              normal: {
                areaStyle: {color: 'rgba(0, 255, 255,0.1)'},
                lineStyle: {
                  color: '#4175D5'
                }
              }
            }
          },
          {
            name: '存期≥180天',
            type: 'line',
            smooth: true,
            data: [],
            itemStyle: {
              normal: {
                areaStyle: {color: 'rgba(0, 255, 255,0.1)'},
                lineStyle: {
                  color: '#F37938'
                }
              }
            }
          }]
      },
      polar2: {
        color: ['#3398DB'],
        tooltip: {
          show: false,
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            name: '持有时间',
            nameTextStyle: {
              fontSize: 0.18 * htmlFontSize
            },
            data: ['7天', '3个月', '6个月', '1年', '2年', '3年'],
            axisLabel: {
              textStyle: {
                fontSize: 0.18 * htmlFontSize
              }
            },
            axisTick: {}
          }
        ],
        yAxis: [{
          type: 'value',
          name: '支取利率（%）',
          textStyle: {
            fontSize: 0.18 * htmlFontSize
          },
          axisLabel: {
            textStyle: {
              fontSize: 0.18 * htmlFontSize
            }
          },
          nameTextStyle: {
            fontSize: 0.18 * htmlFontSize
          }
        }],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '100%',
            data: []
          }
        ]
      },
      headerOptions: {
        title: '定活宝-定活通', // 标题(*)
        showIcon: true, //  是否显示右边的icon
        isSetBack: true //  是否设置了返回函函数如果没执行默认返回，如果有设置，执行设置返回
      }
    }
  },
  components: {
    Hd
  },
  computed: {
    ...mapState([
      'depositDetail'
    ]),
    obj: function () {
      return this.depositDetail
    }
  },
  created: function () {
    let me = this
    share()
    // TODO： 请求数据回来
    me.getAipRecommend()
    depositDetail.getCreateOrder({
      url: 'queryDrawHistory',
      qs: {
        businessType: '01',
        ccy: 'RMB',
        productType: '1',
        beginDate: '20140301',
        endDate: '20290301'
      }
    }, function (res) {
      let lt = res.rateInfoArray
      let depTermOne = []
      let depTermTwo = []
      for (var i = 0; i < lt.length; i++) {
        if (lt[i].depTerm === '180D') {
          depTermTwo.push(lt[i])
        } else if (lt[i].depTerm === '0D') {
          depTermOne.push(lt[i])
        }
      }
      for (var n = 1; n < 5; n++) {
        me.commRate(depTermOne, n, 0)
        me.commRate(depTermTwo, n, 1)
      }
    })
    depositDetail.queryDrawHistory({
      url: 'queryDrawHistory',
      qs: {
        businessType: '00',
        ccy: 'RMB',
        productType: '1',
        beginDate: '20140301',
        endDate: '20290301'
      }
    }, function (res) {
      let lt = res.rateInfoArray
      let depTerm = []
      for (var i = 0; i < lt.length; i++) {
        if (lt[i].depTerm === '7D') {
          if (depTerm.indexOf(Number(lt[i].intRate)) < 0) depTerm.push(Number(lt[i].intRate))
        } else if (lt[i].depTerm === '3M') {
          if (depTerm.indexOf(Number(lt[i].intRate)) < 0) depTerm.push(Number(lt[i].intRate))
        } else if (lt[i].depTerm === '6M') {
          if (depTerm.indexOf(Number(lt[i].intRate)) < 0) depTerm.push(Number(lt[i].intRate))
        } else if (lt[i].depTerm === '1Y') {
          if (depTerm.indexOf(Number(lt[i].intRate)) < 0) depTerm.push(Number(lt[i].intRate))
        } else if (lt[i].depTerm === '2Y') {
          if (depTerm.indexOf(Number(lt[i].intRate)) < 0) depTerm.push(Number(lt[i].intRate))
        } else if (lt[i].depTerm === '3Y') {
          if (depTerm.indexOf(Number(lt[i].intRate)) < 0) depTerm.push(Number(lt[i].intRate))
        }
      }
      me.polar2.series[0].data = depTerm.sort()
    })
  },
  methods: {
    ...mapActions([
      'getAipRecommend',
      'getCreateOrder',
      'queryDrawHistory'
    ]),
    goToProblemsOne: function () {
      ald.nav.forward({url: 'depositCommonProblemsOne'})
    },
    commRate: function (depTerm, n, v) {
      let empty = []
      for (var j = 0; j < depTerm.length; j++) {
        var timestampDay = fit.timestampDay(n)
        var timestamp = fit.time(depTerm[j].effectDate)
        if (timestampDay - timestamp >= 0) {
          empty.push(depTerm[j].intRate)
        }
      }
      for (var i = 0; i < empty.length; i++) {
        this.polar.series[v].data.push(Number(empty.sort()[ empty.length - 1 ]))
      }
    },
    goToProblemsTwo: function () {
      ald.nav.forward({url: 'depositCommonProblemsTwo'})
    },
    goToProblemsThree: function () {
      ald.nav.forward({url: 'depositCommonProblemsThree'})
    },
    toShare: function () {
      share()
    },
    forward: function () {
      localStorage.setItem('interestRate', this.depositDetail.aipFund.lists.interestRate)
      depositDetail.dhtQueryCardList({
        url: 'dhtQueryCardList',
        xhrFields: { withCredentials: true },
        env: 'stg3',
        qs: {}
      }, function (res) {
        if (res.length > 0) {
          location.href = './deposit_buy.html'
        } else {
          MessageBox.confirm({
            title: '温馨提示',
            message: '您当前没有可用银行账号，无法存入定活宝-定活通。请先开通互联网账户',
            leftText: '前往开通',
            rightText: '取消',
            leftAction () {
              bow.navigator.forward({
                title: '定活宝-定活通',
                showHeader: true,
                url: 'https://bank-static-stg.pingan.com.cn/brac-ia/universal_h5/pages/openAccount/entrance.html?channel=XXX&source=XXX&outerSource=XXX&um=XXX&umType=X&showTitle=X&discontinueUrl=X&navigatingButtonName=X&navigatingUrl=X',
                tpl: 'webview'
              })
            },
            rightAction () {}
          })
        }
      })
    },
    myDeposit: function () {
      localStorage.setItem('car_id', '123')
      depositDetail.dhtQueryCardList({
        url: 'dhtQueryCardList',
        env: 'stg3',
        qs: {}
      }, function (res) {
        localStorage.setItem('car_id', '123')
        location.href = './mylivedead.html'
      })
    },
    curr: function () {
      if (this.iShow === true) {
        this.iShow = false
        this.classObject.curr = false
      } else {
        this.iShow = true
        this.classObject.curr = true
      }
    },
    currTwo: function () {
      if (this.iSue === true) {
        this.iSue = false
        this.classObjectTwo.curr = false
      } else {
        this.iSue = true
        this.classObjectTwo.curr = true
      }
    },
    showChart: function () {
      this.isChart = true
      this.isChartTwo = false
    },
    showChartTwo: function () {
      this.isChart = false
      this.isChartTwo = true
    },
    rightClick: function () {},
    leftButtonCallback: function () {
      location.href = 'http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/stg2/enter/index.html'
    }
  }
}
</script>
