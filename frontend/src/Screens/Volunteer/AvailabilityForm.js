import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getVolunteerSessions, createAvailability } from '../../Redux/Actions';
import Spinner from '../../Components/Spinner';
import './index.css';
function mapStateToProps(state) {
  return {
    volunteerSessions: state.sessions.volunteerSessions,
    ActionController: state.ActionController,
  };
}

const AvailabilityForm = ({ volunteerSessions, getVolunteerSessions, createAvailability, ActionController }) => {
  const [values, setValues] = React.useState({
    sessionId: '',
    date: '',
    startTime: '',
    endTime: '',
    repeat: '',
    location: '',
  });
  const [showMessage, setShowMessage] = useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const onChange = event => {
    if (event.target.name === 'endTime') {
      if (values.startTime >= event.target.value) {
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
    createAvailability(values);
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
  }, [getVolunteerSessions]);

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
              <option>Dose not repeat</option>
              <option>Daly</option>
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
  { getVolunteerSessions, createAvailability: createAvailability }
)(AvailabilityForm);
