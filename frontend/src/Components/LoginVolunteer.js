import React from 'react';
const { REACT_APP_BASE_URL } = process.env;

export default ({ loginHandler }) => (
  <div>
    <h3 className="text-center mt-5">Please sign in to continue</h3>
    <div className="text-center mt-2">
      <a
        className="btn"
        style={{
          color: '#fcfcfc',
          border: '3px solid #219653',
          boxSizing: 'border-box',
          width: '50%',
          fontWeight: '700',
          padding: '.5rem 1rem',
          fontSize: '1.25rem',
          lineHeight: ' 1.5',
          borderRadius: '.3rem',
          margin: '1%',
          backgroundColor: '#219653',
        }}
        href={`${REACT_APP_BASE_URL}/auth/github-admin`}
        onClick={loginHandler}
      >
        <i class="fab fa-github" aria-hidden="true"></i>{' '}
        Github
      </a>
    </div>
    <div className="volunteer-register-container" style={{ textAlign: 'center' }}>
      {' Become a Volunteer - '}
      <a className="student-volunteer-register-link" href="https://codeyourfuture.io/volunteers/">
        Register Here
      </a>
    </div>
  </div>
);
