import React from 'react';
import { connect } from 'react-redux';
import { getStudentBookings } from '../../Redux/Actions';
import dayjs from 'dayjs';
function mapStateToProps(state) {
  return {
    studentBookings: state.bookings.studentBookings,
  };
}

const StudentBookings = ({ studentBookings, getStudentBookings }) => {
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
      <div style={{ width: '75%' }}>
        <h1 style={{ margin: '5% 0 ' }}>Bookings</h1>
        <hr />
        {studentBookings.map(booking => {
          return (
            <div key={booking._id} style={{ display: 'flex', flexDirection: 'column' }}>
              {booking.session ? <h4>{booking.session.title}</h4> : null}
              {booking.session ? <p>{booking.session.description}</p> : null}
              {booking.volunteer ? (
                <i className="far fa-user">
                  <span className="icons">
                    {booking.volunteer.firstName}
                    {booking.volunteer.lastName}
                  </span>
                </i>
              ) : null}
              {booking.volunteer ? (
                <i className="fa fa-envelope">
                  <span className="icons">
                    {booking.volunteer.email ? <span>{booking.volunteer.email} </span> : null}
                  </span>
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
  { getStudentBookings }
)(StudentBookings);
