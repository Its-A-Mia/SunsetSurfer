import React, { useEffect } from 'react';
import './Background.css';

const Background = () => {
  const createColumns = () => {
    let columns = [];
    for (let columnKey = 1; columnKey < 41; columnKey++) {
      columns.push(
        <div className={`col col-${columnKey}`} key={columnKey}>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
      );
    }

    return columns;
  };

  let columns = createColumns();

  useEffect(() => {
    const getColumnClasses = () => {
      let columnClasses = [];
      for (let columnKey = 1; columnKey < 41; columnKey++) {
        columnClasses.push(document.querySelector(`.col-${columnKey}`));
      }
      return columnClasses;
    };

    let columnClasses = getColumnClasses();

    let delay = 0;
    for (let columnKey = 0; columnKey < columnClasses.length; columnKey++) {
      columnClasses[columnKey].style.animation = `wave 3s ${delay}ms ease-in-out infinite`;
      delay += 200;
    }

    return () => {};
  }, [columns]);

  return (
    <>
      <div className="grid-container">
        <div className="grid">{columns}</div>
      </div>

      <div className="sun-container">
        <div className="sun"></div>
        <div className="overlay"></div>
        <div className="overlay glitch"></div>
      </div>
    </>
  );
};

export default Background;
