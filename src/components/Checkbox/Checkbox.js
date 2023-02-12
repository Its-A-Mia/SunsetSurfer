import React, { useContext, useEffect } from 'react';
import './Checkbox.css';
import '../Checkboxes/Checkboxes.js';
import { GameContext } from '../../App';

const Checkbox = (props) => {
  const { currentKey, setCurrentKey, checkpoint, setCheckpoint, startGame } = useContext(GameContext);

  function getRandomInteger(max, min) {
    return Math.random() * (max - min + 1) + min;
  }

  function onClickCheckbox(event) {
    event.stopPropagation();
    if (checkpoint === 'startScreen') {
      setCheckpoint('gameStart'); //sets checkpoint to 1 allowing timer logic to run (next changecheckpoint() call in Timer.js)
      startGame();
    }
    setCurrentKey(currentKey + 1);
  }

  useEffect(() => {
    const checkbox = document.getElementById(props.listId);
    function randomCheckboxMovement() {
      checkbox.style.transform = `translateY(${getRandomInteger(currentKey, -currentKey)}px)`;
    }
    if (props.listId === currentKey) {
      if (props.listId === 1) return;
      randomCheckboxMovement();
    }
    if (checkpoint === 'gameReset') {
      setCheckpoint('startScreen');
      checkbox.style.transform = 'none';
    }
  });

  return (
    <div className="checkbox-container">
      <input
        onChange={() => {}}
        className="checkbox"
        id={props.listId}
        type="checkbox"
        disabled={props.listId > currentKey || currentKey === 101}
        checked={props.listId < currentKey || currentKey === 101}
        onClick={props.listId === currentKey ? (e) => onClickCheckbox(e) : undefined}
      />
      <span className="checkmark"></span>
    </div>
  );
};

export default Checkbox;
