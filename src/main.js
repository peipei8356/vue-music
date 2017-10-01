import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import Fastclick from 'fastclick'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

// Vue.config.productionTip = false
Fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
