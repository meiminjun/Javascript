<template>
    <section class="cpnt-ratechart mt20">
        <ul class="ratechart-type-tab">
            <li v-for="item in rateTypes" :class="{active: item.active}" @click="refreshChart" :data-type="item.type"
                data-level="1">
                <p class="ellipsis">{{item.name}}</p>
                <p class="rate-val ellipsis">{{getTabVal(item.type)}}</p>
            </li>
        </ul>
        <div class="ratechart-container" id="ratechart-container"></div>
        <ul class="ratechart-period-tab">
            <li v-for="item, index in periodTypes" class="ellipsis"
                :class="{active: item.active, first: index === 0, last: index === periodTypes.length - 1}"
                @click="refreshChart" :data-type="item.type" data-level="2">{{item.name}}
            </li>
        </ul>
    </section>
</template>
<script>
    import Highcharts from '../assets/lib/highcharts.min'
    import '../assets/lib/highcharts.standalone.min'
    import service from '../api/rate'

    export default {
        data() {
            return {
                highChart: null,
                origList: [],
                lists: {
                    data: [],
                    categories: []
                },
                chartOpts: {
                    chart: {
                        type: 'area',
                        renderTo: 'ratechart-container'
                    },
                    legend: {
                        enabled: false
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: [],
                        tickWidth: 0,
                        lineColor: '#d9d8d8',
                        labels: {
                            style: {
                                fontSize: '.24rem'
                            }
                        }
                    },
                    yAxis: {
                        title: {
                            text: ''
                        },
                        plotLines: [{
                            value: 0,
                            width: 1,
                            color: '#808080'
                        }],
                        labels: {
                            y: 8,
                            style: {
                                fontSize: '.24rem'
                            }
                        }
                    },
                    tooltip: {
                        useHTML: true,
                        shadow: false,
                        headerFormat: '',
                        backgroundColor: 'rgba(0, 0, 0, .8)',
                        borderWidth: 0,
                        borderRadius: 10,
                        formatter: function() {},
                        style: {
                            color: '#fff',
                            fontSize: '.24rem',
                            fontWeight: 'normal'
                        },
                    },
                    series: [{
                        animation: false,
                        fillOpacity: '.2',
                        lineColor: '#f37937',
                        marker: {
                            fillColor: '#f37937',
                            lineColor: '#f37937',
                        },
                        data: [],
                        fillColor: {
                            linearGradient: [0, 0, 0, 300],
                            stops: [
                                [0, 'rgba(253, 232, 221, .8)'],
                                [1, 'rgba(255, 255, 255, .4)']
                            ]
                        }
                    }]
                }
            }
        },
        props: {
            sevenIncomeRate: {
                type: String,
                default: '--'
            },
            incomeUnit: {
                type: String,
                default: '--'
            },
            rateTypes: {
                type: Array,
                default: function () {
                    return [{
                        name: '七日年化收益率（%）',
                        type: 'sevenIncomeRate',
                        level: 1,
                        val: '--',
                        active: true
                    }, {
                        name: '万份收益（元）',
                        type: 'incomeUnit',
                        level: 1,
                        val: '--',
                        active: false
                    }]
                }
            },
            periodTypes: {
                type: Array,
                default: function () {
                    return [{
                        name: '近七日',
                        type: '1',
                        level: 2,
                        active: true

                    }, {
                        name: '近一月',
                        type: '2',
                        level: 2,
                        active: false

                    }, {
                        name: '近三月',
                        type: '3',
                        level: 2,
                        active: false

                    }]
                }
            }
        },

        created() {
            this.getData(true, this.rateTypes[0].type, this.periodTypes[0].type)
        },

        methods: {
            getTabVal(type) {
                console.log(type)
                return this[type] || '--'
            },
            //根据上下两排tab按键值取到图表渲染的数据并渲染
            getData(isQuery, rateType, periodType) {
                let self = this
                if (isQuery) {
                    service.queryCashRate({queryType: periodType}, function (data) {
                        if (data && data.data && data.data.list) {
                            self.origList = data.data.list.reverse()
                            self.lists = self.formatChartData(self.origList, rateType)
                            self.renderCharts(self.lists, rateType)
                        }
                    })
                } else {
                    this.lists = self.formatChartData(self.origList, rateType)
                    this.renderCharts(self.lists, rateType)
                }

            },
            formatChartData(origList, rateType) {
                let dataList = []
                let catList = []

                origList.forEach((item, index) => {
                    dataList.push(+item[rateType])
                    catList.push(this.formatDate(item.issDate))
                })
                return {
                    data: dataList,
                    categories: catList
                }
            },
            formatDate(str) { // 输入：2017-02-28 输出：02-28
                return str.split('-').splice(1).join('-')
            },
            //得到当前tab按键的类型，参数为tab所属类别
            getCurChartType(typeGroupName) {
                return this[typeGroupName].filter((item, index) => {
                    return item.active
                })[0].type
            },
            //渲染图表，参数为图表数据
            renderCharts(lists, rateType) {
                this.chartOpts.xAxis.categories = lists.categories
                this.chartOpts.series[0].data = lists.data
                this.chartOpts.tooltip.formatter = function() {
                    return `<p>${this.y}${rateType == 'sevenIncomeRate' ? '%' : ''}<br><span style="color: #adadad;">${this.x}</span></p>`
                }
                this.highChart = new Highcharts.Chart(this.chartOpts)
            },

            //点击图表tab键
            refreshChart(e) {
                let target = e.currentTarget
                //点击active状态的按键不作任何响应
                if (target.getAttribute('class').indexOf('active') > -1) {
                    return
                }
                let typeLevel = target.getAttribute('data-level')
                let type = target.getAttribute('data-type')
                let typeGroupName
                let rateType
                let periodType
                //是否发送请求更新数据
                let isQuery

                if (typeLevel == 1) {
                    typeGroupName = 'rateTypes'
                    rateType = type
                    periodType = this.getCurChartType('periodTypes')
                    isQuery = false
                } else {
                    typeGroupName = 'periodTypes'
                    rateType = this.getCurChartType('rateTypes')
                    periodType = type
                    isQuery = true
                }
                this[typeGroupName].forEach((item, index) => {
                    if (item.type === type) {
                        item.active = true
                    } else {
                        item.active = false
                    }
                })

                this.getData(isQuery, rateType, periodType)

            }
        }
    }
</script>