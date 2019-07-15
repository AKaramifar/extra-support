import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tutorial from '../Components/Tutorial';
import tutorials from '../data/tutorials.json';
import { Link } from 'react-router-dom';

class Tutorials extends Component {
  render() {
    const { category } = this.props.match.params;
    const filteredTutorials = tutorials.filter(tutorial => tutorial.category === category);
    const tutorialsToShow = filteredTutorials.map(tutorial => <Tutorial tutorial={tutorial} />);
    return (
      <div className="container tutorials-main-container">
        <Link to="categories">
          <i class="fas fa-arrow-left" style={{ fontSize: '25px' }}>
            <span className="icons">{category}</span>
          </i>
        </Link>
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
