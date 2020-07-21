import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
        <h1 style={{ margin: '5% 0 ' }}>Volunteer Bookings</h1>
        <hr />
        <ul>
          {volunteerBookings.map((booking, index) => (
            <li key={index} value={booking.studentName}>
              {(booking.studentName, booking.studentEmail, booking.bookingDate, booking.bookingTime)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  { getVolunteerBookings }
)(VolunteerBookings);
