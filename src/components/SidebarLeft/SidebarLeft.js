import React from 'react'
import './SidebarLeft.css'
import twitterLogo from './twittericon.png'

const SidebarLeft = () => {
  return (
    <div className='sidebarLeft'>
      <p className='timerAndCounter'>
        
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