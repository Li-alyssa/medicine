const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/rank',
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false,
  devServer: {
    // 配置不同的后台API地址
    proxy: {
      '/chinmedy': {
        target: 'http://47.94.136.1/chinmedy',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/chinmedy': ''
        }
      },
      '/import': {
        target: 'http://47.94.136.1:8086',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/import': ''
        }
      }
    },

  },
  chainWebpack: config => {

    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    //   .use('image-webpack-loader')
    //   .loader('image-webpack-loader')
    //   .options({
    //     bypassOnDebug: true
    //   })
    //   .end()


    // config.module
    //   .rule('image')
    //   .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    //   .use('image-webpack-loader')
    //   .loader('image-webpack-loader')
    //   .options({
    //     // 此处为ture的时候不会启用压缩处理,目的是为了开发模式下调试速度更快
    //     disable: process.env.NODE_ENV == 'development' ? true : false,
    //     mozjpeg: {
    //       progressive: true,
    //       quality: 50
    //     },
    //     optipng: {
    //       enabled: true,
    //     },
    //     pngquant: {
    //       quality: [0.5, 0.65],
    //       speed: 4
    //     },
    //     gifsicle: {
    //       interlaced: false,
    //     },

    //   })
    //   .end()

    var externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
    }
    config.externals(externals)

  }
})
