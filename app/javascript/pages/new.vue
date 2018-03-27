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
              input.form-control(v-model='post.title', placeholder='Title')
            .form-group
              label Body
              textarea.form-control(v-model='post.body', placeholder='Body')
            button.btn.btn-primary(type='submit') Submit
        .card-footer.text-muted
          .alert.alert-danger(v-for='(field, key in errors')
            strong(v-for='error in field') {{ key }} {{ error }}
          a(href="#",v-on:click="goBack") Back 
</template>

<script>
import post_controller from '../config/post_controller'

export default {
  data() {
    return {
      post: {
        title: null,
        body: null
      },
      errors: {} 
    }
  },
  methods:{
    postPost() {
      post_controller.create(this.post)
      .then(response =>{
        this.goBack()
      })
        .catch(e => {
          this.errors = e.response.data
          console.log(this.errors)
        })
    },
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang='scss'>
strong {
    display: inline-block;
}

strong::first-letter{
  text-transform:capitalize;
}
</style>
