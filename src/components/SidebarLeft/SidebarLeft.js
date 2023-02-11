import React, { useContext } from 'react';
import { GameContext } from '../../App';
import Counter from '../Counter/Counter';
import Timer from '../Timer/Timer';
import './SidebarLeft.css';

const SidebarLeft = () => {
  const { checkpoint } = useContext(GameContext);

  return (
    <div className="sidebarLeft">
      <p className="timerAndCounter">
        <span className="lessThanSymbol">&gt;</span>
        <Counter />
        {checkpoint !== 'startScreen' && <Timer />}
      </p>
    </div>
  );
};

export default SidebarLeft;
