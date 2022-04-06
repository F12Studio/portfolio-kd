import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from "@/views/GalleryView.vue";
import DogsView from "@/views/DogsView.vue";
import ImitationView from "@/views/ImitationView.vue";
import PortraitsView from "@/views/PortraitsView.vue";
import TattooView from "@/views/TattooView.vue";
import CityView from "@/views/CityView.vue";
import LandscapeView from "@/views/LandscapeView.vue";

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
    {
      path: '/portraits',
      name: 'portraits',
      component: PortraitsView
    },
    {
      path: '/imitation',
      name: 'imitation',
      component: ImitationView
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: DogsView
    },
    {
      path: '/city',
      name: 'city',
      component: CityView
    },
    {
      path: '/landscape',
      name: 'landscape',
      component: LandscapeView
    },
  ]
});

export default router
