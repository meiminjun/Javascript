<template>
  <div>
     <mt-header title="平安银行">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <router-link to="/register" slot="right">
        <mt-button>注册</mt-button>
      </router-link>
    </mt-header>
    <h3>欢迎光临:{{name}}! 你的代办事项为：</h3>
    <mt-field placeholder="请输入您的代办事项" v-model="todo" @keyup.enter.native="addTodos"></mt-field>
    <div>
      <div class="nav">
        <mt-button size="small" @click.native.prevent="active = 'tab-container1'">代办事项</mt-button>
        <mt-button size="small" @click.native.prevent="active = 'tab-container2'">已完成事项</mt-button>
      </div>
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1">
          <template v-if="!Done">
            <template v-for="(item,index) in list">
              <mt-cell v-if="item.status == false" v-bind:title="item.content">
                <mt-button @click= "finished(index)">完成</mt-button>
                <mt-button @click= "remove(index)">删除</mt-button>
              </mt-cell>
            </template>
          </template>
          <div v-else-if="Done">
            暂无代办事项
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <template v-if="count > 0">
            <template v-for="(item,index) in list">
              <mt-cell v-if="item.status == true" v-bind:title="item.content">
                <mt-button @click= "restore(index)">还原</mt-button>
              </mt-cell>
            </template>
          </template>
          <div v-else>
            暂无已完成事项
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Toast,Indicator } from 'mint-ui'
export default {
  data() {
    return {
      name:'梅敏君',
      active: 'tab-container1',
      todo:'',
      activeName:'first',
      list:[],
      count:0
    }
  },
  computed: {
    Done() {
      let count = 0;
      let length = this.list.length;
      for(let i in this.list) {
        this.list[i].status == true ? count += 1 : '';
      }
      this.count = count;
      if(count == length || length == 0) {
        return true
      }else {
        return false
      }
    }
  },
  methods: {
    addTodos() {
      if(this.todo == '')
        return
      let obj = {
        status:false,
        content:this.todo
      }

      this.list.push(obj);
      this.todo = '';
      console.log(this.list);
      console.log(this.list[0].status);
      console.log(this.list[0]);

    },
    finished(index) {
      this.$set(this.list[index],'status',true)
      Toast({
        message: '任务完成'
      });
    },
    remove(index) {
      this.list.splice(index,1);
      Toast({
        message: '任务删除'
      });
    },
    restore(index) {
      this.$set(this.list[index],'status',false)
      Toast({
        message: '任务还原'
      });
    }
  }
}
</script>
<style scoped>

</style>
