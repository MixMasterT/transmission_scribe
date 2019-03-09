import React from 'react';

export default ({ markers, position, isPlaying, duration }) => {
  console.log('isPlaying: ', isPlaying);
  return (
    <div id="play-bar">
      <div id="progress"
        className={isPlaying ? 'is-playing' : 'static'}
        style={{
          width: `${isPlaying ? '100' : position}%`,
          transition: `${duration - position}s linear`,
        }}
      />
      { markers.map(p => (
        <div key={p} className="mark" style={{ left: `${p}%`}}></div>
      ))}
    </div>
  )
}
