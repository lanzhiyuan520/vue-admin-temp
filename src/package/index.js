import Vue from 'vue'
import lanTable from '../components/lanTable'

const packages = [
  lanTable
]

const install = () => {
  packages.forEach(packItem => {
    Vue.component(packItem.name,packItem)
  })
}

export default {
  install
}
