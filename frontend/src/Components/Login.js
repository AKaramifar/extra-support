import React from 'react';
import { Link } from 'react-router-dom';
const Login = props => {
  return (
    <div className="container-fluid d-flex flex-column align-items-start justify-content-center mt ml">
      <div>
        <h1>Welcome To Extra Support</h1>
        <h3>Start your search now...</h3>
      </div>
      <form className="row">
        <div className="form-group">
          <input
            type="email"
            className="form-control login-input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
          <div className="student-register-container">
            {'CYF Student - '}
            <a className="student-volunteer-register-link" href="https://application-process.codeyourfuture.io/">
              Register Here
            </a>
          </div>
        </div>
        <div className="form-group  ml-1">
          <input
            type="password"
            className="form-control login-input"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <div className="volunteer-register-container">
            {'Become a Volunteer - '}
            <a className="student-volunteer-register-link" href="https://codeyourfuture.io/volunteers/">
              Register Here
            </a>
          </div>
        </div>
        <Link to="/categories">
          <button onClick={props.handleLogin} type="submit" className="btn btn-success ml-1">
            Login{' '}
          </button>
        </Link>
      </form>
    </div>
  );
};
export default Login;
