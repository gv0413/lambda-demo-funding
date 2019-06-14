import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/landing.css'
import './assets/css/blog.css'
import './assets/css/coming-soon.css'
import './assets/css/error.css'
import './assets/css/portfolio.css'
import './assets/css/shop.css'
import './assets/vendor/css/appwork-material.css'
import './assets/vendor/css/appwork.css'
import './assets/vendor/css/bootstrap-material.css'
import './assets/vendor/css/colors-material.css'
import './assets/vendor/css/bootstrap.css'
import './assets/vendor/css/colors.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')