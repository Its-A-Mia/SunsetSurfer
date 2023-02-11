import React, { useContext } from 'react';
import { GameContext } from '../../App';
import './ResetInGame.css';

const ResetInGame = (props) => {
  const { setCheckpoint, setCurrentKey } = useContext(GameContext);

  const resetGame = (event) => {
    //Resets all indexes and messages

    event.stopPropagation();
    setCheckpoint('gameReset');
    setCurrentKey(1);
    const starterMessage = document.querySelector('.startermessage');
    starterMessage.style.display = 'block';
    const winMessage = document.querySelector('.winMessageContainer');
    winMessage.style.display = 'none';
  };

  return (
    <div className="resetInGameContainer">
      <button className="reset" onClick={(e) => resetGame(e)}>
        reset
      </button>
    </div>
  );
};

export default ResetInGame;
