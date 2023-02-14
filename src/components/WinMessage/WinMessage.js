import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../App';
import './WinMessage.css';

const WinMessage = () => {
  const { checkpoint, setCheckpoint } = useContext(GameContext);

  const [endTime, setEndTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(null);

  useEffect(() => {
    if (checkpoint === 'startScreen') {
      setStartTime(null);
      setEndTime(null);
      setTotalTime(null);
    }

    if (checkpoint === 'gameStart') {
      setStartTime(Date.now()); //captures the intitial time
    }

    if (checkpoint === 'gameFinish') {
      setCheckpoint('finishScreen');
      setEndTime(Date.now()); //captures final time
    }

    if (checkpoint === 'finishScreen' && !totalTime) {
      setCheckpoint('displayBestTime');
      setTotalTime(timeLogic(endTime - startTime));
    }

    if (!!window.localStorage.getItem('best-time')) {
      const bestTime = window.localStorage?.getItem('best-time');
      if (!!totalTime && totalTime < bestTime) window.localStorage.setItem('best-time', totalTime);
    } else {
      window.window.localStorage.setItem('best-time', totalTime);
    }
  }, [startTime, endTime, totalTime, checkpoint, setCheckpoint]);

  function timeLogic(duration) {
    let milliseconds = parseInt((duration % 1000) / 10)
      .toString()
      .padStart(2, '0');
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="win-message-container">
      <h3>NICE!</h3>
      <p>
        Your Time was <strong>{totalTime}</strong>
      </p>
    </div>
  );
};

export default WinMessage;
