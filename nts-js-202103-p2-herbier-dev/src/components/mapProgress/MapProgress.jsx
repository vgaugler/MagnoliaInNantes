import React from 'react';
import ProgressBar from './ProgressBar';
import logoplant from './Vector.png';
import './MapProgress.css';

function MapProgress() {
  const apiMap = [
    {
      name: 'Parc de Procé',
      photo:
        'https://domaine-de-sceaux.hauts-de-seine.fr/fileadmin/_processed_/5/2/csm_1-_plaine_orangerie_625d27e89a.jpg',
      found: localStorage.getItem('totalProce'),
      total: 10,
    },
    {
      name: 'Parc de la Gaudinière',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/2/20/Nantes_-_Parc_Gaudiniere_%282%29.jpg',
      found: localStorage.getItem('totalGaudiniere'),
      total: 1,
    },
    {
      name: 'Parc du Grand Blottereau',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/2/25/Nantes_GrandBlottereau_jangseungSucheon.jpg',
      found: localStorage.getItem('totalBlotereau'),
      total: 3,
    },
    {
      name: 'Jardin des Plantes',
      photo:
        'https://www.parcsetjardins.fr/data/cache/GardenPicture/picture/main/2/2/9384.1606317648.jpg',
      found: localStorage.getItem('totalJardinPlante'),
      total: 3,
    },
    {
      name: 'Parc Floral de la Beaujoire',
      photo:
        'https://www.sortir-en-ville.com/images/kcfinder/images/beaujoire-jdo-13-754-4.JPG',
      found: localStorage.getItem('totalBeaujoire'),
      total: 93,
    },
    {
      name: 'Cimetière Parc',
      photo:
        'https://jardins.nantes.fr/N/Jardin/Parcs-jardins/Plus/433/Cimetiere-Parc/photo/IMGP6027-js.jpg',
      found: localStorage.getItem('totalCimetiere'),
      total: 16,
    },
  ];

  return (
    <>
      {apiMap &&
        apiMap.map((parc) => (
          <div className="MapProgress">
            <div className="divPhotoPark">
              <img className="photoPark" src={parc.photo} alt="photoPark" />
            </div>
            <div className="info">
              <h3 className="namePark">{parc.name}</h3>
              <div className="totalPlant">
                <div className="count">
                  <img className="logoplant" src={logoplant} alt="logoplant" />
                  <p>
                    {parc.found}/{parc.total}
                  </p>
                </div>
                <div className="ProgressBar">
                  <ProgressBar width={150} progress={parc.found / parc.total} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
export default MapProgress;
