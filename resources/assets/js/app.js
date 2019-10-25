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
import vSelect from 'vue-select'

Vue.use(VueRouter);
Vue.use(EasySlider);
Vue.component("modal", Modal);
Vue.component("loading", Loading);
Vue.use(VueIziToast);
Vue.component('v-select', vSelect)
Vue.mixin(mixin);
Vue.prototype.$user = window.user;
const app = new Vue({
    el: '#wrapper',
    router
});
