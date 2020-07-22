import { getStorage } from '../tools/common'
const mixin = {
  data () {
    return {
      userInfo : {}
    }
  },
  mounted () {
    this.userInfo = JSON.parse(getStorage('login') || {})
  }
}

export default mixin
