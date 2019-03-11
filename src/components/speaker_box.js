import React from 'react';

export default ({
  labelText,
  value,
  updateParent,
  placeHolder,
  handlePlayButtonClick
}) => {
  const handleChange = (e) => {
    e.preventDefault();
    updateParent(e.target.value);
  }
  return (
  <div className="speaker-box">
    <label>
      <h5>{ labelText }</h5>
      <span onClick={handlePlayButtonClick}>&#9658;</span>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
      />
    </label>
  </div>
)}
