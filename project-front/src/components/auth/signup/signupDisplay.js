import React from 'react'
import {Input, Button} from 'antd'
import { /*NavLink, withRouter,*/ Link } from 'react-router-dom'


/*
<form onSubmit={onSubmit} style={{width:600, margin:"0 auto", padding:20}}>
            <h1 style={{paddingTop:"200px"}}>Crea una cuenta 🐶</h1>
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
            <Button loading={loading} type="primary" htmlType="submit" onClick={redirectLogin} >Registrarme</Button>
            <br/>
            <br/>
            <h2>Ya tienes cuenta? Inicia sesion <Link to="/login">aqui!</Link></h2>
        </form>



///////


//
//<Input name="username" id="textLogin" className="textLogin" onChange={onChange} /* value={signup.username}*/ //type="text" placeholder="Username" /><br/>
//<Input name="email" className="email" onChange={onChange} /*value={signup.email}*/ type="email" placeholder="Tu correo" /><br/>
//<Input name="password" className="password" type="password" onChange={onChange} /*value={signup.password}*/ placeholder="Tu Password" /><br/>
//<Input name="password" className="password" type="password" onChange={onChange} /*value={signup.password}*/ placeholder="Tu Password" /><br/>
//<Button loading={loading} onClick={redirectLogin} className="primary" htmlType="submit" type="submit" >Crear Cuenta</Button>
//<Button loading={loading} type="primary" htmlType="submit" onClick={redirectLogin} >Registrarme</Button>




const SignupDisplay = ({redirectLogin, onChange, signup, loading, onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
        
            <div className="body" />
            <div className="grad" />
            <div className="header">
                <div>ADOPT<span>A</span>PET</div>
            </div>
            <br />
            <div className="login">
            <p>
                <Input 
                    id="textLogin" className="textLogin"
                    name="username"
                    type="text"
                    onChange={onChange}
                   // value={signup.username}
                    placeholder="Tu nombre de usuario" 
                />             
            </p>
            <p>
            <Input 
                className="email"
                name="email"
                type="email"
                onChange={onChange}
                //value={signup.email}
                placeholder="Tu correo" 
                />    
            </p> 
            <p>
            <Input 
                className="password"
                name="password"
                type="password"
                onChange={onChange}
                //value={signup.password}
                placeholder="Tu Password" 
                />    
            </p>  
            <p>
            <Input 
                className="password"
                name="password2"
                type="password"
                onChange={onChange}
                //value={signup.password2}
                placeholder="Repite tu Password" 
                />    
            </p>   
            <Button className="primary" loading={loading} type="primary" htmlType="submit" onClick={redirectLogin} >Registrarme</Button>
            <h2><strong>Ya tienes cuenta? Inicia sesion <Link className="aqui" to="/login">aqui!</Link></strong></h2>

            </div>
      
      </form>
        )
    }


export default SignupDisplay

