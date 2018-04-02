import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null 
  },
  mutations: {
    user (state, value) {
      state.user = value
    }
  }
})

export default store;
