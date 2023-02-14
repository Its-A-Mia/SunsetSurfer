import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../App';

const Timer = () => {
  const { checkpoint, setCheckpoint } = useContext(GameContext);

  const [timer, setTimer] = useState('00:00:00');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (checkpoint === 'gameStart') {
      setIsActive(true);
      setCheckpoint('gameInProgress');
    }

    if (checkpoint === 'gameReset' || checkpoint === 'finishScreen') {
      setIsActive(false);
    }

    let tick = null;
    if (isActive === true) {
      const startTime = Date.now();
      tick = setInterval(() => {
        setTimer(timeLogic(Date.now() - startTime), 60 * 1000);
      });
    }

    return () => {
      clearInterval(tick);
      setTimer('00:00:00');
    };
  }, [isActive, checkpoint, setCheckpoint]);

  function timeLogic(duration) {
    var milliseconds = parseInt((duration % 1000) / 10)
      .toString()
      .padStart(2, '0');
    var seconds = Math.floor((duration / 1000) % 60);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return <h3 className="timer">{timer}</h3>;
};

export default Timer;
