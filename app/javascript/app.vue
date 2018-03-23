<template lang="pug">
  #app
    app-header
    router-view.content-app
    app-footer
</template>

<script>
import Header from './pages/header.vue'
import Footer from './pages/footer.vue'
import router from './config/router'

export default{
  router,
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style scoped lang='scss'>
.content-app {
  margin-bottom: 112px;
}
</style>
