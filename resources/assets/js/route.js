import VueRouter from 'vue-router';

import Top from "./components/menus/Top.vue"
import Home from "./components/home/Home.vue"
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
]

export default new VueRouter({
    mode:'history',
    routes
})
