import Vue from 'vue'
import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import {store} from './store/store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Bootstrap)
Vue.config.productionTip = false

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
