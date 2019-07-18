import React, { Component } from 'react';

class UserBookingFields extends Component {
  render() {
    return (
      <div>
        <form class="d-flex flex-column">
          <div class="form-row">
            <div class="row" style={{ width: '100%' }}>
              <div class="col-md-3 mb-3">
                <label for="validationTooltip01">First name</label>
                <input type="text" class="form-control" placeholder="First name" value="Mark" required />
                <div class="valid-tooltip">First Name</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationTooltip02">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationTooltip02"
                  placeholder="Last name"
                  value="Otto"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row" style={{ width: '100%' }}>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip01">Phone Number</label>
              <input type="text" class="form-control" id="validationTooltip01" placeholder="0745454562" required />
              <div class="valid-tooltip">Phone Number</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationTooltip02">Email</label>
              <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" required />
            </div>
          </div>
          <div type="button" class="btn btn-primary col-md-2 ">
            Book Appointment{' '}
          </div>
        </form>
      </div>
    );
  }
}

export default UserBookingFields;
