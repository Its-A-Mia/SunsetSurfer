import React from 'react';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from '../Checkbox/Checkbox.js';
import './Checkboxes.css';
import WinMessage from '../WinMessage/WinMessage';

const Checkboxes = () => {
  //array housing all checkboxes so that it's indexed

  let allCheckboxes = [];
  for (let checkboxKey = 1; checkboxKey < 101; checkboxKey++) {
    const checkbox = <Checkbox key={checkboxKey} checkboxIndex={checkboxKey} />;
    allCheckboxes.push(checkbox);
  }

  return (
    <div className="container">
      <ul className="checkboxes">
        {allCheckboxes}
        <FontAwesomeIcon icon={faFlagCheckered} />
      </ul>
      <WinMessage />
    </div>
  );
};

export default Checkboxes;
