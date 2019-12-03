/**
 * Author zouxiang
 * Create Time: 2019-04-24
 * Description:
 */
module.exports = {
  modifyVars: {
    'primary-color': '#2b93f6',
    'font-family':
      'Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif', // 不能有中文，否则替换失败
    // 导入全局less变量
    hack: `true; @import "~@/assets/style/variables.less";`
  },
  javascriptEnabled: true
}
