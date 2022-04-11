module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        pathRewrite: {
          '^/api': '/'
        },
        ws: true,
        changeOrigin: true
      }
    }
  }
}