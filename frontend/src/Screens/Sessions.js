import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Session from '../Components/Session';
import Filters from '../Components/Filters/index';
import { generateFilters, getLocalStorageArray } from '../Helpers';
import { getSessions } from '../Redux/Actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { sessions: state.sessions.sessions, isLoading: state.ActionController.isLoading };
}

export default connect(
  mapStateToProps,
  { getSessions }
)(({ sessions, getSessions, ...props }) => {
  const [values, setValues] = useState({
    toggleVisibility: false,
    weekdays: getLocalStorageArray('weekdays') ? getLocalStorageArray('weekdays') : [],
    time: getLocalStorageArray('time') ? getLocalStorageArray('time') : [],
    date: getLocalStorageArray('date') ? getLocalStorageArray('date') : [],
  });
  const filtersSearchHandler = async () => {
    const { category } = props.match.params;
    const { weekdays, time, date } = values;
    const options = {
      weekdays,
      time,
      category: [category],
      date,
    };
    getSessions(options);
  };

  useEffect(() => {
    const { category } = props.match.params;
    const options = {
      category: [category],
    };
    getSessions(options);
  }, [getSessions, props.match.params]);

  const toggleVisibilityHandler = () => {
    setValues({
      ...values,
      toggleVisibility: !values.toggleVisibility,
    });
  };
  const onCheckBoxHandler = e => {
    console.log(e.target.value);
    setValues({
      ...values,
      [e.target.name]: generateFilters(e),
    });
  };

  const clearFilter = () => {
    localStorage.setItem('weekdays', []);
    localStorage.setItem('time', []);
    localStorage.setItem('date', []);
    setValues({
      ...values,
      weekdays: [],
      time: [],
      date: [],
    });
  };
  const { category } = props.match.params;
  return (
    <div className="container sessions-main-container">
      {values.toggleVisibility ? (
        <Filters
          values={values}
          toggleVisibility={values.toggleVisibility}
          toggleVisibilityHandler={toggleVisibilityHandler}
          onCheckBoxHandler={onCheckBoxHandler}
          clearFilter={clearFilter}
          filtersSearchHandler={filtersSearchHandler}
        />
      ) : null}
      <Link to="/categories">
        <i className="fas fa-arrow-left" style={{ fontSize: '25px' }}>
          <span className="icons">{category}</span>
        </i>
      </Link>
      <button className="btn side-nav-filters-button" onClick={toggleVisibilityHandler}>
        Filters
      </button>
      <br />
      {sessions && sessions.length > 0 ? (
        <div className="sessions-container">
          {sessions.map(session => (
            <Session session={session} />
          ))}
        </div>
      ) : (
        <span>No results</span>
      )}
    </div>
  );
});
