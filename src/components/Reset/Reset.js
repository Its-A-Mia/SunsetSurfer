import React, { useContext } from 'react';
import { GameContext } from '../../App';
import './Reset.css';

const Reset = (props) => {
  const { setCheckpoint, setCurrentKey } = useContext(GameContext);

  const resetGame = (event) => {
    //Resets all indexes and messages

    event.stopPropagation();
    setCheckpoint('gameReset');
    setCurrentKey(1);
    const starterMessage = document.querySelector('.startermessage');
    starterMessage.style.opacity = '100';
    const winMessage = document.querySelector('.win-message-container');
    winMessage.style.display = 'none';
  };

  return (
    <button className="reset" onClick={(e) => resetGame(e)}>
      <svg width="50px" height="50px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(2 2)"
        >
          <path d="m12.5 1.5c2.4138473 1.37729434 4 4.02194088 4 7 0 4.418278-3.581722 8-8 8s-8-3.581722-8-8 3.581722-8 8-8" />

          <path d="m12.5 5.5v-4h4" />
        </g>
      </svg>
    </button>
  );
};

export default Reset;
