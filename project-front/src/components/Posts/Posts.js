import React, {Component} from 'react'
import axios from 'axios'
import Cards from './Card'




class Posts extends Component {

  state = {
    data: []
  }
  
  componentDidMount() {
    const url = "http://localhost:3000/posts";

    axios.get(url)
      .then(res => {
        const data =this.state.data
        
        res.data.data.forEach( e => {
          data.push(e)
        })

        this.setState({
          data
        })
      }).catch(err => console.log(err))

  }

  /*<h1>Posts</h1>
          <div>
            <h2>titulo</h2>
          </div>
          <div>
            <p>Direccion</p>
          </div>*/
  
  render() {
    
    return(
        <div className="postList">
          {this.state.data.map((e,i)=>(
            <Cards
            className="cardPosted"
            key={i}
            data={this.state.data[i]}
            />
          ))}
          
        </div>
      )
  }


}


export default Posts