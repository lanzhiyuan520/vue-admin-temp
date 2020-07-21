/**
 * 导出excel类
 * @param options
 * @options
 * @tHeader : Array 导出的头部
 * @tKey : Array 导出的字段与头部对应
 * @exportList : Array 导出数据的列表
 * @excelName : String 导出的文件名称
 */
class exportExcel {
  constructor () {}
  exportExcelData = (options = {}) => {
    require.ensure([], () => {
      const { tHeader, tKey, exportList,excelName  } =  options
      const { export_json_to_excel } = require('./vendor/Export2Excel');    //引入文件
      const data = this.formatJson(tKey, exportList);
      export_json_to_excel(tHeader, data, excelName);
    })
  }
  formatJson = (filterVal,jsonData) => {
    return jsonData.map(v => filterVal.map(j => v[j]))
  }
}

export default new exportExcel()
