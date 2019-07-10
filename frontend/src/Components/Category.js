import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div className="category">
        <Link to={`/tutorials/${this.props.category.name}`}>
          <img src={this.props.category.image} width="100%" height="100%" />
          <h3>{this.props.category.name}</h3>
        </Link>
      </div>
    );
  }
}

export default Category;
