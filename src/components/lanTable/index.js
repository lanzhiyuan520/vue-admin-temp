import lanTable from './src/lanTable'

lanTable.install = Vue => {
  Vue.component(lanTable.name,lanTable)
}

export default lanTable
