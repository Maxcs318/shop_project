// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

// alert swal
import VueSwal from 'vue-swal'
 
// meta tags for Google SEO --mt
import VueMeta from 'vue-meta'


// --mt
Vue.use(VueMeta)
// swal
Vue.use(VueSwal)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
  
})
