import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tutorial from '../Components/Tutorial';

import fakeTutorials from '../data/tutorials.json';
import Filters from '../Components/Filters/index';
import { generateFilters, getLocalStorageArray } from '../Helpers';


function checkAvailabilities(availabilities, filters) {
  return availabilities.map(availability => {
    return filters.includes(availability.date && new Date(availability.date).getDay().toString());
  });
}
class Tutorials extends Component {
  state = { toggleVisibility: false, availability: [], tutorials: [] };

  componentWillMount() {
    this.filterByCategory();
    this.setState({
      availability: getLocalStorageArray('availability'),
      tutorials: this.filterByCategory(),
    });
  }
  filterByCategory = () => {
    const { category } = this.props.match.params;
    return fakeTutorials.filter(tutorial => tutorial.category === category);
  };
  filtersSearchHandler = async () => {
    //backend logics
    const { availability } = this.state;
    const tutorials = this.filterByCategory().filter(tutorial => {
      return checkAvailabilities(tutorial.availabilities, availability).includes(true);
    });
    this.setState({
      tutorials,
    });
  };
  toggleVisibilityHandler = () => {
    const { toggleVisibility } = this.state;
    this.setState({
      toggleVisibility: !toggleVisibility,
    });
  };
  onCheckBoxHandler = e => {
    this.setState({
      [e.target.name]: generateFilters(e),
    });
  };
  clearFilter = () => {
    localStorage.setItem('availability', []);
    this.setState({
      availability: [],
    });
  };
  render() {
    const { toggleVisibility, availability, tutorials } = this.state;
    const { category } = this.props.match.params;
    const tutorialsToShow = tutorials.map(tutorial => <Tutorial tutorial={tutorial} />);
    return (
      <div className="container tutorials-main-container">
        {toggleVisibility ? (
          <Filters
            availability={availability}
            toggleVisibility={toggleVisibility}
            toggleVisibilityHandler={this.toggleVisibilityHandler}
            onCheckBoxHandler={this.onCheckBoxHandler}
            clearFilter={this.clearFilter}
            filtersSearchHandler={this.filtersSearchHandler}
          />
        ) : null}
        <Link to="categories">
          <i class="fas fa-arrow-left" style={{ fontSize: '25px' }}>
            <span className="icons">{category}</span>
          </i>
        </Link>
        <button className="btn side-nav-filters-button" onClick={this.toggleVisibilityHandler}>
          Filters
        </button>
        <br />
        {tutorialsToShow && tutorialsToShow.length > 0 ? (
          <div className="tutorials-container">{tutorialsToShow}</div>
        ) : (
          <span>No results</span>
        )}
      </div>
    );
  }
}
export default Tutorials;
