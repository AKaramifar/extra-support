import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { getAvailabilities } from '../../Redux/Actions';
import { Button } from 'reactstrap';
function mapStateToProps(state) {
  return {
    actionController: state.ActionController,
    availabilities: state.availability.availabilities,
  };
}

export default connect(
  mapStateToProps,
  { getAvailabilities }
)(({ getAvailabilities, availabilities }) => {
  React.useEffect(() => {
    getAvailabilities();
  }, [getAvailabilities]);
  if (availabilities.length === 0) {
    return <h1>You do not have any availability</h1>;
  }
  return (
    <div style={{ marginTop: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Availabilities</h2>
        <Link to="/volunteer/availability/form">
          <Button color="success">Create a new availability</Button>
        </Link>
      </div>
      {availabilities.map(availability => {
        return (
          <div key={availability._id} className="availabilities-availability-container">
            {availability.session ? (
              <Fragment>
                <h4
                  style={{
                    borderBottom: '4px solid rgb(24 133 253)',
                    width: 'fit-content',
                    paddingBottom: '10px',
                    color: 'rgb(24 133 253)',
                  }}
                >
                  {availability.session.title}
                </h4>
                <p>{availability.session.description}</p>
                <p>
                  <strong style={{ fontSize: '18px' }}>
                    <i className="fas fa-tools" style={{ color: '#007bff' }}></i> Requirements for the session:
                  </strong>{' '}
                  {availability.session.requirements}
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <h4
                  style={{
                    borderBottom: '4px solid rgb(24 133 253)',
                    width: 'fit-content',
                    paddingBottom: '10px',
                    color: 'rgb(24 133 253)',
                  }}
                >
                  General session
                </h4>
                <p>Student can book for any type of session at this time with you.</p>
              </Fragment>
            )}

            {availability.date ? (
              <span>
                <strong style={{ fontSize: '18px' }}>
                  <i className="fa fa-calendar" aria-hidden="true" style={{ color: '#007bff' }}></i>{' '}
                </strong>
                Start from ( {dayjs(availability.date).format('dddd, MMMM D YYYY')} ), repeated ( {availability.repeat}{' '}
                )
              </span>
            ) : null}
            {availability.startTime ? (
              <span>
                <strong style={{ fontSize: '18px' }}>
                  <i className="fa fa-clock-o" aria-hidden="true" style={{ color: '#007bff' }}></i>
                </strong>{' '}
                {availability.startTime} - {availability.endTime}
              </span>
            ) : null}
            {availability.location ? (
              <span>
                <strong style={{ fontSize: '18px' }}>
                  <i className="fa fa-map-marker-alt" style={{ color: '#e83e8c' }}></i>{' '}
                </strong>
                {availability.location}
              </span>
            ) : null}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span />
              <Link
                to={{
                  pathname: '/volunteer/availability/form',
                  state: { ...availability },
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
