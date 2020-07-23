import React from 'react';
import { connect } from 'react-redux';
import { getVolunteerBookings, cancelVolunteerBookings } from '../../Redux/Actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import dayjs from 'dayjs';
import './index.css';
function mapStateToProps(state) {
  return {
    volunteerBookings: state.bookings.volunteerBookings,
  };
}
const StudentBookings = ({ volunteerBookings, getVolunteerBookings, cancelVolunteerBookings }) => {
  const [values, setValues] = React.useState({
    bookingId: '',
    text: '',
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [modal, setModal] = React.useState(false);
  const toggle = bookingId => {
    setValues({
      ...values,
      bookingId,
    });
    setModal(!modal);
  };

  const handleCancel = () => {
    const { text, bookingId } = values;
    cancelVolunteerBookings(bookingId, text);
    toggle();
  };

  React.useEffect(() => {
    getVolunteerBookings();
  }, [getVolunteerBookings]);
  if (volunteerBookings.length === 0) {
    return (
      <div style={{ width: '75%' }}>
        <h3 style={{ margin: '5% 0' }}>No bookings found!</h3>
      </div>
    );
  } else {
    return (
      <div className="bookings-container">
        <div className="booking-header">
          <h1 style={{ margin: '20px 0 ' }}>Bookings</h1>
        </div>
        <div className="all-bookings">
          {volunteerBookings.map(booking => {
            return (
              <div key={booking._id} className="single-booking" style={{ border: booking.canceled && '1px solid red' }}>
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
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'red' }}>{booking.canceled ? 'Booking has been canceled' : ''}</span>
                  <Button color="danger" onClick={() => toggle(booking._id)} disabled={booking.canceled}>
                    Cancel booking
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }} toggle={toggle}>
          <ModalHeader toggle={toggle}>Cancel booking</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="textText">Please tell our student your reason of cancelling this booking.</Label>
              <Input
                type="textarea"
                name="text"
                onChange={handleChange}
                value={values.text}
                id="textText"
                placeholder="Type something"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => handleCancel()} color="danger">
              Cancel booking
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};
export default connect(
  mapStateToProps,
  { getVolunteerBookings, cancelVolunteerBookings }
)(StudentBookings);
