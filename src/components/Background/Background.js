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
        <svg
          className="sun"
          width="500"
          height="500"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_2)">
            <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_1_2)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_1_2" x1="25" y1="0" x2="25" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0.333333" stopColor="#E68E35" />
              <stop offset="1" stopColor="#DD517E" />
            </linearGradient>
            <clipPath id="clip0_1_2">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Background;
