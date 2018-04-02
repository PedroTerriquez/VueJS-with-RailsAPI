<template lang="pug">
#app
  .container
    .col-xs-10.offset-xs-1.col-md-4.offset-md-4
      .card.text-center
        .card-header Sign Up
        .card-body
          form(v-on:submit.prevent="signUp")
            .form-group
              label First Name
              input.form-control(v-model='user.first_name')
            .form-group
              label Last Name
              input.form-control(v-model='user.last_name')
            .form-group
              label Email
              input.form-control(type="email", v-model='user.email')
            .form-group
              label Password
              input.form-control(type="password",v-model='user.password')
            button.btn.btn-primary(type="submit") Submit
        .card-footer.text-muted
          .alert.alert-danger(v-for='(field, key in errors')
            strong(v-for='error in field') {{ key }} {{ error }}
          a(href="", v-on:click="goSignIn") Sign in instead 
</template>

<script>
import user_controller from '../config/user_controller'

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
        first_name:null,
        last_name:null
      },
      errors: {} 
    }
  },
  methods:{
    signUp() {
      console.log(this.user)
      user_controller.signup(this.user)
        .then(response =>{
          sessionStorage.setItem("user", JSON.stringify(response.data))
          this.$store.commit('user',response.data)
          this.$router.push({ path: '/'})
        })
        .catch(e=>{
          this.errors = e.response.data
        })
    },
    goBack(){
      this.$router.go(-1)
    },
    goSignIn(){
      this.$router.push({ path: '/signin'})
    }
  },
  created() {
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
