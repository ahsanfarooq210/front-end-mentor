import React from 'react'
import './TextField.css'


const TextField = (props) => {
  return (
    <div className='input-wrapper' >
      <label htmlFor={props.inputId} >{props.label}</label>
        <input id={props.inputId} placeholder={props.placeholder}  />
    </div>
  )
}

export default TextField