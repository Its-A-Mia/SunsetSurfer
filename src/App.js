import React, { createContext, useEffect, useState } from 'react';
import Background from './components/Background/Background.js';
import Checkboxes from './components/Checkboxes/Checkboxes.js';
import ComboClicks from './components/ComboClicks/ComboClicks.js';
import Footer from './components/Footer/Footer.js';
import ScoreBar from './components/ScoreBar/ScoreBar.js';
import Instructions from './components/StarterMessage/Instructions.js';

// many props are passed down, context is best fit
export const GameContext = createContext();

function App() {
  // checkpoints of the game define its sequence--checkpoints run in this sequence:
  // "startScreen", "gameStart", "gameInProgress", "gameFinish", "finishScreen", "captureBestTime", "gameReset"

  //index for which key the checkbox array is on
  const [currentKey, setCurrentKey] = useState(1);

  //allows us to control when certain functions are called
  const [checkpoint, setCheckpoint] = useState('startScreen');

  //shows combo length
  const [comboClicks, setComboClicks] = useState(0);

  useEffect(() => {
    const checkboxWrapper = document.querySelector('.checkboxes');

    checkboxWrapper.style.transform = `translateX(${-40 * (currentKey - 1)}px)`; //moves checkboxes to the left when one is pressed

    if (currentKey === 101 || checkpoint === 'gameReset') {
      //Enters this block once game is over--many components contain this check to ensure the end of game locks out player and shows final screen
      if (checkpoint === 'gameInProgress') {
        setCheckpoint('gameFinish');
      }
      if (currentKey === 101) {
        const winMessage = document.querySelector('.win-message-container');
        winMessage.style.display = 'block';
      }
    }
  }, [currentKey, setCheckpoint, checkpoint]);

  //Called through onClick of checkbox component; stops event bubbling using event.stopPropagation()
  const startGame = () => {
    //Removes starterMessage and shows count/timer in order to get the game started!
  };

  //Called through the App div to reset back one checkbox
  function onClickApp() {
    if (currentKey === 1 || currentKey === 101) return;
    setCurrentKey(currentKey - 1);
    setComboClicks(0);
  }

  function endGame(event) {
    event.stopPropagation();
    setCurrentKey(101);
  }

  return (
    <div className="App" onClick={onClickApp}>
      <GameContext.Provider
        value={{ currentKey, setCurrentKey, checkpoint, setCheckpoint, comboClicks, setComboClicks, startGame }}
      >
        <Instructions />
        <button onClick={(e) => endGame(e)} style={{ position: 'fixed', inset: '0 auto auto 0', zIndex: '2' }}>
          end game
        </button>
        <ComboClicks />
        <Checkboxes />
        <div>
          <ScoreBar />
          <Footer />
        </div>
        <Background />
      </GameContext.Provider>
    </div>
  );
}

export default App;
