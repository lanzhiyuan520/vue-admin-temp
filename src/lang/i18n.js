import VueI18n from 'vue-i18n'
import store from '../store'
import en from './en'
import cn from './cn'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: store.state.language, //en-US英文
  messages : {
    'zh-CN' : cn,
    'en-US' : en
  }
})

export default i18n

