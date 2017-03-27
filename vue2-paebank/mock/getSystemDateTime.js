module.exports = {
  name: '获取服务器时间',
  env: 'default',
  response: function (req, res) {
    res.json({"code": "000000", "data": {"current_date_time": 1490007705034}, "msg": "success"})
  }
}
