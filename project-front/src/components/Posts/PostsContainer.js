import React, {Component} from 'react'
//import PostsDisplay from './PostsDisplay'
import axios from 'axios'
import{getPub} from '../../services/postService'
import Posts from './Posts'


class PostsContainer extends Component{

  state = {
    pubData: {},
    pubs: [],
    loading:false,
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    //if(!user) return this.props.history.push('/login')
    this.setState({user})

    const url = "http://localhost:3000/"
    return axios.get(url + "posts")
    .then(event=> {
      console.log(event)
      this.setState({
        pubs: event.data.anuncios
      })
    })
    .catch(error=> {
      return error
    })
  }


  getPost = () => {
    getPub()
    .then(pubs => {
      this.setState({pubs})
    })
    .catch(e=>{
      console.log(e)
    })
  }










  render(){
    console.log(this.state)
    return(
        <div>
          {/*<PostsDisplay 
          
          />*/}
          <h1>Animales en busca de hogar</h1>
  
          <Posts adds={this.state.pubs}/>
        </div>
    )
  }


}



export default PostsContainer