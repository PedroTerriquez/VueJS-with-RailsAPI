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
          .btn.btn-light  
            router-link(:to="{ name: 'show', params: { id: post.id }}") Show  
          .btn.btn-light   
            router-link(:to="{ name: 'edit', params: { id: post.id }}") Edit 
          .btn.btn-light(v-on:click.prevent="deletePost( post.id)") Delete
            
            
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  methods:{
    deletePost (id){
      if (confirm('Are you sure to delete this Post?')) {
        axios.delete(`api/posts/`+id)
        .then(response =>{})
          .catch(e=>{
            this.errors.push(e)
          })
        event.target.parentElement.parentElement.remove()
      }
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
