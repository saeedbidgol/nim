import VueRouter from 'vue-router';

import Top from "./components/menus/Top.vue"
import Home from "./components/home/Home.vue"

const routes =[
    {
        path: '/',
        components: {
            main: Home,
            top: Top
        },
    },
]

export default new VueRouter({
    routes
})
