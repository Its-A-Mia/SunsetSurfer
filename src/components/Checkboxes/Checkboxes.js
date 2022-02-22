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
   [<Checkbox key={1} disabledFalse={false} checkboxBool={changeClickedBool} />, 
    <Checkbox key={2} disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={3} disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={4}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={5}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={6}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={7}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={8}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={9}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={10}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={11}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={12}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={13}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={14}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={15}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={16}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={17}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={18}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={19}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={20}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={21}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={22}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={23}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={24}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={25}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={26}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={27}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={28}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={29}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={30}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={31}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={32}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={33}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={34}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={35}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={36}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={37}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={38}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={39}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={40}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={41}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={42}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={43}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={44}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={45}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={46}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={47}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={48}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={49}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={50}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={51}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={52}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={53}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={54}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={55}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={56}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={57}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={58}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={59}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={60}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={61}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={62}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={63}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={64}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={65}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={66}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={67}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={68}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={69}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={70}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={71}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={72}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={73}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={74}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={75}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={76}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={77}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={78}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={79}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={80}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={81}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={82}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={83}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={84}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={85}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={86}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={87}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={88}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={89}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={90}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={91}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={92}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={93}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={94}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={95}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={96}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={97}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={98}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={99}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>,
    <Checkbox key={100}disabledFalse={disabledBoolValue} changeCheckboxBool={changeClickedBool}/>
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