import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVolunteerBookings, cancelVolunteerBookings } from '../../Redux/Actions';
import dayjs from 'dayjs';
import './index.css';
import { Button } from 'reactstrap';
function mapStateToProps(state) {
  return {
    volunteerBookings: state.bookings.volunteerBookings,
  };
}
const StudentBookings = ({ volunteerBookings, getVolunteerBookings, cancelVolunteerBookings }) => {
  const handleCancel = id => {
    cancelVolunteerBookings(id);
  };

  React.useEffect(() => {
    getVolunteerBookings();
  }, [getVolunteerBookings]);
  if (volunteerBookings.length === 0) {
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
          <Button color="success" size="sm" className="create-booking-button"  href="/volunteer/availability/form">
            Create a new availability
          </Button>
        </div>
        <hr />
        <div className="all-bookings">
          {volunteerBookings.map(booking => {
            return (
              <div key={booking._id} className="single-booking">
                {booking.session ? <h4 className="booking-session-title">{booking.session.title}</h4> : null}
                {booking.session ? <p>{booking.session.description}</p> : null}
                {booking.student ? (
                  <span>
                    <i className="fa fa-envelope color-blue" aria-hidden="true"></i> {booking.student.firstName}
                    {booking.student.lastName}
                  </span>
                ) : null}
                {booking.student ? (
                  <span>
                    <i className="fa fa-envelope color-blue" aria-hidden="true"></i> {booking.student.email}
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
  { getVolunteerBookings, cancelVolunteerBookings }
)(StudentBookings);
