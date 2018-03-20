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
        td EDITDELETE
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
