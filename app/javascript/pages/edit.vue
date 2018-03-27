<template lang="pug">
#app
  .container
    .col-xs-10.offset-xs-1.col-md-4.offset-md-4
      .card.text-center
        .card-header Edit Post
        .card-body
          form(v-on:submit.prevent="patchPost")
            .form-group
              label Title
              input.form-control(v-model='post.title', :placeholder='post.title')
            .form-group
              label Body
              textarea.form-control(v-model='post.body', :placeholder='post.body')
            button.btn.btn-primary(type="submit") Submit
        .card-footer.text-muted
          .alert.alert-danger(v-for='(field, key in errors')
            strong(v-for='error in field') {{ key }} {{ error }}
          a(href="",v-on:click="goBack") Back 
</template>

<script>
import post_controller from '../config/post_controller'

export default {
  data() {
    return {
      post: {},
      errors: {} 
    }
  },
  methods:{
    patchPost() {
      post_controller.update(this.post)
        .then(response =>{
          this.goBack()
        })
        .catch(e=>{
          this.errors = e.response.data
        }) 
    },
    goBack(){
      this.$router.go(-1)
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
strong {
    display: inline-block;
}

strong::first-letter{
  text-transform:capitalize;
}
</style>
