import React from 'react';
import { connect } from 'react-redux';
import { getStudentBookings } from '../Redux/Actions';
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
  return (
    <div style={{ width: '75%' }}>
      <br />
      <h1>Select a category</h1>
      <div className="categories">
        {studentBookings.length > 0 &&
          studentBookings.map(oneBooking => {
            return (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4>{oneBooking.sesstion.title}</h4>
                <i className="fa fa-map-marker-alt">
                  <span className="icons">{oneBooking.sesstion.location}</span>
                </i>
                <i className="far fa-user">
                  <span className="icons">
                    {oneBooking.volunteer.firstName}
                    {oneBooking.volunteer.lastName}
                  </span>
                </i>
                <i className="fa fa-envelope">
                  <span className="icons">
                    {oneBooking.volunteer.email ? <span>{oneBooking.volunteer.email} </span> : null}
                  </span>
                </i>
                <span>
                  <i className="fa fa-calendar" aria-hidden="true"></i>{' '}
                  {dayjs(oneBooking.date).format('dddd, MMMM D YYYY')}
                </span>
                <span>
                  <i className="fa fa-clock-o" aria-hidden="true"></i> {oneBooking.time}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { getStudentBookings }
)(StudentBookings);
