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
            console.log(res)
            toastr.success("Te logueate!")
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.token)
            this.setState({loading:false})
            const bonito = this.props.history
            bonito.push('/profile')

        })
        .catch(e=>{
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