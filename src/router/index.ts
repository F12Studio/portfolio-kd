import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from "@/views/GalleryView.vue";
import TattooView from "@/views/TattooView.vue";

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
      component: AboutView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/tattoo',
      name: 'tattoo',
      component: TattooView
    },
  ]
});

export default router
