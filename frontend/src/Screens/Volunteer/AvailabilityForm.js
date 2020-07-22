import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getVolunteerSessions, createAvailability, editAvailability } from '../../Redux/Actions';
import Spinner from '../../Components/Spinner';
import dayjs from 'dayjs';
import './index.css';
function mapStateToProps(state) {
  return {
    volunteerSessions: state.sessions.volunteerSessions,
    ActionController: state.ActionController,
  };
}

const AvailabilityForm = ({
  volunteerSessions,
  getVolunteerSessions,
  createAvailability,
  ActionController,
  location,
  editAvailability,
}) => {
  const [values, setValues] = React.useState({
    sessionId: '',
    date: '',
    startTime: '',
    endTime: '',
    repeat: '',
    location: '',
    active: true,
  });
  const [showMessage, setShowMessage] = useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const onChange = event => {
    if (event.target.name === 'endTime') {
      if (parseInt(values.startTime.replace(/\D/g, '')) >= parseInt(event.target.value.replace(/\D/g, ''))) {
        setShowMessage(<div style={{ color: 'red' }}>End time should be bigger than start time</div>);
        event.target.value = '0';
      } else {
        setShowMessage('');
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      }
    }
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    if (edit) {
      editAvailability(location.state._id, values);
    } else {
      createAvailability(values);
    }
  };

  if (ActionController.actionType === '' && !ActionController.isLoading && submitted) {
    setValues({
      sessionId: '',
      date: '',
      startTime: '',
      endTime: '',
      repeat: '',
      location: '',
    });
    setSubmitted(false);
  }

  useEffect(() => {
    getVolunteerSessions();
    if (location.state) {
      setValues({
        sessionId: location.state.sessionId,
        date: dayjs(location.state.date).format('YYYY-MM-DD'),
        startTime: location.state.startTime,
        endTime: location.state.endTime,
        repeat: location.state.repeat,
        location: location.state.location,
        active: location.state.active,
      });
      setEdit(true);
    }
  }, [getVolunteerSessions, location]);

  return (
    <div className="availability-form-container">
      <div className="availability-form">
        <Spinner isLoading={ActionController.isLoading} style={{ width: '200px', height: '200px' }} />
        <h1 style={{ margin: '5% 0' }}>Availability Form</h1>
        <hr />
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="AvailabilitySession">Session</Label>
            <Input type="select" name="sessionId" onChange={onChange} value={values.sessionId} id="AvailabilitySession">
              <option>Select here</option>
              <option value="GENERAL_SESSION">General session</option>
              {volunteerSessions.map(session => (
                <option key={session._id} value={session._id}>
                  {session.title}
                </option>
              ))}
            </Input>
          </FormGroup>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormGroup style={{ width: '40%' }}>
              <Label for="Availabilitydate">Date</Label>
              <Input
                type="date"
                name="date"
                onChange={onChange}
                value={values.date}
                id="Availabilitydate"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup style={{ width: '25%' }}>
              <Label for="AvailabilityStartTime">Start time</Label>
              <Input
                type="time"
                name="startTime"
                onChange={onChange}
                value={values.startTime}
                id="AvailabilityStartTime"
                placeholder="time placeholder"
              />
            </FormGroup>
            <span style={{ width: '20px', lineHeight: '35px', marginTop: '34px' }}> &rarr; </span>
            <FormGroup style={{ width: '25%' }}>
              <Label for="AvailabilityEndTime">End time</Label>
              <Input
                type="time"
                name="endTime"
                onChange={onChange}
                value={values.endTime}
                id="AvailabilityEndTime"
                placeholder="time placeholder"
              />
            </FormGroup>
          </div>
          {showMessage}
          <FormGroup>
            <Label for="AvailabilityRepeat">Repeat</Label>
            <Input type="select" name="repeat" onChange={onChange} value={values.repeat} id="AvailabilityRepeat">
              <option>Does not repeat</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
              <option>Custom</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="AvailabilityLocationAndContactDetails">Location</Label>
            <Input
              type="text"
              name="location"
              onChange={onChange}
              value={values.location}
              id="AvailabilityLocation"
              placeholder="Add a location"
            ></Input>
          </FormGroup>
          {edit ? (
            <FormGroup>
              <Label for="AvailabilityRepeat">Is it an active availability?</Label>
              <Input type="select" name="active" onChange={onChange} value={values.active} id="AvailabilityRepeat">
                <option value={true}>Active</option>
                <option value={false}>No longer available</option>
              </Input>
            </FormGroup>
          ) : null}
          <Button
            color="primary"
            disabled={
              ActionController.isLoading ||
              !values.sessionId ||
              !values.date ||
              !values.startTime ||
              !values.endTime ||
              !values.repeat ||
              !values.location
            }
          >
            Submit
          </Button>
        </Form>
      </div>
      <div></div>
    </div>
  );
};
export default connect(
  mapStateToProps,
  { getVolunteerSessions, createAvailability, editAvailability }
)(AvailabilityForm);
