import React from 'react';
import { Link } from 'react-router-dom';

export default ({ session, category }) => {
  return (
    <div className="tutorial">
      <h3>{session.name}</h3>
      <p>{session.description}</p>
      <i class="fa fa-map-marker-alt">
        <span className="icons">{session.location}</span>
      </i>
      <i class="far fa-user">
        <span className="icons">{session.mentor}</span>
      </i>
      <i class="far fa-clock">
        <span className="icons">{session.information[0].name}</span>
      </i>
      <i class="far fa-clock">
        <span className="icons">{session.information[1].name}</span>
      </i>
      <Link style={{ marginLeft: 70 }} to={{ pathname: `/booking/${session.name}`, state: { category } }}>
        <h6 className="text-success">Check Availability</h6>
      </Link>
    </div>
  );
};
