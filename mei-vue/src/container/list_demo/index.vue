<template>
  <div id="app">
     <mt-header title = "定活通">
    </mt-header>
     <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div v-for="(item, index) in list" class="row" :class="{'grey-bg': index % 2 == 0}">
          {{ item }}
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
  </div>
</template>
<style>
  html, body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  .row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }
  .grey-bg {
    background-color: #eee;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    z-index: 1000;
    color: #666;
  }
  .header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
  }
  .mint-spinner-snake {
    display: inline-block;
    vertical-align: middle;
  }
</style>
<script>
  export default {
    data () {
      return {
        title: 'demo',
        // 自定义样式
        styleObject: {
          'margin-top': '45px'
        },
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0
      }
    },
    created () {
      for (let i = 0; i <= 20; i++) {
        this.list.push(i)
      }
    },
    mounted () {
    },
    methods: {
      handleTopChange (status) {
        this.topStatus = status
      },
      handleBottomChange (status) {
        this.bottomStatus = status
      },
      // 下拉刷新
      loadTop () {
        setTimeout(() => {
          let firstValue = this.list[0]
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i)
          }
          // 注意在这个方法的最后需要手动调用 loadmore 的 onTopLoaded 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。
          this.$refs.loadmore.onTopLoaded()
        }, 1500)
      },
      // 上拉加载
      loadBottom () {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1]
          if (lastValue < 100) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i)
            }
          } else {
            this.allLoaded = true // 若数据已全部获取完毕
          }
          // 注意在这个方法的最后需要手动调用 loadmore 的 onBottomLoaded 事件。这是因为在加载数据后需要对组件进行一些重新定位的操作。
          // 列表底部的上拉刷新与之类似
          this.$refs.loadmore.onBottomLoaded()
        }, 1500)
      }
    }
  }
</script>
