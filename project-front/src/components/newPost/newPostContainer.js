import React, {Component} from 'react'
import toastr from 'toastr'
//import axios from 'axios'
import NewPostDisplay from './newPostDisplay'
import {createPost} from '../../services/postService'
import {uploadPic} from '../../services/userService'



class newPostContainer extends Component{

  state = {
    postData:{},
    loading:false,
    user:{}

 }


componentWillMount(){
  const user = JSON.parse(localStorage.getItem('user'))
  if(!user) return this.props.history.push('/login')
  this.setState({user})
}


 onChange = (e) => {
  const field = e.target.name
  console.log(e.target.name)
  const value = e.target.value
  console.log(e.target.value)
  const {postData} = this.state
  postData[field] = value
  this.setState({postData})
}

//////////////////////////////////////////////



//////////////////////////////////////

 handleselect=(value)=>{
  const field = 'typeEvent'
  const {postData} = this.state
  postData[field] = value
  this.setState({postData})
}

 onChangeFile = (e) => {
  const field = "imageURL"
  const {postData} = this.state
  postData[field] = e.target.files[0]
  uploadPic(e.target.files[0])
  this.setState({postData})
}
/*
setCreator = () =>{
  const field="manager"
  const creator = JSON.parse(localStorage.getItem('user'))
  const {eventData} = this.state
  eventData[field] = creator._id
  this.setState({eventData})
}*/


//A L G O   DE  A Q U I ///
 newPost = (e) => {
   //this.setCreator()
   this.setState({loading:true})
   //e.preventDefault()
   const{postData} = this.state
   createPost(postData) //Envia los datos del formulario con axios
   .then(r=>{
     this.props.history.push(`/profile`)////
     return toastr.success("Post Creado!")
   })
   .catch(e=>{
     this.setState({loading:false})
     return toastr.error("Error al crear el post, intenta mas tarde")
   })
 }

 

  render(){
    return(
        <NewPostDisplay 
          newPost={this.newPost}
          onChange={this.onChange}
          onSubmit={this.newPost}
          loading={this.loading}
          handleselect={this.handleselect}
          onChangeFile={this.onChangeFile}
        />
    )
  }
}

export default newPostContainer