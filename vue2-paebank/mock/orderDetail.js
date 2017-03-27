module.exports = {
  name: "test",
  env: "default",
  response: function (req, res) {
    res.json({
      "data": {
        "bizSeqNo": "8078831703141028786702",
        "businessType": "01",
        "consumerSeqNo": "6488621703141028786701",
        "createdDate": "2028-01-08 00:13:34",
        "currency": "RMB",
        "depositAmtMin": "10000",
        "depositNo": "00001",
        "drawDetail": {
          "orders": [{
            "bizSeqNo": "8078831703141028786702",
            "businessType": "03",
            "cardType": "6230582000070450807",
            "consumerSeqNo": "6488621703141028786701",
            "createdDate": "2028-01-08 00:13:34",
            "currency": "RMB",
            "depositNo": "00001",
            "expiryDate": "20310831",
            "orderStatus": "02",
            "orderTime": "2028-01-08 00:13:58",
            "orderType": "02",
            "payStatus": "00",
            "payTime": "1830874438000",
            "payeeAcctNo": "6230582000070450807",
            "saveDeadLine": "3Y",
            "subTradeOrderNo": "20170314091826100000000",
            "tradeOrderNo": "2017031400020500000000007720",
            "tranStatus": "05",
            "transAmt": "30000.09",
            "updatedDate": "2028-01-08 00:13:58"
          },{
            "bizSeqNo": "8078831703141028786702",
            "businessType": "01",
            "cardType": "6230582000070450807",
            "consumerSeqNo": "6488621703141028786701",
            "createdDate": "2028-01-08 00:13:34",
            "currency": "RMB",
            "depositNo": "00001",
            "expiryDate": "20310831",
            "orderStatus": "02",
            "orderTime": "2028-01-08 00:13:58",
            "orderType": "02",
            "payStatus": "00",
            "payTime": "1830874438000",
            "payeeAcctNo": "6230582000070450807",
            "saveDeadLine": "3Y",
            "subTradeOrderNo": "20170314091826100000000",
            "tradeOrderNo": "2017031400020500000000007720",
            "tranStatus": "02",
            "transAmt": "30000.09",
            "updatedDate": "2028-01-08 00:13:58"
          }], "pageIndex": 1, "pageSize": 5, "totalNum": 1
        },
        "expiryDate": "20310831",
        "orderStatus": "02",
        "orderTime": "2028-01-08 00:13:58",
        "orderType": "02",
        "payStatus": "00",
        "payTime": "1830874438000",
        "payeeAcctNo": "6230582000070450807",
        "rateInfoList": [{
          "rateInfo": {"drawRate": "2.15", "interest": "430.00129"},
          "type": "0"
        }, {"rateInfo": {"drawRate": "3.5", "interest": "696.17"}, "type": "1"}, {
          "rateInfo": {
            "drawRate": "3.575",
            "interest": "3217.51"
          }, "type": "2"
        }],
        "saveDeadLine": "3Y",
        "subTradeOrderNo": "20170314091826100000000",
        "tradeOrderNo": "2017031400020500000000007720",
        "tranStatus": "02",
        "transAmt": "30000.09",
        "updatedDate": "2028-01-08 00:13:58"
      }, "responseCode": "000000", "responseMsg": "成功"
    });
  }
};
