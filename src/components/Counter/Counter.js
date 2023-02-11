import React, { useState, useEffect, useContext } from 'react';
import { GameContext } from '../../App';
import './Counter.css';

const Counter = () => {
  // eslint-disable-next-line no-undef
  const { currentKey } = useContext(GameContext);

  const [counter, setCounter] = useState(null);

  useEffect(() => {
    function counterLogic() {
      if (currentKey < 11) return `00${currentKey - 1}/100`;
      if (currentKey < 101) return `0${currentKey - 1}/100`;
      return `${currentKey - 1}/100`;
    }

    setCounter(() => counterLogic());
  }, [currentKey]);

  return <span className="counter">{counter}</span>;
};

export default Counter;
