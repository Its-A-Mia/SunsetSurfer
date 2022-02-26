import React, { useEffect, useState } from 'react';
import Checkboxes from './components/Checkboxes/Checkboxes.js';
import SidebarLeft from './components/SidebarLeft/SidebarLeft.js';
import SidebarRight from './components/SidebarRight/SidebarRight.js';
import StarterMessage from './components/StarterMessage/StarterMessage.js';

function App() {
  //[STATE] index for which key the checkbox array is on
  const [currentKey, setCurrentKey] = useState(1)

  //Allows for reference to the checkboxes container div
  const containerRef = React.useRef(null)

  let startTime = Date.now();

  //Updates movement after page is re-rendered to ensure the currentKey state is updated before-hand
  useEffect(() => {
      const checkboxWrapper = document.querySelector('.checkboxes')
      
      checkboxWrapper.style.transform = `translateX(${-21 * (currentKey - 1)}px)`
  })

  //Removes starterMessage and shows count/timer in order to get the game started!
  function startGame() {
      const starterMessage = document.querySelector('.startermessage')
      starterMessage.style.display = 'none';
      // startTime = Date.now();
  }

  //Called through onClick of checkbox component; stops event bubbling using event.stopPropagation()
  function onClickCheckbox(event) {
    if (currentKey === 1) {
      startGame();
    }
    event.stopPropagation()
    setCurrentKey(currentKey + 1)
  }

  //Called through the App div to reset back one checkbox
  function onClickApp() {
    if  (currentKey === 1) return;
    setCurrentKey(currentKey - 1)
  }

  return (
    <div className="App" onClick={onClickApp}>
      <SidebarLeft startTime={startTime} currentKey={currentKey}/>
      <SidebarRight />
      <StarterMessage />
      <Checkboxes 
        currentKey={currentKey} 
        onClickCheckbox={onClickCheckbox} 
        containerRef={containerRef}
      />
    </div>
  );
}

export default App;
