//----------------------理财首页----------------//
//活期理财推荐
export const INDEX_CURRENT_RECOMMEND_LIST = 'INDEX_CURRENT_RECOMMEND_LIST';
//定期理财推荐
export const INDEX_FIXED_RECOMMEND_LIST = 'INDEX_FIXED_RECOMMEND_LIST';
//平安优选基金
export const INDEX_FUND_RECOMMEND_LIST = 'INDEX_FUND_RECOMMEND_LIST';
//财富专区
export const INDEX_WEALTH_RECOMMEND_LIST = 'INDEX_WEALTH_RECOMMEND_LIST';
//黄金
export const INDEX_GOLD_RECOMMEND_LIST = 'INDEX_GOLD_RECOMMEND_LIST';
//资讯
export const INDEX_NEWS_RECOMMEND_LIST = 'INDEX_NEWS_RECOMMEND_LIST';
//最近浏览
export const INDEX_RECENTLY_VIEW = 'INDEX_RECENTLY_VIWED';
//读取首页产品缓存数据
export const INDEX_GET_PRODUCTS_CACHE = 'INDEX_GET_PRODUCTS_CACHE';

//---------------------财富专区相关-----------------//
export const WEALTH_LIST = 'WEALTH_LIST';

// 理财产品
// qryRushPurchaseFinanceList
export const RECEIVE_RUSH_PURCHASE_FINANCELIST = 'RECEIVE_RUSH_PURCHASE_FINANCELIST' // C0003_01_03
// qryFinanceProList // 筛选也用
export const RECEIVE_FILTER_FINANCELIST = 'RECEIVE_FILTER_FINANCELIST' // C0003_01_03
// qryNewFinanceProList
export const RECEIVE_NEW_FINANCELIST = 'RECEIVE_NEW_FINANCELIST' // C0003_01_03


// 理财详情 qryFinanceProDetail
export const RECEIVE_FINANCE_DETAIL = 'RECEIVE_FINANCE_DETAIL' // C0003_01_03
// qryFinanceRateList
export const RECEIVE_FINANCE_RATELIST = 'RECEIVE_FINANCE_RATELIST' // C0003_01_03



// 首页店更多，基金列表 qryRecPrdListInfo
export const RECEIVE_FUND_LIST = 'RECEIVE_FUND_LIST' // C0003_02_03

// 基金首页 qryRecPrdListInfo
export const TOAST = 'TOAST' // C0003_02_01
// 优选
export const C0012_INV_FUND_HOTSALE_FUND = 'C0012_INV_FUND_HOTSALE_FUND' // C0003_02_01
// 首发
export const C0012_INV_FUND_IPO_FUND = 'C0012_INV_FUND_IPO_FUND' // C0003_02_02
// 主题
export const C0012_INV_FUND_THEME_FUND = 'C0012_INV_FUND_THEME_FUND' // C0003_02_03

export const ORDER_DETAIL = 'ORDER_DETAIL' // order_detail
export const WITHDRAW = 'WITHDRAW' // withdraw
export const RECORDS = 'RECORDS' // withdraw
export const RADIOCHECK = 'RADIOCHECK'
export const DHT_WITHDRAWNUM = 'DHT_WITHDRAWNUM'
export const DHT_PROTOSHOW = 'DHT_PROTOSHOW'
export const CONHEIGHT = 'CONHEIGHT' //
export const WITHDRAWINTEREST = 'WITHDRAWINTEREST'
export const DHT_LOADING_STATE = 'DHT_LOADING_STATE'
export const CURRENTINTEREST = 'CURRENTINTEREST'
// 基金首页筛选结果：qryFundPrdListInfo
export const RECEIVE_FILTER_FUND_LIST = 'RECEIVE_FILTER_FUND_LIST' //
// fundComList
export const RECEIVE_FUND_COMPANY = 'RECEIVE_FUND_COMPANY' //

// qryFundDetail
export const RECEIVE_FUND_DETAIL = 'RECEIVE_FUND_DETAIL' //
// qryFundYeilds
export const RECEIVE_FUND_YEILDS = 'RECEIVE_FUND_YEILDS' //

//定投列表
export const AIP_FUND_LIST = 'AIP_FUND_LIST' //
//搜索列表
export const SEARCH_FUND_LIST = 'SEARCH_FUND_LIST' //
//精选基金
export const CHOSEN_FUND_LIST = 'CHOSEN_FUND_LIST' //

/*
* 基金排行
* */
export const FUND_RANKING_INITIAL='FUND_RANKING_INITIAL'//首发基金
export const FUND_RANKING_ALL='FUND_RANKING_ALL'//全部
export const FUND_RANKING_SELLING='FUND_RANKING_SELLING'//热销
export const FUND_RANKING_STOCK='FUND_RANKING_STOCK'//股票
export const FUND_RANKING_BLEND='FUND_RANKING_BLEND'//混合型
export const FUND_RANKING_BOND='FUND_RANKING_BOND'//债券型
export const FUND_RANKING_CAPITAL='FUND_RANKING_CAPITAL'//保本型
export const FUND_RANKING_MONEY='FUND_RANKING_MONEY'//货币型
export const FUND_RANKING_ETF='FUND_RANKING_ETF'//指数型
export const FUND_RANKING_QDII='FUND_RANKING_QDII'//QDII型

/*
* 收银台
* */
export const PAY_PREPAYID = 'PAY_PREPAYID'//预付号
export const PAY_SECURITYSIGN ='PAY_SECURITYSIGN'//加密串
export const PAY_CARDS = 'PAY_CARDS'//银行卡列表
export const PAY_RECHARGE ='PAY_RECHARGE'//充值
export const PAY_BINDEDCARDS ='PAY_BINDEDCARDS'//绑定的二类卡
export const PAY_ORDERPAY ='PAY_ORDERPAY'//支付
export const PAY_RESERVE_CARDS ='PAY_RESERVE_CARDS'//重排的银行列表
export const PAY_CHECK_STATE ='PAY_CHECK_STATE'//check状态

export const TARGETHOST = {
    'bank-static': ENV == 'prd'
        ? 'https://bank-static.pingan.com.cn'
        : 'https://bank-static-stg.pingan.com.cn'
}

/*
* 现金宝收益
* */
export const XJB_INCOME = 'XJB_INCOME'//我的收益列表
export const XJB_SHOWLOADING = 'XJB_SHOWLOADING'//loading显示

/*
 * 现金宝详情
 * */
export const CASH_DETAIL = 'CASH_DTAIL'//现金宝详情


/*
 * 定活宝-定活通
 * */
export const DEPOSIT_DETAIL = 'DEPOSIT_DETAIL'//现金宝详情
export const DEPOSIT_BUY = 'DEPOSIT_BUY'//现金宝详情

/*
*现金宝转出
* */
export const CASH_INIT_REDEEM_LIST = 'CASH_INIT_REDEEM_LIST'; //转出初始化
export const CASH_SHOW_BANK_LIST = 'CASH_SHOW_BANK_LIST'; //控制是否显示银行卡列表
export const CASH_GET_CHOSEN_BANK = 'CASH_GET_CHOSEN_BANK'; //选择银行卡



//我的定活通
export const MYLIVE_DEAD = 'MYLIVE_DEAD' // C0003_02_03
export const MYCARDS = 'MYCARDS'//银行卡列表
export const CARDFIRST = 'CARDFIRST'//银行卡列表
export const MYTOTAL = 'MYTOTAL'//银行卡列表
export const NOCARD = 'NOCARD'//银行卡列表
export const NOMYLIVE_DEAD = 'NOMYLIVE_DEAD'//列表没数据


//公共加载
export const COMMON_LOADING = 'COMMON_LOADING';//触发加载效果

