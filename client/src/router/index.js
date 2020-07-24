import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/page/IndexPage'
import Products_index from '@/page/Product/Products_index'
import Product from '@/page/Product/Product'



// ADMIN

import Product_insert from '@/page_admin/Product/Product_insert'

Vue.use(Router)

export default new Router({
  // scrollBehavior (to, from, savedPosition) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve( savedPosition || { x: 0, y: 0 } )
  //     }, 100)
  //   })
  // },
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/products/page=:Page_num',
      name: 'Products_index',
      component: Products_index
    },
    {
      path: '/product/id=:Product_id',
      name: 'Product',
      component: Product
    },




// ADMIN

    {
      path: '/product_insert',
      name: 'Product_insert',
      component: Product_insert
    },







    { path : "*", redirect : "/" }
  ],
  mode : 'history',
  scrollBehavior (to, from, savedPosition) {
    if ('scrollRestoration' in history) { 
        history.scrollRestoration = 'manual'; 
    }
    let position = { x: 0, y: 0 }
    if (savedPosition) {
      position = savedPosition
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position)
      }, 250)
    })
  }
})
