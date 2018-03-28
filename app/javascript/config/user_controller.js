import axios from 'axios';
const user_controller = (function (){
  function update(user){
    return axios.patch(`/api/users/${users.id}`,user)
  }
  function destroy(id){
    return axios.delete(`/api/users/${id}`)
  }
  function show(id){
    return axios.get(`/api/users/${id}`)
  }
  function all(){
    return axios.get(`/api/users`)
  }
  function signin(user){
    return axios.post(`/api/login`, user)
  }
  function signup(user){
    return axios.post( `/api/users`, user)
  }

  return { update, destroy, show, all, signin, signup } ;
})()

export default user_controller;
