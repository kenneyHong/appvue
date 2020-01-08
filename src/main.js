// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

import router from './router'
Vue.config.productionTip = false
Vue.use(elementui, {
  size: 'mini'
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
