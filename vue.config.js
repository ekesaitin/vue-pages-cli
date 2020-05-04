module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'index',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    bar: {
      entry: 'src/pages/bar/main.js',
      template: 'public/bar.html',
      filename: 'bar.html',
      title: 'bar',
      chunks: ['chunk-vendors', 'chunk-common', 'bar']
    }
  },
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  // lintOnSave: process.env.NODE_ENV === 'development' ? 'error' : false,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: '8080'
    // proxy: {
    //   '/api': {
    //     target: '',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '/api': ''
    //     }
    //   }
    // }
  }
  // configureWebpack: {
  //   externals: {
  //     'vue': 'Vue',
  //     'vuex': 'Vuex',
  //     'vue-router': 'VueRouter',
  //     'axios': 'axios'
  //   }
  // }
}
