import ProgressCircle from './ProgressCircle';
import MapProgress from './MapProgress';
import './PageProgress.css';

const PageProgress = () => {
  return (
    <div className="page-progress">
      <h2 className="progress-title">Progression totale :</h2>
      <ProgressCircle />
      <h2 className="progress-title">Progression par parc :</h2>
      <MapProgress />
    </div>
  );
};

export default PageProgress;
