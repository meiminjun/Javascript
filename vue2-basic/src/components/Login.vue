<template>
  <div class="page-login">
    <mt-header title="平安银行">
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
      <mt-button  type="primary" size="large" >登录</mt-button>
    </div>
  </div>
</template>

<script>
  import router from '../router'
  import { Toast,Indicator } from 'mint-ui'
  import md5 from 'md5'
  export default {
    data() {
      return {
        username:'',
        password:''
      }
    },
    created() {
      this.count = this.$store.state.count;
      this.init();
    },
    mounted() {
    },
    methods: {
      init() {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        // 获取数据
        this.getData();
      },
      getData() {
        setTimeout(()=>{
          // 加载关闭
          Indicator.close()
          this.$store.commit("increment");
        },1000)
      },
      login() {
        let obj = {
          name: this.username,
          password: md5(this.password) // md5加密
        }
        this.$http.post('/api/user', obj) // 将信息发送给后端
        .then((res) => { // axios返回的数据都在res.data里
          if(res.data.success){ // 如果成功
            sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
            Toast({
              message: '登录成功！',
              duration: 1000
            });
            this.$router.push('/todolist') // 进入todolist页面，登录成功
          }else{
            Toast({
              message: res.data.info,
              duration: 1000
            });
            // this.$message.error(res.data.info); // 登录失败，显示提示语
            sessionStorage.setItem('demo-token',null); // 将token清空
          }
        }, (err) => {
            Toast({
              message: '请求错误！',
              duration: 1000
            });
            sessionStorage.setItem('demo-token',null); // 将token清空
        })
      }
    }
  }
</script>

<style>
 .page-login .pad-5 {
    padding:'10px'
  }
</style>
