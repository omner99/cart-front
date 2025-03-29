import Vue from 'vue'
import Router from 'vue-router'

import ProductsView from '../views/Products.vue'
import CustomersView from '../views/Customers.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'ProductsView',
    component: ProductsView
    },
    {
      path: '/customers',
      name: 'CustomersView',
      component: CustomersView
      }
  ]
})
