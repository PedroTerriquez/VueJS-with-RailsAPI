<template lang="pug">
#app
  .btn.btn-light 
    router-link(:to="{ path: '/new' }") New
  table.table
    thead.thead-light
      tr
        th(scope="col") #
        th(scope="col") Title
        th(scope="col") Body
        th(scope="col") Created
        th(scope="col") Actions 
    tbody(v-if="posts && posts.length")
      tr(v-for="post of posts")
        th(scope="row") {{ post.id }} 
        td {{ post.title }}
        td {{ post.body }}
        td {{ post.created_at }}
        td
          router-link(:to="{ name: 'show', params: { id: post.id }}") Show  
          router-link(:to="{ name: 'edit', params: { id: post.id }}") Edit 
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      message: "This is index bitch",
      posts: [],
      errors: []
    }
  },
  created() {
    axios.get(`api/posts`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped lang='scss'>
</style>
