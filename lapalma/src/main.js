import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuenotification from 'vue-notification';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  Vuenotification,
  render: h => h(App)
}).$mount('#app')

