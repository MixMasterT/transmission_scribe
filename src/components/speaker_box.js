import React from 'react';

export default ({ labelText, value, updateParent, placeHolder }) => {
  const handleChange = (e) => {
    e.preventDefault();
    updateParent(e.target.value);
  }
  return (
  <div className="speaker-box">
    <label>
      <h5>{ labelText }</h5>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
      />
    </label>
  </div>
)}
