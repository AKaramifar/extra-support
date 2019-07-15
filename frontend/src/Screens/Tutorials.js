import React, { Component } from 'react';
import Tutorial from '../Components/Tutorial';
import tutorials from '../data/tutorials.json';
import { Link } from 'react-router-dom';

class Tutorials extends Component {
  render() {
    const tutorialsToShow = tutorials.map(tutorial => <Tutorial tutorial={tutorial} />);

    return (
      <div className="container tutorials-main-container">
        <Link to="/categories">
          <i class="fas fa-arrow-left" style={{ fontSize: '25px' }}></i>
        </Link>
        <span className="category-title">
          <b>Education</b>
        </span>

        <div className="tutorials-container">{tutorialsToShow}</div>
      </div>
    );
  }
}
export default Tutorials;
