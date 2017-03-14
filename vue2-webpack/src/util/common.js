import 'flexible'
import * as FastClick from 'fastclick'
import 'babel-polyfill'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}
