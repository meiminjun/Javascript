var isMin = process.env.MIN || 'all' // 是否压缩
let webpackConfig = require('./webpack.config');
let rm = require('rimraf')
let path = require('path')
let webpack = require('webpack')
let util = require('util')

const compileCallback = (er, stats) => {
    if (er) throw er
    stats = util.isArray(stats.stats) ? stats.stats : [stats]
    stats.forEach((item) => {
        process.stdout.write(item.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')
    })

    console.log('Build complete.\n')
}

rm(path.resolve(__dirname, './dist'), err => {
    if (err) throw err
    console.log(isMin)
    if (isMin === 'all') {
        let compiler1 = webpack(webpackConfig({
            isMin: 'true'
        }))
        let compiler2 = webpack(webpackConfig({
            isMin: 'false'
        }))
        compiler1.run(compileCallback)
        compiler2.run(compileCallback)
        return;
    } else {
        let compiler = webpack(webpackConfig({
            isMin: isMin
        }))
        compiler.run(compileCallback)
    }
})
