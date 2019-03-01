import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayBar from './play_bar';
import ControlButton from './control_button';
import { play, pause, jumpBack, startOver } from '../redux/actions/audio';
import { postResult } from '../redux/actions/api';

class AudioControl extends Component {
  render() {
    return(
      <div id="audio-control">
        <PlayBar />
        <div className="control-buttons">
          <ControlButton icon="loop" />
          <ControlButton icon="skip_next" />
          <ControlButton text="Submit" handleClick={ this.props.postResult }/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  jumpBack: () => dispatch(jumpBack()),
  startOver: () => dispatch(startOver()),
  postResult: () => dispatch(postResult()),
});

export default connect(null, mapDispatchToProps)(AudioControl);
