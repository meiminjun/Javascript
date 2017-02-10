// controllers/user.js

const model = require('../model');

const APIError = require('../rest').APIError;
let Pet = model.pets;
console.log("----")
console.log(Pet);
// let test = Pet.creatData();

// console.log(Pet);

// const findAll = async function (){
//   // const id = this.params.id; // 获取url里传过来的参数里的id
//   const result = await Pet.findAll();  // 通过yield “同步”地返回查询结果
//   // this.body = result // 将请求的结果放到response的body里返回
//   return result;
// }


// console.log(data);

module.exports = {
    'GET /api/': async (ctx, next) => {
  			ctx.rest({
          products: await Pet.Pets.findAll()
      	});
    }
};
