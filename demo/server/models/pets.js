const db = require('../db.js'),
			userModel = '../schema/pets.js'; // 引入user的表结构

const Pets = db.Pets.import(userModel); // 用sequelize的import方法引入表结构，实例化了User。

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

var findAll = async () => {
    var pets = await Pets.findAll();
    console.log(`find ${pets.length} pets:`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
    //     console.log('update pet...');
        p.name = 'f';
    //     p.gender = true;
    //     p.updatedAt = Date.now();
    //     p.version ++;
        await p.save();
    }

    console.log(JSON.stringify(pets));

    return pets;
};




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
  findAll,
  Pets
}