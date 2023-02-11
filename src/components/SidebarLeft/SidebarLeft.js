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
        {props.gateValue !== 0 && (
          <Timer currentKey={props.currentKey} gateValue={props.gateValue} setGateValue={props.setGateValue} />
        )}
      </p>
      <a className="twitterAnchor" href="https://twitter.com/">
        <img className="twitterIcon" src={twitterLogo} alt="Twitters logo" />
      </a>
    </div>
  );
};

export default SidebarLeft;
