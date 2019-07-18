import React, { Component } from 'react';

class DropDown extends Component {
  state = { value: '' };

  handleSelectChange = e => {
    const value = e.target.value;
    this.setState(() => ({ value: value }), () => this.props.handleGettingetAvailabilities(this.state.value));
  };
  render() {
    return (
      <select onChange={this.handleSelectChange} className="col-8 col-sm-7 col-lg-4" value={this.state.value}>
        <option>{'Select appointments'}</option>
        {this.props.availabilitiesDates.map(date => (
          <option>{new Date(date).toDateString()}</option>
        ))}
      </select>
    );
  }
}

export default DropDown;
