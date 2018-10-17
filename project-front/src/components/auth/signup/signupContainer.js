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
            return toastr.error('Las contrasenas no coinciden!')
        }
        axios.post('http://localhost:3000/signup', signup)
        .then(user=>{
            console.log(user)
            this.props.history.push(`/profile`)
            toastr.success("Registro exitoso!")
        })
        .catch(e=>toastr.error("Error al registrarse!"))
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