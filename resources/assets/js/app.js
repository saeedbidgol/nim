require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import router from './route';
import EasySlider from 'vue-easy-slider';

Vue.use(VueRouter);
Vue.use(EasySlider);
const app = new Vue({
    el: '#wrapper',
    router
});
