let dataPanel = document.querySelector('#session-data-panel')
let sessionBtn = document.querySelector('#create-session-btn')
if (!window.sessionStorage.getItem('sessionValue')) {
  window.localStorage.setItem('getSession', Date.now())
} else {
  dataPanel.innerHTML = 'Session: ' + window.sessionStorage.getItem('sessionValue')
}
window.addEventListener('storage', function (event) {
  if (!event.newValue) {
    return
  }
  if (event.key === 'getSession') {
    window.localStorage.setItem('storeSessionData', window.sessionStorage.getItem('sessionValue'))
    window.localStorage.removeItem('storeSessionData')
  }
  if (event.key === 'storeSessionData') {
    window.sessionStorage.setItem('sessionValue', event.newValue)
    dataPanel.innerHTML = 'Session: ' + window.sessionStorage.getItem('sessionValue')
    window.localStorage.removeItem('getSession')
  }
  if (event.key === 'updateSession') {
    window.sessionStorage.setItem('sessionValue', event.newValue)
    dataPanel.innerHTML = 'Session: ' + window.sessionStorage.getItem('sessionValue')
    window.localStorage.removeItem('updateSession')
  }
})
sessionBtn.onclick = function () {
  var t = Math.random() * 100
  window.sessionStorage.setItem('sessionValue', t)
  dataPanel.innerHTML = 'Session: ' + t
  window.localStorage.setItem('updateSession', t)
}
