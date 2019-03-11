import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayBar from './play_bar';
import ControlButton from './control_button';
import {
  play,
  pause,
  jumpBack,
  startOver,
  setPosition,
} from '../redux/actions/audio';
import { postResult } from '../redux/actions/api';

class AudioControl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audioLength: 0,
      playPosition: 0,
      animationFrameListener: null,
      isPlaying: false,
    }
    this.audio = React.createRef();
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.resetAudio = this.resetAudio.bind(this);
  }
  componentDidMount() {
    const animationFrameListener = window.requestAnimationFrame((timestamp) => {
      if(timestamp % 1000 === 0) {
        console.log('timed a second, ', timestamp);
      }
    });
    this.setState({ animationFrameListener });
    // this.audio.current.addEventListener('timeupdate', () => {
    //   this.setState({
    //     playPosition: this.audio.current.currentTime,
    //   });
    // });
    this.resetAudio();
  }
  static getDerivedStateFromProps(nextProps, prevState){
     if(
       nextProps.playPosition !== prevState.playPosition ||
       nextProps.isPlaying !== prevState.isPlaying
     ) {
       return {
         playPosition: nextProps.playPosition,
         isPlaying: nextProps.isPlaying
       };
    }
    else return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.playPosition !== prevProps.playPosition) {
      this.audio.current.currentTime = this.props.playPosition;
    }
    if(this.props.isPlaying && !prevProps.isPlaying) {
      this.audio.current.play();
    }
  }
  resetAudio() {
    this.audio.current.addEventListener('loadedmetadata', () => {
      this.pause();
      this.setState({
        audioLength: this.audio.current.duration,
        playPosition: 0,
      });
    });
  }
  play() {
    this.audio.current.play();
    this.setState({ isPlaying: true });
    this.props.play();
  }
  pause() {
    this.audio.current.pause();
    const pos = this.audio.current.currentTime;
    this.setState({
      playPosition: pos,
      isPlaying: false,
    });
    this.props.pause();
    this.props.setPosition(pos);
  }
  componentWillUnmount() {
    window.cancelAnimationFrame(this.state.animationFrameListener);
  }
  render() {
    let marks = [];
    if(this.state.audioLength) {
      marks = this.props.markers.map(m => 100 * m / this.state.audioLength)
    }
    return(
      <div id="audio-control">
        <audio
          controls={false}
          className="player"
          ref={ this.audio }
          autoPlay={false}
          src={`http://127.0.0.1:5000${this.props.audioSrc}`}
        />
        <PlayBar
          isPlaying={this.props.isPlaying}
          markers={marks}
          duration={this.state.audioLength}
          position={this.state.playPosition}
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
  audioSrc: state.data.audioSrc,
  playPosition: state.audio.playPosition,
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  jumpBack: () => dispatch(jumpBack()),
  startOver: () => dispatch(startOver()),
  postResult: () => dispatch(postResult()),
  setPosition: (pos) => dispatch(setPosition(pos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioControl);
