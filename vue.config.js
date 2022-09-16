const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false,
  // devServer: {
  //   // 配置不同的后台API地址
  //   proxy: {
  //     '/api': {
  //       target: 'http://115.25.46.76:8090',
  //       ws: false,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
})
