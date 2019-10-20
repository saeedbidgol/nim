require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import router from './route';
import EasySlider from 'vue-easy-slider';
import Loading from "./components/module/Loading";
import Modal from "./components/module/Modal";
import mixin from "./mixins/mixin";
import persianJs from "persianjs/persian"
import "./veeValidate"
import VueIziToast from "vue-izitoast";
import {can} from './directives';

Vue.use(VueRouter);
Vue.use(EasySlider);
Vue.component("modal", Modal);
Vue.component("loading", Loading);
Vue.use(VueIziToast);
Vue.mixin(mixin);
Vue.prototype.$user = window.user;
const app = new Vue({
    el: '#wrapper',
    router
});
