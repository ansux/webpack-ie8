const shell = require('shelljs')
const webpack = require('webpack')
const webpackConf = require('./webpack.conf')
const config = require('./config')

// clean dist
shell.rm('-rf', config.build.dist)
shell.config.silent = true

webpack(webpackConf.prodConf, function(err, stats){
  if (err) throw err
})