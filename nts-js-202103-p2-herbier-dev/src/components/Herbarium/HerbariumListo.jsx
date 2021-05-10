/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import HerbariumCard from './HerbariumCard';

function HerbariumListo({ magnoliaArray, showAll, setShowAll, getMagnolia }) {
  const [plantFound, setPlantFound] = useState([]);

  useEffect(() => {
    getMagnolia();
    const plantfound = localStorage.getItem('isfound');
    setPlantFound(plantfound);
  }, []);

  const filtered = magnoliaArray.filter((valeur) =>
    plantFound !== null ? plantFound.includes(valeur.recordid) : ''
  );

  const all = magnoliaArray.filter(
    (valeur) =>
      valeur.fields.photo1 !== undefined &&
      valeur.fields.cultivar !== undefined &&
      valeur.fields.espece !== undefined
  );

  const showMineOnly = () => {
    setShowAll(filtered);
  };
  const showAllOnly = () => {
    setShowAll(all);
  };

  return (
    <div className="BoxHerbarium">
      <h2 className="herbier-title">Mon herbier :</h2>
      <div className="herbier-btn">
        <button className="herbier-btn-magnolia" onClick={() => showMineOnly()}>
          Mes Magnolias
        </button>
        <button className="herbier-btn-magnolia" onClick={() => showAllOnly()}>
          Tout les Magnolias
        </button>
      </div>

      {showAll &&
        showAll.map((plant, index) => (
          <HerbariumCard
            id={index}
            key={plant.recordid}
            plant={plant}
            gotcha={
              plantFound !== null ? plantFound.includes(plant.recordid) : false
            }
          />
        ))}
    </div>
  );
}
export default HerbariumListo;
