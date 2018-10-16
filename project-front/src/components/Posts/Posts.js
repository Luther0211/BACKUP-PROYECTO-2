import React from 'react'

const Posts = (props) => {
  console.log(props.adds)
  if(props.adds.length <=0) return <h1>No hay posts disponibles :c</h1>

  return(
    <div style={{display:'flex', flexWrap:"wrap"}}>
      {props.adds.map((p,i) => (
        <p key={i}> {p.name} <br/>
        {p.text}</p>
      ))}
      <h1 id='hola'>HOLAAA</h1>


    </div>
  )
}


export default Posts