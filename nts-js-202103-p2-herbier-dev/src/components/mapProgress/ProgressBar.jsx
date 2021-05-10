/* eslint-disable object-shorthand */
import * as React from 'react';
import './ProgressBar.css';

function ProgressBar({ width, progress }) {
  const largeurProgress = progress * width;
  const percent = Math.floor(progress * 100);
  return (
    <div className="progress-div" style={{ width: width }}>
      <div style={{ width: `${largeurProgress}px` }} className="progress">
        <p className="percent-bar">{percent}%</p>
      </div>
    </div>
  );
}

export default ProgressBar;
