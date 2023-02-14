import React, { useEffect } from 'react';
import BestTime from '../BestTime/BestTime';
import Counter from '../Counter/Counter';
import Reset from '../Reset/Reset';
import Timer from '../Timer/Timer';
import './ScoreBar.css';

const ScoreBar = () => {
  useEffect(() => {});

  return (
    <>
      <div className="score-bar-container">
        <div className="score-bar-items">
          <Counter />
          <Timer />
          <Reset specialClass="mainReset" />
          <BestTime />
        </div>
      </div>
    </>
  );
};

export default ScoreBar;
