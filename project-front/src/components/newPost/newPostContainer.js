import React, {Component} from 'react'
import toastr from 'toastr'
//import axios from 'axios'
import NewPostDisplay from './newPostDisplay'
import {createPost} from '../../services/postService'
//import {uploadPic} from '../../services/userService'



class newPostContainer extends Component{

  state = {
    postData:{},
    loading:false,
    user:{}

 }


componentWillMount(){
  const user = JSON.parse(localStorage.getItem('user'))
  //if(!user) return this.props.history.push('/login')
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
  console.log(postData)
}



//////////////////////////////////////////////



//////////////////////////////////////

 handleselect=(value)=>{
 console.log(value)
  const field = "animalType"
  const {postData} = this.state
  postData[field] = value
  this.setState({postData})
}

handleselect2=(value)=>{
  console.log(value)
   const field = "animalSize"
   const {postData} = this.state
   postData[field] = value
   this.setState({postData})
 }
///////////////////////////////////////////////////////////////////

 onChangeFile = (e) => {
   console.log(e)
  const field = "image"
  const {postData} = this.state
  postData[field] = e.file.originFileObj
  //uploadPic(e.target.files[0])
  this.setState({postData})
}
/*
setCreator = () =>{
  const field=""
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
     this.props.history.push(`/posts`)////
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
          handleselect2={this.handleselect2}
          onChangeFile={this.onChangeFile}
        />
    )
  }
}

export default newPostContainer