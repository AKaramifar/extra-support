import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropDown from './profileDropDown';
import { logout, loggedIn, isAuthorized } from '../../Auth';
import logo_CYF_square from './logo-CYF-square.png';
import './index.css';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    pathName: state.ActionController.pathName,
  };
}

export default connect(mapStateToProps)(({ pathName }) => {
  const onLogOut = () => {
    logout();
    window.location.reload(true);
  };
  return (
    <div className="navbar-div">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand" href="/">
          <img src={logo_CYF_square} alt="logo" width="80" height="50" />
        </a>
        <Link className={`nav-link nav-btn ${pathName === '/' && 'nav-btn-active'}`} to="/">
          Home
        </Link>
        <span className="sr-only">(current)</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {loggedIn() && isAuthorized(['STUDENT']) && (
              <li className="nav-item">
                <Link className={`nav-link nav-btn ${pathName === '/categories' && 'nav-btn-active'}`} to="/categories">
                  Start Booking a Session
                </Link>
              </li>
            )}
            {loggedIn() && isAuthorized(['STUDENT']) && (
              <li className="nav-item">
                <Link
                  className={`nav-link nav-btn ${pathName === '/student/bookings' && 'nav-btn-active'}`}
                  to="/student/bookings"
                >
                  bookings
                </Link>
              </li>
            )}
            {!loggedIn() && (
              <li className="nav-item">
                <Link
                  className={`nav-link nav-btn ${pathName === '/student/login' && 'nav-btn-active'}`}
                  to="/student/login"
                >
                  Student Login
                </Link>
              </li>
            )}
            {!loggedIn() && (
              <li className="nav-item">
                <Link
                  className={`nav-link nav-btn ${pathName === '/volunteer/login' && 'nav-btn-active'}`}
                  to="/volunteer/login"
                >
                  Volunteer Login
                </Link>
              </li>
            )}
            {isAuthorized(['VOLUNTEER']) ? (
              <li className="nav-item">
                <Link
                  className={`nav-link nav-btn ${pathName === '/volunteer/sessions' && 'nav-btn-active'}`}
                  to="/volunteer/sessions"
                >
                  Session
                </Link>
              </li>
            ) : null}
            {isAuthorized(['VOLUNTEER']) ? (
              <li className="nav-item">
                <Link
                  className={`nav-link nav-btn ${pathName === '/volunteer/availabilities' && 'nav-btn-active'}`}
                  to="/volunteer/availabilities"
                >
                  Availability
                </Link>
              </li>
            ) : null}
            {loggedIn() && isAuthorized(['VOLUNTEER']) && (
              <Link
                className={`nav-link nav-btn ${pathName === '/volunteer/bookings' && 'nav-btn-active'}`}
                to="/volunteer/bookings"
              >
                Bookings
              </Link>
            )}
            <li className="nav-item desktop-display-none" />
            {loggedIn() && (
              <Fragment>
                <hr className="m-1 w-25" />
                <li className="nav-item desktop-display-none">
                  <span
                    className="nav-link logout-btn"
                    onClick={onLogOut}
                    onKeyDown={onLogOut}
                    role="button"
                    tabIndex={0}
                  >
                    Log Out
                  </span>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
        {loggedIn() && <ProfileDropDown />}
      </nav>
    </div>
  );
});
