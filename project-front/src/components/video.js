import React, {Component} from 'react'

class Video extends Component{
  render(){
    return(
      <div>
        <video muted autoPlay loop id="myVideo" style={this.props.style}>
          <source src="https://res.cloudinary.com/due9wnjtm/video/upload/v1539543133/project3videos/pets3.mp4" type="video/mp4" ></source>
        </video>
      </div>
    )
  }
}

export default Video