import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { setMovieType } from '../../redux/actions/Movies';
import './Header.scss';
import logo from '../../assets/cinema-logo.svg';

const Header = ({ setMovieType, stateMoviesType }) => {
  // const [navClass, setNavClass] = useState(false);
  // const [menuClass, setMenuClass] = useState(false);
  const [toggleMenuState, setToggleMenuState] = useState(false);
  const detailsRoute = useRouteMatch('/:id/:name/details');
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    if (detailsRoute || location.pathname === '/') {
      setShowHeader(true);
    }
  }, []);

  const HEADER_LIST = [
    {
      id: 1,
      iconClass: 'fas fa-film',
      name: 'Now Playing',
      type: 'now_playing'
    },
    {
      id: 2,
      iconClass: 'fas fa-fire',
      name: 'Popular',
      type: 'popular'
    },
    {
      id: 3,
      iconClass: 'fas fa-star',
      name: 'Top Rated',
      type: 'top_rated'
    },
    {
      id: 4,
      iconClass: 'fas fa-plus-square',
      name: 'Upcoming',
      type: 'upcoming'
    }
  ];

  const toggleMenu = () => {
    // setMenuClass(!menuClass);
    // setNavClass(!menuClass);
    setToggleMenuState(!toggleMenuState);
    /* if (toggleMenuState) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    } */
  };

  const handleMovieType = (movieType) => {
    setMovieType(movieType);
  };

  return (
    <>
      { showHeader &&
        <div className="header-nav-container">
          <div className="header-bar"></div>
          <div className="header-navbar">
            <div className="header-image">
              <img src={logo} alt="" />
            </div>
            <div className="header-menu">
              <div className={`${toggleMenuState ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`} id="header-mobile-menu" onClick={() => toggleMenu()}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <ul className={`${toggleMenuState ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
                {HEADER_LIST.map((data) => (
                  <li key={data.id} className={data.type === stateMoviesType.type ? 'header-nav-item active-item' : 'header-nav-item'} onClick={() => handleMovieType({ type: data.type, name: data.name })}>
                    <span className='header-list-name'>
                      <i className={data.iconClass}></i>
                    </span>
                  &nbsp;
                    <span className='header-list-name'>{data.name}</span>
                  </li>
                ))}
                <input className="search-input" type="text" placeholder="Search for a Movie"></input>
              </ul>
            </div>
          </div>
        </div>
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  stateMoviesType: state.movies.movieType
});

const mapDispatchToProps = (dispatch) => ({
  setMovieType: (movieType) => dispatch(setMovieType(movieType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
