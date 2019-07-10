import React, { Component } from 'react';
import categories from '../data/categories.json';
import Category from '../Components/Category.js';
class Categories extends Component {
  render() {
    return (
      <div className="categories-container">
        <h1>Select a category</h1>
        <div className="categories">{categories && categories.map(category => <Category category={category} />)}</div>
      </div>
    );
  }
}

export default Categories;
