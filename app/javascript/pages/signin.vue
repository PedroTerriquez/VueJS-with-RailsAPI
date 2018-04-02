<template lang="pug">
#app
  .container
    .col-xs-10.offset-xs-1.col-md-4.offset-md-4
      .card.text-center
        .card-header Sign In
        .card-body
          form(v-on:submit.prevent="signIn")
            .form-group
              label email
              input.form-control(type="email", value="user", v-model='user.email')
            .form-group
              label password
              input.form-control(type="password",v-model='user.password')
            button.btn.btn-primary(type="submit") Submit
        .card-footer.text-muted
          .alert.alert-danger(v-for='(field, key in errors')
            strong(v-for='error in field') {{ key }} {{ error }}
          a(href="",v-on:click="goSignUp") Create an account 
</template>

<script>
import user_controller from '../config/user_controller'

export default {
  data() {
    return {
      user: {
        email:null,
        password:null
      },
      errors: {} 
    }
  },
  methods:{
    signIn() {
      user_controller.signin(this.user)      
        .then(response =>{
          sessionStorage.setItem("user", JSON.stringify(response.data))
          this.$store.commit('user',response.data)
          this.goBack()
        })
        .catch(e=>{
          this.errors = e.response
        }) 
    },
    goSignUp(){
      this.$router.push({ path: "/signup"})
    },
    goBack(){
      this.$router.go(-1)
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
