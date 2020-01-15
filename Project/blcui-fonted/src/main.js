import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import request from './request';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.prototype.request = request

Vue.config.productionTip = false

Vue.use(mavonEditor)

new Vue({
  router,
  vuetify,
  mavonEditor,
  store,
  render: h => h(App)
}).$mount('#app')
