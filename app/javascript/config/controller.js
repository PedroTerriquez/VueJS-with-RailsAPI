import axios from 'axios';
const controller = (function (){
  function update(post){
    return axios.patch(`/api/posts/${post.id}`,post)
  }
  function create(post){
    return axios.post( `/api/posts`, post)
  }
  function destroy(id){
    return axios.delete(`/api/posts/${id}`)
  }
  function show(id){
    return axios.get(`/api/posts/${id}`)
  }
  function all(){
    return axios.get(`/api/posts`)
  }

  return { update, create, destroy, show, all } ;
})()

export default controller;
