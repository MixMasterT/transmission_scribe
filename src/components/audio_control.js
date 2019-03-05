import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayBar from './play_bar';
import ControlButton from './control_button';
import {
  play,
  pause,
  jumpBack,
  startOver
} from '../redux/actions/audio';
import { postResult } from '../redux/actions/api';

class AudioControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audioLength: 0,
      audioPos: 0,
    }
    this.audio = React.createRef();
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  componentDidMount() {
    this.audio.current.addEventListener('timeupdate', () => {
      this.setState({
        audioPos: this.audio.current.currentTime,
      });
    });
    this.audio.current.addEventListener('loadedmetadata', () => {
      this.pause();
      this.setState({
        audioLength: this.audio.current.duration,
        audioPos: 0,
      });
    })
  }
  play() {
    this.audio.current.play();
    this.props.play();
  }
  pause() {
    this.audio.current.pause();
    this.props.pause();
  }
  render() {
    let marks = [];
    if(this.state.audioLength) {
      marks = this.props.markers.map(m => 100 * m / this.state.audioLength)
    }
    console.log('markers in audio-control: ', this.props.markers);
    return(
      <div id="audio-control">
        <audio
          controls={false}
          className="player"
          ref={ this.audio }
          autoPlay={false}
        >
          <source src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3" />
        </audio>
        <PlayBar
          markers={marks}
          position={100 * (this.state.audioPos / this.state.audioLength)}
        />
        <div className="control-buttons">
          {
            this.props.isPlaying ?
              <ControlButton icon="pause" handleClick={ this.pause }/> :
              <ControlButton icon="play_arrow" handleClick={ this.play }/>
          }
          <ControlButton icon="loop" handleClick={ this.props.jumpBack }/>
          <ControlButton icon="skip_next" handleClick={ this.props.startOver }/>
          <ControlButton text="Submit" handleClick={ this.props.postResult }/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isPlaying: state.audio.isPlaying,
  markers: state.data.srcList.map(i => i.pos),
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  jumpBack: () => dispatch(jumpBack()),
  startOver: () => dispatch(startOver()),
  postResult: () => dispatch(postResult()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioControl);
