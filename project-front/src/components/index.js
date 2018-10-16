import React, {Component} from 'react'
import { Button } from 'antd';

//            <img style={{borderRadius:'50%'}} src={user.photoURL} width="200" alt="user"/>
//            <h1>{user.username}</h1>
//            <p>{user.email}</p>
//            <button onClick={this.getPrivateInfo} >Bajate mi pack privado ;)</button>
//            <input accept="image/*" onChange={this.onChangeFile} ref="input" hidden type="file" />
//            <br/>
//            <img style={{cursor:"pointer"}} width="100" onClick={this.uploadPhoto} src="https://cdn.onlinewebfonts.com/svg/img_212908.png" alt="profilePic" />


//            <img src="https://www.clarionlbv.com/wp-content/uploads/2014/08/pets.jpg" alt="mainImage" id="mainImage" style={{width:'99.5vw', height:"99.5vh"}} />

//<div id="mainDiv">
//          
//</div>

class Index extends Component{

  redirectPosts = () => {
    this.props.history.push('/posts')
  }

  render(){
    return(
       <div id="indexDiv">
        <div id="logodiv">
        <img className="png" src="https://i.imgur.com/vxZAQpd.png" alt="png" />
        <img className="gifCat" src="https://ezgif.com/images/loadcat.gif" alt="dancing cat" />
        <p>
        <Button id="adoptNow" onClick={this.redirectPosts} type="primary">Adopt Now!</Button>
        </p>
        </div>
       </div>
      )
  }

}

export default Index 