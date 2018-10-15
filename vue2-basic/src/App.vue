<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}

</script>
<style>
html {
  -ms-text-size-adjust: 100%;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 1 */
  -webkit-tap-highlight-color: transparent;
  /* 2 */
  height: 100%;
}


ol,
ul {
  list-style: none;
}

a {
  color: '#34495e';
  text-decoration: 'none';
}

</style>
