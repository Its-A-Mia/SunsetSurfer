import React from 'react';
import Counter from '../Counter/Counter';
import Reset from '../Reset/Reset';
import Timer from '../Timer/Timer';
import './ScoreBar.css';

const ScoreBar = () => {
  return (
    <>
      <div className="score-bar-container">
        <div className="score-bar-items">
          <Counter />
          <Timer />
          <Reset specialClass="mainReset" />
        </div>
      </div>
    </>
  );
};

export default ScoreBar;
