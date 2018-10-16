import React, {Component} from 'react'
import toastr from 'toastr'
import axios from 'axios'
import SignupDisplay from './signupDisplay'

class SignupContainer extends Component{

    state = {
        signup:{username:""},
        loading:false
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {signup} = this.state
        signup[field] = value
        this.setState({signup})
    }

    createUser = (e) => {
        e.preventDefault()
        const {signup} = this.state
        if(signup.password !== signup.password2) {
            return toastr.error('Escribe bien hijo!')
        }
        axios.post('http://localhost:3000/signup', signup)
        .then(user=>{
            console.log(user)
            toastr.success("hey! lo lograte!")
        })
        .catch(e=>toastr.error("No pitufa"))
    }


    //
    redirectLogin = () => {
        this.props.history.push('/login')
    }
    //



    render(){
      return(
        <div>
          <SignupDisplay 
          onClick={this.redirectLogin}
          onChange={this.onChange}
          onSubmit={this.createUser}
          />
        </div>
      )
    }
    
}

export default SignupContainer