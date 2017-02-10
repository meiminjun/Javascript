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
      login(event) {
        if(this.username === 'admin'&&this.password === "admin") {
          router.push('/')
        }else {
          Toast({
            message: '操作失败'
          });
        }
      }
    }
  }
</script>

<style>
 .page-login .pad-5 {
    padding:'10px'
  }
</style>
