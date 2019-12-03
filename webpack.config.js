/**
 * Author zouxiang
 * Create Time: 2018-07-20
 * Description:
 */
var path = require('path')
module.exports = {
  resolve: {
    // for WebStorm
    alias: {
      '@': path.resolve('src'),
      '~': path.resolve(__dirname)
    }
  }
}
