import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthorized } from '../Auth';
import { onChangeRout } from '../Redux/Actions';
import { connect } from 'react-redux';

export default connect(
  null,
  { onChangeRout }
)(({ component: Component, roles, onChangeRout, ...rest }) => {
  React.useEffect(() => {
    onChangeRout(rest.location.pathname);
  }, [rest, onChangeRout]);
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthorized(roles) ? (
          <div>
            <Component {...props} pathName={props.location.pathname} />
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
});
