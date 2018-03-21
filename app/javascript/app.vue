<template lang="pug">
  #app
    app-header
    router-view
    app-footer
</template>

<script>
import VueRouter from 'vue-router';

import Index from './index.vue'
import Show from './show.vue'
import New from './new.vue'
import Edit from './edit.vue'
import Delete from './delete.vue'
import Header from './header.vue'
import Footer from './footer.vue'

const router = new VueRouter({
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/show/:id', name: 'show', component: Show},
    { path: '/new', name: 'new', component: New},
    { path: '/edit/:id', name: 'edit', component: Edit},
    { path: '/delete/:id', name: 'delete', component: Delete}
  ]
})

export default{
  router,
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style scoped lang='scss'>
</style>
