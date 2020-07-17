import React from 'react';
import { Link } from 'react-router-dom';

export default ({ category }) => {
  const random_rgba = () => {
    const o = Math.round,
      r = Math.random,
      s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
  };
  const color = random_rgba();
  return (
    <div className="category">
      <Link
        to={{ pathname: `/sessions/${category._id}`, state: { category } }}
        style={{ fontSize: '150px', color: 'black', textAlign: 'center' }}
      >
        <div className="category-image-container">
          <i className={category.icon} style={{ fontSize: '150px', color }}></i>
        </div>
        <h3>{category.name}</h3>
      </Link>
    </div>
  );
};
