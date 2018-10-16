import React from 'react'
import {Input, Button} from 'antd'


const SignupDisplay = ({redirectLogin, onChange, signup, loading, onSubmit}) => {
    return(
        <form onSubmit={onSubmit} style={{width:600, margin:"0 auto", padding:20}}>
            <h2 style={{paddingTop:"200px"}}>Crea una cuenta :-)</h2>
            <p>
                <Input 
                    name="username"
                    type="text"
                    onChange={onChange}
                   // value={signup.username}
                    placeholder="Tu nombre de usuario" 
                />
                
            </p>
            <p>
            <Input 
                name="email"
                type="email"
                onChange={onChange}
                //value={signup.email}
                placeholder="Tu correo" 
                />    
            </p> 
            <p>
            <Input 
                name="password"
                type="password"
                onChange={onChange}
                //value={signup.password}
                placeholder="Tu Password" 
                />    
            </p>  
            <p>
            <Input 
                name="password2"
                type="password"
                onChange={onChange}
                //value={signup.password2}
                placeholder="Repite tu Password" 
                />    
            </p>   
            <Button /*loading={loading}*/ type="primary" htmlType="submit" onClick={redirectLogin} >Registrarme</Button>
        </form>
        )
    }


export default SignupDisplay