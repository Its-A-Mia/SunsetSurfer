import { useState } from 'react';
import Checkboxes from './components/Checkboxes/Checkboxes.js';
import SidebarLeft from './components/SidebarLeft/SidebarLeft.js';
import SidebarRight from './components/SidebarRight/SidebarRight.js';

function App() {

   //[STATE] index for which key the checkbox array is on
   const [currentKey, setCurrentKey] = useState(1)
  
   function onClickCheckbox() {
    setCurrentKey(currentKey + 2);
    
   }
   
   function onClickApp() {
     setCurrentKey(currentKey - 1)
    if (currentKey == 0) {
      setCurrentKey(1);
    }
    console.log(currentKey, 'currentKey')
   }
    
  return (
    <div className="App" onClick={() => onClickApp}>
      <SidebarLeft />
      <SidebarRight />
      <Checkboxes currentKey={currentKey} onClickCheckbox={onClickCheckbox}/>
    </div>
  );
}

export default App;
