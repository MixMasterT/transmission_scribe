/*
  Data Reducer
*/
import { RECEIVE_AUDIO_DATA } from '../actions/api';
import { UPDATE_TEXT } from '../actions/audio';

const defaultState = {
  textArray: ['','',''],
  startTime: null,
  endTime: null,
  emergency: null,
  talkgroup: null,
  talkgroupName: null,
  srcList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_AUDIO_DATA:
      const data = action.data;
      data.textArray = Array.from({length: data.srcList.length}, (v) => '')
      return Object.assign({}, state, action.data);
    case UPDATE_TEXT:
      console.log('update text was called!', action);
      const newArray = state.textArray.slice();
      newArray[action.idx] = action.text;
      return Object.assign({}, state, {
        textArray: newArray,
      });
    default:
      return state;
  }
}
