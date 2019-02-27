import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/text_input';
import Title from './components/title';
import SpeakerBox from './components/speaker_box';
import AudioControl from './components/audio_control';
import AudioDataBox from './components/audio_data_box';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textArray: ['','',''],
    };
  }
  componentDidUpdate(prevProps, prevState) {
    // use this hook to reset textArray in state if a new wav file has been loaded
  }
  updateTextArray(idx) {
    return (value) => {
      const newArray = this.state.textArray.slice();
      newArray[idx] = value;
      this.setState({ textArray: newArray });
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
            {this.state.textArray.map((t, idx) => (
              <SpeakerBox
                updateParent={this.updateTextArray(idx)}
                key={idx}
                labelText="21051:5"
                value={this.state.textArray[idx]}
                placeHolder={"some text..." + idx}
              />
            ))}
          </div>
        </main>
        <footer><AudioControl /></footer>
      </div>
    );
  }
}

export default App;
