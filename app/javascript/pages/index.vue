<template lang="pug">
#app
  .card
    .card-header List of posts created
  table.table
    thead.thead-light
      tr
        th(scope="col") #
        th(scope="col") Title
        th(scope="col") Body
        th(scope="col") Created
        th(scope="col") 
          router-link.btn.btn-success(:to="{ path: '/new' }") New
    tbody(v-if="posts && posts.length")
      tr(v-for="post of posts")
        th(scope="row") {{ post.id }} 
        td {{ post.title }}
        td {{ post.body }}
        td {{ post.created_at }}
        td
          router-link.btn.btn-info.btn-xs(:to="{ name: 'show', params: { id: post.id }}") Show  
          router-link.btn.btn-warning.btn-xs(:to="{ name: 'edit', params: { id: post.id }}") Edit 
          button.btn.btn-danger.btn-xs(v-on:click.prevent="deletePost( post.id)") Delete
</template>

<script>
import controller from '../config/controller'

export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  methods:{
    getPosts() {
      controller.all()
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    deletePost (id){
      if (confirm('Are you sure to delete this post?')) {
        controller.destroy(id)
          .then(response =>{
            this.getPosts()
          })
          .catch(e=>{
            this.errors.push(e)
          })
      }
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style scoped lang='scss'>
a {
  color: white;
  margin-right: 5px
}
</style>
