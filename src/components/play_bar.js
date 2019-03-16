import React from 'react';

export default ({ markers, position, isPlaying, duration, isJump }) => {
  const showCurrent = isPlaying && !isJump;
  return (
    <div id="play-bar">
      <div id="progress"
        className={isPlaying ? 'is-playing' : 'static'}
        style={{
          width: `${showCurrent ? 100 : 100 * position / duration}%`,
          transition: `${showCurrent ? duration - position : 0}s linear`,
        }}
      />
      { markers.map(p => (
        <div key={p} className="mark" style={{ left: `${p}%`}}></div>
      ))}
    </div>
  )
}
