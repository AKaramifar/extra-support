import React, { Component } from 'react';
import Tutorial from '../Components/Tutorial';
import tutorials from '../data/tutorials.json';

class Tutorials extends Component {
  render() {
    return (
      <div className="tutorial-container">
        {tutorials.map(tutorial => (
          <Tutorial tutorial={tutorial} />
        ))}
      </div>
    );
  }
}
export default Tutorials;
