import React from 'react';
import { useState } from 'react';
import Checkboxes from './components/Checkboxes/Checkboxes.js';
import SidebarLeft from './components/SidebarLeft/SidebarLeft.js';
import SidebarRight from './components/SidebarRight/SidebarRight.js';
import StarterMessage from './components/StarterMessage/StarterMessage.js';

function App() {

  //[STATE] index for which key the checkbox array is on
  const [currentKey, setCurrentKey] = useState(1)
  //Allows for reference to the checkboxes container div
  const containerRef = React.useRef(null)
  //Called through nested checkbox on checkboxes component *not sure how this works*
  function moveCheckboxes() {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `translateX(${-20 * currentKey + 1}px)`  
    }
  //Called through onClick of checkbox component; stops event bubbling using event.stopPropagation()
  function onClickCheckbox(event) {
    setCurrentKey(currentKey + 1)
    event.stopPropagation();
  }
  //Called through the App div to reset back one checkbox
  function onClickApp() {
    if  (currentKey === 1) return;
    setCurrentKey(currentKey - 1)
  }

  return (
    <div className="App" onClick={onClickApp}>
      <SidebarLeft />
      <SidebarRight />
      <StarterMessage />
      <Checkboxes 
        currentKey={currentKey} 
        onClickCheckbox={onClickCheckbox} 
        containerRef={containerRef}
        moveCheckboxes={moveCheckboxes}
      />
    </div>
  );
}

export default App;
