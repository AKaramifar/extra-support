import React from 'react'
import CheckBox from './CheckBox'
import { isCheckedInLocalStorage } from '../../Helpers/index'

export default ({
  array,
  name,
  label,
  onCheckBoxHandler,
  showFilters,
  showListOfFilters,
  showListOfFiltersKey
}) => {
  return (
    <div>
      <span
        onClick={() => showFilters(showListOfFiltersKey, !showListOfFilters)}
        className="filters-list-headers"
      >
        <span>{label}</span>
        <i
          className={showListOfFilters ? `fa fa-angle-up` : `fa fa-angle-down`}
        />
      </span>
      {showListOfFilters && (
        <div className="filters-list">
          {array &&
            array.map(item => (
              <span key={item._id} className="filters-check-box">
                <CheckBox
                  text={item.name}
                  name={name}
                  value={item._id}
                  checked={isCheckedInLocalStorage(name, item._id)}
                  onChange={onCheckBoxHandler}
                />
              </span>
            ))}
        </div>
      )}
    </div>
  )
}
