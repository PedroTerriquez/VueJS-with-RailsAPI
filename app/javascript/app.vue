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
    { path: '/', component: Index },
    { path: '/show', component: Show},
    { path: '/new', component: New},
    { path: '/edit', component: Edit}
  ]
})

export default{
  router
}
</script>

<style scoped lang='scss'>
</style>
