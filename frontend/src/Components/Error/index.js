import React from 'react';
import { connect } from 'react-redux';
import { removeStateError } from '../../Redux/Actions';
import ErrorComponent from './ErrorComponent';
function mapStateToProps(state) {
  const { errors } = state.ActionController;
  return {
    errors,
  };
}
const Error = ({ errors, removeStateError }) => {
  if (errors.length > 0) {
    return (
      <div
        className="container"
        style={{ display: 'flex', flexDirection: 'column', maxHeight: '200px', overflow: 'auto', marginTop: '20px' }}
      >
        {window.scrollTo(0, 0)}
        {errors.map(error => {
          return <ErrorComponent key={error.id} error={error} removeStateError={removeStateError} />;
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default connect(
  mapStateToProps,
  { removeStateError }
)(Error);
