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
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px'  }}>
        <h1>You do not have any availability</h1>
        <Link to="/volunteer/availability/form">
          <Button color="success">Create a new availability</Button>
        </Link>
      </div>
    );
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
            <h4
              style={{
                borderBottom: '2px solid rgb(24 133 253)',
                width: 'fit-content',
                paddingBottom: '2px',
                color: 'rgb(24 133 253)',
              }}
            >
              Availability details
            </h4>
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
            <h4
              style={{
                borderBottom: '2px solid rgb(24 133 253)',
                width: 'fit-content',
                paddingBottom: '2px',
                color: 'rgb(24 133 253)',
                marginTop: '20px',
              }}
            >
              Selected session details
            </h4>
            {availability.session ? (
              <Fragment>
                <h6>{availability.session.title}</h6>
                <p>{availability.session.description}</p>
              </Fragment>
            ) : (
              <Fragment>
                <h6>General session</h6>
                <p>Student can book for any type of session at this time with you.</p>
              </Fragment>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {availability.active ? (
                <span style={{ color: '#28a744' }}>You are active at this time</span>
              ) : (
                <span style={{ color: '#ffc107' }}>You have deactivated this time</span>
              )}
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
