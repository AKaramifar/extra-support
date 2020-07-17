import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Session from '../Components/Session';
import Filters from '../Components/Filters/index';
import { generateFilters, getLocalStorageArray } from '../Helpers';
import { getSessions, getCategories } from '../Redux/Actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    sessions: state.sessions.sessions,
    isLoading: state.ActionController.isLoading,
    categories: state.categories.categories,
  };
}

export default connect(
  mapStateToProps,
  { getSessions, getCategories }
)(({ sessions, getSessions, categories, getCategories, match, location }) => {
  const [values, setValues] = useState({
    toggleVisibility: false,
    weekdays: getLocalStorageArray('weekdays') ? getLocalStorageArray('weekdays') : [],
    time: getLocalStorageArray('time') ? getLocalStorageArray('time') : [],
    date: getLocalStorageArray('date') ? getLocalStorageArray('date') : [],
  });
  const filtersSearchHandler = async () => {
    const { categoryId } = match.params;
    const { weekdays, time, date } = values;
    const options = {
      weekdays,
      time,
      categoryId: [categoryId],
      date,
    };
    getSessions(options);
  };

  useEffect(() => {
    const { categoryId } = match.params;
    const options = {
      categoryId: [categoryId],
    };
    getSessions(options);
    getCategories();
  }, [getSessions, match.params, getCategories]);

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
  const { categoryId } = match.params;
  const category = categories.find(sCategory => sCategory._id === categoryId);
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
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', alignItems: 'center' }}>
        <Link to="/categories">
          <i className="fas fa-arrow-left" style={{ fontSize: '30px' }}>
            <span className="icons" style={{ fontSize: '35px' }}>
              {category ? category.name : null}
            </span>
          </i>
        </Link>
        <button className="btn side-nav-filters-button" onClick={toggleVisibilityHandler}>
          Filters
        </button>
      </div>
      <br />
      {sessions && sessions.length > 0 ? (
        <div style={{ display: ' flex', flexWrap: 'wrap' }}>
          {sessions.map(session => (
            <Session key={session._id} session={session} />
          ))}
        </div>
      ) : (
        <span>No results</span>
      )}
    </div>
  );
});
