import React, { useState, useEffect } from 'react'
import './Checkbox.css'
import '../Checkboxes/Checkboxes.js'



const Checkbox = ( props ) => {
  let listIdString = props.listId.toString()
  // const cb = document.getElementsById(listIdString)
  console.log(listIdString)

  return (
    <input className='checkbox' id={listIdString} type='checkbox' onClick={props.checkboxBool}/>        
  ) 
}

export default Checkbox;