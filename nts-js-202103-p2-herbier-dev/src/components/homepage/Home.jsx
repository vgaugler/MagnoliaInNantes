/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import './Home.css';

import avatar1 from './avatars(1).png';
import avatar2 from './avatars(2).png';
import avatar3 from './avatars(3).png';
import avatar4 from './avatars(4).png';
import avatar5 from './avatars(5).png';
import avatar6 from './avatars(6).png';

const Home = ({
  photoHeader,
  setPhotoHeader,
  setUsername,
  username,
  user,
  setUser,
}) => {
  const avatarImg = [
    {
      key: 1,
      avatar: avatar1,
    },
    {
      key: 2,
      avatar: avatar4,
    },
    {
      key: 3,
      avatar: avatar3,
    },
    {
      key: 4,
      avatar: avatar2,
    },
    {
      key: 5,
      avatar: avatar5,
    },
    {
      key: 6,
      avatar: avatar6,
    },
  ];

  const [avatarActive, setAvatarActive] = useState(0);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('name');
    const loggedAvatar = localStorage.getItem('photo');

    localStorage.getItem('isfound');
    if (loggedInUser && loggedAvatar) {
      setUser(loggedInUser);
      setPhotoHeader(loggedAvatar);
    }
  }, [user, photoHeader]);

  // logout the user
  const handleLogout = () => {
    setUser();
    setUsername('');
    setPhotoHeader('');
    localStorage.clear();
  };

  // login the user
  const handleSubmit = async (e) => {
    e.preventDefault();

    // set the state of the user
    setUser(username);
    // store the user in localStorage
    localStorage.setItem('name', username);
    localStorage.setItem('photo', photoHeader);
  };

  // if there's a user show the message below
  if (user) {
    return (
      <div className="home-welcome">
        <h2 className="home-welcome-text">
          Bienvenue <span>{user}</span>, en forme pour remplir votre herbier ?
          Ne perdez pas de temps ! 🌱🍁🌳
        </h2>
        <img src={photoHeader} alt="" className="home-welcome-img" />
        <button type="button" onClick={handleLogout} className="home-btn">
          Se déconnecter
        </button>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home-header" />
      <form onSubmit={handleSubmit}>
        <div className="home-section-profil">
          <h2>Choisissez votre pseudo :</h2>
          <input
            type="text"
            placeholder="Pseudo"
            value={username}
            required
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className="home-section-avatar">
          <h2>Choisissez votre avatar :</h2>
          <div className="home-section-avatar-img">
            {avatarImg.map((photo) => (
              <img
                key={photo.key}
                id={photo.key}
                src={photo.avatar}
                alt="avatar"
                className={photo.key === avatarActive ? 'avatar-active' : ''}
                onClick={() => {
                  setPhotoHeader(photo.avatar);
                  setAvatarActive(photo.key);
                }}
              />
            ))}
          </div>
        </div>
        <div className="home-button">
          <button className="home-btn" type="submit">
            VALIDER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
