import React, { useContext } from 'react';
import { GameContext } from '../../App';
import Counter from '../Counter/Counter';
import Timer from '../Timer/Timer';
import './SidebarLeft.css';
import twitterLogo from './twittericon.png';

const SidebarLeft = () => {
  const { checkpoint } = useContext(GameContext);

  return (
    <div className="sidebarLeft">
      <p className="timerAndCounter">
        <span className="lessThanSymbol">&gt;</span>
        <Counter />
        {checkpoint !== 'startScreen' && <Timer />}
      </p>
      <a className="twitterAnchor" href="https://twitter.com/">
        <img className="twitterIcon" src={twitterLogo} alt="Twitters logo" />
      </a>
    </div>
  );
};

export default SidebarLeft;
