import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthorized } from '../Auth';

const Private = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthorized(roles) ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

export default Private;
