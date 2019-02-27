import React from 'react';

export default ({ labelText, value, updateParent }) => {
  const handleChange = (e) => {
    e.preventDefault();
    updateParent(e.target.value);
  }
  return (
  <div className="text-input">
    <label>
      { labelText }
      <input type="text" value={value} onChange={handleChange}></input>
    </label>
  </div>
)}
