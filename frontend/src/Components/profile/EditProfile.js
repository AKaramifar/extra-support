import React, { Component } from 'react';

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      tel: '',
      gender: '',
      isAsylumSeekerOrRefugee: '',
      cyfStudent: '',
    };
  }
  componentDidMount() {
    const { firstName, lastName, email, city, tel, gender, isAsylumSeekerOrRefugee, cyfStudent } = this.props.user;
    this.setState({
      firstName,
      lastName,
      email,
      city,
      tel,
      gender,
      isAsylumSeekerOrRefugee,
      cyfStudent,
    });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, city, tel, gender, isAsylumSeekerOrRefugee, cyfStudent } = this.state;
    const userData = {
      firstName,
      lastName,
      email,
      city,
      tel,
      gender,
      isAsylumSeekerOrRefugee,
      cyfStudent,
    };
    console.log(userData);
  };

  render() {
    const { firstName, lastName, email, city, tel, gender, isAsylumSeekerOrRefugee, cyfStudent } = this.state;
    const { err, msg } = this.props;
    return (
      <div>
        {msg && <p className="success">{msg}</p>}
        {err && <p className="error">Somethings went wrong please try again later.</p>}
        <form className="mb-4" onSubmit={this.handleSubmit} method="post">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-control form-control-lg"
              placeholder="First name"
              value={firstName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-control form-control-lg"
              placeholder="Last name"
              value={lastName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="example@example.com"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="city"
              name="city"
              className="form-control form-control-lg"
              placeholder=" E.g., London or Manchester"
              value={city}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="tel"
              className="form-control form-control-lg"
              id="tel"
              placeholder=" E.g., 07712345678 or 02079460637"
              value={tel}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group ">
            <select
              className="form-control form-control-lg"
              name="gender"
              id="gender"
              value={gender}
              onChange={this.onChange}
              required
            >
              <option value="" disabled>
                Select here
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="PreferNotToSay">Prefer not to say</option>
            </select>
          </div>
          <div className="form-group ">
            <select
              className="form-control"
              id="isAsylumSeekerOrRefugee"
              name="isAsylumSeekerOrRefugee"
              value={isAsylumSeekerOrRefugee}
              required
              onChange={this.onChange}
            >
              <option value="" disabled>
                Select here
              </option>
              <option value>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="form-group ">
            <select
              className="form-control"
              id="cyfStudent"
              name="cyfStudent"
              value={cyfStudent}
              required
              onChange={this.onChange}
            >
              <option value="" disabled>
                Select here
              </option>
              <option value>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <button type="submit" className="nav-link nav-btn-help">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default EditProfileForm;
