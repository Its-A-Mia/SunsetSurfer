import React, { useState, useEffect } from 'react'
import './Timer.css'

const Timer = (props) => {
  var milliseconds, seconds, minutes;
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    if (props.currentKey === 2) {
    const tick = setInterval(() => {
      setTimer(timerLogic(Date.now() - props.startTime))
    })
  }
  })

  function timerLogic(duration) {
    milliseconds = parseInt((duration % 1000) / 10)
    .toString()
    .padStart(2, "0")
    seconds = Math.floor((duration / 1000) % 60)
    minutes = Math.floor((duration / (1000 * 60)) % 60)
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <span className='timer'>{timer}</span>
  )
}

export default Timer