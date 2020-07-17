import React from 'react';
import { Link } from 'react-router-dom';

export default ({ session, category }) => {
  return (
    <div className="tutorial">
      <h3>{session.title}</h3>
      {session.description ? <p>{session.description}</p> : null}
      {session.location ? (
        <i class="fa fa-map-marker-alt">
          <span className="icons">{session.location}</span>
        </i>
      ) : null}
      {session.volunteerName ? (
        <i class="far fa-user">
          <span className="icons">{session.volunteerName}</span>
        </i>
      ) : null}
      <Link style={{ marginLeft: 70 }} to={{ pathname: `/booking/${session._id}`, state: { category } }}>
        <h6 className="text-success">Check Availability</h6>
      </Link>
    </div>
  );
};
