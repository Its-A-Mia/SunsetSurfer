import React from 'react'
import './Reset.css'

const Reset = ( props ) => {

  return (
    <button className='reset' onClick={props.resetGame}>reset</button>
  )
}

export default Reset