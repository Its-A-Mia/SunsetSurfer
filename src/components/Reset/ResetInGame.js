import React from 'react'
import './ResetInGame.css'

const ResetInGame = ( props ) => {

  return (
    <div className='resetInGameContainer'>
      <button className='reset' onClick={props.resetGame}>reset</button>
    </div>
  )
}

export default ResetInGame