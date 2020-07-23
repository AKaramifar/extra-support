import React, { useState, useEffect } from 'react';
import { getSession, createBooking, removeBooking } from '../Redux/Actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { getProfile } from '../Auth/index';
import dayjs from 'dayjs';

function mapStateToProps(state) {
  return {
    session: state.sessions.session,
    isLoading: state.ActionController.isLoading,
    categories: state.categories.categories,
    booking: state.bookings.booking,
  };
}
export default connect(
  mapStateToProps,
  { getSession, createBooking, removeBooking }
)(({ session, getSession, createBooking, match, isLoading, booking, removeBooking }) => {
  const [values, setValues] = useState({
    studentName: getProfile() ? getProfile().firstName + ' ' + getProfile().lastName : '',
    tel: getProfile() ? getProfile().tel : '',
    email: getProfile() ? getProfile().email : '',
    date: '',
    time: '',
    location: '',
  });
  useEffect(() => {
    const { sessionId } = match.params;
    getSession(sessionId);
  }, [getSession, match.params]);

  const onChangeHandler = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    values.volunteerId = session.volunteer._id;
    values.sessionId = session._id;
    values.volunteerEmail = session.volunteer.email;
    values.volunteerName = session.volunteer.firstName;
    values.description = session.description;
    values.title = session.title;
    createBooking(values);
  };

  const availabilities = session.availabilities ? session.availabilities : [];
  if (!session._id) {
    return (
      <div>
        <h1>No session to find.</h1>
      </div>
    );
  }
  if (!!booking._id) {
    return (
      <div className="booking-modal-container">
        <Modal isOpen={!!booking._id}>
          <ModalBody style={{ backgroundColor: '#adffbf' }}>
            <h3>Good news</h3>
            <p>Congratulations, you have booked your {session.title} session successfully.</p>
            <h5>Booking Details</h5>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {session.volunteer ? (
                <span>
                  <i className="fa fa-user"></i>{' '}
                  <span>
                    {session.volunteer.lastName ? <span> {session.volunteer.lastName}</span> : null},{' '}
                    {session.volunteer.firstName ? <span>{session.volunteer.firstName} </span> : null}
                  </span>
                </span>
              ) : null}
              {session.volunteer ? (
                <span>
                  <i className="fa fa-envelope"></i>{' '}
                  <span>{session.volunteer.email ? <span>{session.volunteer.email} </span> : null}</span>
                </span>
              ) : null}
              <span>
                <i className="fa fa-calendar" aria-hidden="true"></i> {dayjs(booking.date).format('dddd, MMMM D YYYY')}
              </span>
              <span>
                <i className="fa fa-clock-o" aria-hidden="true"></i> {booking.time}
              </span>
              {session.location ? (
                <span>
                  <i className="fa fa-map-marker-alt"></i> <span>{session.location}</span>
                </span>
              ) : null}
            </div>
          </ModalBody>
          <ModalFooter style={{ backgroundColor: '#adffbf' }}>
            <Button color="success" onClick={() => removeBooking()}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  const uniqArray = (data, key) => {
    return [...new Map(data.map(x => [key(x), x])).values()];
  };
  const locationOptions = () => {
    const newAvailabilities = uniqArray(availabilities, it => it.location);
    return newAvailabilities.map(availability => (
      <option key={availability._id} value={availability.location}>
        {availability.location}
      </option>
    ));
  };
  const dateOptions = () => {
    const newAvailabilities = uniqArray(availabilities, it => it.date);
    return newAvailabilities
      .filter(availability => availability.location === values.location)
      .map(availability => (
        <option key={availability._id} value={availability.date}>
          {dayjs(availability.date).format('dddd, MMMM D YYYY')}
        </option>
      ));
  };
  return (
    <div>
      <h1 style={{ margin: '20px 0' }}>{session.title}</h1>
      <hr />
      {session.description ? <p>{session.description}</p> : null}
      {session.volunteer ? (
        <i className="fa fa-user">
          <span className="icons">
            {session.volunteer.lastName ? <span> {session.volunteer.lastName}</span> : null},{' '}
            {session.volunteer.firstName ? <span>{session.volunteer.firstName} </span> : null}
          </span>
        </i>
      ) : null}
      {session.volunteer ? (
        <i className="fa fa-envelope">
          <span className="icons">{session.volunteer.email ? <span>{session.volunteer.email} </span> : null}</span>
        </i>
      ) : null}
      <hr />
      <h4>Available appointments</h4>
      <Form className='booking-form' onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="dateOption">Location</Label>
          <Input type="select" name="location" value={values.location} onChange={onChangeHandler} id="dateOption">
            <option value="" disabled>
              Select date
            </option>
            {locationOptions()}
          </Input>
        </FormGroup>
        {!!values.location ? (
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            <FormGroup>
              <Label for="dateOption">Date</Label>
              <Input type="select" name="date" value={values.date} onChange={onChangeHandler} id="dateOption">
                <option value="" disabled>
                  Select date
                </option>
                {dateOptions()}
              </Input>
            </FormGroup>
            {!!values.date ? (
              <span style={{ marginLeft: '10px', fontSize: '30px', lineHeight: '100px' }}> &rarr; </span>
            ) : null}
            {!!values.date ? (
              <FormGroup>
                <Label for="timeOption">Time</Label>
                <Input type="select" name="time" value={values.time} onChange={onChangeHandler} id="dateOption">
                  <option value="" disabled>
                    Select time
                  </option>
                  {availabilities
                    .filter(availability => availability.date === values.date)
                    .map(availability => (
                      <option key={availability._id} value={`${availability.startTime} - ${availability.endTime}`}>
                        {availability.startTime} - {availability.endTime}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            ) : null}
          </div>
        ) : null}
        {!!values.time ? (
          <div>
            <hr />
            <Label style={{ borderBottom: '1px solid #00000', color: '#219653' }}>Please confirm your details:</Label>
            <FormGroup>
              <Label for="studentName">Full Name</Label>
              <Input
                type="text"
                name="studentName"
                value={values.studentName}
                onChange={onChangeHandler}
                id="exampleText"
                placeholder="full name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value={values.email}
                onChange={onChangeHandler}
                placeholder="email address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTel">Phone Number</Label>
              <Input
                type="tel"
                name="tel"
                id="exampleTel"
                value={values.tel}
                onChange={onChangeHandler}
                placeholder="phone number"
              />
            </FormGroup>
          </div>
        ) : null}
        <Button color="primary" disabled={isLoading || !values.location || !values.date || !values.time}>
          {!values.location || !values.date || !values.time ? 'Submit' : 'Book'}
        </Button>
      </Form>
    </div>
  );
});
