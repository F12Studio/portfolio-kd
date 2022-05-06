import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from "@/views/GalleryView.vue";
import DogsView from "@/views/DogsView.vue";
import ImitationView from "@/views/ImitationView.vue";
import PortraitsView from "@/views/PortraitsView.vue";
import TattooView from "@/views/TattooView.vue";
import CityView from "@/views/CityView.vue";
import LandscapeView from "@/views/LandscapeView.vue";
import FilmView from "@/views/FilmView.vue";
import DesignView from "@/views/DesignView.vue";
import AlbumView from "@/views/AlbumView.vue";
import CMYKartenView from "@/views/CMYKartenView.vue";
import CommuniTeaView from "@/views/CommuniTeaView.vue";

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
            path: '/photography',
            name: 'photography',
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
        {
            path: '/film',
            name: 'film',
            component: FilmView
        },
        {
            path: '/design',
            name: 'design',
            component: DesignView
        },
        {
            path: '/album',
            name: 'album',
            component: AlbumView
        },
        {
            path: '/cmykarten',
            name: 'cmykarten',
            component: CMYKartenView
        },
        {
            path: '/communitea',
            name: 'communitea',
            component: CommuniTeaView
        },
    ],
    scrollBehavior: function () {
        return {x: 0, y: 0};
    },
});

export default router

