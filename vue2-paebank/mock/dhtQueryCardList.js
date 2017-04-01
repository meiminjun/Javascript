module.exports = {
  name: '获得卡列表',
  env: 'stg3',
  response: function (req, res) {
    res.json({
      "data": [{
        "acconutFlag": "1",
        "accountType": "8101",
        "bankCardAlias": "---",
        "bankCardMask": "6230*****0773",
        "bankCardSign": "e0c16e089852e27368e52e5ac5287f26",
        "bankCode": "0571",
        "bankName": "平安银行",
        "cardType": "1",
        "openCity": "武汉市",
        "openDate": "2028-04-03",
        "orgName": "平安银行武汉分行营业部",
        "parentCode": "WUHAN_branch",
        "sameBankFlag": "1"
      }], "responseCode": "000000", "responseMsg": "成功"
    })
  }
}
