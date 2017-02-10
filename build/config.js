const path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    dist: path.resolve(__dirname, '../dist'),
    sourceMap: true
  },
  dev: {
    port: 3001,
    autoOpenBrowser: true,
  }
}