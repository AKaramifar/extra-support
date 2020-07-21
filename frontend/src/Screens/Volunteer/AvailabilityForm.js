import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getVolunteerSessions, createAvailability } from '../../Redux/Actions';
import Spinner from '../../Components/Spinner';

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

  const [submitted, setSubmitted] = React.useState(false);

  const onChange = event => {
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
    <div style={{ width: '75%' }}>
      <Spinner isLoading={ActionController.isLoading} style={{width: '200px', height: '200px'}}/>
      <h1 style={{ margin: '5% 0' }}>Volunteers Availability Form</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleSession">Session</Label>
          <Input type="select" name="sessionId" onChange={onChange} value={values.sessionId} id="exampleSession">
            <option>Select here</option>
            <option value="GENERAL_SESSION">General session</option>

            {volunteerSessions.map(session => (
              <option key={session._id} value={session._id}>
                {session.title}
              </option>
            ))}
          </Input>
        </FormGroup>
        <div>
          <Label for="exampleDateAndTime">Date and Time</Label>
          <FormGroup style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Input
              type="date"
              name="date"
              onChange={onChange}
              value={values.date}
              id="exampledate"
              placeholder="date placeholder"
            />

            <Input
              type="time"
              name="startTime"
              onChange={onChange}
              value={values.startTime}
              id="exampleStartTime"
              placeholder="time placeholder"
              style={{ marginLeft: '10px' }}
            />
            <span style={{ marginLeft: '10px', width: '20px', lineHeight: '35px' }}> &rarr; </span>

            <Input
              type="time"
              name="endTime"
              onChange={onChange}
              value={values.endTime}
              id="exampleEndTime"
              placeholder="time placeholder"
              style={{ marginLeft: '10px' }}
            />
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="exampleRepeat">Repeat</Label>
          <Input type="select" name="repeat" onChange={onChange} value={values.repeat} id="exampleRepeat">
            <option>Dose not repeat</option>
            <option>Daly</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
            <option>Custom</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleLocationAndContactDetails">Location</Label>
          <Input
            type="text"
            name="location"
            onChange={onChange}
            value={values.location}
            id="exampleLocation"
            placeholder="Add a location"
          ></Input>
        </FormGroup>
        <Button color="primary" disabled={ActionController.isLoading}>Submit</Button>
      </Form>
    </div>
  );
};
export default connect(
  mapStateToProps,
  { getVolunteerSessions, createAvailability: createAvailability }
)(AvailabilityForm);
