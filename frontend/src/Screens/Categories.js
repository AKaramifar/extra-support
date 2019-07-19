import React, { Component } from 'react';
import Category from '../Components/Category.js';
import { getCategories } from '../actions/categories';
import swal from 'sweetalert';
class Categories extends Component {
  state = { categories: [] };
  async componentWillMount() {
    const categories = await await getCategories();
    if (categories.status === 200) {
      console.log(categories);
      this.setState({ categories: categories.data });
      console.log(this.state.categories);
    } else {
      swal('Oops!', 'Could not get categories!', 'error');
    }
  }
  render() {
    return (
      <div className="categories-container">
        <br />
        <br />
        <h1>Select a category</h1>
        <div className="categories">
          {this.state.categories && this.state.categories.map(category => <Category category={category} />)}
        </div>
      </div>
    );
  }
}

export default Categories;
