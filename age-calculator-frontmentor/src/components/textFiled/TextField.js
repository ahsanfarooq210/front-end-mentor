import React from 'react'
import './TextField.css'


const TextField = (props) => {
  return (
    <div className='input-wrapper' >
        <input placeholder={props.placeholder}  />
    </div>
  )
}

export default TextField