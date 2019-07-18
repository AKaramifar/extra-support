import React, { Component } from 'react';
import swal from 'sweetalert';

class UserBookingFields extends Component {
  state = {};
  handleInputs = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const mentor = this.props.mentor;
    const category = this.props.category;
    const bookedTime = this.props.bookedTime.split('-')[0];
    const selectedDate = this.props.selectedDate;
    const changePage = category => {
      this.props.history.replace(`/category/${category}`);
    };
    console.log(this.state);
    swal({
      title: 'Confirm booking',
      text: 'Are you sure you want to book an appointment',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, book it!',
      cancelButtonText: 'No, cancel!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    }).then(
      function() {
        swal(
          'Booked!',
          `Your appointment with ${mentor} is scheduled for  ${bookedTime}  ${selectedDate}. Contact ${mentor} if you need to make any changes`,
          'success'
        );
        changePage(category);
      },
      function(dismiss) {
        // dismiss can be 'cancel', 'overlay', 'close', 'timer'
        if (dismiss === 'cancel') {
          swal('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
      }
    );
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
