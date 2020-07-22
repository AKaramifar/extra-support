import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { getVolunteerBookings } from '../../Redux/Actions';

function mapStateToProps(state) {
  return {
    volunteerBookings: state.bookings.volunteerBookings,
  };
}
const VolunteerBookings = ({ volunteerBookings, getVolunteerBookings }) => {
  useEffect(() => {
    getVolunteerBookings();
  }, [getVolunteerBookings]);
  if (!volunteerBookings.length > 0) {
    return (
      <div style={{ width: '75%' }}>
        <h3 style={{ margin: '5% 0 ' }}>No bookings found!</h3>
      </div>
    );
  } else {
    return (
      <div style={{ width: '75%' }}>
        <h1 style={{ margin: '5% 0 ' }}>Bookings</h1>
        <hr />
        {volunteerBookings.map(booking => {
          return (
            <div key={booking._id} style={{ display: 'flex', flexDirection: 'column' }}>
              {booking.session ? <h4>{booking.session.title}</h4> : null}
              {booking.session ? <p>{booking.session.description}</p> : null}
              {booking.student ? (
                <i className="far fa-user">
                  <span className="icons">
                    {booking.student.firstName}{' '}
                    {booking.student.lastName}
                  </span>
                </i>
              ) : null}
              {booking.student ? (
                <i className="fa fa-envelope">
                  <span className="icons">{booking.student.email ? <span>{booking.student.email} </span> : null}</span>
                </i>
              ) : null}
              {booking.date ? (
                <span>
                  <i className="fa fa-calendar" aria-hidden="true"></i>{' '}
                  {dayjs(booking.date).format('dddd, MMMM D YYYY')}
                </span>
              ) : null}
              {booking.date ? (
                <span>
                  <i className="fa fa-clock-o" aria-hidden="true"></i> {booking.time}
                </span>
              ) : null}
              {booking.location ? (
                <i className="fa fa-map-marker-alt">
                  <span className="icons">{booking.location}</span>
                </i>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  { getVolunteerBookings }
)(VolunteerBookings);
