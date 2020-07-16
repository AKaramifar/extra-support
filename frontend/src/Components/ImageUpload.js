import React from "react";
import "./index.css";
export default ({ onChange, label, style, image, isLoading }) => {
  return (
    <div style={style}>
      <div className="image-input-container">
        <input
          className="image-input"
          id="file"
          type={isLoading ? "" : "file"}
          accept="image/x-png,image/gif,image/jpeg"
          onChange={onChange}
        />
        <label tabIndex="0" htmlFor="file" className="image-input-trigger">
          {image ? <img src={image} alt="preview" width="80%" /> : label}
          {isLoading ? <div></div> : image && <span>Click to Change</span>}
        </label>
      </div>
    </div>
  );
};