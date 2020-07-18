import React, { useState, useEffect } from 'react';
import { getSessions, createBooking, removeBooking } from '../Redux/Actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { getProfile } from '../Auth/index';
import dayjs from 'dayjs';

const SESSION = {
  _id: '5f1172a97d937a0582001335',
  categoryId: '5f1171ee7d937a0582001330',
  title: 'English speaking',
  description:
    'Our goal is to help you Learn English speaking so you can speak English fluently. Improve your spoken English Free! Two hours long weekly tutorials.',
  requirements: 'test',
  location: 'london',
  volunteer: {
    volunteerId: '5f1171a67d937a058200132e',
    firstName: 'Ahmad',
    lastName: 'moradi',
    email: 'ahmad@gmail.com',
  },
  availabilities: [
    {
      availabilityId: '5f1171a67d937a0582001dhj',
      startDate: '2020-07-18T11:25:15.000Z',
      startTime: '12:30',
      endTime: '13:00',
      repeat: 'Daly',
      location: 'gggggg',
    },
    {
      availabilityId: '5f1171ad67d937a0582001dhj',
      startDate: '2020-07-17T11:25:15.000Z',
      startTime: '06:30',
      endTime: '07:00',
      repeat: 'Daly',
      location: 'gggggg',
    },
  ],
};

function mapStateToProps(state) {
  return {
    sessions: state.sessions.sessions,
    session: state.sessions.session,
    isLoading: state.ActionController.isLoading,
    categories: state.categories.categories,
    booking: state.bookings.booking,
  };
}
export default connect(
  mapStateToProps,
  { getSessions, createBooking, removeBooking }
)(({ session = SESSION, getSessions, createBooking, match, isLoading, booking, removeBooking }) => {
  const [values, setValues] = useState({
    studentName: getProfile() ? getProfile().firstName + ' ' + getProfile().lastName : '',
    tel: getProfile() ? getProfile().tel : '',
    email: getProfile() ? getProfile().email : '',
    date: '',
    time: '',
  });

  useEffect(() => {
    const { sessionId } = match.params;
    const options = {
      sessionId: sessionId,
    };
    getSessions(options);
  }, [getSessions, match.params]);

  const onChangeHandler = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    values.volunteerId = session.volunteer.volunteerId;
    values.sessionId = session._id;
    createBooking(values);
  };

  const availabilities = session.availabilities ? session.availabilities : [];
  if (!!booking._id) {
    return (
      <div>
        <Modal isOpen={!!booking._id}>
          <ModalBody style={{ backgroundColor: '#adffbf' }}>
            <h3>Good news</h3>
            <p>Congratulation, you have booked your {session.title} session successfully.</p>
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
      {session.location ? (
        <i className="fa fa-map-marker-alt">
          <span className="icons">{session.location}</span>
        </i>
      ) : null}
      {session.volunteerName ? (
        <i className="far fa-user">
          <span className="icons">{session.volunteerName}</span>
        </i>
      ) : null}
      <hr />
      <h4>Available appointments</h4>
      <Form style={{ width: '50%' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <FormGroup>
            <Label for="dateOption">Date</Label>
            <Input type="select" name="date" value={values.date} onChange={onChangeHandler} id="dateOption">
              <option>Select date</option>
              {availabilities.map(availability => (
                <option key={availability.availabilityId} value={availability.startDate}>
                  {dayjs(availability.startDate).format('dddd, MMMM D YYYY')}
                </option>
              ))}
            </Input>
          </FormGroup>
          <span style={{ marginLeft: '10px', fontSize: '30px', lineHeight: '100px' }}> &rarr; </span>
          <FormGroup>
            <Label for="timeOption">Time</Label>
            <Input type="select" name="time" value={values.time} onChange={onChangeHandler} id="dateOption">
              <option>Select time</option>
              {availabilities
                .filter(availability => availability.startDate === values.date)
                .map(availability => (
                  <option
                    key={availability.availabilityId}
                    value={`${availability.startTime} - ${availability.endTime}`}
                  >
                    {availability.startTime} - {availability.endTime}
                  </option>
                ))}
            </Input>
          </FormGroup>
        </div>
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
        <Button color="primary" disabled={isLoading}>
          Submit
        </Button>
      </Form>
    </div>
  );
});
