import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import request from './tools/request'
import mixin from './mixin'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.config.productionTip = false;
Vue.prototype.$http = request

Vue.use(ElementUI)

Vue.filter('first-str',val => {
  if (typeof val !== 'string') {
    return''
  } else {
    return val.slice(0,1)
  }
})

//全局混入
Vue.mixin(mixin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
