import Vue from 'vue'
import Router from 'vue-router'

import ProductsView from '../views/Products.vue'
import CustomersView from '../views/Customers.vue'
import CartView from '../views/Cart.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'ProductsView',
    component: ProductsView
    },
    {
      path: '/Customers',
      name: 'CustomersView',
      component: CustomersView
      },
      {
        path: '/Cart',
        name: 'CartView',
        component: CartView
      }
  ]
})
