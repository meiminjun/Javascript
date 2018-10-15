var Shop = require('./lib/shop.js')
var Store = require('./lib/store.js')
var date = require('./lib/date.js')
var money = require('./lib/money.js')
var untils = require('./lib/untils.js')

console.log(date.getSystemTime('yyyy-MM-dd'))

module.exports = {
    date: date,
    money: money,
    shop: Shop,
    store: Store,
    untils: untils
}
