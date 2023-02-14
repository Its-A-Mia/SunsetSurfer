import React from 'react';
import './Instructions.css';

const Instructions = () => {
  const handleClick = () => {
    const instructions = document.querySelector('.instructions-container');
    instructions.style.display = 'none';
  };

  return (
    <div className="instructions-container">
      <h2>How To Play:</h2>
      <p className="instruction-body">
        Welcome to Cyber Circuit! Click 100 checkboxes in order as fast as you can, racing against your previous best
        time. Start with checkbox 1 and watch out for mistakes, otherwise you'll be set back. Embrace the neon vaporwave
        vibe as you play. Stop at checkbox 100 and see if you beat your best time. Be sure to reset the game using the
        reset button after you finish or even during play to get back to the fun!
      </p>
      <button className="lets-play" onClick={() => handleClick()}>
        Let's play!
      </button>
    </div>
  );
};

export default Instructions;
