import React, { useContext, useEffect } from 'react';
import './Checkbox.css';
import '../Checkboxes/Checkboxes.js';
import { GameContext } from '../../App';

const Checkbox = (props) => {
  const { currentKey, setCurrentKey, checkpoint, setCheckpoint, setComboClicks, comboClicks, startGame } =
    useContext(GameContext);

  function getRandomInteger(max, min) {
    return Math.random() * (max - min + 1) + min;
  }

  function onClickCheckbox(event) {
    event.stopPropagation();
    if (checkpoint === 'startScreen') {
      setCheckpoint('gameStart'); //sets checkpoint to 1 allowing timer logic to run (next changecheckpoint() call in Timer.js)
      startGame();
    }
    setComboClicks(comboClicks + 1);
    setCurrentKey(currentKey + 1);
  }

  useEffect(() => {
    const checkbox = document.getElementById(props.checkboxIndex).parentNode;
    const randomInteger = getRandomInteger(currentKey, -currentKey);

    function randomCheckboxMovement() {
      checkbox.style.transform = `translateY(${randomInteger}px)`;
    }
    if (props.checkboxIndex === currentKey) {
      if (props.checkboxIndex === 1) return;
      randomCheckboxMovement();
    }
    if (checkpoint === 'gameReset') {
      setCheckpoint('startScreen');
      checkbox.style.transform = 'none';
    }
  }, [checkpoint, currentKey, props.checkboxIndex, setCheckpoint]);

  return (
    <div className="checkbox-container">
      <input
        onChange={() => {}}
        id={props.checkboxIndex}
        type="checkbox"
        disabled={props.checkboxIndex > currentKey || currentKey === 101}
        checked={props.checkboxIndex < currentKey || currentKey === 101}
        onClick={props.checkboxIndex === currentKey ? (e) => onClickCheckbox(e) : undefined}
      ></input>
      <span
        className={
          props.checkboxIndex === currentKey ? 'pulse-blue' : props.checkboxIndex < currentKey ? 'pulse-pink' : ''
        }
      ></span>
    </div>
  );
};

export default Checkbox;
