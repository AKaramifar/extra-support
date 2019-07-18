import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          style={{ marginLeft: 70 }}
          to={{ pathname: `/booking/${this.props.tutorial.name}`, state: { category: this.props } }}
        >
          <h6 className="text-success">Check Availability</h6>
        </Link>
      </div>
    );
  }
}

export default Tutorial;
