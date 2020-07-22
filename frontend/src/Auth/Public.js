import React from 'react';
import { Route } from 'react-router-dom';
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
      render={props => (
        <div>
          <Component {...props} pathName={props.location.pathname} />
        </div>
      )}
    />
  );
});
