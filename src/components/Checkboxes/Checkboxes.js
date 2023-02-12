import React from 'react';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from '../Checkbox/Checkbox.js';
import './Checkboxes.css';
import WinMessage from '../WinMessage/WinMessage';

const Checkboxes = () => {
  //array housing all checkboxes so that it's indexed

  let allCheckboxes = [];
  for (let i = 1; i < 101; i++) {
    const checkbox = <Checkbox key={i} listId={i} />;
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
