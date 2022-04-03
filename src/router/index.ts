import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from "@/views/GalleryView.vue";

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'hash',
  base: '/portfolio-kd/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
  ]
});

export default router
