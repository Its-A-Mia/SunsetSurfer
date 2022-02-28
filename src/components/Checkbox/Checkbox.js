import React, { useEffect } from 'react'
import './Checkbox.css'
import '../Checkboxes/Checkboxes.js'

const Checkbox = ( props ) => {

  function getRandomInteger(max, min) {
    return Math.random() * (max - min + 1) + min;
  }

  useEffect (() => {
    const checkbox = document.getElementById(props.listId)
    function randomCheckboxMovement(){
      checkbox.style.transform = `translateY(${getRandomInteger(props.currentKey, -(props.currentKey))}px)`  
    }
    if (props.listId !== props.currentKey || props.listId === 1) return; {
      randomCheckboxMovement();
    }
    if (props.gateValue === 0) {
      props.setGateValue(0)
      checkbox.style.transform = 'none';
      console.log('checkbox reset?')
    }
  })

  return (
    <input className='checkbox'
    id={props.listId}  
    type='checkbox' 
    disabled={props.listId > props.currentKey || props.currentKey === 101}
    checked={props.listId < props.currentKey || props.currentKey === 101}
    onClick={props.onClickCheckbox}
    />  
  )
}


export default Checkbox;
