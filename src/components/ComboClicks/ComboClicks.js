import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../../App';
import './ComboClicks.css';

const ComboClicks = () => {
  const { comboClicks, setComboClicks } = useContext(GameContext);
  const [isContainerPopActive, setIsContainerPopActive] = useState(false);

  useEffect(() => {
    // reset combo if it takes too long to click another checkbox
    const timeToReset = 1000;
    const resetComboClicks = setTimeout(() => {
      setComboClicks(0);
    }, timeToReset);

    const comboClicks = document.querySelector('.combo-clicks-container');

    if (!!isContainerPopActive) {
      comboClicks.style.opacity = '100';
    } else {
      comboClicks.style.opacity = '0';
    }

    if (comboClicks > 0) {
      setIsContainerPopActive(true);
    }

    return () => {
      clearTimeout(resetComboClicks);
    };
  }, [comboClicks, setComboClicks, isContainerPopActive]);

  return (
    <div
      className={isContainerPopActive ? 'combo-clicks-container container-pop' : 'combo-clicks-container'}
      onAnimationEnd={() => setIsContainerPopActive(false)}
    >
      <h3>
        Combo Clicks: <span className={'combo-clicks-value'}>{comboClicks}</span>
      </h3>
    </div>
  );
};

export default ComboClicks;
