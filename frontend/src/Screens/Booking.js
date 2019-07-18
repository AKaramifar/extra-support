import React, { Component } from 'react';
import TimeBox from '../Components/TimeBox';
import UserBookingFields from '../Components/UserBookingFields';
import DropDown from '../Components/DropDown';
class Booking extends Component {
  state: { data: {} };
  componentWillMount() {
    this.setState({ data: this.props.location.state.category.tutorial });
    console.log('this from booking will mount', this.props.location.state.category.tutorial);
  }
  render() {
    return (
      <div className="container" style={{ width: '100%' }}>
        <h3>{this.state.data.name}</h3>
        <p>{this.state.data.description}</p>
        <div className="d-flex flex-wrap align-items-center" style={{ width: '60%' }}>
          <div style={{ width: '50%', marginBottom: '5px' }}>
            <i class="fas fa-map-marker-alt" />
            <span className="icons">{this.state.data.location}</span>
          </div>
          <i class="far fa-clock" style={{ width: '50%', marginBottom: '5px' }}>
            <span className="icons">{'Recurring Service'}</span>
          </i>
          <i class="far fa-user " style={{ width: '50%', marginBottom: '5px' }}>
            <span className="icons">{this.state.data.mentor}</span>
          </i>
          <i class="far fa-clock" style={{ width: '50%', marginBottom: '5px' }}>
            <span className="icons col ">{'Group Service'}</span>
          </i>
          <i class="far fa-clock" style={{ width: '50%', marginBottom: '5px' }}>
            <span className="icons col ">{'Wednesdays'}</span>
          </i>
        </div>
        <br />
        <div style={{ width: '100%' }}>
          <h3>Available appointments</h3>
          <DropDown availabilities={this.state.data.availabilities} />
          <div class="d-flex flex-row flex-wrap  justify-content-start" style={{ width: '70%' }}>
            {this.state.data.availabilities[0].time.map(time => (
              <TimeBox time={time} />
            ))}
          </div>
          <br />
          <br />
        </div>
        <UserBookingFields />
        {console.log('this from inside booking render', this.state.data.availabilities[0].time)}
      </div>
    );
  }
}

export default Booking;
