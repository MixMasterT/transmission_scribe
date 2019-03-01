import React from 'react';

export default ({ handleClick, icon, text }) => {
  return (
    <button
      onClick={ handleClick }
      className="control-button"
    >
      { icon ? <i className="material-icons">{ icon }</i> : '' }
      { text ? <h6>{ text }</h6> : '' }
    </button>
  )
}
