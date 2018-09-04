// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import VueGoodTablePlugin from 'vue-good-table'
import Vue from 'vue'
import VueGoodTable from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, { theme: {
  primary: '#1E88E5',
  secondary: '#FFA000',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})
Vue.use(VueGoodTable)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
