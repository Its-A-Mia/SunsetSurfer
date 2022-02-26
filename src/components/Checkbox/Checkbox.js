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
      if (props.listId < 25) {
      checkbox.style.transform = `translateY(${getRandomInteger(10, -10)}px)`
      } else if (props.listId < 50) {
      checkbox.style.transform = `translateY(${getRandomInteger(45, -45)}px)`  
      } else if (props.listId < 75) {
      checkbox.style.transform = `translateY(${getRandomInteger(70, -70)}px)`     
      } else if (props.listId <= 100) {
      checkbox.style.transform = `translateY(${getRandomInteger(100, -100)}px)` 
      }
    }
    if (props.listId !== props.currentKey || props.listId === 1) return; {
      randomCheckboxMovement();
    }
  })

  return (
    <input className='checkbox'
    id={props.listId}  
    type='checkbox' 
    disabled={props.listId > props.currentKey}
    checked={props.listId < props.currentKey}
    onClick={props.onClickCheckbox}
    />  
  )
}


export default Checkbox;
