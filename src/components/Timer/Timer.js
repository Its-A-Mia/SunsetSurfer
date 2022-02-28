import React, { useState, useEffect } from 'react'
import './Timer.css'

const Timer = (props) => {
  
  const [timer, setTimer] = useState(null)

  useEffect(() => {
      if (props.gateValue === 1) {
            props.setGateValue(2) //sets gateValue to 2 to 
            const startTime = Date.now();
            const tick = setInterval(() => {
              setTimer(timeLogic(Date.now() - startTime), 60 * 1000)
              }) 
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
    <span className='timer'>{timer}</span>
  )
}

export default Timer