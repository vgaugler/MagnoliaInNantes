/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  const [photoHeader, setPhotoHeader] = useState(null);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');
  const [homeActive, setHomeActive] = useState(true);
  const [magnoliaArray, setMagnoliaArray] = useState([]);
  const [showAll, setShowAll] = useState([magnoliaArray]);

  const getMagnolia = async () => {
    const temp = await fetch(`https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_collection-vegetale-nantes&q=&rows=400&start=0&refine.genre=Magnolia
    `).then((res) => res.json());
    setMagnoliaArray(temp.records);
    setShowAll(
      temp.records.filter(
        (valeur) =>
          valeur.fields.photo1 !== undefined &&
          valeur.fields.cultivar !== undefined &&
          valeur.fields.espece !== undefined &&
          valeur.fields.location !== undefined &&
          valeur.fields.nom_du_site !== undefined
      )
    );
    {
      /* setLoading(true); */
    }
  };

  useEffect(() => {
    getMagnolia();
    const loggedInUser = localStorage.getItem('name');
    const loggedAvatar = localStorage.getItem('photo');

    localStorage.getItem('isfound');
    if (loggedInUser && loggedAvatar) {
      setUser(loggedInUser);
      setPhotoHeader(loggedAvatar);
    }
  }, [user, photoHeader]);

  return (
    <div className="App">
      <div className="clip" />
      {homeActive === true ? (
        <Header
          photoHeader={photoHeader}
          setPhotoHeader={setPhotoHeader}
          username={username}
          setUsername={setUsername}
          user={user}
          setUser={setUser}
        />
      ) : (
        ''
      )}

      <Nav
        photoHeader={photoHeader}
        setPhotoHeader={setPhotoHeader}
        username={username}
        setUsername={setUsername}
        user={user}
        setUser={setUser}
        setHomeActive={setHomeActive}
        homeActive={homeActive}
        getMagnolia={getMagnolia}
        showAll={showAll}
        setShowAll={setShowAll}
        magnoliaArray={magnoliaArray}
        setMagnoliaArray={setMagnoliaArray}
      />
    </div>
  );
}

export default App;
