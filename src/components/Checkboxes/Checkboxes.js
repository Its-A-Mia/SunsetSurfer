import React, { useState } from 'react'
import StarterMessage from '../StarterMessage/StarterMessage'
import Checkbox from '../Checkbox/Checkbox.js'
import './Checkboxes.css'

//index all of the checkboxes, then go one by one, activating them

const Checkboxes = (props) => {  
    //indexes which key the checkbox array is on
  let currentKey = 1;
      console.log(currentKey)
    //change state of checkbox clicked boolean value
  const [checkboxClickedBool, setCheckboxClickedBool] = useState(0);
    //change state of disabledFalse
  const [disabledBoolValue, setDisabledBoolValue] = useState(1);
    
  //returns true if checkbox is clicked, false if not
  const changeClickedBool = () => {
      checkboxClickedBool == 0 ? 
      setCheckboxClickedBool(1) :
      setCheckboxClickedBool(0)
      return checkboxClickedBool; 
      }
      console.log(checkboxClickedBool)
    
      //returns false if last checkbox is clicked, true if not
  // const changeDisabledBool = () => {
  //     checkboxClickedBool == 1 ?
  //     setDisabledBoolValue(0) :
  //     setDisabledBoolValue(1)
  //     return disabledBoolValue;
  // }
      
    
      //array housing all checkboxes so that it's indexed
  const allCheckboxes =
   [<Checkbox disabledFalse={false} checkboxBool={changeClickedBool} />, 
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>
  ]
 
  const keyArray = []
  for (let i = 0, j = 1; i<100; i++, j++) {
    keyArray.push(j);
  }
  console.log({keyArray})
        
//check boolean of checkbox, if true, pass in transformNew; if false, pass in disable

  return (
    <div className='container'> {/* container css file in Checkboxes.css */}
      <StarterMessage />
      <br/>
    <ul className='checkboxes' key={keyArray}>
      {allCheckboxes}
    </ul>
    </div>
  ) 
}


// styling objects: 1) Default before click 2) Movement after click 
// Misclick, move back one box
// Create animations here

export default Checkboxes