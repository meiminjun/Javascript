const db = require('../db');

module.exports = db.defineModel(
  "pet",
  {
    id: {type: db.STRING(50), primaryKey: true},
    name: db.STRING(100),
    gender: db.BOOLEAN,
    birth: db.STRING(10),
    createdAt: db.BIGINT,
    updatedAt: db.BIGINT,
    version: db.BIGINT
  },
  {timestamps: false}
);



// (async () => {
//   var pets = await Pet.findAll();
//   console.log(`find ${pets.length} pets:`);
//   for (let p of pets) {
//     console.log(JSON.stringify(p));
//   }
// })();
