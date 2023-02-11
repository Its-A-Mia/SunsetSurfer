import React from 'react';
import './StarterMessage.css';
import arrow from '../../images/Arrow.PNG';

const StarterMessage = () => {
  return (
    <>
      <p className="startermessage">
        Check the first box and we're off to the races!
        <br />
        <img className="arrow" src={arrow} alt="An arrow pointing down" />
      </p>
    </>
  );
};

export default StarterMessage;
