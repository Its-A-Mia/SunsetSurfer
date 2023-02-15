import React from 'react';
import './Instructions.css';

const Instructions = () => {
  const handleClick = () => {
    const instructions = document.querySelector('.instructions-container');
    const instructionsBG = document.querySelector('.instructions-bg');
    instructions.style.display = 'none';
    instructionsBG.style.display = 'none';
  };

  return (
    <>
      <div className="instructions-container">
        <div className="instructions">
          <h2>How To Play:</h2>
          <p className="instructions-body">
            Welcome to Sunset Surfer! Click 100 checkboxes in order as fast as you can, racing against your previous
            best time. Don't misclick, though, otherwise you'll be set back. Use the reset button after you finish or
            even during play to get back to the fun at square one! Embrace the neon vaporwave vibe as you race.
          </p>
          <button className="lets-play" onClick={() => handleClick()}>
            Clickin' Time!
          </button>
        </div>
      </div>
      <div className="instructions-bg"></div>
    </>
  );
};

export default Instructions;
