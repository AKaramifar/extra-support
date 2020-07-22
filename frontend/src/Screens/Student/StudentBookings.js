import React from 'react';
import { connect } from 'react-redux';
import { getStudentBookings, cancelStudentBookings } from '../../Redux/Actions';
import dayjs from 'dayjs';
import '../Volunteer/index.css';
import { Button } from 'reactstrap';
function mapStateToProps(state) {
  return {
    studentBookings: state.bookings.studentBookings,
  };
}
const StudentBookings = ({ studentBookings, getStudentBookings, cancelStudentBookings }) => {
  const handleCancel = id => {
    cancelStudentBookings(id);
  };

  React.useEffect(() => {
    getStudentBookings();
  }, [getStudentBookings]);
  if (studentBookings.length === 0) {
    return (
      <div style={{ width: '75%' }}>
        <h3 style={{ margin: '5% 0 ' }}>No bookings found!</h3>
      </div>
    );
  } else {
    return (
      <div className="bookings-container">
        <div className="booking-header">
          <h1 style={{ margin: '5% 0 ' }}>Bookings</h1>
          <Button color="success" size="sm" className="create-booking-button"  href="/categories">
            Create a new booking
          </Button>
        </div>
        <hr />
        <div className="all-bookings">
          {studentBookings.map(booking => {
            return (
              <div key={booking._id} className="single-booking">
                {booking.session ? <h4 className="booking-session-title">{booking.session.title}</h4> : null}
                {booking.session ? <p>{booking.session.description}</p> : null}
                {booking.volunteer ? (
                  <span>
                    <i className="fa fa-envelope color-blue" aria-hidden="true"></i> {booking.volunteer.firstName}
                    {booking.volunteer.lastName}
                  </span>
                ) : null}
                {booking.volunteer ? (
                  <span>
                    <i className="fa fa-envelope color-blue" aria-hidden="true"></i> {booking.volunteer.email}
                  </span>
                ) : null}
                {booking.date ? (
                  <span>
                    <i className="fa fa-calendar color-blue" aria-hidden="true"></i>{' '}
                    {dayjs(booking.date).format('dddd, MMMM D YYYY')}
                  </span>
                ) : null}
                {booking.date ? (
                  <span>
                    <i className="fa fa-clock-o color-blue" aria-hidden="true"></i> {booking.time}
                  </span>
                ) : null}
                {booking.location ? (
                  <span>
                    <i className="fa fa-map-marker-alt red-color" aria-hidden="true"></i> {booking.location}
                  </span>
                ) : null}
                <Button onClick={() => handleCancel(booking._id)} color="success" size="sm" className="cancel-button">
                  Cancel
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default connect(
  mapStateToProps,
  { getStudentBookings, cancelStudentBookings }
)(StudentBookings);
