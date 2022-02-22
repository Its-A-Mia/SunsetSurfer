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
   [<Checkbox key={1} currentKey={currentKey}/>, 
    <Checkbox key={2} currentKey={currentKey}/>,
    <Checkbox key={3} currentKey={currentKey}/>,
    <Checkbox key={4} currentKey={currentKey}/>,
    <Checkbox key={5} currentKey={currentKey}/>,
    <Checkbox key={6} currentKey={currentKey}/>,
    <Checkbox key={7} currentKey={currentKey}/>,
    <Checkbox key={8} currentKey={currentKey}/>,
    <Checkbox key={9} currentKey={currentKey}/>,
    <Checkbox key={10} currentKey={currentKey}/>,
    <Checkbox key={11} currentKey={currentKey}/>,
    <Checkbox key={12} currentKey={currentKey}/>,
    <Checkbox key={13} currentKey={currentKey}/>,
    <Checkbox key={14} currentKey={currentKey}/>,
    <Checkbox key={15} currentKey={currentKey}/>,
    <Checkbox key={16} currentKey={currentKey}/>,
    <Checkbox key={17} currentKey={currentKey}/>,
    <Checkbox key={18} currentKey={currentKey}/>,
    <Checkbox key={19} currentKey={currentKey}/>,
    <Checkbox key={20} currentKey={currentKey}/>,
    <Checkbox key={21} currentKey={currentKey}/>,
    <Checkbox key={22} currentKey={currentKey}/>,
    <Checkbox key={23} currentKey={currentKey}/>,
    <Checkbox key={24} currentKey={currentKey}/>,
    <Checkbox key={25} currentKey={currentKey}/>,
    <Checkbox key={26} currentKey={currentKey}/>,
    <Checkbox key={27} currentKey={currentKey}/>,
    <Checkbox key={28} currentKey={currentKey}/>,
    <Checkbox key={29} currentKey={currentKey}/>,
    <Checkbox key={30} currentKey={currentKey}/>,
    <Checkbox key={31} currentKey={currentKey}/>,
    <Checkbox key={32} currentKey={currentKey}/>,
    <Checkbox key={33} currentKey={currentKey}/>,
    <Checkbox key={34} currentKey={currentKey}/>,
    <Checkbox key={35} currentKey={currentKey}/>,
    <Checkbox key={36} currentKey={currentKey}/>,
    <Checkbox key={37} currentKey={currentKey}/>,
    <Checkbox key={38} currentKey={currentKey}/>,
    <Checkbox key={39} currentKey={currentKey}/>,
    <Checkbox key={40} currentKey={currentKey}/>,
    <Checkbox key={41} currentKey={currentKey}/>,
    <Checkbox key={42} currentKey={currentKey}/>,
    <Checkbox key={43} currentKey={currentKey}/>,
    <Checkbox key={44} currentKey={currentKey}/>,
    <Checkbox key={45} currentKey={currentKey}/>,
    <Checkbox key={46} currentKey={currentKey}/>,
    <Checkbox key={47} currentKey={currentKey}/>,
    <Checkbox key={48} currentKey={currentKey}/>,
    <Checkbox key={49} currentKey={currentKey}/>,
    <Checkbox key={50} currentKey={currentKey}/>,
    <Checkbox key={51} currentKey={currentKey}/>,
    <Checkbox key={52} currentKey={currentKey}/>,
    <Checkbox key={53} currentKey={currentKey}/>,
    <Checkbox key={54} currentKey={currentKey}/>,
    <Checkbox key={55} currentKey={currentKey}/>,
    <Checkbox key={56} currentKey={currentKey}/>,
    <Checkbox key={57} currentKey={currentKey}/>,
    <Checkbox key={58} currentKey={currentKey}/>,
    <Checkbox key={59} currentKey={currentKey}/>,
    <Checkbox key={60} currentKey={currentKey}/>,
    <Checkbox key={61} currentKey={currentKey}/>,
    <Checkbox key={62} currentKey={currentKey}/>,
    <Checkbox key={63} currentKey={currentKey}/>,
    <Checkbox key={64} currentKey={currentKey}/>,
    <Checkbox key={65} currentKey={currentKey}/>,
    <Checkbox key={66} currentKey={currentKey}/>,
    <Checkbox key={67} currentKey={currentKey}/>,
    <Checkbox key={68} currentKey={currentKey}/>,
    <Checkbox key={69} currentKey={currentKey}/>,
    <Checkbox key={70} currentKey={currentKey}/>,
    <Checkbox key={71} currentKey={currentKey}/>,
    <Checkbox key={72} currentKey={currentKey}/>,
    <Checkbox key={73} currentKey={currentKey}/>,
    <Checkbox key={74} currentKey={currentKey}/>,
    <Checkbox key={75} currentKey={currentKey}/>,
    <Checkbox key={76} currentKey={currentKey}/>,
    <Checkbox key={77} currentKey={currentKey}/>,
    <Checkbox key={78} currentKey={currentKey}/>,
    <Checkbox key={79} currentKey={currentKey}/>,
    <Checkbox key={80} currentKey={currentKey}/>,
    <Checkbox key={81} currentKey={currentKey}/>,
    <Checkbox key={82} currentKey={currentKey}/>,
    <Checkbox key={83} currentKey={currentKey}/>,
    <Checkbox key={84} currentKey={currentKey}/>,
    <Checkbox key={85} currentKey={currentKey}/>,
    <Checkbox key={86} currentKey={currentKey}/>,
    <Checkbox key={87} currentKey={currentKey}/>,
    <Checkbox key={88} currentKey={currentKey}/>,
    <Checkbox key={89} currentKey={currentKey}/>,
    <Checkbox key={90} currentKey={currentKey}/>,
    <Checkbox key={91} currentKey={currentKey}/>,
    <Checkbox key={92} currentKey={currentKey}/>,
    <Checkbox key={93} currentKey={currentKey}/>,
    <Checkbox key={94} currentKey={currentKey}/>,
    <Checkbox key={95} currentKey={currentKey}/>,
    <Checkbox key={96} currentKey={currentKey}/>,
    <Checkbox key={97} currentKey={currentKey}/>,
    <Checkbox key={98} currentKey={currentKey}/>,
    <Checkbox key={99} currentKey={currentKey}/>,
    <Checkbox key={100} currentKey={currentKey}/>
  ]
        
//check boolean of checkbox, if true, pass in transformNew; if false, pass in disable

  return (
    <div className='container'> {/* container css file in Checkboxes.css */}
      <StarterMessage />
      <br/>
    <ul className='checkboxes'>
      {allCheckboxes}
    </ul>
    </div>
  ) 
}


// styling objects: 1) Default before click 2) Movement after click 
// Misclick, move back one box
// Create animations here

export default Checkboxes