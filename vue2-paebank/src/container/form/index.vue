<template id="template">
  <div>
    <mt-header title="存入表单">
    </mt-header>
    <mt-button class='btn' type="primary" size="large" @click.native="login">进入收银台</mt-button>
    <div>
    </div>
  </div>
</template>
<script>
import * as ald from '../../util/ald'
export default {
  data: function () {
    return {
      name: '跳转测试'
    }
  },
  created: function () {

  },
  methods: {
    login: function () {
      location.href = 'pay.html'
    }
  }
}
</script>
<style type="text/css">
  .btn {
    margin-top: 5rem
  }
</style>
