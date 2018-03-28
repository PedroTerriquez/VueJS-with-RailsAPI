<template lang="pug">
#header
  nav#mainNav.navbar.navbar-expand-lg.navbar-dark.bg-dark
    .container
      a.navbar-brand.js-scroll-trigger(href='/') Home
      div(v-if="logged")
        a.navbar-brand.js-scroll-trigger(href='',v-on:click.prevent="logOut") Log out
      div(v-else)
        a.navbar-brand.js-scroll-trigger(href='/signup') Sign Up
        a.navbar-brand.js-scroll-trigger(href='/signin') Sign In

  header
    .container
      .row.branding
        .col-md-1
          img.imagen.logo(src='https://vuejs.org/images/logo.png', alt='Logo')
        .col-md-11
          h1 Vue.js CRUD POSTS
          p Created by: 
            a(href='https://github.com/PedroTerriquez') Pedro Terriquez
</template>

<script>
import post_controller from '../config/post_controller'

export default{
  data(){
    return{
      logged: sessionStorage.getItem('JWT')
  }
  },
  methods: {
    logOut(){
      sessionStorage.removeItem('JWT')  
      this.logged = null
      this.$router.push({ path: '/' })
      this.$router.push({ path: '/signin' })
    }
  }
}
</script>

<style scoped>
header {
  padding: 154px 0 100px;
}

@media (min-width: 992px) {
  header {
    padding: 25px 0 2px;
  }
}

section {
  padding: 150px 0;
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  margin:-30px 0 0 -30px;
  animation:spin 1s linear infinite;
}
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>
