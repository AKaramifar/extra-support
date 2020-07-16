import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getVolunteerSessions, createAvailability } from '../../Redux/Actions';
import Spinner from '../../Components/Spinner';

function mapStateToProps(state) {
  return {
    volunteerSessions: state.sessions.volunteerSessions,
    isLoading: state.ActionController.isLoading,
  };
}

const AvailabilityForm = ({ volunteerSessions, getVolunteerSessions, createAvailability, isLoading }) => {
  const [values, setValues] = React.useState({
    session: '',
    startDate: '',
    startTime: '',
    endTime: '',
    repeat: '',
    location: '',
  });
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createAvailability(values);
  };

  useEffect(() => {
    getVolunteerSessions();
  }, [getVolunteerSessions]);

  return (
    <div style={{ width: '75%' }}>
      <Spinner isLoading={isLoading} style={{width: '200px', height: '200px'}}/>
      <h1 style={{ margin: '5% 0' }}>Volunteers Availability Form</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleSession">Session</Label>
          <Input type="select" name="session" onChange={onChange} value={values.session} id="exampleSession">
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
              name="startDate"
              onChange={onChange}
              value={values.startDate}
              id="exampleStartDate"
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
        <Button color="primary" disabled={isLoading}>Submit</Button>
      </Form>
    </div>
  );
};
export default connect(
  mapStateToProps,
  { getVolunteerSessions, createAvailability: createAvailability }
)(AvailabilityForm);
