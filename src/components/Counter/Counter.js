import React, { useState, useEffect } from 'react'
import './Counter.css'

const Counter = (props) => {
  const [counter, setCounter] = useState(null)

  useEffect (() => {
    setCounter(() => counterLogic())
  })
  
  function counterLogic() {
    if (props.currentKey < 11) {
      return `00${props.currentKey - 1}/100`
    } else if (props.currentKey < 101) {
      return `0${props.currentKey - 1}/100`
    } else {return `${props.currentKey - 1}/100`}  
  }

  return (
    <span className='counter'>{counter}</span>
  )
}

export default Counter