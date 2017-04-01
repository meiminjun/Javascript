import Axios from 'axios'
import md5 from 'md5'

import * as types from '../types.js'

const state = {
  name: '',
  password: ''
}

const mutations = {
  [types.UPDATEUSERNAME] (state, message) {
    state.username = message
  },
  [types.UPDATEPASSWORD] (state, message) {
    state.password = message
  },
  [types.LOGIN_SUCESS] (state, rootState) {
    // state.name = obj.name
    // state.password = obj.password
    rootState.isLogin = true
  }
}

const actions = {
  login ({ commit, state, rootState }, loginData) {
    return new Promise((resolve, reject) => {
      console.log('+++++++++++++')
      console.log(rootState)
      let obj = {
        name: loginData.name,
        password: md5(loginData.password) // md5加密
      }
      console.log(`-------登录-------`)
      console.log(this)
      Axios.post('/api/user', obj) // 将信息发送给后端
        .then((res) => { // axios返回的数据都在res.data里
          if (res.data.success) {
            commit(types.LOGIN_SUCESS, rootState)
            resolve(res)
          } else {
            reject(res)
          }
        }, (err) => {
          console.log(err)
          reject(err)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
