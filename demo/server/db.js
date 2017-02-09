const Sequelize = require("sequelize");
const config = require("./config/config");
const uuid = require("node-uuid");
console.log("init sequelize...");

function generateId() {
  return uuid.v4();
}

// var Pets = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   {
//     host: config.host,
//     dialect: config.dialect,
//     pool: {max: 5, min: 0, idle: 10000}
//   }
// );

const Pets = new Sequelize('mysql://root:123456@localhost/mytest',{
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
})

module.exports = {
  Pets // 将Todolist暴露出接口方便Model调用
}