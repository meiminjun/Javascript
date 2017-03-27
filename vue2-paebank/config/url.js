
const url = {
    // orderDetail:"/bron/ibank/cust/bron-ibank-pd/fund/bootpage/orderDetail.do",
  records: '/bron/ibank/cust/bron-ibank-pd/dhtCommon/queryDrawDetail.do', // 交易明细 stg2
  queryFixedCurrentLinkList: '/bron/ibank/cust/bron-ibank-pd-uat5/superDht/queryFixedCurrentLinkList.do',
  orderDetail : '/bron/ibank/cust/bron-ibank-pd-uat5/dhtCommon/queryOrderDetail.do',//订单详情接口
  withdrawDeposit: '/bron/ibank/cust/bron-ibank-pd-uat5/dhtCommon/preDraw.do',//预支取接口
  canDraw :'/bron/ibank/cust/bron-ibank-pd-uat5/dhtCommon/canDraw.do',//t+1能否支取接口
  queryDraw:'/bron/ibank/cust/bron-ibank-pd-uat5/dhtCommon/queryDraw.do',//查询利息利率接口
  withdraw: '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/orderDetail.do',
  withdrawSubmit: '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/orderDetail.do',
  withdrawInterest: '/bron/ibank/cust/bron-ibank-pd/fund/bootpage/orderDetail.do',
  queryDHBHold: '/bron/ibank/cust/bron-ibank-pd/superDht/checkLogin/queryDHBHold.do', // 我的定活通持仓

  // stg2
  getPaySearialNo: '/bron/ibank/cust/bron-ibank-pd/deposit/checkLogin/getPaySearialNo.do', // 撤销创建订单接口
  // 定活通查询到期利息接口
  queryIntRate: '/bron/ibank/cust/bron-ibank-pd/dhtCommon/queryIntRate.do',
  // 获取服务器时间接口
  getSystemDateTime: '/bron/ibank/cust/bron-ibank-pd/fund/getSystemDateTime.do',
  // 卡列表接口
  dhtQueryCardList: '/bron/ibank/cust/bron-ibank-pd/dhtCommon/checkLogin/dhtQueryCardList.do',
  // 创建订单接口
  createOrder: '/bron/ibank/cust/bron-ibank-pd/deposit/checkLogin/createOrder.do',
  // 查询子订单接口
  queryOrderStatus: '/bron/ibank/cust/bron-ibank-pd/dhtCommon/checkLogin/queryOrderStatus.do',
  //查询T+1 T+0 历史支取利率接口
  queryDrawHistory: '/bron/ibank/cust/bron-ibank-pd-uat5/dhtCommon/queryDrawHistory.do'
}

module.exports = url
