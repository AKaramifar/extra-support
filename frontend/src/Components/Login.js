import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { setToken, loggedIn } from '../Auth/index';
import { connect } from 'react-redux';
import { userLogin } from '../Redux/Actions';

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
              <a className="student-volunteer-register-link" href="https://application-process.codeyourfuture.io/">
                Register Here,
              </a>
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
            <div className="volunteer-register-container">
              {' Become a Volunteer - '}
              <a className="student-volunteer-register-link" href="https://codeyourfuture.io/volunteers/">
                Register Here
              </a>
            </div>
          </div>
          <button type="submit" className="btn btn-success ml-1">
            Login
          </button>
        </form>
      </div>
    );
  }
}

//export default Login;

function mapStateToProps(state) {
  
  const { ActionController } = state;
  return { isLoading: ActionController.isLoading };
}
export default connect(
  mapStateToProps,
  { userLogin }
)(Login);
