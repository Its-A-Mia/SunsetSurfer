import React, { useState, useEffect } from 'react'
import './Checkbox.css'
import '../Checkboxes/Checkboxes.js'



const Checkbox = ( props ) => {
 
  // const cb = document.getElementsById(listIdString)
  

    const [checkedBool, setCheckedBool] = useState(0)

    function changeCheckedBool() {
      checkedBool == 0 ?
      setCheckedBool(1) :
      setCheckedBool(0)
      console.log(checkedBool)

      if (checkedBool == 0) {
        props.onClickCheckbox()
      }
    }
    
  //[STATE] parallel/tracker variable for the checkbox's checked-status
  //false by default to match default state of HTML checkboxes
  //if the checkbox is clicked, flip this value
  return (
    <input className='checkbox'
    id={props.listId}  
    type='checkbox' 
    disabled={props.listId > props.currentKey} 
    onClick={() => changeCheckedBool}
    />     
  )
}


export default Checkbox;
