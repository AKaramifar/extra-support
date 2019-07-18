import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProfileDropDown from './profileDropDown';
import { logout, loggedIn } from '../../Auth';
import './index.css';

export default class Navbar extends React.Component {
  onLogOut = () => {
    logout();
    window.location.reload(true);
  };
  render() {
    return (
      <div className="navbar-div">
        <nav className="navbar navbar-expand-lg navbar-light container">
          <Link className="nav-link nav-btn" to="/">
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
              {!loggedIn() && (
                <li className="nav-item">
                  <Link className="nav-link nav-btn" to="/">
                    Login
                  </Link>
                </li>
              )}
              <li className="nav-item desktop-display-none" />
              {loggedIn() && (
                <Fragment>
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
              )}
            </ul>
          </div>
          {loggedIn()&&<ProfileDropDown />}
        </nav>
      </div>
    );
  }
}
