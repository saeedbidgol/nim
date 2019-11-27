import VueRouter from 'vue-router';

import Top from "./components/menus/Top.vue";
import DashboardTop from "./components/menus/dashboard/DashboardTop.vue";
import Right from "./components/menus/dashboard/Right.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";
import Home from "./components/home/Home.vue"
import Gallery from "./components/home/components/Gallery.vue"
import Product from "./components/home/components/Product.vue"
import Hero from "./components/home/components/Hero.vue"
import ProductionGallery from "./components/Dashboard/ProductionGallery.vue"
import Slides from "./components/site_features/Slides.vue"
import AboutUs from "./components/site_features/AboutUs.vue"
import Catalogue from "./components/site_features/Catalogue.vue"
import ContactUs from "./components/site_features/ContactUs.vue"
import Category from "./components/site_features/Category.vue"
import News from "./components/site_features/News.vue"
import Users from "./components/Dashboard/Users.vue"

const routes = [
    {
        path: '/',
        components: {
            main: Home,
            top: Top,
            hero: Hero
        },
    },
    {
        path: '/gallery/:category?',
        components: {
            main: Gallery,
            top: Top,
        },
        props: { main: true }
    },
    {
        path: '/product/:product?',
        components: {
            main: Product,
            top: Top,
        },
        props: { main: true },
    },
    {
        path: '/dashboard',
        components: {
            main: Dashboard,
            top: DashboardTop,
            right: Right
        },
    },
    {
        path: '/dashboard/gallery',
        components: {
            main: ProductionGallery,
            top: DashboardTop,
            right: Right
        },
    },
    {
        path: '/dashboard/slides',
        components: {
            main: Slides,
            top: DashboardTop,
            right: Right
        },
    },
    {
        path: '/dashboard/about-us',
        components: {
            main: AboutUs,
            top: DashboardTop,
            right: Right
        },
    },
    {
        path: '/dashboard/catalogues',
        components: {
            main: Catalogue,
            top: DashboardTop,
            right: Right
        },
    },
    {
        path: '/dashboard/categories',
        components: {
            main: Category,
            top: DashboardTop,
            right: Right
        },
    },
    {
        path: '/dashboard/contact-us',
        components: {
            main: ContactUs,
            top: DashboardTop,
            right: Right
        },
    },
    {
        path: '/dashboard/news',
        components: {
            main: News,
            top: DashboardTop,
            right: Right
        },
    },
    {
        path: '/dashboard/users',
        components: {
            main: Users,
            top: DashboardTop,
            right: Right
        },
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})
