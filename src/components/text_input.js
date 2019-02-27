import React from 'react';

export default ({ labelText, value, updateParent }) => (
  <div className="text-input">
    <label>
      { labelText }
      <input type="text" value={value} onClick={updateParent}></input>
    </label>
  </div>
)
