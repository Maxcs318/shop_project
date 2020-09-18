import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/page/IndexPage'

import products from '@/page/user/products'
import product from '@/page/user/product'

// Admin 
import product_insert from '@/page/admin/product_insert'

// Test
import test_01 from '@/test_code/test_01'


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
      path: '/products/category=:Category_id/page=:Page_num',
      name: 'products',
      component: products
    },
    {
      path: '/product/id=:Product_id',
      name: 'product',
      component: product
    },

// Admin
    {
      path: '/product_insert',
      name: 'product_insert',
      component: product_insert
    },
// Test
    {
      path: '/test_01',
      name: 'test_01',
      component: test_01
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
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position)
      }, 250)
    })
  }
})
