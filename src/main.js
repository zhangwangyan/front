import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import axios from 'axios'
import './local/index'
Vue.config.productionTip = false
Vue.use(VeeValidate)
const validator = new Validator()
validator.localize('zh-CN')
axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'http://zhangwangyan.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
