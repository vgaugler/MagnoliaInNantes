/* eslint-disable import/no-named-as-default-member */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import HomePage from '../homepage/Home';
import HerbariumListo from '../Herbarium/HerbariumListo';
import Map from '../Map/Map';
import './Nav.css';
import HomeSvg from './HomeSvg';
import ProgressSvg from './ProgressSvg';
import HerbierSvg from './HerbierSvg';
import PlansSvg from './PlansSvg';
import GallerySvg from './GallerySvg';
import PageProgress from '../mapProgress/PageProgress';
import Gallery from '../Gallerie/Gallery';

function Nav({
  setPhotoHeader,
  setUsername,
  username,
  user,
  setUser,
  photoHeader,
  setHomeActive,
  showAll,
  getMagnolia,
  setShowAll,
  magnoliaArray,
  setMagnoliaArray,
}) {
  return (
    <Router>
      <nav className="footer">
        <div className="boxIcon">
          <NavLink
            exact
            to="/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <HomeSvg fill="white" onClick={() => setHomeActive(true)} />
            <p>Home</p>
          </NavLink>
        </div>
        <div className="boxIcon">
          <NavLink
            exact
            to="/PageProgress/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <ProgressSvg fill="white" onClick={() => setHomeActive(true)} />
            <p>Progrès</p>
          </NavLink>
        </div>
        <div className="boxIcon">
          <NavLink
            exact
            to="/Herbarium/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <HerbierSvg fill="white" onClick={() => setHomeActive(true)} />
            <p>Herbier</p>
          </NavLink>
        </div>
        <div className="boxIcon">
          <NavLink
            exact
            to="/Map/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <PlansSvg fill="white" onClick={() => setHomeActive(true)} />
            <p>Plans</p>
          </NavLink>
        </div>
        <div className="boxIcon">
          <NavLink
            exact
            to="/Gallerie/"
            className="main-nav"
            activeClassName="main-nav-active"
          >
            <GallerySvg fill="white" onClick={() => setHomeActive(true)} />
            <p>Galerie</p>
          </NavLink>
        </div>
      </nav>

      <Switch>
        <Route path="/Herbarium/">
          <HerbariumListo
            getMagnolia={getMagnolia}
            magnoliaArray={magnoliaArray}
            setMagnoliaArray={setMagnoliaArray}
            showAll={showAll}
            setShowAll={setShowAll}
            photoHeader={photoHeader}
          />
        </Route>
        <Route path="/PageProgress/">
          <PageProgress />
        </Route>
        <Route path="/Map/">
          <Map
            getMagnolia={getMagnolia}
            magnoliaArray={magnoliaArray}
            setMagnoliaArray={setMagnoliaArray}
            showAll={showAll}
            setShowAll={setShowAll}
            photoHeader={photoHeader}
            user={user}
          />
        </Route>
        <Route path="/Gallerie/">
          <Gallery
            getMagnolia={getMagnolia}
            magnoliaArray={magnoliaArray}
            setMagnoliaArray={setMagnoliaArray}
            showAll={showAll}
            setShowAll={setShowAll}
            photoHeader={photoHeader}
            user={user}
          />
        </Route>
        <Route path="/">
          <HomePage
            photoHeader={photoHeader}
            setPhotoHeader={setPhotoHeader}
            username={username}
            setUsername={setUsername}
            user={user}
            setUser={setUser}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;
