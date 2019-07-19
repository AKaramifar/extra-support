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
    if (this.props.bookedTime) {
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
    } else {
      swal('Cancelled', 'Please select a time and date)', 'error');
    }
  };
  render() {
    return (
      <div>
        <form className="d-flex flex-column">
          <div className="form-row">
            <div className="row" style={{ width: '100%' }}>
              <div className="col-md-3 mb-3">
                <label for="validationTooltip01">First name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First name"
                  onChange={this.handleInputs}
                  value={this.state.firstName}
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label for="validationTooltip02">Last name</label>
                <input
                  type="text"
                  className="form-control"
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

          <div className="row" style={{ width: '100%' }}>
            <div className="col-md-3 mb-3">
              <label for="validationTooltip01">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phoneNumber"
                onChange={this.handleInputs}
                value={this.state.phoneNumber}
                id="validationTooltip01"
                placeholder="0745454562"
                required
              />
            </div>
            <div className="col-md-3 mb-3">
              <label for="validationTooltip02">Email</label>
              <input
                type="text"
                name="email"
                onChange={this.handleInputs}
                className="form-control"
                id="validationTooltip02"
                value={this.state.email}
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>
          <div onClick={this.handleSubmit} type="button" className="btn btn-primary col-md-2  ">
            Book Appointment{' '}
          </div>
        </form>
      </div>
    );
  }
}

export default UserBookingFields;
