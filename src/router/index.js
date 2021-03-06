import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import(/* webpackChunkName: "favourites" */ '../views/Favourites.vue')
  },
  {
    path: '/:breed',
    name: 'Sorted',
    component: () => import(/* webpackChunkName: "sorted" */ '../views/Sorted.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
