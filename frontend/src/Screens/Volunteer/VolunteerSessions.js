import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVolunteerSessions } from '../../Redux/Actions';
import { Button } from 'reactstrap';
function mapStateToProps(state) {
  return {
    actionController: state.ActionController,
    volunteerSessions: state.sessions.volunteerSessions,
  };
}

export default connect(
  mapStateToProps,
  { getVolunteerSessions }
)(({ getVolunteerSessions, volunteerSessions }) => {
  React.useEffect(() => {
    getVolunteerSessions();
  }, [getVolunteerSessions]);
  if (volunteerSessions.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <h1>You do not have any sessions</h1>
        <Link to="/volunteer/session/form">
          <Button color="success">Create a new session</Button>
        </Link>
      </div>
    );
  }
  return (
    <div style={{ marginTop: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Sessions</h2>
        <Link to="/volunteer/session/form">
          <Button color="success">Create a new session</Button>
        </Link>
      </div>
      {volunteerSessions.map(session => {
        return (
          <div key={session._id} className="sessions-session-container">
            <Fragment>
              <h4
                style={{
                  borderBottom: '4px solid rgb(24 133 253)',
                  width: 'fit-content',
                  paddingBottom: '10px',
                  color: 'rgb(24 133 253)',
                }}
              >
                {session.title}
              </h4>
              <p>{session.description}</p>

              {session.category ? (
                <p>
                  <strong style={{ fontSize: '18px' }}>
                    <i className="fas fa-book" style={{ color: '#007bff' }}></i> Category:
                  </strong>{' '}
                  {session.category.name}
                </p>
              ) : null}
              {session.requirements ? (
                <p>
                  <strong style={{ fontSize: '18px' }}>
                    <i className="fas fa-tools" style={{ color: '#007bff' }}></i> Requirements for the session:
                  </strong>{' '}
                  {session.requirements}
                </p>
              ) : null}
            </Fragment>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span />
              <Link
                to={{
                  pathname: '/volunteer/session/form',
                  state: { ...session },
                }}
              >
                <Button color="success">Edit</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
});
