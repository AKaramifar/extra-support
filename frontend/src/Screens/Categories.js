import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../Redux/Actions';
import Category from '../Components/Category.js';
function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
  };
}

const Categories = ({ categories, getCategories }) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);
  return (
    <div className="categories-container">
      <br />
      <br />
      <h1>Select a category</h1>
      <div className="categories">
        {categories.length > 0 && categories.map(category => <Category key={category._id} category={category} />)}
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { getCategories }
)(Categories);
