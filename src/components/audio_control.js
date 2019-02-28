import React, { Component } from 'react';
import PlayBar from './play_bar';
import ControlButton from './control_button';

export default class AudioControl extends Component {
  render() {
    return(
      <div id="audio-control">
        <PlayBar />
        <div className="control-buttons">
          {['loop', 'skip_next'].map((i, idx) => (
            <ControlButton icon={i} key={`icon-button-${idx}`} />
          ))}
          {['submit'].map((i, idx) => (
            <ControlButton text={i} key={`text-button-${idx}`} />
          ))}
        </div>
      </div>
    )
  }
}
