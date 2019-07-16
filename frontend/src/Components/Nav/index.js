import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Profile from './profile.svg';

import './index.css';

export default class Navbar extends React.Component {
  onLogOut = () => {
    window.location.reload(true);
  };
  render() {
    return (
      <div className="navbar-div">
        <nav className="navbar navbar-expand-lg navbar-light container">
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
              <li className="nav-item">
                <Link className="nav-link nav-btn" to="/">
                  Home
                </Link>
                <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-btn" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <span className="sr-only">(current)</span>
              </li>
              <li className="nav-item desktop-display-none" />
              <Fragment>
                <li className="nav-item desktop-display-none">
                  <Link className="nav-link nav-btn" to="/Resources">
                    Help
                  </Link>
                </li>
                <hr className="m-1 w-25" />
                <li className="nav-item desktop-display-none">
                  <span
                    className="nav-link logout-btn"
                    onClick={this.onLogOut}
                    onKeyDown={this.onLogOut}
                    role="button"
                    tabIndex={0}
                  >
                    Log Out
                  </span>
                </li>
              </Fragment>
            </ul>

            <div className="dropdown media-display-none">
              <img src={Profile} alt="profile" className="dropdown-toggle profile-icon" data-toggle="dropdown" />
              <div className="dropdown-menu">
                <span className="arrow-up-div">
                  <span className="arrow-up" />
                </span>
                <div className="dropdown-menu-items">
                  <Link className="dropdown-item nav-btn" to="/dashboard">
                    Your Profile
                  </Link>

                  <hr className="m-1" />
                  <span
                    className="logout-btn dropdown-item"
                    onClick={this.onLogOut}
                    onKeyDown={this.onLogOut}
                    role="button"
                    tabIndex={0}
                  >
                    Log Out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
