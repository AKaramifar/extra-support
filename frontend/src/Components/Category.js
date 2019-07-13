import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div className="category">
        <Link to={`/${this.props.category.name}`}>
          <div className="category-image-container">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={this.props.category.image} width="100%" height="100%" style={{ objectFit: 'contain' }} />
          </div>
          <h3>{this.props.category.name}</h3>
        </Link>
      </div>
    );
  }
}

export default Category;
