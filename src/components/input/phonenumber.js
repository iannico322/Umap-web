import React from 'react'
import './input.css';
export const Phone = (props) => {
  return (
    <div className='input2'>
        <h3>{props.text}</h3>
        <div>
            <p>+63</p>
             <input className='textField' pattern="\+\d{2} \d{3} \d{3} \d{4}" type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required />
        </div>
       
    </div>
  )
}
