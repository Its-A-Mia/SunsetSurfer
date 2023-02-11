import React from 'react'
import './ResetWinMessage.css'

const ResetWinMessage = ( props ) => {

  return (
      <button className='reset' onClick={props.resetGame}>reset</button>
  )
}

export default ResetWinMessage