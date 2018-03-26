import VueRouter from 'vue-router';

import Index from '../pages/index.vue'
import Show from '../pages/show.vue'
import New from '../pages/new.vue'
import Edit from '../pages/edit.vue'

import Header from '../pages/header.vue'
import Footer from '../pages/footer.vue'

import Signin from '../pages/signin.vue'
import Signup from '../pages/signup.vue'

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/show/:id', name: 'show', component: Show},
    { path: '/new', name: 'new', component: New},
    { path: '/edit/:id', name: 'edit', component: Edit},
    { path: '/signin', name: 'signin', component: Signin},
    { path: '/signup', name: 'signup', component: Signup},
  ]
})

export default router;
