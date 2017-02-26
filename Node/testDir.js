const fs = require('fs')
const os = require('os')
const path = require('path')

// var files = fs.readdirSync(__dirname);
// files.forEach(function (filename) {
//   var fullname = path.join(__dirname,filename);
//   var stats = fs.statSync(fullname);
//   if (stats.isDirectory()) filename += '/';
//   process.stdout.write(filename + '\t' +
//     stats.size + '\t' +
//     stats.mtime + '\n'
//   );
// });


const baseDir = './src/container'

var p = path.join(__dirname, baseDir);
console.log(p);
var entries = {
    'app': ['webpack-hot-middleware/client?path=/omm/mobile/__webpack_hmr', './src/app.js']
};
const chunks = []
var entry = fs.readdirSync(path.join(__dirname, baseDir)).reduce((entries, dir) => {
    console.log("1111:"+JSON.stringify(entries))
    console.log("****"+dir) // finance
    const fullDir = path.join(__dirname, baseDir + '/' + dir);
    console.log("+++"+fullDir) // finance
    // console.log(fullDir)
    const entry = path.join(fullDir, 'index.js')
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
        entries[dir] = ['webpack-hot-middleware/client?path=/omm/mobile/__webpack_hmr', entry]
        chunks.push(dir);
    }
    console.log(JSON.stringify(entries))
    return entries;
}, {});
console.log(chunks)
console.log(entry);


let o = Object.assign({}, entries, entry)

console.log(JSON.stringify(o));
