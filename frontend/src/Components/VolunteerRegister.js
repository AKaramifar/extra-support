import React from 'react';
import { volunteerSignUp } from '../Redux/Actions';
import { loggedIn } from '../Auth/index';
import { connect } from 'react-redux';
function mapStateToProps(state) {
  const { ActionController } = state;
  return { isLoading: ActionController.isLoading };
}
export default connect(
  mapStateToProps,
  { volunteerSignUp }
)(({ match, volunteerSignUp, history }) => {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    tel: '',
  });
  React.useEffect(() => {
    if (loggedIn()) {
      history.replace('/categories');
    }
  }, [history]);
  const onChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { volunteerId } = match.params;
    const { firstName, lastName, email, city, tel } = values;
    const userData = {
      firstName,
      lastName,
      email,
      city,
      tel,
    };
    volunteerSignUp(volunteerId, userData);
  };

  const { firstName, lastName, email, city, tel } = values;
  return (
    <div className="register-container">
      <div className="register">
        <h3>Welcome To Extra Support</h3>
        <form className="mb-4" onSubmit={handleSubmit} method="post">
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
              onChange={onChange}
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
});
