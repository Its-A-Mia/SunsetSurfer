import React, { useState } from 'react'
import './Checkbox.css'

const Checkbox = () => {

    const [checkboxClickedBool, setCheckboxClickedBool] = useState(0);

    const changeClickedBool = () => {
        checkboxClickedBool == 0 ? 
        setCheckboxClickedBool(1)
        : setCheckboxClickedBool(0)
        }

    console.log(checkboxClickedBool);

  return (
          <input className='checkbox' type='checkbox' disabled onClick={changeClickedBool}/>
  )      
}

export default Checkbox;