<template>
  <div class="page-login">
    <mt-header :title='title' >
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="/register" slot="right">
        <mt-button>注册</mt-button>
      </router-link>
    </mt-header>
    <mt-field label="手机号" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <div class="pad-5" @click="login">
      <mt-button type="primary" size="large">登录</mt-button>
    </div>
  </div>
</template>

<script>
  import { Indicator, Toast } from 'mint-ui'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    computed: mapState({
      title: 'title'
      // username: state => state.login.username,
      // password: state => state.login.password
    }),
    created () {
      console.log(this.$store)
      // this.title = this.$store.state.title
      // console.log('---------')
      // console.log(this.title)
      this.init()
    },
    mounted () {
    },
    methods: {
      init () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        })
        // 获取数据
        this.getData()
      },
      getData () {
        setTimeout(() => {
          // 加载关闭
          Indicator.close()
          // this.$store.commit('increment')
        }, 1000)
      },
      // updateName (e) {
      //   this.$store.commit('updateusername', e.target.value)
      // },
      // updatePassword (e) {
      //   this.$store.commit('updatepassword', e.target.value)
      // },
      // ...mapMutations({
      //   login:'login'
      // })

      login () {
        var loginData = {
          name: this.username,
          password: this.password
        }
        this.$store.dispatch('login', loginData).then(res => {
          // 如果成功
          sessionStorage.setItem('demo-token', res.data.token) // 用sessionStorage把token存下来
          Toast({
            message: '登录成功！',
            duration: 1000
          })
          this.$router.push('/todolist') // 进入todolist页面，登录成功
        }, err => {
          console.log(err)
          let errorData
          if (err.data) {
            errorData = err.data.info
          }
          Toast({
            message: errorData || '系统错误，请稍后再试',
            duration: 1000
          })
          sessionStorage.setItem('demo-token', null) // 将token清空
        })
      }
    }
  }

</script>

<style>
  .page-login .pad-5 {
    padding: '10px'
  }
</style>
