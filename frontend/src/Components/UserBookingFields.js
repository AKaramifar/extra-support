import React, { Component } from 'react';

class UserBookingFields extends Component {
  state = {};
  handleInputs = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form class="d-flex flex-column">
          <div class="form-row">
            <div class="row" style={{ width: '100%' }}>
              <div class="col-md-3 mb-3">
                <label for="validationTooltip01">First name</label>
                <input
                  type="text"
                  name="firstName"
                  class="form-control"
                  placeholder="First name"
                  onChange={this.handleInputs}
                  value={this.state.firstName}
                  required
                />
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationTooltip02">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  name="lasttName"
                  onChange={this.handleInputs}
                  id="validationTooltip02"
                  placeholder="Last name"
                  value={this.state.lasttName}
                  required
                />
              </div>
            </div>
          </div>

          <div class="row" style={{ width: '100%' }}>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip01">Phone Number</label>
              <input
                type="text"
                class="form-control"
                name="phoneNumber"
                onChange={this.handleInputs}
                value={this.state.phoneNumber}
                id="validationTooltip01"
                placeholder="0745454562"
                required
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">Email</label>
              <input
                type="text"
                name="email"
                onChange={this.handleInputs}
                class="form-control"
                id="validationTooltip02"
                value={this.state.email}
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div onClick={this.handleSubmit} type="button" class="btn btn-primary col-md-2 ">
            Book Appointment{' '}
          </div>
        </form>
      </div>
    );
  }
}

export default UserBookingFields;
