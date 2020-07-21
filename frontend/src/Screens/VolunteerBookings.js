import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { getVolunteerBookings } from '../Redux/Actions';

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
        <h3 style={{ color: 'red', margin: '5% 0 ' }}>No, bookings found!</h3>
      </div>
    );
  } else {
    return (
      <div style={{ width: '75%' }}>
        <h1 style={{ margin: '5% 0 ' }}>Bookings</h1>
        <hr />
        {volunteerBookings.map((booking, index) => {
          return (
            <div style={{ display: 'flex', flexDirection: 'column' }} key={index}>
              <h4>`Booking Number ${index} `</h4>
              <i className="fa fa-map-marker-alt">
                <span className="icons">{booking.firstName}</span>
              </i>
              <i className="fa fa-map-marker-alt">
                <span className="icons">{booking.lastName}</span>
              </i>
              <i className="far fa-user">
                <span className="icons">{booking.email}</span>
              </i>
              <span>
                <i className="fa fa-calendar" aria-hidden="true"></i> {dayjs(booking.date).format('dddd, MMMM D YYYY')}
              </span>
              <span>
                <i className="fa fa-clock-o" aria-hidden="true"></i> {booking.time}
              </span>
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
