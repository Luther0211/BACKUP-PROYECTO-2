import React, {Component} from 'react'
import { Button } from 'antd';

class Video extends Component{

  redirectPosts = () => {
    this.props.history.push('/posts')
  }

  render(){
    return(
      <div>
        <div id="indexDiv">
        <div id="logodiv">
        <img className="png" src="https://i.imgur.com/vxZAQpd.png" alt="png" />
        <img className="gifCat" src="https://ezgif.com/images/loadcat.gif" alt="dancing cat" />
        <p>
        <Button id="adoptNow" onClick={this.redirectPosts} type="primary">Adopt Now!</Button>
        </p>
        </div>
       </div>
        <video muted autoPlay loop id="myVideo" style={this.props.style}>
          <source src="https://res.cloudinary.com/due9wnjtm/video/upload/v1539543133/project3videos/pets3.mp4" type="video/mp4" ></source>
        </video>
      </div>
    )
  }
}

export default Video