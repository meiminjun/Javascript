import * as types from '../types';
import { http } from '../../util/ald';
import api from '../../api/urls';


const funcNavs = [
    {
        native: false,
        title: '排行',
        classes: 'icon fund-icon-sort',
        eventId: '0207001-理财-功能区-基金-排行',
        url: api.fund_rank_icon
    },
    {
        native: false,
        title: '热销基金',
        classes: 'icon fund-icon-hot-fund',
        eventId: '0207002-理财-功能区-基金-热销基金',
        url: api.fund_hot_icon
    },
    // {
    //     title: '首发基金',
    //     classes: 'icon fund-f-jj',
    //     url: api.fund_first_icon'
    // },
    {
        title: '我的关注',
        native: true,
        classes: 'icon fund-icon-my-focus',
        eventId: '0207003-理财-功能区-基金-我的关注',
        url: api.fund_my_collect
    },
    {
        native: false,
        title: '定投',
        classes: 'icon fund-icon-fixed',
        eventId: '0207004-理财-功能区-基金-定投',
        url: api.fund_fixed_icon
    },
    {
        native: true,
        title: '我的基金',
        classes: 'icon fund-icon-my-fund',
        eventId: '0207005-理财-功能区-基金-我的基金',
        url: api.fund_my

    }
    // , {
    //     title: '保险',
    //     classes: 'icon fund-f-bx',
    //     url: ''
    // }
    // , {
    //     title: '资产管理',
    //     classes: 'icon fund-f-zg',
    //     url: ''
    // }
    // , {
    //     title: '商品交易所',
    //     classes: 'icon fund-f-sp',
    //     url: ''
    // }
    // , {
    //     title: '预约管理',
    //     classes: 'icon fund-f-yy',
    //     url: ''
    // }
]
const state = {
    toast: {},
    funcNavs: funcNavs,
    // 优选
    youxuan: {
        hasMore: true,
        moreUrl: api.fund_hot_icon,
        eventId: '0207007-理财-功能区-基金-热销基金-更多',
        lists: []
    },
    // 首发
    shoufa: {
        hasMore: false,
        moreUrl: api.fund_first_icon,
        lists: []
    },
    // 主题
    zhuti: {
        native: true,
        hasMore: false,
        moreUrl: api.fund_theme,
        lists: []
    },
    //定活通
    orderDetail:{
        lists:[]
    },
    records:{
        lists:[]
    },
    withdraw:{
        data:{}
    },
    //我的定活通列表
    myliveDead:{
        lists:[],
    },

    nomyliveDead:false,
    //卡列表
    mycard:{
        lists:[]
    },
    //我的定活通列表数组
    showlist:{

    },
    changecard:"",
    total: "",
    pageNumber:0,
    //0初始化，1加载中，2加载到最后一页
    loading:0,
    loadState:false,
    checkState:"加载更多",
    nocard:false
};

// getters
const getters = {
    // 暂时不使用此项，这里是过滤过期的首发基金的
    // fundOnDate: state => {
    //     return state.shoufa.lists.filter(fund => {
    //         let funcEndDate = fund.saleEndDate;
    //         return new Date(funcEndDate.substring(0, 4), funcEndDate.substring(4, 6) - 1, funcEndDate.substring(6, 8)) > new Date();
    //     })
    // }
    // funcNavs: state => state.funcNavs
}

// actions
const actions = {
    getMyliveDead({ commit, state }, options){
        return new Promise((resolve,reject) => {
            http.request({
                method: 'GET',
                url: "https://rmb-stg2.pingan.com.cn:6443/bron/ibank/cust/bron-ibank-pd/superDht/checkLogin/queryDHBHold.do",
                qs: {
                  cardNo:options.cardNo,
                  currentPgs:options.currentPgs,
                  pageSize:options.pageSize
                }
            }, function (res) {
                if (res && res.responseCode == '000000') {
                    // for(var i=0;i<res.data.datalist.length; i++){
                    //     res.data.datalist[i].lastFourNum = res.data.datalist[i].accNo.substr(-4)
                    // }
                    if (res.data && typeof(res.data) == 'string') {
                        res.data = JSON.parse(res.data);
                    }
                    debugger;
                    if(res.data.holdNum!=0){
                        commit(types["MYLIVE_DEAD"], { show_list: res.data ,currentPgs:options.currentPgs,holdNum:res.data.holdNum});
                        commit(types["MYTOTAL"], {payload: res.data});
                        resolve({showlive:false,cardshow:false,data:res.data,No:options.cardNo});
                    }else {
                        // commit(types["NOMYLIVE_DEAD"],{payload: res.data})
                        resolve({showlive:true,cardshow:true});

                    }
                } else {
                    commit(types.TOAST);
                }
            });
        });
    },
    getMyliveCards({ commit, state }, options){
        return new Promise((resolve,reject) => {
            // console.log(options)
            http.request({
                method: 'GET',
                url: "https://rmb-stg2.pingan.com.cn:6443/bron/ibank/cust/bron-ibank-pd/dhtCommon/checkLogin/dhtQueryCardList.do",
                qs: {
                }
            }, function (res) {
              debugger;
                if (res && res.responseCode == '000000') {
                    if (res.data && typeof(res.data) == 'string') {
                        res.data = JSON.parse(res.data);
                    }
                    if(res.data.length==0){
                        resolve({data:res.data,car_id:true});
                    }else{
                        commit(types["MYCARDS"], { payload: res.data });
                        resolve({data:res.data,fa_id:true}); // 成功回调
                    }
                } else {
                    commit(types.TOAST);
                }
            });
        });
    }

}


// mutations
const mutations = {
    [types.NOCARD](state,{}) {
        state.nocard = true;
    },
    [types.NOMYLIVE_DEAD](state,{payload}) {
        state.nomyliveDead = true;
    },


    [types.TOAST](state, { payload }) {
        state.toast = payload;
    },
    [types.C0012_INV_FUND_HOTSALE_FUND](state, { payload }) {
        // console.log(payload)
        state.youxuan.lists = payload.recommendPrdList;
    },
    [types.ORDER_DETAIL](state, { payload }) {
        // console.log(payload)
        state.orderDetail.lists = payload;
    },
    [types.MYCARDS](state, { payload }) {
        // console.log(payload)
        state.mycard.lists = payload;
    },
    [types.CARDFIRST](state, { payload }) {
        // console.log(payload)
        state.changecard = payload;
    },

    [types.MYTOTAL](state,  payload ) {

        state.showlist = payload.payload;
    },
    [types.MYLIVE_DEAD](state, payload) {
        //state.records.lists = payload.orderRecords;
        if (payload.currentPgs==1) {
            state.myliveDead.lists = payload.show_list.tranListArray[0].acctArray;
        } else{
            state.myliveDead.lists = state.myliveDead.lists.concat(payload.show_list.datalist);
        }
    },
    ['DHT_LOADING_STATE'](state){
        state.loading=1;
    },
    ['DHT_CHANGECARDSHOW'](state,payload){
        state.changecard = payload;
    },


    [types.WITHDRAW](state, { payload }) {
        // console.log(payload)
        state.withdraw.data = payload;
    },
    [types.C0012_INV_FUND_IPO_FUND](state, { payload }) {
        state.shoufa.lists = payload.recommendPrdList;
    },
    [types.C0012_INV_FUND_THEME_FUND](state, { payload }) {
        state.zhuti.lists = payload.recommendPrdList;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
