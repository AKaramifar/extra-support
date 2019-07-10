import React, { Component } from 'react';

class Tutorial extends Component {
  render() {
    return (
      <div className="tutorial">
        <h3>{this.props.tutorial.name}</h3>
        <p>{this.props.tutorial.description}</p>
        <i class="fa fa-map-marker-alt">
          <span className="icons">{this.props.tutorial.location}</span>
        </i>
        <i class="far fa-user">
          <span className="icons">{this.props.tutorial.mentor}</span>
        </i>
        <i class="far fa-clock">
          <span className="icons">{this.props.tutorial.information[0].name}</span>
        </i>
        <i class="far fa-clock">
          <span className="icons">{this.props.tutorial.information[1].name}</span>
        </i>
      </div>
    );
  }
}

export default Tutorial;
