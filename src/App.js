import React, { useEffect, useState } from 'react';
import Checkboxes from './components/Checkboxes/Checkboxes.js';
import SidebarLeft from './components/SidebarLeft/SidebarLeft.js';
import SidebarRight from './components/SidebarRight/SidebarRight.js';
import StarterMessage from './components/StarterMessage/StarterMessage.js';

function App() {
  //[STATE] index for which key the checkbox array is on
  const [currentKey, setCurrentKey] = useState(1)

  //[STATE] allows us to control when certain functions are called
  const [gateValue, setGateValue] = useState(0)

  //Updates movement after page is re-rendered to ensure the currentKey state is updated before-hand
  useEffect(() => {
      const checkboxWrapper = document.querySelector('.checkboxes')
       
      checkboxWrapper.style.transform = `translateX(${-21 * (currentKey - 1)}px)` //moves checkboxes to the left when one is pressed
  
      if (currentKey === 101) { //Enters this block once game is over--many components contain this check to ensure the end of game locks out player and shows final screen
          if (gateValue === 2) {
            setGateValue(3)
          }
        const winMessage = document.querySelector('.winMessageContainer')
          winMessage.style.display = 'block'
        const timerAndCounter = document.querySelector('.timerAndCounter')
          timerAndCounter.style.display = 'none' 
      }
  })

  //Removes starterMessage and shows count/timer in order to get the game started!
  function startGame() {
      const starterMessage = document.querySelector('.startermessage')
        starterMessage.style.display = 'none';
      const timerAndCounter = document.querySelector('.timerAndCounter')
        timerAndCounter.style.display = 'flex';
      
  } 

  //Resets all indexes and messages
  function resetGame(event) {
    event.stopPropagation();
    setGateValue(0)
    setCurrentKey(1)
    const starterMessage = document.querySelector('.startermessage')
      starterMessage.style.display = 'block';
    // const winMessage = document.querySelector('.winMessageContainer')
    //   winMessage.style.display = 'none';
    const checkbox = document.getElementsByClassName('.checkbox')
      checkbox.style.transform = 'none'; 
      console.log(checkbox)

      //loop through checkboxes and apply defauly styling? 
      //or save the translation applied to each checkbox, loop through and reverse it?
  }

  //Called through onClick of checkbox component; stops event bubbling using event.stopPropagation()
  function onClickCheckbox(event) {
    if (gateValue === 0) {
      setGateValue(1)  //sets gateValue to 1 allowing timer logic to run (next changeGateValue() call in Timer.js)
      startGame()
    }
    event.stopPropagation()
    setCurrentKey(currentKey + 1)
  }

  //Called through the App div to reset back one checkbox
  function onClickApp() {
    if  (currentKey === 1 || currentKey === 101) return;
    setCurrentKey(currentKey - 1)
  }

  return (
    <div className="App" onClick={onClickApp}>
      <SidebarLeft 
        currentKey={currentKey}  
        gateValue={gateValue} 
        setGateValue={setGateValue}
      />
      <SidebarRight />
      <StarterMessage />
      <Checkboxes 
        currentKey={currentKey}                   //Not sure if all of these props need to be sent down, will have to do some cleaning up
        setCurrentKey={setCurrentKey}
        onClickCheckbox={onClickCheckbox}
        gateValue={gateValue}
        setGateValue={setGateValue}
        resetGame={resetGame}
      />
    </div>
  );
}

export default App;
