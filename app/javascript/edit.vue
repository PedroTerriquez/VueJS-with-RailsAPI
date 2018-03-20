<template lang="pug">
#app
  .container
    .col-xs-10.offset-xs-1.col-md-4.offset-md-4
      .card.text-center
        .card-header Edit Post
        .card-body
          form
            .form-group
              label Title
              input.form-control(:placeholder='post.title')
            .form-group
              label Body
              textarea.form-control(:placeholder='post.body')
            button.btn.btn-primary(type='submit') Submit
        .card-footer.text-muted you want to go 
          router-link(:to="{ path: '/' }") Back?
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      message: "This is index bitch",
      post: {},
      errors: [] 
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
