<template id="template">
  <div>
    <mt-header title="定活通">
    </mt-header>
    <mt-button class='btn' type="primary" size="large" @click.native="alertFun">Alert测试</mt-button>
    <mt-button class='btn' type="primary" size="large" @click.native="confirmFun">Confirm测试</mt-button>
    <mt-button class='btn' type="primary" size="large" @click.native="toastFun">Toast测试</mt-button>
    <mt-button class='btn' type="primary" size="large" @click.native="login">存入</mt-button>
    <div>
    </div>
  </div>
</template>
<script>
import * as ald from 'utils/ald'
export default {
  data: function () {
    return {
      name: '跳转测试'
    }
  },
  created: function () {

  },
  mounted: function () {

  },
  methods: {
    alertFun: function () {
      ald.dialog.alert({
        message: '测试Alert',
        buttonCallback: function () {
          alert(111)
        }
      })
    },
    confirmFun: function () {
      ald.dialog.confirm({
        message: '测试Confirm',
        leftButtonCallback: function () {
          alert('left')
        },
        rightButtonCallback: function () {
          alert('right')
        }
      })
    },
    toastFun: function () {
      ald.toast.show({
        message: '测试Toast'
      })
    },
    login: function () {
      let flat = sessionStorage.getItem('login')
      if (flat === '1') {
        location.href = 'form.html'
      } else {
        location.href = 'login.html'
      }
    }
  }
}
</script>
<style type="text/css">
  .btn {
    margin-top: 0.2rem
  }
</style>
