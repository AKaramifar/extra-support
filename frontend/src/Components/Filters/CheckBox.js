import React from 'react'
export default ({ text, onChange, value, name, checked }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkbox"
        id={value}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={value}>
        {text}
      </label>
    </div>
  )
}
