import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 导入全局样式表
import './assets/css/global.css'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
// 配置请求的根路径
axios.defaults.baseURL = "http://timemeetyou.com:8889/api/private/v1/"

Vue.config.productionTip = false

new Vue({
  el: '#app',
	render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
