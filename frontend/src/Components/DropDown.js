import React, { Component } from 'react';

class DropDown extends Component {
  render() {
    return (
      <select className="col-8 col-sm-7 col-lg-4">
        <option>{'Select appointments'}</option>
        {this.props.availabilities.map(option => (
          <option>{new Date(option.date).toDateString()}</option>
        ))}
      </select>
    );
  }
}

export default DropDown;
