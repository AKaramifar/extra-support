import React, { Component } from 'react';
import Tutorial from '../Components/Tutorial';
import tutorials from '../data/tutorials.json';

class Tutorials extends Component {
  render() {
    const tutorialsToShow = tutorials.map(tutorial => <Tutorial tutorial={tutorial} />);

    return (
      <div className="container tutorials-main-container">
        <i class="fas fa-arrow-left" style={{ fontSize: '25px' }}>
          <span className="icons">Education</span>
        </i>
        <div className="tutorials-container">{tutorialsToShow}</div>
      </div>
    );
  }
}
export default Tutorials;
