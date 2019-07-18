import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tutorial from '../Components/Tutorial';
import Filters from '../Components/Filters/index';
import { generateFilters, getLocalStorageArray } from '../Helpers';
import { getTutorials } from '../actions/tutorials';
import swal from 'sweetalert';

class Tutorials extends Component {
  state = { toggleVisibility: false, availability: [], tutorials: [] .};

  componentWillMount() {
    const { category } = this.props.match.params;
    const options = {
      category,
    };
    this.setState({
      availability: getLocalStorageArray('availability'),
    });
    this.getTutorialsByOptions(options);
  }
  getTutorialsByOptions = async options => {
    try {
      const res = await getTutorials(options);
      console.log(res);
      this.setState({ tutorials: res.data.tutorials });
    } catch (error) {
      swal('Oops!', 'Could not get tutorials!', 'error');
    }
  };

  filtersSearchHandler = async () => {
    //backend logics
    const { availability } = this.state;
    const { category } = this.props.match.params;
    const options = {
      category,
      availability,
    };
    this.getTutorialsByOptions(options);
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
