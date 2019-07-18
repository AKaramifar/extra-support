import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div className="category">
        <Link to={`/${this.props.category.name}`} style={{ fontSize: '150px', color: 'black' }}>
          <div className="category-image-container">
            <i className={this.props.category.image} style={{ fontSize: '150px', color: 'grey' }}></i>
          </div>
          <h3>{this.props.category.name}</h3>
        </Link>
      </div>
    );
  }
}

export default Category;
