import React from 'react';
import { loggedIn, isAuthorized } from '../Auth/index';
export default () => {
  return (
    <div className="container">
      <div className="row" style={{ width: '100%', marginTop: '30px' }}>
        <div style={{ width: '50%' }}>
          <img
            className="img-fluid mt-2 mr-5"
            src="https://airtame.com/wp-content/uploads/2019/06/Code-your-future-02-1024x468.png"
            alt="cyf community"
            width="100%"
          />
          <iframe
            title="Welcome to the CYF Extra Support"
            style={{
              width: '100%',
              height: '60%',
              border: 'none',
              margin: '20px 0',
            }}
            allowFullScreen={true}
            src="https://www.youtube.com/embed/GYsXIW2Kh3A"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className="col-lg-6" style={{ width: '70%' }}>
          <h2 className="mt-5 mb-3">Welcome To CYF Extra Support!</h2>
          <p>
            We are a non-profit organization supporting refugees and disadvantaged individuals with the dream of
            becoming developers. In their journey of interrupted lives, unfinished studies and integration challenges,
            many of these individuals yearn to update their tech skills, but lack learning opportunities. We want to
            change this. In 2016 we launched the first cohort of our 8-month web development programme, coached by a
            group of professional developers. Here, CYF extra support is providing students with a digital environment
            where they can access the CYF volunteers and book a consultation session to discuss their needs in finance,
            health, Housing,...etc.
          </p>
          <div>
            <h5>What will you get out of CYF extra Support?</h5>
            <ul>
              <li>A free consultation on financial needs.</li>
              <li> A support in providing training in education.</li>
              <li>A free consultation on immigration issues.</li>
              <li>A free support and consultation regarding health, family and relationships. </li>
              <li>An opportunity to practice job interviews.</li>
            </ul>
          </div>
          {!loggedIn() ? (
            <div>
              <a
                className="btn"
                style={{
                  color: '#219653',
                  left: '321px',
                  top: '1114px',
                  border: '3px solid #219653',
                  boxSizing: 'border-box',
                  width: '40%',
                  fontWeight: '700',
                  padding: '.5rem 1rem',
                  fontSize: '1.25rem',
                  lineHeight: '1.5',
                  borderRadius: '.3rem',
                  margin: '2%',
                }}
                href="/student/login"
              >
                Student Login
              </a>
              <a
                className="btn"
                style={{
                  color: '#219653',
                  left: '321px',
                  top: '1114px',
                  border: '3px solid #219653',
                  boxSizing: 'border-box',
                  width: '40%',
                  fontWeight: '700',
                  padding: '.5rem 1rem',
                  fontSize: '1.25rem',
                  lineHeight: '1.5',
                  borderRadius: '.3rem',
                  margin: '2%',
                }}
                href="/volunteer/login"
              >
                Volunteer Login
              </a>
            </div>
          ) : isAuthorized(['VOLUNTEER']) ? (
            <a
              className="btn"
              style={{
                color: '#219653',
                left: '321px',
                top: '1114px',
                border: '3px solid #219653',
                boxSizing: 'border-box',
                width: 'fit-content',
                fontWeight: '700',
                padding: '.5rem 1rem',
                fontSize: '1.25rem',
                lineHeight: '1.5',
                borderRadius: '.3rem',
                margin: '2%',
              }}
              href="/volunteer/session/form"
            >
              Let's create a session
            </a>
          ) : (
            <a
              className="btn"
              style={{
                color: '#219653',
                left: '321px',
                top: '1114px',
                border: '3px solid #219653',
                boxSizing: 'border-box',
                width: 'fit-content',
                fontWeight: '700',
                padding: '.5rem 1rem',
                fontSize: '1.25rem',
                lineHeight: '1.5',
                borderRadius: '.3rem',
                margin: '2%',
              }}
              href="/categories"
            >
              Let's book a session
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
