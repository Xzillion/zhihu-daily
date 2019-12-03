/**
 * Author zouxiang
 * Create Time: 2019-12-03
 * Description:
 */
const path = require('path')
const proxyTable = require('./vueConfig/proxyTable')
const componentsOptions = require('./vueConfig/componentsOptions')

function addStyleResource(rule) {
  console.log(rule)
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/style/variables.less') // 需要全局导入的less
      ]
    })
}

module.exports = {
  publicPath: './',
  assetsDir: 'static',

  // 代理服务器
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: proxyTable
  },

  // css预处理器选项
  css: {
    loaderOptions: {
      less: componentsOptions
    }
  },
  // 此方法导入全局less变量无效
  /*chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )
  }*/
}
