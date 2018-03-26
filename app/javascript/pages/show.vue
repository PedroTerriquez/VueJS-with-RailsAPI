<template lang="pug">
#app
  table.table
    thead.thead-light
      tr
        th(scope="col") #
        th(scope="col") Title
        th(scope="col") Body
        th(scope="col") Created
        th(scope="col") Actions 
    tbody(v-if="post")
      tr
        th(scope="row") {{ post.id }} 
        td {{ post.title }}
        td {{ post.body }}
        td {{ post.created_at }} 
        td
          router-link.btn.btn-warning.btn-xs(:to="{ name: 'edit', params: { id: post.id }}") Edit 
          .btn.btn-danger.btn-xs(v-on:click.prevent="deletePost( post.id )") Delete
</template>

<script>
import post_controller from '../config/post_controller'

export default {
  data() {
    return {
      post: { id: null},
      errors: [] 
    }
  },
  methods:{
    deletePost (id){
      if (confirm('Are you sure to delete this post?')) {
        post_controller.destroy(id)
        .then(response =>{})
          .catch(e=>{
            this.errors.push(e)
          })
        event.target.parentElement.parentElement.remove()
        this.$router.go(-1)
      }
    }
  },
  created() {
    post_controller.show(this.$route.params.id)
      .then(response => {
        this.post = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped lang='scss'>
</style>
