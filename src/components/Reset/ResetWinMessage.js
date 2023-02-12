import React, { useContext } from 'react';
import { GameContext } from '../../App';
import './ResetWinMessage.css';

const ResetWinMessage = (props) => {
  const { setCheckpoint, setCurrentKey } = useContext(GameContext);

  // Resets all indexes and messages
  function resetGame(e) {
    e.stopPropagation();
    setCheckpoint('gameReset');
    setCurrentKey(1);
    const starterMessage = document.querySelector('.startermessage');
    starterMessage.style.opacity = '100';
    const winMessage = document.querySelector('.winMessageContainer');
    winMessage.style.display = 'none';
  }

  return (
    <button className="reset" onClick={(e) => resetGame(e)}>
      reset
    </button>
  );
};

export default ResetWinMessage;
