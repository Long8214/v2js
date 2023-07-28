const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // webWorker
  configureWebpack: {

    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: {
            loader: 'worker-loader',
            options: {
              inline: true,
            },
          },
        },
      ],
    },
  },
  
})
