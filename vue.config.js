module.exports = {
  publicPath : './',
  lintOnSave : false,
  productionSourceMap : false,
  configureWebpack : {
    externals : {
      "vue" : "Vue",
      "echarts": "echarts",
      // 'element-ui': 'ELEMENT',
      "axios" : "axios",
      "vuex" : "Vuex"
    }
  }
}
