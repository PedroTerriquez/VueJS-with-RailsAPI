import axios from 'axios';
import store from './session'

function config() {
  if (store.state.user)
    return {
      headers: { 'Authorization': "Bearer " + store.state.user.auth_token }
  }
}

const post_controller = (function (){
  function update(post){
    return axios.patch(`/api/posts/${post.id}`,post,config())
  }
  function create(post){
    return axios.post( `/api/posts`, post,config())
  }
  function destroy(id){
    return axios.delete(`/api/posts/${id}`,config())
  }
  function show(id){
    return axios.get(`/api/posts/${id}`,config())
  }
  function all(){
    return axios.get(`/api/posts`,config())
  }

  return { update, create, destroy, show, all } ;
})()

export default post_controller;
