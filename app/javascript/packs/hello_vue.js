import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue';

import VueRouter from 'vue-router';
import Vue from 'vue'
import Vuex from 'vuex'
import App from '../app.vue'
import store from '../config/session'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el,
    render: h => h(App),
    store
  })
})
