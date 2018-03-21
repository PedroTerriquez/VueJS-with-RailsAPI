<template lang="pug">
#app
  .container
    .col-xs-10.offset-xs-1.col-md-4.offset-md-4
      .card.text-center
        .card-header New Post
        .card-body
          form(v-on:submit.prevent="postPost")
            .form-group
              label Title
              input.form-control(v-model='post.title', placeholder='Title', :required="true")
            .form-group
              label Body
              textarea.form-control(v-model='post.body', placeholder='Body', :required="true")
            button.btn.btn-primary(type='submit') Submit
        .card-footer.text-muted
          a(v-on:click="goBack") Back 
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
    postPost() {
      axios.post( `api/posts/`, this.post)
      .then(response =>{
        this.goBack()
      })
        .catch(e=>{
          this.errors.push(e)
        })
    },
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
