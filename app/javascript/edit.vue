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
          a(href='', v-on:click.prevent="goBack") Back 
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
    patchPost() {
      axios.patch(`api/posts/`+this.post.id,this.post)
      .then(response =>{})
        .catch(e=>{
          this.errors.push(e)
        })
      goBack()
    },
    goBack(){
      this.$router.go(-1)
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
