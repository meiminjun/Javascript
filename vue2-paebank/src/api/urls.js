// const hostname = (function() {
//     return {
//         static: ENV == 'prd'
//             ? 'https://bank-static.pingan.com.cn'
//             : ENV == 'dev'
//                 ? ""
//                 : 'https://bank-static-stg.pingan.com.cn',
//         // paebank: ENV == 'prd'
//         //     ? 'https://bank.pingan.com.cn/smp'
//         //     : 'https://rmb-stg.pingan.com.cn/',
//         news: ENV == 'prd'
//             ? 'https://b.pingan.com'
//             : 'http://stg5.pingan.com.cn:60880',
//         rsb: ENV == 'prd'
//             ? 'https://rsb.pingan.com.cn'
//             : 'https://rsb-stg.pingan.com.cn',
//         rmb: ENV == 'prd'
//             ? 'https://rmb.pingan.com.cn'
//             : 'https://rmb-stg.pingan.com.cn',
//         upload: ENV == 'prd'
//             ? 'https://bankupload.pingan.com.cn'
//             : 'https://ibankibp_uploadu1.pingan.com.cn',
//         ruc: ENV == 'prd'
//             ? ''
//             : 'http://ruc.sdb.com.cn',
//         ibp: ENV == 'prd'
//         ? ''
//         : 'https://ibp-uat5.pingan.com.cn/ibp',
//     };
// })();
const ENV = 'stg';
const hostname = {
    dev:{
        paebank:'https://bank.pingan.com.cn',
        rmb:'https://rmb-stg.pingan.com.cn',
        news:'',
        static:''
    },
    stg:{
        paebank:'https://ibp-uat5.pingan.com.cn',
        rmb:'https://rmb-stg.pingan.com.cn',
        news:'http://stg5.pingan.com.cn:60880',
        static:'http://bank-static-stg.pingan.com.cn:8480/aum_dhlc/pages/stg1/deposit/mobile/'
    },
    prd:{
        paebank:'https://bank.pingan.com.cn',
        rmb:'https://rmb.pingan.com.cn',
        news:'https://b.pingan.com',
        static:'https://bank-static.pingan.com.cn',
    }
}

export default {
    //定活通
    orderDetail : hostname["dev"].rmb + (ENV == 'stg' ? '/bron/ibank/cust/bron-ibank-pd-uat5/dhtCommon/queryOrderDetail.do?' : 'orderDetail.json'),
    records : hostname["dev"].rmb + (ENV == 'stg' ? '/bron/ibank/cust/dhtCommon/queryDrawDetail.do' : 'records.json'),
    withdrawDeposit : hostname["dev"].rmb + (ENV == 'stg' ? '/bron/ibank/cust/bron-ibank-pd-uat5/dhtCommon/preDraw.do?' : 'withdraw.json'),
    withdraw : hostname["dev"].rmb + (ENV == 'stg' ? '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/orderDetail.do' : 'withdraw.json'),
    withdrawSubmit : hostname["dev"].rmb + (ENV == 'stg' ? '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/orderDetail.do' : 'withdrawSubmit.json'),
    withdrawInterest: hostname["dev"].rmb + (ENV == 'stg' ? '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/orderDetail.do' : 'withdrawInterest.json'),
  getPaySearialNo :'https://rmb-stg2.pingan.com.cn:6443/bron/ibank/cust/bron-ibank-pd/deposit/checkLogin/getPaySearialNo.do',

  //我的定活通
    mylivedead: hostname["dev"].rmb + (ENV == 'prd' ? '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/mylivedead.do' : 'mylivedead.json'),
    //收银台获取银行卡列表
    mylivedead_card: hostname["dev"].rmb + (ENV == 'prd' ? '/brop/tpp/cust/brop_tpp_casher_intf.getPayList' : 'mylivedead_card.json'),

    queryFixedCurrentLinkList : hostname["stg"].rmb + (ENV == 'stg' ? '/bron/ibank/cust/bron-ibank-pd-uat5/superDht/queryFixedCurrentLinkList.do' : 'qryEbankSysTime.json'),
    queryDrawHistory : hostname["stg"].rmb + '/bron/ibank/cust/bron-ibank-pd-uat5/dhtCommon/queryDrawHistory.do',

    createOrder : 'https://rmb-stg2.pingan.com.cn:6443/bron/ibank/cust/bron-ibank-pd/deposit/checkLogin/createOrder.do',
    queryOrderStatus : 'https://rmb-stg2.pingan.com.cn:6443/bron/ibank/cust/bron-ibank-pd/dhtCommon/checkLogin/queryOrderStatus.do',
    //理财
    qryRecPrdListInfo : hostname[ENV].rmb + (ENV == 'prd' ? '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/queryArea.do' : '/bron/ibank/cust/bron-ibank/fund/bootpage/queryArea.do'),
    //理财定投
    queryArea : hostname[ENV].rmb + (ENV == 'prd' ? '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/queryArea.do' : '/bron/ibank/cust/bron-ibank/fund/bootpage/queryArea.do'),
    //搜索
    // qryFundPrdListInfo: hostname[ENV].ibp+'/outlogin/toaMobile/iphone/product/qryFundPrdListInfo.do',
    //基金搜索
    queryFund: hostname[ENV].rmb + (ENV == 'prd' ? '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/queryFund.do' : '/bron/ibank/cust/bron-ibank/fund/bootpage/queryFund.do'),
    //资讯
    homeNews : hostname[ENV].news + (ENV == 'prd' ? '/zixun/jsondata/financialInfo.json' : '/pacms/c3/yinhang/weixin/financialInfo.json'),
    //更多资讯
    news_more : hostname[ENV].news + (ENV == 'prd' ? '/zixun/financial/financialList.shtml?type=cl&app=kd' : '/pacms/c3/yinhang/weixin/financialNews/financialList.shtml?type=cl&app=kd'),
    // 现金宝详情
    queryCashInfo:hostname[ENV].rmb + (ENV == 'prd' ? '/bron/ibank/cust/bron-ibank-pd/cash/queryCashInfo.do' : 'bron/ibank/cust/bron-ibank/cash/queryCashInfo.do'),
    // 现金宝走势图
    queryCashInfo:hostname[ENV].rmb + (ENV == 'prd' ? '/bron/ibank/cust/bron-ibank-pd/cash/queryCashRate.do' : 'bron/ibank/cust/bron-ibank/cash/queryCashRate.do'),

    //我的收益
    queryMyInCome:hostname[ENV].rmb + (ENV == 'prd' ? '/bron/ibank/cust/bron-ibank-pd/cash/checkLogin/queryMyInCome.do' : '/bron/ibank/cust/bron-ibank/cash/checkLogin/queryMyInCome.do'),
    //--------------------前端跳转口袋2.0App地址---------------
    //活期理财 - 更多
    // current_more: '/newFinancialProducts/index.html#saveFinancial/save/toSave',
    current_more: '/newFinancialProducts/index.html#saveFinancial/save/toSave',
    //定期理财 - 更多
    fixed_more: hostname[ENV].static + '/omm/mobile/fund_more.html',
    // fixed_more: '/newFinancialProducts/index.html#saveFinancial/save/toReular',
    //定期理财 - 详情
    fixed_detail: '/newFundMarket/index.html#newFundMarket/fundDetail/index',
    //精选基金 - 更多
    fund_more: '/newFundMarket/index.html#/newFundMarket/newFundMarket/toFundsList',
    //黄金更多 - 更多
    gold_more: '/goldAccount/index.html#goldAccount/myGoldAccount/index',
    //黄金帐户
    gold_icon: '/goldAccount/index.html#goldAccount/myGoldAccount/index',
    //资产管理
    info_icon: '/infoManage/index.html#infoManage/index/index',
    //商品交易
    commodity_icon: '/commodityExchange/index.html#commodityExchange/index/index',
    //基金排行
    //fund_rank_icon: '/newFundMarket/index.html#/newFundMarket/newFundMarket/toFundsList',
    // fund_rank_icon:hostname[ENV].static + '/omm/mobile/fund_ranking.html',
    //资管基金详情
    fund_info_detail: '/infoManage/index.html#infoManage/index/infoDetail/',
    //普通理财详情
    finance_detail: '/financialProducts/index.html#financialProducts/proIndex/toDetail/',
    //抢购理财详情
    finance_hot_detail: '/financialProducts/index.html#financialProducts/proIndex/purchaseDetail/',
    //平安盈
    pa_profit_detail: '/pinganyingOptimize/index.html#pinganyingOptimize/proIndex/noLoginIndex',
    //每日盈
    daily_profit_detail: '/dailyProfit/index.html#dailyProfit/index/index',
    //公募基金详情
    fund_public_detail: '/newFundMarket/index.html#newFundMarket/fundDetail/index/',
    //我的基金
    fund_my: '/newFundMarket/index.html#newFundMarket/newFundMarket/toMyFundList',
    //主题基金
    fund_theme: '/newFundMarket/index.html#newFundMarket/newFundMarket/toThemeFund',
    //定投
    fixed_aip: '/newFundMarket/index.html#newFundMarket/fundDetail/index/',
    //我的关注
    fund_my_collect:'/newFundMarket/index.html#newFundMarket/newFundMarket/collect',


    //-------------------前端跳转H5地址
    //精选基金
    // fund_hot_icon: hostname[ENV].static + '/pobing-v2/products/jxjj/list.html?visitChannel=wytzlc',
    // fund_hot_icon: hostname[ENV].static + '/omm/mobile/fund_chosen.html',
        fund_hot_icon: hostname[ENV].static + '/omm/mobile/mylivedead.html',
    //精选基金 - 详情
    fund_hot_detail: hostname[ENV].static + '/pobing-v2/products/jxjj/details.html',
    // h5登录页
    onelogin: hostname[ENV].static + '/pobing/index.html#/onelogin',
    //首发基金
    fund_first_icon: hostname[ENV].static + '/pobing-v2/products/ipojj/fundIpoList.html',
    //首发基金 - 详情
    fund_first_detail: hostname[ENV].static + '/pobing-v2/products/ipojj/fundIpoDetails.html',
    //定投
    fund_fixed_icon: hostname[ENV].static + '/omm/mobile/fund_aip.html',
    //基金
    fund_index_icon: hostname[ENV].static + '/omm/mobile/fund_index.html',
    fund_rank_icon: hostname[ENV].static + '/omm/mobile/exchange_detail.html',
    orderDetailPage : hostname[ENV].static + 'order_detail.html',
    exchangeDetail: hostname[ENV].static + 'exchange_detail.html',
    withdrawPage: hostname[ENV].static + '/withdraw.html',
    withdrawResult :  hostname[ENV].static + 'withdraw_result.html',
    mylivedead:hostname[ENV].static + 'mylivedead.html',
    //定活通存入页
    deposit_buy: hostname[ENV].static + 'deposit_buy.html',
    //定活通存入成功页
    deposit_success: hostname[ENV].rmb + 'deposit_success.html',
    //搜索
    search: hostname[ENV].static + '/omm/mobile/search_details.html',
    //保险菜单
    insurance_icon: 'https://bank.pingan.com/app/baoxian-h5.html',
    //我的资产
    my_assets_icon: ENV == 'prd' ? hostname[ENV].paebank+'/static/financial/account10/assetList.html' : hostname[ENV].paebank+'/ibp/PAEBank257/FinancialAccount/assetList.html',
    //我的订单
    my_orders_icon: ENV == 'prd' ? hostname[ENV].paebank+'/static/financial/account10/assetListIndent.html' : hostname[ENV].paebank+'/ibp/PAEBank257/FinancialAccount/assetListIndent.html',
    //现金宝详情
    cash_detail: hostname[ENV].static + '/omm/mobile/cash_detail.html',
    //cash_detail: hostname[ENV].static + '/pobing/index.html?accessChannel=wy01#/cash/details',
    //现金宝转入
    cash_buy: hostname[ENV].static + '/omm/mobile/cash_buy.html',

    //收银台获取银行卡列表
    pay_cards: hostname[ENV].rmb + '/brop/tpp/cust/brop_tpp_casher_intf.getPayList',
    //收银台充值
    pay_recharge: hostname[ENV].rmb + '/brop/tpp/cust/brop_tpp_casher_intf.recharge',
    //收银台二类卡列表
    pay_bindedCards: hostname[ENV].rmb + '/brop/tpp/cust/brop_tpp_casher_intf.qryUserBindedCardsOfNetwork',
    //收银台支付
    pay_orderPay: hostname[ENV].rmb + '/brop/tpp/cust/brop_tpp_casher_intf.orderPay',
    //验密
    pay_vailPWD: hostname[ENV].rmb + '/brop/tpp/cust/brop_tpp_casher_intf.chkTradePwd',
    //获取时间戳
    pay_timeMap: hostname[ENV].rmb + '/brop/tpp/cust/brop_tpp_casher_intf.getServerTimestamp',
    //绑卡
    pay_bindCard: hostname[ENV].rmb + '/brop/tpp/cust/brop_tpp_casher_intf.addNewCardStep1',
    //绑卡完的支付
    pay_bindCardPay: hostname[ENV].rmb + '/brop/tpp/cust/brop_tpp_casher_intf.addNewCardEnd',
}

function nativeOrWeb() {
    let ua = window.navigator.userAgent;
    return ua.indexOf("AladdinHybrid") > 0 ? "" : hostname[ENV].static;
}
