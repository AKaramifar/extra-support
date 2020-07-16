import React, { Component } from 'react';
import FiltersComponent from './Filters';
import { weekdays, time } from './Helpers';
import { FormGroup, Label, Input } from 'reactstrap';

import './index.css';

class Filters extends Component {
  state = {
    showWeekdays: false,
    showTime: false,
    showDate: false,
  };

  componentWillMount() {
    this.setState({
      showWeekdays: this.props.values.weekdays.length > 0,
      showTime: this.props.values.time.length > 0,
      showDate: this.props.values.date.length > 0,
    });
  }
  showFilters = (filter, key) => {
    this.setState({ [filter]: key });
  };
  render() {
    const { showWeekdays, showTime } = this.state;
    return (
      <div className="side-nav-filters">
        <div className="side-nav-filters-nav">
          <span>Filters</span>
          <span onClick={this.props.toggleVisibilityHandler} className="cursor-pointer">
            X
          </span>
        </div>
        <div className="filters-container">
          <FormGroup>
            <Label className="filters-list-headers">Date</Label>
            <Input
              type="date"
              name="date"
              onChange={this.props.onCheckBoxHandler}
              value={this.props.values.date[0]}
              placeholder="date placeholder"
            />
          </FormGroup>
          <FiltersComponent
            array={weekdays}
            name={'weekdays'}
            label={'WEEKDAYS'}
            onCheckBoxHandler={this.props.onCheckBoxHandler}
            showFilters={this.showFilters}
            showListOfFilters={showWeekdays}
            showListOfFiltersKey={'showWeekdays'}
          />
          <FiltersComponent
            array={time}
            name={'time'}
            label={'TIME'}
            onCheckBoxHandler={this.props.onCheckBoxHandler}
            showFilters={this.showFilters}
            showListOfFilters={showTime}
            showListOfFiltersKey={'showTime'}
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
