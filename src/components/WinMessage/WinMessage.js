import React, { useState, useEffect } from 'react';
import ResetWinMessage from '../Reset/ResetWinMessage';
import './WinMessage.css';

const WinMessage = (props) => {
  const [endTime, setEndTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(null);

  console.log(startTime, endTime, totalTime, props.checkpoint);

  useEffect(() => {
    if (props.checkpoint === 'startScreen') {
      setStartTime(null);
      setEndTime(null);
      setTotalTime(null);
    }
    if (props.checkpoint === 'gameStart') {
      setStartTime(Date.now()); //captures the intitial time
    }
    if (props.checkpoint === 'gameFinish') {
      props.setcheckpoint('finishScreen'); //sets checkpoint to 4 to allow WinMessage component to execute final math after endTime updates
      setEndTime(Date.now()); //captures final time
    }
    if (props.checkpoint === 'finishScreen' && !totalTime) {
      setTotalTime(timeLogic(endTime - startTime));
    }
  });

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

  return (
    <div className="winMessageContainer">
      <p className="nice">NICE!</p>
      <p className="timeReadout">
        Your Time was <strong>{totalTime}</strong>
      </p>
      <ResetWinMessage resetGame={props.resetGame} />
    </div>
  );
};

export default WinMessage;
