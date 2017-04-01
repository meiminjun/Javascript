<template id="template">
  <div>
    <mt-header title="登录">
    </mt-header>
    <div>
     <mt-button class='button' type="primary" size="large" @click.native="handleClick">登录成功</mt-button>
    </div>
  </div>
</template>
<script>
import * as ald from '../../util/ald'
export default {
  data: function () {
    return {
      name: '跳回登录'
    }
  },
  created: function () {
    sessionStorage.setItem('login', '1')
  },
  methods: {
    handleClick: function () {
      location.replace('demo.html')
    }
  }
}
</script>
<style type="text/css">
  .button {
    margin-top: 5rem
  }
</style>
