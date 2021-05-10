import logo from './Vector.png';
import './ProgressCircle.css';

function ProgressCircle() {
  const countTotalHerb = localStorage.getItem('total');
  const herbariumPercent = (countTotalHerb * 100) / 126;

  return (
    <div className="progress-circle">
      <div className="info-progress">
        <div className="title-progress">
          <h3>Total herbier</h3>
        </div>
        <div className="total-plants-progress">
          <img src={logo} alt="logo" />
          <p>{countTotalHerb}/126</p>
        </div>
      </div>
      <div className="circle-progress">
        <div className="container-circle">
          <svg className="svg-progress" viewBox="0 0 60 60" width="100px">
            <circle
              className="back-path"
              cx="30"
              cy="30"
              r="15"
              fill="none"
              shapeRendering="optimizeQuality"
            />
            <circle
              className="path"
              cx="30"
              cy="30"
              r="15"
              fill="none"
              strokeLinecap="round"
              style={{ '--p': herbariumPercent }}
            />
          </svg>
          <span className="text">{Math.round(herbariumPercent)} %</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressCircle;
