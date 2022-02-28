import React, { useState  } from 'react'

import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import StarterMessage from '../StarterMessage/StarterMessage'
import Checkbox from '../Checkbox/Checkbox.js'
import './Checkboxes.css'
import WinMessage from '../WinMessage/WinMessage'

const Checkboxes = ( props ) => {  
      //array housing all checkboxes so that it's indexed
  const allCheckboxes =
   [<Checkbox key={1}   listId={1}   currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>, 
    <Checkbox key={2}   listId={2}   currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={3}   listId={3}   currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={4}   listId={4}   currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={5}   listId={5}   currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={6}   listId={6}   currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={7}   listId={7}   currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={8}   listId={8}   currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={9}   listId={9}   currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={10}  listId={10}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={11}  listId={11}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={12}  listId={12}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={13}  listId={13}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={14}  listId={14}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={15}  listId={15}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={16}  listId={16}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={17}  listId={17}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={18}  listId={18}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={19}  listId={19}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={20}  listId={20}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={21}  listId={21}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={22}  listId={22}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={23}  listId={23}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={24}  listId={24}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={25}  listId={25}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={26}  listId={26}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={27}  listId={27}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={28}  listId={28}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={29}  listId={29}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={30}  listId={30}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={31}  listId={31}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={32}  listId={32}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={33}  listId={33}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={34}  listId={34}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={35}  listId={35}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={36}  listId={36}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={37}  listId={37}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={38}  listId={38}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={39}  listId={39}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={40}  listId={40}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={41}  listId={41}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={42}  listId={42}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={43}  listId={43}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={44}  listId={44}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={45}  listId={45}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={46}  listId={46}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={47}  listId={47}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={48}  listId={48}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={49}  listId={49}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={50}  listId={50}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={51}  listId={51}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={52}  listId={52}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={53}  listId={53}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={54}  listId={54}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={55}  listId={55}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={56}  listId={56}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={57}  listId={57}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={58}  listId={58}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={59}  listId={59}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={60}  listId={60}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={61}  listId={61}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={62}  listId={62}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={63}  listId={63}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={64}  listId={64}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={65}  listId={65}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={66}  listId={66}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={67}  listId={67}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={68}  listId={68}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={69}  listId={69}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={70}  listId={70}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={71}  listId={71}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={72}  listId={72}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={73}  listId={73}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={74}  listId={74}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={75}  listId={75}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={76}  listId={76}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={77}  listId={77}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={78}  listId={78}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={79}  listId={79}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={80}  listId={80}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={81}  listId={81}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={82}  listId={82}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={83}  listId={83}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={84}  listId={84}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={85}  listId={85}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={86}  listId={86}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={87}  listId={87}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={88}  listId={88}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={89}  listId={89}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={90}  listId={90}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={91}  listId={91}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={92}  listId={92}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={93}  listId={93}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={94}  listId={94}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={95}  listId={95}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={96}  listId={96}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={97}  listId={97}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={98}  listId={98}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={99}  listId={99}  currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>,
    <Checkbox key={100} listId={100} currentKey={props.currentKey} onClickCheckbox={props.onClickCheckbox} gateValue={props.gateValue}/>
  ]
  
  return (
    <div className='container' ref={props.containerRef}> {/* container css file in Checkboxes.css */}
      <ul className='checkboxes'>
        {allCheckboxes}
        <FontAwesomeIcon icon={faFlagCheckered}/>
      </ul>
      <WinMessage
        gateValue={props.gateValue}
        setGateValue={props.setGateValue}
        resetGame={props.resetGame}
      />
    </div>
  ) 
}

export default Checkboxes