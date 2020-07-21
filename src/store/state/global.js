import { getStorage } from '../../tools/common'
let state = {
  language : getStorage('lang') || 'zh-CN',
  isCollapse : false
}

export default state
