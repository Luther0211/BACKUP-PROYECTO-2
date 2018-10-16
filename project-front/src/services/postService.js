import axios from 'axios'

const url = 'http://localhost:3000/'

export const createPost = (newPostData) => {
   //const form = new FormData()
   //for(let key in newPostData){
   //    form.append(key, newPostData[key])
   //}
   return axios.post(url + "newPost", newPostData,{
       headers:{
           'Authorization':localStorage.getItem('token')
       }
   })
       .then(p=>{
           return p
       })
       .catch(error=>{
           return error
       })
}