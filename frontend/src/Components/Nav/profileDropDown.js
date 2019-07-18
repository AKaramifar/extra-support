import React from 'react';
import { Link } from 'react-router-dom';
import { getProfile } from '../../Auth';
import Profile from './profile.svg';
import { logout } from '../../Auth';
const onLogOut = () => {
  logout();
};

export default () => (
  <div className="dropdown media-display-none">
    <img
      src={getProfile().avatar ? getProfile().avatar : Profile}
      alt="profile"
      className="dropdown-toggle profile-icon"
      data-toggle="dropdown"
      style={{
        width: '45px',
        borderRadius:'25px'
      }}
    />
    <div className="dropdown-menu">
      <span className="arrow-up-div">
        <span className="arrow-up" />
      </span>
      <div className="dropdown-menu-items">
        <Link className="dropdown-item nav-btn" to="/profile">
          Your Profile
        </Link>
        <Link className="dropdown-item nav-btn" to="/">
          Home
        </Link>
        <hr className="m-1" />
        <span
          className="logout-btn dropdown-item"
          onClick={() => onLogOut()}
          onKeyDown={() => onLogOut()}
          role="button"
          tabIndex={0}
        >
          Log Out
        </span>
      </div>
    </div>
  </div>
);
