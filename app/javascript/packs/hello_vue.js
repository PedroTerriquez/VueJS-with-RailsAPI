import 'bootstrap/dist/css/bootstrap.css'             
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue'
import App from '../app.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

import Index from '../index.vue'
import Show from '../show.vue'
import New from '../new.vue'
import Edit from '../edit.vue'

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/#/', component: Index }
  ]
})
