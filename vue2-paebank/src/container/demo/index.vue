<template id="template">
  <div>
    <mt-header title="平安银行">
    </mt-header>
    <div>
    {{name}}
     <div class="btn" @click="jumpOther">跳转方式</div>
     <div class="btn" @click="jumpOther">跳转到第二页</div>
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
    jumpOther: function () {
      ald.nav.back()
    }
  }
}
</script>
<style type="text/css">
  .btn {
    display:inline-block;
    width:100%;
    height:2rem;
    margin:0 auto;
    text-align: center;
    background: blue;
    line-height: 2rem;
    color: white;
  }
</style>
