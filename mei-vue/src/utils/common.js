import 'flexible'
const FastClick = require('fastclick')
import 'assets/scss/deposit/style'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
