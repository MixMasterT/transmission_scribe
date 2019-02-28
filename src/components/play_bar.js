import React from 'react';

export default ({currentPosition, markedPositions}) => {
  return (
    <audio controls className="player">
      <source src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3" />
    </audio>
  )
}
