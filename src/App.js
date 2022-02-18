//import Top from './components/Top/Top.js';
//import Bottom from './components/Bottom/Bottom.js';
import Checkboxes from './components/Checkboxes/Checkboxes.js';
import SidebarLeft from './components/SidebarLeft/SidebarLeft.js';
import SidebarRight from './components/SidebarRight/SidebarRight.js';

function App() {
  return (
    <div className="App">
      {/* <Top />  */}
      <SidebarLeft />
      <SidebarRight />
      <Checkboxes />
      {/* <Bottom /> */}
    </div>
  );
}

export default App;
