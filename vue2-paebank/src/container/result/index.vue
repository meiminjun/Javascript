<template id="template">
  <div>
    <mt-header title="结果页">
    </mt-header>
    <mt-button class='btn' type="primary" size="large" @click.native="jumpToForm">重新存入</mt-button>
    <mt-button class='btn' type="primary" size="large" @click.native="jumpToIndex">返回首页</mt-button>
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
    jumpToForm: function () {
      location.replace('form.html')
    },
    jumpToIndex: function () {
      location.replace('form.html')
    }
  }
}
</script>
<style type="text/css">
  .btn {
    margin-top: 5rem
  }
</style>
