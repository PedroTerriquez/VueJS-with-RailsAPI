<template lang="pug">
#app
  .container
    .col-xs-10.offset-xs-1.col-md-4.offset-md-4
      .card.text-center
        .card-header New Post
        .card-body
          form
            .form-group
              label Title
              input.form-control(placeholder='Title')
            .form-group
              label Body
              textarea.form-control(placeholder='Body')
            button.btn.btn-primary(type='submit') Submit
        .card-footer.text-muted you want to go 
          router-link(:to="{ path: '/' }") Back?
</template>

<script>
export default {
  data: function () {
    return {
      message: "This is the new!"
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
