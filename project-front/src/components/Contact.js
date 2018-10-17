import React, {Component} from 'react'


class Contact extends Component{

  

  render(){
    return(
       <div className="contactCard">
         <div className="contactCardInfo">
            <h1>Contacto</h1>
            <strong>Email: </strong> <span>contact@adoptapet.com</span> <br/>
            <strong>Phone Number: </strong> <span>+52 55 77 99 55</span><br/>
            <strong>Fax Number: </strong> <span>+1 323 555 1234</span>
         </div>
       </div>
      )
  }

}

export default Contact 