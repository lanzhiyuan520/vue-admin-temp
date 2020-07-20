module.exports = {
  publicPath : './',
  lintOnSave : false,
  productionSourceMap : false,
  configureWebpack : {
    externals : {
      "echarts": "echarts"
    }
  }
}
