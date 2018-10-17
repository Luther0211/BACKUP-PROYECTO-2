import React, {Component} from 'react'
//import logo from '../../logo.svg'
//import axios from 'axios'
import toastr from 'toastr'
import {uploadPic} from '../../services/userService'
import {Button} from 'antd'
import './profile.css';




class Profile extends Component{

    state = {
        user:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        
        if(!user) return this.props.history.push('/login')
        this.setState({user})
    }

   // getPrivateInfo = () => {
   //     axios.get('http://localhost:3000/private', {
   //         headers:{
   //             "Authorization" : localStorage.getItem('token') 
   //         }
   //     })
   //     .then(res=>{
   //         console.log(res)
   //     })
   //     .catch(e=>toastr.error("algo falló", e.message))
   // }


    createPost = () => {

    }


    uploadPhoto = () => {
        this.refs.input.click()
    }

    onChangeFile = (e) => {
        console.log(e.target.files[0])
        uploadPic(e.target.files[0])
        .then(pic=>console.log(pic))
        .catch(e=>toastr.error('Error'))
    }

    profilePhoto = () => {
        this.refs.input.click()
    }


    redirectPost = () => {
        this.props.history.push('/new_post')
    }


    logout=() =>{
        localStorage.clear();
        //location.href = '/login';
        this.props.history.push('/login')
    }

    /*
    <div style={{paddingTop:'100px'}}>
                <Button type="danger" block onClick={this.logout}>Log Out</Button>
                <img style={{borderRadius:'50%', border:"3px solid black"}} src='https://pre00.deviantart.net/c246/th/pre/i/2016/204/4/b/my_tumblr_profile_pic_by_huirou-dab2i4u.png' width="200" height="200" onClick={this.profilePhoto} alt="user"/>
                <h1>{user.username}</h1>
                <p>{user.email}</p>
                <hr/>
                <h2>Crea un post nuevo!</h2>
                <div>
                    <br/>
                    <Button onClick={this.redirectPost}>Crear post</Button>
                </div>
            </div>
    */



    render(){
        const {user} = this.state
        console.log(this.props)
        return(
            <div>
                <div>
        <input id="slider" className="customSlider" type="checkbox" />
        <label htmlFor="slider" />
        <div className="wrapper  profileCard">
        <Button type="danger" block onClick={this.logout}>Log Out</Button>

          <div className="top-icons">
          </div>
          <div className="profile">
            <img src="https://cdn3.androidworld.nl/1fa5702da8/media/images/2018/06/04/github-256.png" className="thumbnail" />
            <div className="check" />
            <h1>{user.username}</h1>
                <p>{user.email}</p>
                <hr/>
                <h2>Crea un post nuevo!</h2>
                <div>
                    <br/>
                    <Button onClick={this.redirectPost}>Crear post</Button>
                </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Profile