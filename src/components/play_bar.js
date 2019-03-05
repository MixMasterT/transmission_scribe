import React from 'react';

export default ({ markers, position }) => {
  console.log('markers: ', markers);
  return (
    <div id="play-bar">
      <div id="progress" style={{ width: `${position}%` }}></div>
      { markers.map(p => (
        <div key={p} className="mark" style={{ left: `${p}%`}}></div>
      ))}
    </div>
  )
}
