/**
 * Author zouxiang
 * Create Time: 2019-01-22
 * Description: axios 代理配置
 *
 */
module.exports = {
  '/dev': {
    target: 'https://api.coinsmt.com/',
    changeOrigoin: true,
    ws: false,
    secure: false,
    logLevel: 'debug',
    pathRewrite: {
      '^/dev': ''
    }
  },
  '/test': {
    target: 'https://test.yupaitouzi.com/',
    changeOrigoin: true,
    ws: false,
    secure: false,
    logLevel: 'debug',
    pathRewrite: {
      '^/test': ''
    }
  }
}
