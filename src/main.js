import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
Vue.use(less)
Vue.use(VueRouter)
Vue.use(ElementUi)
const router = new VueRouter(routes)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
