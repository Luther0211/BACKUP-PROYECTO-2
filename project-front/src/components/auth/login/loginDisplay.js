import {Input, Button} from 'antd'
import React from 'react'
import { /*NavLink, withRouter,*/ Link } from 'react-router-dom'


/*
<form onSubmit={onSubmit} style={{width:600, margin:"0 auto", padding:"20"}}>
            <h1 style={{paddingTop:"200px"}}>Inicia sesión 😺</h1>
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
            <br/>
            <br/>
            <h2>No tienes cuenta? Crea una <Link to="/signup">aqui!</Link></h2>
        </form>
*/
const LoginDisplay = ({onChange, loading, onSubmit}) => {
    return(
    <form onSubmit={onSubmit}>
        
        <div className="body" />
        <div className="grad" />
        <div className="header">
          <div>ADOPT<span>A</span>PET</div>
        </div>
        <br />
        <div className="login">
          <Input className="email" placeholder="email" name="email" type="email" onChange={onChange} /><br />
          <Input className="password" placeholder="password" name="password" type="password" onChange={onChange} />
          <br/>
          <button loading={loading} className="primary" >Inicia sesión</button>
          <h2><strong>No tienes cuenta? Crea una <Link to="/signup" className="aqui">aqui!</Link></strong></h2>

        </div>
      
      </form>
    )
}

export default LoginDisplay