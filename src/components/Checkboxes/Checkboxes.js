import React, { useState } from 'react'
import StarterMessage from '../StarterMessage/StarterMessage'
import Checkbox from '../Checkbox/Checkbox.js'
import './Checkboxes.css'

//index all of the checkboxes, then go one by one, activating them

const Checkboxes = (props) => {  
    //[STATE] index for which key the checkbox array is on
  let currentKey = 1;
  
    function currentKeyModifier(checkedBool) {
    currentKey++;
    console.log(currentKey)
    }
  
      //array housing all checkboxes so that it's indexed
  const allCheckboxes =
   [<Checkbox key={1}   listId={1}   currentKey={currentKey} currentKeyModifier={currentKeyModifier}/>, 
    <Checkbox key={2}   listId={2}   currentKey={currentKey} currentKeyModifier={currentKeyModifier}/>,
    <Checkbox key={3}   listId={3}   currentKey={currentKey}/>,
    <Checkbox key={4}   listId={4}   currentKey={currentKey}/>,
    <Checkbox key={5}   listId={5}   currentKey={currentKey}/>,
    <Checkbox key={6}   listId={6}   currentKey={currentKey}/>,
    <Checkbox key={7}   listId={7}   currentKey={currentKey}/>,
    <Checkbox key={8}   listId={8}   currentKey={currentKey}/>,
    <Checkbox key={9}   listId={9}   currentKey={currentKey}/>,
    <Checkbox key={10}  listId={10}  currentKey={currentKey}/>,
    <Checkbox key={11}  listId={11}  currentKey={currentKey}/>,
    <Checkbox key={12}  listId={12}  currentKey={currentKey}/>,
    <Checkbox key={13}  listId={13}  currentKey={currentKey}/>,
    <Checkbox key={14}  listId={14}  currentKey={currentKey}/>,
    <Checkbox key={15}  listId={15}  currentKey={currentKey}/>,
    <Checkbox key={16}  listId={16}  currentKey={currentKey}/>,
    <Checkbox key={17}  listId={17}  currentKey={currentKey}/>,
    <Checkbox key={18}  listId={18}  currentKey={currentKey}/>,
    <Checkbox key={19}  listId={19}  currentKey={currentKey}/>,
    <Checkbox key={20}  listId={20}  currentKey={currentKey}/>,
    <Checkbox key={21}  listId={21}  currentKey={currentKey}/>,
    <Checkbox key={22}  listId={22}  currentKey={currentKey}/>,
    <Checkbox key={23}  listId={23}  currentKey={currentKey}/>,
    <Checkbox key={24}  listId={24}  currentKey={currentKey}/>,
    <Checkbox key={25}  listId={25}  currentKey={currentKey}/>,
    <Checkbox key={26}  listId={26}  currentKey={currentKey}/>,
    <Checkbox key={27}  listId={27}  currentKey={currentKey}/>,
    <Checkbox key={28}  listId={28}  currentKey={currentKey}/>,
    <Checkbox key={29}  listId={29}  currentKey={currentKey}/>,
    <Checkbox key={30}  listId={30}  currentKey={currentKey}/>,
    <Checkbox key={31}  listId={31}  currentKey={currentKey}/>,
    <Checkbox key={32}  listId={32}  currentKey={currentKey}/>,
    <Checkbox key={33}  listId={33}  currentKey={currentKey}/>,
    <Checkbox key={34}  listId={34}  currentKey={currentKey}/>,
    <Checkbox key={35}  listId={35}  currentKey={currentKey}/>,
    <Checkbox key={36}  listId={36}  currentKey={currentKey}/>,
    <Checkbox key={37}  listId={37}  currentKey={currentKey}/>,
    <Checkbox key={38}  listId={38}  currentKey={currentKey}/>,
    <Checkbox key={39}  listId={39}  currentKey={currentKey}/>,
    <Checkbox key={40}  listId={40}  currentKey={currentKey}/>,
    <Checkbox key={41}  listId={41}  currentKey={currentKey}/>,
    <Checkbox key={42}  listId={42}  currentKey={currentKey}/>,
    <Checkbox key={43}  listId={43}  currentKey={currentKey}/>,
    <Checkbox key={44}  listId={44}  currentKey={currentKey}/>,
    <Checkbox key={45}  listId={45}  currentKey={currentKey}/>,
    <Checkbox key={46}  listId={46}  currentKey={currentKey}/>,
    <Checkbox key={47}  listId={47}  currentKey={currentKey}/>,
    <Checkbox key={48}  listId={48}  currentKey={currentKey}/>,
    <Checkbox key={49}  listId={49}  currentKey={currentKey}/>,
    <Checkbox key={50}  listId={50}  currentKey={currentKey}/>,
    <Checkbox key={51}  listId={51}  currentKey={currentKey}/>,
    <Checkbox key={52}  listId={52}  currentKey={currentKey}/>,
    <Checkbox key={53}  listId={53}  currentKey={currentKey}/>,
    <Checkbox key={54}  listId={54}  currentKey={currentKey}/>,
    <Checkbox key={55}  listId={55}  currentKey={currentKey}/>,
    <Checkbox key={56}  listId={56}  currentKey={currentKey}/>,
    <Checkbox key={57}  listId={57}  currentKey={currentKey}/>,
    <Checkbox key={58}  listId={58}  currentKey={currentKey}/>,
    <Checkbox key={59}  listId={59}  currentKey={currentKey}/>,
    <Checkbox key={60}  listId={60}  currentKey={currentKey}/>,
    <Checkbox key={61}  listId={61}  currentKey={currentKey}/>,
    <Checkbox key={62}  listId={62}  currentKey={currentKey}/>,
    <Checkbox key={63}  listId={63}  currentKey={currentKey}/>,
    <Checkbox key={64}  listId={64}  currentKey={currentKey}/>,
    <Checkbox key={65}  listId={65}  currentKey={currentKey}/>,
    <Checkbox key={66}  listId={66}  currentKey={currentKey}/>,
    <Checkbox key={67}  listId={67}  currentKey={currentKey}/>,
    <Checkbox key={68}  listId={68}  currentKey={currentKey}/>,
    <Checkbox key={69}  listId={69}  currentKey={currentKey}/>,
    <Checkbox key={70}  listId={70}  currentKey={currentKey}/>,
    <Checkbox key={71}  listId={71}  currentKey={currentKey}/>,
    <Checkbox key={72}  listId={72}  currentKey={currentKey}/>,
    <Checkbox key={73}  listId={73}  currentKey={currentKey}/>,
    <Checkbox key={74}  listId={74}  currentKey={currentKey}/>,
    <Checkbox key={75}  listId={75}  currentKey={currentKey}/>,
    <Checkbox key={76}  listId={76}  currentKey={currentKey}/>,
    <Checkbox key={77}  listId={77}  currentKey={currentKey}/>,
    <Checkbox key={78}  listId={78}  currentKey={currentKey}/>,
    <Checkbox key={79}  listId={79}  currentKey={currentKey}/>,
    <Checkbox key={80}  listId={80}  currentKey={currentKey}/>,
    <Checkbox key={81}  listId={81}  currentKey={currentKey}/>,
    <Checkbox key={82}  listId={82}  currentKey={currentKey}/>,
    <Checkbox key={83}  listId={83}  currentKey={currentKey}/>,
    <Checkbox key={84}  listId={84}  currentKey={currentKey}/>,
    <Checkbox key={85}  listId={85}  currentKey={currentKey}/>,
    <Checkbox key={86}  listId={86}  currentKey={currentKey}/>,
    <Checkbox key={87}  listId={87}  currentKey={currentKey}/>,
    <Checkbox key={88}  listId={88}  currentKey={currentKey}/>,
    <Checkbox key={89}  listId={89}  currentKey={currentKey}/>,
    <Checkbox key={90}  listId={90}  currentKey={currentKey}/>,
    <Checkbox key={91}  listId={91}  currentKey={currentKey}/>,
    <Checkbox key={92}  listId={92}  currentKey={currentKey}/>,
    <Checkbox key={93}  listId={93}  currentKey={currentKey}/>,
    <Checkbox key={94}  listId={94}  currentKey={currentKey}/>,
    <Checkbox key={95}  listId={95}  currentKey={currentKey}/>,
    <Checkbox key={96}  listId={96}  currentKey={currentKey}/>,
    <Checkbox key={97}  listId={97}  currentKey={currentKey}/>,
    <Checkbox key={98}  listId={98}  currentKey={currentKey}/>,
    <Checkbox key={99}  listId={99}  currentKey={currentKey}/>,
    <Checkbox key={100} listId={100} currentKey={currentKey}/>
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