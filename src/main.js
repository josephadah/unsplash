import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.min.css'
import 'bulma-helpers/css/bulma-helpers.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/styles/main.scss'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
