import React, { Component } from 'react';
import FiltersComponent from './Filters';
import { availability } from './Helpers';

import './index.css';

class Filters extends Component {
  state = {
    showAvailability: false,
  };
  componentWillMount() {
    this.setState({
      showAvailability: this.props.availability.length > 0,
    });
  }
  showFilters = (filter, key) => {
    this.setState({ [filter]: key });
  };
  render() {
    const { showAvailability } = this.state;
    return (
      <div className="side-nav-filters">
        <div className="side-nav-filters-nav">
          <span>Filters</span>
          <span onClick={this.props.toggleVisibilityHandler} className="cursor-pointer">
            X
          </span>
        </div>
        <div className="filters-container">
          <FiltersComponent
            array={availability}
            name={'availability'}
            label={'AVAILABILITY'}
            onCheckBoxHandler={this.props.onCheckBoxHandler}
            showFilters={this.showFilters}
            showListOfFilters={showAvailability}
            showListOfFiltersKey={'showAvailability'}
          />
        </div>
        <div className="side-nav-filters-footer">
          <span />
          <span className="btn side-nav-filters-footer-clear" onClick={this.props.clearFilter}>
            Clear
          </span>
          <span className="btn side-nav-filters-footer-filter" onClick={this.props.filtersSearchHandler}>
            Filter
          </span>
        </div>
      </div>
    );
  }
}

export default Filters;
