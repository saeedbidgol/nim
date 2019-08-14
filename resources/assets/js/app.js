require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import router from './route';


Vue.use(VueRouter);
const app = new Vue({
    el: '#wrapper',
    router
});
