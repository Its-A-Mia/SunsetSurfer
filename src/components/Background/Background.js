import React from 'react';
import './Background.css';

const Background = () => {
  return (
    <>
      <div className="bg-grid-container">
        <div className="bg-gradient-grid"></div>
        <div className="bg-grid" />
      </div>
      <div className="sun-container">
        <div class="sun"></div>
        <div class="overlay"></div>
        <div class="overlay glitch"></div>
        {/* <svg width="500" height="500" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_1_3)" />
          <defs>
            <linearGradient id="paint0_linear_1_3" x1="25" y1="0" x2="25" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E68E35" />
              <stop offset="0.609164" stopColor="#DD517E" />
              <stop offset="0.760417" stopColor="#E06665" stop-opacity="0.34" />
              <stop offset="1" stopColor="#E68E35" stop-opacity="0.05" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
    </>
  );
};

export default Background;
