import React, { useState } from 'react'
import './Checkbox.css'

const Checkbox = (props) => {

    const [checkboxClickedBool, setCheckboxClickedBool] = useState(0);

    const changeClickedBool = () => {
        checkboxClickedBool == 0 ? 
        setCheckboxClickedBool(1)
        : setCheckboxClickedBool(0)

        return checkboxClickedBool; 
        }

    console.log(checkboxClickedBool);

  return (
          <input className='checkbox' type='checkbox' onClick={changeClickedBool}/>
  )      
}

export default Checkbox;