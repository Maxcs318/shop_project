// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

// 3d image show
import Carousel3d from 'vue-carousel-3d';

// alert swal
import VueSwal from 'vue-swal'
 
// meta tags for Google SEO --mt
import VueMeta from 'vue-meta'


// --mt
Vue.use(VueMeta)
// swal
Vue.use(VueSwal)
// 3d image show
Vue.use(Carousel3d);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
  
})
