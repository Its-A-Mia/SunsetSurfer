import React, { useState, useEffect } from 'react'
import './Checkbox.css'
import '../Checkboxes/Checkboxes.js'



const Checkbox = ( props ) => {

    const [checkedBool, setCheckedBool] = useState(0)
    const [currentKey, setCurrentKey] = useState(props.currentKey)

    function changeCheckedBool() {
      checkedBool == 0 ?
      setCheckedBool(1) :
      setCheckedBool(0)
      console.log(checkedBool)

      setCurrentKey(currentKey + 1)
    }
    
    
    useEffect(() => {
      document.title = `Current Key: ${currentKey}`
    })
  //[STATE] parallel/tracker variable for the checkbox's checked-status
  //false by default to match default state of HTML checkboxes
  //if the checkbox is clicked, flip this value
  return (
    <input className='checkbox'
    id={props.listId}  
    type='checkbox' 
    disabled={props.listId > currentKey} 
    onClick={changeCheckedBool}
    />     
  )
}


export default Checkbox;