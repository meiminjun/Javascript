module.exports = {
  name: '查询子订单',
  env: 'stg3',
  response: function (req, res) {
    res.json({
      'data': {
        'productList': [
          {
            'ccy': 'RMB',
            'depositAmtMin': '1000',
            'drawAmtMax': '0',
            'drawAmtMin': '0',
            'frequency': '1',
            'increaseAmt': '0',
            'minBalance': '1000',
            'prdCode': '47301',
            'prdName': '超级定活通',
            'saleRemark': '超级定活通',
            'saveDeadline': '5Y'
          }
        ]
      },
      'responseCode': '000000',
      'responseMsg': '成功'
    })
  }
}
