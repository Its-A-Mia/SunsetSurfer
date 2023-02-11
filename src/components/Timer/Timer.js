import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ gateValue, setGateValue }) => {
  const [timer, setTimer] = useState(null);
  const [isActive, setIsActive] = useState(false);

  console.log(timer, gateValue);

  useEffect(() => {
    if (gateValue === 1) {
      setIsActive(true);
      setGateValue(2);
    }

    if (gateValue === 6) {
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
    };
  }, [isActive, gateValue, setGateValue]);

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

  return <span className="timer">{timer}</span>;
};

export default Timer;
