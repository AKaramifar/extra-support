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
};

export default connect(
  mapStateToProps,
  { getVolunteerBookings }
)(VolunteerBookings);
