import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Home
  },
  { 
    path: '/authors', 
    component:() => import(/* webpackChunkName: "authors" */ '../views/Authors.vue')
  },
  {
    path: '/posts/:slug', 
    component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue')
  },
  {
    path: '/:slug', 
    component: () => import(/* webpackChunkName: "page" */ '../views/Page.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
