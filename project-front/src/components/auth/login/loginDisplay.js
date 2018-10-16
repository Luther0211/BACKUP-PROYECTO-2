import {Input, Button} from 'antd'
import React from 'react'


const LoginDisplay = ({onChange, auth, login, loading, onSubmit}) => {
    return(
        <form onSubmit={onSubmit} style={{width:600, margin:"0 auto", padding:"20"}}>
            <h2 style={{paddingTop:"200px"}}>Inicia sesión :-)</h2>
            <p style={{marginTop:"0"}}>
            <Input 
                name="email"
                type="email"
                onChange={onChange}
                //value={auth.email}
                placeholder="Tu correo" 
                />    
            </p> 
            <p>
            <Input 
                name="password"
                type="password"
                onChange={onChange}
                //value={auth.password}
                placeholder="Tu Password" 
                />    
            </p>   
            <Button loading={loading} type="primary" htmlType="submit" >Inicia sesión</Button>
        </form>
    )
}

export default LoginDisplay