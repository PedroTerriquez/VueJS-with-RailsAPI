import VueRouter from 'vue-router';

import Index from '../pages/index.vue'
import Show from '../pages/show.vue'
import New from '../pages/new.vue'
import Edit from '../pages/edit.vue'
import Header from '../pages/header.vue'
import Footer from '../pages/footer.vue'

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/show/:id', name: 'show', component: Show},
    { path: '/new', name: 'new', component: New},
    { path: '/edit/:id', name: 'edit', component: Edit},
  ]
})

export default router;
