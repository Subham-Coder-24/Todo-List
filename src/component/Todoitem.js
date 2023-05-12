import React from 'react'

function Todoitem(props) {
  
  return (
    <li 
       onClick={()=>{
        props.oncheck(props.id)
       }}
    >{props.text}</li>
  )
}

export default Todoitem