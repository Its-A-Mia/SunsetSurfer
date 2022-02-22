import React, { useState, useEffect } from 'react'
import './Checkbox.css'
import '../Checkboxes/Checkboxes.js'



const Checkbox = ( props ) => {
  
  //const [disabledFalse, setDisabledFalse] = useState
  
  // useEffect(() => {
  //   function handleDisableBoolChange(disabledBoolValue) {

  //   }

  // })
  return (
    <input className='checkbox' type='checkbox' disabled={props.disabledFalse} onClick={props.checkboxBool}/>        
  ) 
}

export default Checkbox;