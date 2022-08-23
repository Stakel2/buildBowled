import React from 'react'
import './TextError.scss'

function TextError (props) {
  return <div className='error'>{props.children}</div>
}

export default TextError