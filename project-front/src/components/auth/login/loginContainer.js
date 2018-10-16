import React, {Component} from 'react'
import axios from 'axios'
import toastr from 'toastr'
import LoginDisplay from './loginDisplay'

const url = 'http://localhost:3000/login'

class LoginContainer extends Component{

    state = {
        auth:{},
        loading:false
    }

    login = (e) => {
        this.setState({loading:true})
        e.preventDefault()
        const {auth} = this.state
        axios.post(url, auth)
        .then(res=>{
            let token = res.data.token
            let user = res.data.user
            console.log(user,token)
            toastr.success("Login Exitoso!")
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', token)
            this.setState({loading:false})
            const bonito = this.props.history
            bonito.push('/profile')

        })
        .catch(e=>{
            console.log(e)
            toastr.error("no quiero tu cochinada")
            this.setState({loading:false})
            
        })
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {auth} = this.state
        auth[field] = value
        this.setState({auth})
    }

    render(){
        return(
            <LoginDisplay 
            onChange={this.onChange}
            onSubmit={this.login}
            />
        )
    }
}



export default LoginContainer