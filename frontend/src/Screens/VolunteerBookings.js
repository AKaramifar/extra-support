import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBookings } from '../Redux/Actions';
import Spinner from '../Components/Spinner';

const fakeBooking = [
  {
    studentName: 'Yohannes',
    studentEmail: 'b.yohannes@gmail.com',
    bookingDate: 'Saturday, July 25 2021',
    bookingTime: '11:30 - 12:00',
  },
  {
    studentName: 'Daniel',
    studentEmail: 'daniel@gmail.com',
    bookingDate: 'Monday, July 24 2021',
    bookingTime: '13:30 - 14:00',
  },
  {
    studentName: 'Elamin',
    studentEmail: 'aldeez@gmail.com',
    bookingDate: 'Thursday, August 21 2021',
    bookingTime: '09:30 - 10:00',
  },
  {
    studentName: 'Neil',
    studentEmail: 'Neilcyf@gmail.com',
    bookingDate: 'SFriday, September 2021',
    bookingTime: '15:00 - 15:30',
  },
];

function mapStateToProps(state) {
  return {
    bookings: state.categories.categories,
  };
}
const VolunteerBookings = ({ bookings = fakeBooking, getBookings }) => {
  useEffect(() => {
    getBookings();
  }, [getBookings]);

  return (
    <div style={{ width: '75%' }}>
      <Spinner style={{ width: '200px', height: '200px' }} />
      <h1 style={{ margin: '5% 0 ' }}>Volunteer Bookings</h1>
      <hr />
      <ul>
        {bookings.map((booking, index) => (
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
  { getBookings }
)(VolunteerBookings);
