const db = require('../db.js'),
			userModel = '../schema/pets.js', // 引入user的表结构
      user = '../schema/user.js',
      list = '../schema/list.js';
const Pets = db.Pets.import(userModel); // 用sequelize的import方法引入表结构，实例化了User。
const User = db.Pets.import(user);
const List = db.Pets.import(list);

const jwt = require('koa-jwt');

var now = Date.now();



// Pets.create({
//     id: 'g-' + now,
//     name: 'Gaffey',
//     gender: false,
//     birth: '2007-07-07',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
// }).then(function (p) {
//     console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//     console.log('failed: ' + err);
// });
//
//


// const findAll = function (){ // 注意是function* 而不是function 对于需要yield操作的函数都需要这种generator函数。
//   const userInfo = Pets.findAll();
//   console.log("()")
//   console.log(userInfo)
//   return userInfo // 返回数据
// }


// var creatData = (async () => {
//     var dog = await Pets.create({
//         id: 'd-' + now,
//         name: 'Odie',
//         gender: false,
//         birth: '2008-08-08',
//         createdAt: now,
//         updatedAt: now,
//         version: 0
//     });
//     console.log('created: ' + JSON.stringify(dog));
// })();

var findUser = async (ctx, next) => {
    console.log(`get product ${ctx.params.id}...`);
    let id = ctx.params.id;
    ctx.rest({
      products: await User.findOne({
        where: {
          id:id
        }
      })
    });
    // var pets = await Pets.findAll();
    // console.log(`find ${pets.length} pets:`);
    // for (let p of pets) {
    //     console.log(JSON.stringify(p));
    // //     console.log('update pet...');
    //     p.name = 'f';
    // //     p.gender = true;
    // //     p.updatedAt = Date.now();
    // //     p.version ++;
    //     await p.save();
    // }
    // console.log(JSON.stringify(pets));

    // return pets;
};

const getUserByName = async (n) => {
  console.log(`***Name****${name}`)
  console.log(`***Name****${name}`)
  console.log(`***Name****${name}`)
  console.log(`***Name****${name}`)
  const name = n;
  const userInfo = await User.findOne({
    where: {
      user_name:name
    }
  });
  return {
    data:userInfo
  };
}


const postUserAuth = async (ctx,next) => {
  const data = ctx.request.body;

  console.log(`***-name-***${data.name}`)
  console.log(`***--***${JSON.stringify(data)}`)
  const userInfo = await User.findOne({
    where: {
      user_name:data.name
    }
  });
  // const userInfo = await getUserByName(data.name);
  console.log(`***-userInfo-*** ${JSON.stringify(userInfo)}`);
  if(userInfo != null){ // 如果查无此用户会返回null
    if(userInfo.password != data.password){
      ctx.rest({
        success: false, // success标志位是方便前端判断返回是正确与否
        info: '密码错误！'
      });
    }else{ // 如果密码正确
      console.log("密码正确")
      const userToken = {
        name: userInfo.user_name,
        id: userInfo.id
      }
      const secret = 'vue-koa-demo'; // 指定密钥，这是之后用来判断token合法性的标志
      const token = jwt.sign(userToken,secret); // 签发token
      ctx.rest({
        success: true,
        token: token, // 返回token
      });
    }
  }else{
    ctx.rest({
      success: false,
      info: '用户不存在！' // 如果用户不存在返回用户不存在
    });
  }
}

var findList = async (ctx,next) => {
  ctx.rest({
    products: await List.findAll()
  });
}



// const getUserById = async () => {
//     var pets = await Pets.findAll();
//     console.log(`find ${pets.length} pets:`);
//     return pets;
//     // for (let p of pets) {
//     //     console.log(JSON.stringify(p));
//     //     console.log('update pet...');
//     // }
// };

module.exports = {
  // creatData,  // 导出getUserById的方法，将会在controller里调用
  // getData,
  findUser,
  findList,
  postUserAuth,
  Pets
}
