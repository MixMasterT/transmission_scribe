import React from 'react';

export default ({ markers, position, isPlaying, duration, isJump }) => {
  return (
    <div id="play-bar">
      <div id="progress"
        className={isPlaying ? 'is-playing' : 'static'}
        style={{
          width: `${isPlaying ? 100 : 100 * position / duration}%`,
          transition: `${
            isPlaying && !isJump ? duration - position : 0
          }s linear`
        }}
      />
      { markers.map(p => (
        <div key={p} className="mark" style={{ left: `${p}%`}}></div>
      ))}
    </div>
  )
}
