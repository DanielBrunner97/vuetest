const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // Automatically import variables.scss in every component
        additionalData: `@import "/src/styles/utils/_variables.scss";`
      }
    }
  }
})