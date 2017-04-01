<template id="template">
  <div>
    <mt-header title="收银台">
    </mt-header>
    <div>
    <mt-button class='button' type="primary" size="large" @click.native="handleClick">返回</mt-button>
    <mt-button class='button' type="primary" size="large" @click.native="jumpToResult">跳转结果页面</mt-button>
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
    handleClick: function () {
      history.go(-1)
    },
    jumpToResult: function () {
      location.replace('result.html')
    }
  }
}
</script>
<style type="text/css">
  .button {
    marin-top: 5rem
  }
</style>
