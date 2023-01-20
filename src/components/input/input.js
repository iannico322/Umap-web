import React from 'react'
import './input.css';
export const Input = (props) => {
  return (
    <div className='input'>
        <h3>{props.text}</h3>
        <input className='textField' name={props.name} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required />
        <h5 style={{color:props.color}} >{props.inputWarning}</h5>
    
    </div>
  )
}
