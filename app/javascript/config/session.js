import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      auth_token: "Token empty"
    } 
  },
  mutations: {
    user (state, value) {
      state.user = value
    }
  }
})

export default store;

