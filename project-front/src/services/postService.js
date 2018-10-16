import axios from 'axios'

const url = 'http://localhost:3000/'

export const createPost = (newPostData) => {
   //const form = new FormData()
   //for(let key in newPostData){
   //    form.append(key, newPostData[key])
   //}
   return axios.post(url + "newPost", newPostData)
       .then(p=>{
           return p
       })
       .catch(error=>{
           return error
       })
}

export const getPub = () => {
    return axios.get(url + "newPost")
    .then(event=> {
        return event
    })
    .catch(error=>{
        return error
    })
}