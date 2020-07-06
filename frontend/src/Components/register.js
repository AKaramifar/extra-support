import React, { Component } from 'react';
import axios from 'axios';
import { setToken, loggedIn } from '../Auth/index';
import swal from 'sweetalert';

class Register extends Component {
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
      password: '',
    };
  }
  UNSAFE_componentWillMount() {
    if (loggedIn()) {
      this.props.history.replace('/categories');
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { firstName, lastName, email, city, tel, gender, isAsylumSeekerOrRefugee, cyfStudent, password } = this.state;
    const userData = {
      firstName,
      lastName,
      email,
      city,
      tel,
      gender,
      isAsylumSeekerOrRefugee,
      cyfStudent,
      password,
    };
    try {
      const token = await axios.post('http://localhost:3001/auth/register', userData);
      setToken(token.data.token);
      this.props.history.replace('/categories');
    } catch (err) {
      if (err.response) {
        return swal('Cancelled', err.response.data.msg, 'error');
      }
      return swal('Cancelled', 'Somethings went wrong, please try again later.', 'error');
    }
  };

  render() {
    const { firstName, lastName, email, city, tel, gender, isAsylumSeekerOrRefugee, cyfStudent, password } = this.state;
    const { err, msg } = this.props;
    return (
      <div className="register-container">
        <div className="register">
          {msg && <p className="success">{msg}</p>}
          {err && <p className="error">Somethings went wrong please try again later.</p>}
          <h3>Welcome To Extra Support</h3>
          <h5>Register and Start your search now...</h5>
          <form className="mb-4" onSubmit={this.handleSubmit} method="post">
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control form-control-lg"
                placeholder="First name"
                value={firstName}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control form-control-lg"
                placeholder="Last name"
                value={lastName}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="example@example.com"
                value={email}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="form-control form-control-lg"
                placeholder=" E.g., London or Manchester"
                value={city}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                Phone Number
              </label>
              <input
                type="tel"
                name="tel"
                className="form-control form-control-lg"
                id="tel"
                placeholder=" E.g., 07712345678 or 02079460637"
                value={tel}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="form-group ">
              <label htmlFor="firstName" className="lead">
                Gender
              </label>
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
              <label htmlFor="firstName" className="lead">
                Are you asylum seeker or refugee?
              </label>
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
              <label htmlFor="firstName" className="lead">
                Are you student from code your future?
              </label>
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
            <div className="form-group">
              <label htmlFor="firstName" className="lead">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={password}
                onChange={this.onChange}
                required
              />
            </div>
            <button type="submit" className="nav-link nav-btn-help">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
