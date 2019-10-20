import VueRouter from 'vue-router';

import Top from "./components/menus/Top.vue";
import DashboardTop from "./components/menus/dashboard/DashboardTop.vue";
import Left from "./components/menus/dashboard/Left.vue";
import Right from "./components/menus/dashboard/Right.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";
import Home from "./components/home/Home.vue"
import Gallery from "./components/home/components/Gallery.vue"
import Product from "./components/home/components/Product.vue"
import Hero from "./components/home/components/Hero.vue"

const routes =[
    {
        path: '/',
        components: {
            main: Home,
            top: Top,
            hero:Hero
        },
    },
    {
        path: '/gallery',
        components: {
            main: Gallery,
            top: Top,
        },
    },
    {
        path: '/product:id?',
        components: {
            main: Product,
            top: Top,
        },
    },
    {
        path: '/dashboard',
        components: {
            main: Dashboard,
            top: DashboardTop,
            left: Left,
            right: Right
        },
    },
]

export default new VueRouter({
    mode:'history',
    routes
})
