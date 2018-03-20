<template lang="pug">
  #app
    router-view
</template>

<script>
import VueRouter from 'vue-router';

import Index from './index.vue'
import Show from './show.vue'
import New from './new.vue'
import Edit from './edit.vue'

const router = new VueRouter({
  routes: [
    { path: '/', name: 'index', component: Index },
    { path: '/show/:id', name: 'show', component: Show},
    { path: '/new', name: 'new', component: New},
    { path: '/edit/:id', name: 'edit', component: Edit}
  ]
})

export default{
  router
}
</script>

<style scoped lang='scss'>
</style>
