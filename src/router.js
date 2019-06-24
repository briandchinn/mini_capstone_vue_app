import Vue from 'vue'
import Router from 'vue-router'
import ProductsIndex from './views/Products/Index.vue'
import ProductsNew from './views/Products/New.vue'
import ProductsShow from './views/Products/Show.vue'
import ProductsEdit from './views/Products/Edit.vue'
import Map from './views/Map.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'products-index',
      component: ProductsIndex
    },
    {
      path: '/products/new',
      name: 'products-new',
      component: ProductsNew
    },
    {
      path: '/products/:id',
      name: 'products-show',
      component: ProductsShow
    },
    {
      path: '/products/:id/edit',
      name: 'products-edit',
      component: ProductsEdit
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})
