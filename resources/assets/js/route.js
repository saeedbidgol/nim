import VueRouter from 'vue-router';

import Top from "./components/menus/Top.vue"
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
]

export default new VueRouter({
    mode:'history',
    routes
})
