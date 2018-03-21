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
          .btn.btn-light   
            router-link(:to="{ name: 'edit', params: { id: post.id }}") Edit 
          .btn.btn-light(v-on:click.prevent="deletePost( post.id)") Delete
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      post: {},
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
        this.$router.go(-1)
      }
    }
  },
  created() {
    axios.get(`api/posts/`+ this.$route.params.id)
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
