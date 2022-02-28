import React, { useState, useEffect } from 'react'
import Reset from '../Reset/Reset'
import './WinMessage.css'


const WinMessage = ( props ) => {

  const [endTime, setEndTime] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const [totalTime, setTotalTime] = useState(null)

  useEffect (() => {
    if (props.gateValue === 1) {
      setStartTime(Date.now()) //captures the intitial time
    }
    if (props.gateValue === 3) {
      props.setGateValue(4) //sets gateValue to 4 to allow WinMessage component to execute final math after endTime updates
      setEndTime(Date.now())  //captures final time
    }
    if (props.gateValue === 4) {
      props.setGateValue(5)
      setTotalTime(timeLogic(endTime - startTime))
    }
  })

  function timeLogic(duration) {
    var milliseconds = parseInt((duration % 1000) / 10)
    .toString()
    .padStart(2, "0")
    var seconds = Math.floor((duration / 1000) % 60)
    var minutes = Math.floor((duration / (1000 * 60)) % 60)
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className='winMessageContainer'>
        <p className='nice'>
            NICE!
        </p>
        <p className='timeReadout'>
            Your Time was <strong>{totalTime}</strong>
        </p>
        <Reset 
          resetGame={props.resetGame}
        />
    </div>
  )
}

export default WinMessage