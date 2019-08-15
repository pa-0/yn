import Vue from 'vue'
import App from './App.vue'
import Icon from 'vue-awesome/components/Icon'
import router from './router'
import store from './store/index'
import modal from './modal'

Vue.config.productionTip = false

Vue.use(modal)
Vue.component('y-icon', Icon)

const appVm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.appVm = appVm
