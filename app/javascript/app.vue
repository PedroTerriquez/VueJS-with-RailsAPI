<template lang="pug">
  #app
    b-alert(show) {{ message }} 
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../../node_modules/bootstrap/scss/bootstrap.scss'
@import '../../node_modules/booostrap-vue/dist/bootstrap-vue.css'
</style>
