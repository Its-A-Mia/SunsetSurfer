import React, { useState, useEffect } from 'react'
import './Checkbox.css'
import '../Checkboxes/Checkboxes.js'



const Checkbox = ( props ) => {
  
  //[STATE] parallel/tracker variable for the checkbox's checked-status
  //false by default to match default state of HTML checkboxes
  //if the checkbox is clicked, flip this value
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
