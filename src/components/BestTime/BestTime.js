import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../App';

const BestTime = () => {
  const { checkpoint } = useContext(GameContext);

  const [bestTime, setBestTime] = useState(null);

  useEffect(() => {
    setBestTime(window.localStorage.getItem('best-time'));

    return () => {
      setBestTime(window.localStorage.getItem('best-time'));
    };
  }, [bestTime, checkpoint]);

  return (
    <div>
      <h4>Best Time:</h4>
      <h4>{bestTime !== 'null' ? bestTime : '00:00:00'}</h4>
    </div>
  );
};

export default BestTime;
