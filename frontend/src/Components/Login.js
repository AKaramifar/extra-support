import React, { Component } from 'react';
import { loggedIn } from '../Auth/index';
import { connect } from 'react-redux';
import { userLogin } from '../Redux/Actions';
import { Link } from 'react-router-dom';
class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  UNSAFE_componentWillMount() {
    if (loggedIn()) {
      this.props.history.replace('/categories');
    }
  }
  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.userLogin({ email, password });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="container-fluid d-flex flex-column align-items-start justify-content-center mt ml">
        <div>
          <h1>Welcome To Extra Support</h1>
          <h3>Start your search now...</h3>
        </div>
        <form onSubmit={this.handleLogin} className="row">
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              className="form-control login-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={this.onChange}
            />
            <div className="student-register-container">
              {'CYF Student - '}
              <Link className="student-volunteer-register-link" to="/register">
                Register Here,
              </Link>
            </div>
          </div>
          <div className="form-group  ml-1">
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              className="form-control login-input"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-success ml-1">
            Login
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { ActionController } = state;
  return { isLoading: ActionController.isLoading };
}
export default connect(
  mapStateToProps,
  { userLogin }
)(Login);
