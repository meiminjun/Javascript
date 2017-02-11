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
              <mt-cell v-if="item.status == 0" v-bind:title="item.content">
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
              <mt-cell v-if="item.status == 1" v-bind:title="item.content">
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
import jwt from 'jsonwebtoken'  // 我们安装koa-jwt的时候会自动下载这个依赖

export default {
  created() {
    const userInfo = this.getUserInfo(); // 新增一个获取用户信息的方法
    if(userInfo != null){
      this.id = userInfo.id;
      this.name = userInfo.name;
    }else{
      this.id = '';
      this.name = ''
    }
    this.getTodolist(); // 新增：在组件创建时获取todolist
  },
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
      debugger;
      let count = 0;
      let length = this.list.length;
      for(let i in this.list) {
        this.list[i].status == 1 ? count += 1 : '';
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
        status:0,
        content:this.todo,
        id:this.id
      }
      this.$http.post('/api/addTodolist', obj) // 新增创建请求
      .then((res) => {
        if(res.status == 200){ // 当返回的状态为200成功时
          this.getTodolist(); // 获得最新的todolist
        }else{
          Toast({
            message: '创建失败！',
            duration: 1000
          });
        }
      }, (err) => {
        Toast({
          message: '创建失败！'
        });
        console.log(err)
      })
      this.todo = ''; // 将当前todos清空
    },
    finished(index) {
      // this.$set(this.list[index],'status',1)
      this.$http.put('/api/updateTodolist/'+this.id + '/'+ this.list[index].id+'/'+ 1)
      .then((res) => {
        if(res.status == 200) {
          if(res.data.ret_code == "000000") {
            Toast({
              message: '任务完成',
              duration: 1000
            });
            this.getTodolist();
          }
        }else {
          Toast({
            message: '系统异常',
            duration: 1000
          });
        }
      },(err) => {
        Toast({
          message: '系统异常',
          duration: 1000
        });
        console.log(err)
      })
    },
    remove(index) {
      this.$http.delete('/api/removeTodolist/'+ this.id + '/' + this.list[index].id)
        .then((res) => {
          if(res.status == 200){
            Toast({
              message: '任务删除成功！',
              duration: 1000
            });
            this.getTodolist();
          }else{
            Toast({
              message: '任务删除失败！',
              duration: 1000
            });
          }
        }, (err) => {
          Toast({
            message: '任务删除失败！',
            duration: 1000
          });
          console.log(err)
        })
    },
    restore(index) {
      // this.$set(this.list[index],'status',0)
      this.$http.put('/api/updateTodolist/'+this.id + '/'+ this.list[index].id+'/'+ 0)
      .then((res) => {
        if(res.status == 200) {
          if(res.data.ret_code == "000000") {
            Toast({
              message: '任务还原',
              duration: 1000
            });
            this.getTodolist();
          }
        }else {
          Toast({
            message: '系统异常',
            duration: 1000
          });
        }
      },(err) => {
        Toast({
          message: '系统异常',
          duration: 1000
        });
        console.log(err)
      })
    },
    getUserInfo(){ // 获取用户信息
      const token = sessionStorage.getItem('demo-token');
      if(token != null && token != 'null'){
        let decode = jwt.verify(token,'vue-koa-demo'); // 解析token
        return decode // decode解析出来实际上就是{name: XXX,id: XXX}
      }else {
        return null
      }
    },
    getTodolist(){
      this.$http.get('/api/todolist/' + this.id) // 向后端发送获取todolist的请求
        .then((res) => {
          if(res.status == 200){
            debugger;
            if(res.data.data != null) {
              this.list = res.data.data // 将获取的信息塞入实例里的list
            }
          }else{
            Toast({
              message: '获取列表失败！'
            });
          }
        }, (err) => {
          Toast({
            message: '获取列表失败！'
          });
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>

</style>
