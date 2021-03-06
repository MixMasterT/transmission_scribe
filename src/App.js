import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/text_input';
import Title from './components/title';
import SpeakerBox from './components/speaker_box';
import AudioControl from './components/audio_control';
import AudioDataBox from './components/audio_data_box';
import { updateText, setPosition, play } from './redux/actions/audio';
import { fetchData } from './redux/actions/api';

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    // use this hook to reset textArray in state if a new wav file has been loaded
  }
  updateTextArray(idx) {
    return (value) => {
      const newArray = this.props.textArray.slice();
      newArray[idx] = value;
      this.props.updateText(idx, value);
    }
  }
  handlePlayButtonClick(pos) {
    return () => {
      console.log('gonna set play Postiion to: ', pos);
      this.props.setPosition(pos);
      this.props.play();
    }
  }
  render() {
    return (
      <div className="App">
        <main>
          <div id="top-left">
            <AudioDataBox date="10.22.2018" duration="21" />
          </div>
          <div id="main-column">
            <Title name="North Fire Dispatch N F" />
            {this.props.textArray.map((t, idx) => {
              const listItem = this.props.srcList[idx];
              const pos = parseFloat(listItem.pos);
              return (
                <SpeakerBox
                  updateParent={this.updateTextArray(idx)}
                  key={idx}
                  handlePlayButtonClick={this.handlePlayButtonClick(listItem.pos)}
                  labelText={`${listItem.src}:${pos.toFixed()}`}
                  value={this.props.textArray[idx]}
                  placeHolder={"some text..." + idx}
                />
              )
            }
          )}
          </div>
        </main>
        <footer><AudioControl /></footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  textArray: state.data.textArray,
  srcList: state.data.srcList,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  updateText: (idx, text) => dispatch(updateText(idx, text)),
  fetchData: () => dispatch(fetchData()),
  setPosition: (pos) => dispatch(setPosition(pos)),
  play: () => dispatch(play()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
