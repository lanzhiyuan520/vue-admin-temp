module.exports = {
  publicPath : './',
  lintOnSave : false,
  productionSourceMap : false,
  configureWebpack : {
    externals : {
      "vue" : "Vue",
      "echarts": "echarts",
      'element-ui': 'ELEMENT',
      "axios" : "axios",
      "vuex" : "Vuex"
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
}
