import React from 'react';
import Counter from '../Counter/Counter';
import Timer from '../Timer/Timer';
import './SidebarLeft.css';
import twitterLogo from './twittericon.png';

const SidebarLeft = (props) => {
  return (
    <div className="sidebarLeft">
      <p className="timerAndCounter">
        <span className="lessThanSymbol">&gt;</span>
        <Counter currentKey={props.currentKey} />
        {props.checkpoint !== 'startScreen' && (
          <Timer currentKey={props.currentKey} checkpoint={props.checkpoint} setcheckpoint={props.setcheckpoint} />
        )}
      </p>
      <a className="twitterAnchor" href="https://twitter.com/">
        <img className="twitterIcon" src={twitterLogo} alt="Twitters logo" />
      </a>
    </div>
  );
};

export default SidebarLeft;
