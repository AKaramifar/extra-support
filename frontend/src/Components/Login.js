import React from 'react';
import { Link } from 'react-router-dom';
const Login = props => {
  return (
    <form class="form-inline ">
      <h1>Welcome To Extra Support</h1>
      <h3>Start your search now...</h3>
      <div className="login-form">
        <div class="form-group">
          <input
            type="email"
            class="form-control login-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <div className="student-register-container">
            {'CYF Student - '}
            <a className="student-volunteer-register-link">Register Here</a>
          </div>
        </div>
        <div class="form-group  ml-1">
          <input type="password" class="form-control login-input" id="exampleInputPassword1" placeholder="Password" />
          <div className="volunteer-register-container">
            {'Become a Volunteer - '}
            <a className="student-volunteer-register-link">Register Here</a>
          </div>
        </div>
        <Link to="/categories">
          <button onClick={props.handleLogin} type="submit" class="btn btn-success ml-1">
            Login{' '}
          </button>
        </Link>
      </div>
    </form>
  );
};
export default Login;
