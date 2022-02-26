import React from 'react'
import Counter from '../Counter/Counter'
import Timer from '../Timer/Timer'
import './SidebarLeft.css'
import twitterLogo from './twittericon.png'

const SidebarLeft = (props) => {
  return (
    <div className='sidebarLeft'>
      <p className='timerAndCounter'>
          <Counter />
          <Timer startTime={props.startTime} currentKey={props.currentKey}/>
      </p>

      <a className='twitterAnchor' href='https://twitter.com/'> 
      <img className='twitterIcon' src={twitterLogo} alt='Twitters logo' /> 
      </a>  
    </div>
  )
} 

function checkboxCounter () {

}

function timer () {

}

export default SidebarLeft