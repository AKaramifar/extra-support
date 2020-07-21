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
        <h3 style={{ margin: '5% 0 ' }}>No, bookings found!</h3>
      </div>
    );
  } else {
    return (
      <div style={{ width: '75%' }}>
        <h1 style={{ margin: '5% 0 ' }}>Volunteer Bookings</h1>
        <hr />
        {studentBookings.map(booking => {
          return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h4>{booking.session.title}</h4>
              <i className="fa fa-map-marker-alt">
                <span className="icons">{booking.session.location}</span>
              </i>
              <i className="far fa-user">
                <span className="icons">
                  {booking.volunteer.firstName}
                  {booking.volunteer.lastName}
                </span>
              </i>
              <i className="fa fa-envelope">
                <span className="icons">
                  {booking.volunteer.email ? <span>{booking.volunteer.email} </span> : null}
                </span>
              </i>
              <span>
                <i className="fa fa-calendar" aria-hidden="true"></i>{' '}
                {dayjs(booking.date).format('dddd, MMMM D YYYY')}
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
  { getStudentBookings }
)(StudentBookings);
