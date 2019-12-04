/**
 * Author zouxiang
 * Create Time: 2019-12-03
 * Description:
 */
const path = require('path')
const proxyTable = require('./vueConfig/proxyTable')
const componentsOptions = require('./vueConfig/componentsOptions')
const qrCode = require('qrcode-terminal')
const internalIp = require('internal-ip')
const chalk = require('chalk')

const devServerConfig = {
  port: 8084,
  https: false
}

function showDevServerWarning() {
  console.log(chalk.yellow('[vue-cli-plugin-qrcode] No devServer config found'));
  console.log(chalk.yellow('[vue-cli-plugin-qrcode] No QR code will be displayed'));
}

module.exports = {
  publicPath: './',
  assetsDir: 'static',

  // 代理服务器
  devServer: {
    ...devServerConfig,
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
  chainWebpack: config=> {
    // 二维码生成插件
    config.plugin('qrcode').use({
      apply(compiler) {
        if (process.env.NODE_ENV === 'development') {
          if (devServerConfig) {
            compiler.hooks.done.tap('Print QR Code Plugin', () => {
              const protocol = devServerConfig.https ? 'https' : 'http';
              const port = devServerConfig.port || '';
              internalIp.v4().then((ip) => {
                let address = `${protocol}://${ip}${port && `:${port}`}`;
                address = address + (address.includes('?') ? '&t=' : '?t=') + Date.now();
                console.log(chalk.green('scan qrCode: '));
                qrCode.generate(address, {small: true}, (code) => {
                  console.log(code)
                });
              }).catch((err) => {
                console.error(err);
              });
            })
          } else {
            showDevServerWarning()
          }
        }
      }
    })
  }
}
