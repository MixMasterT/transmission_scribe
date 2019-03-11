/*
  Audio Reducer
*/
import {
  PLAY,
  PAUSE,
  JUMP_BACK,
  START_OVER,
  SET_POSITION,
} from '../actions/audio';

const defaultState = {
  audioFile: '',
  isPlaying: false,
  playPosition: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PLAY:
      return Object.assign({}, state, {
        isPlaying: true,
      });
    case PAUSE:
      return Object.assign({}, state, {
        isPlaying: false,
      });
    case JUMP_BACK:
      const newPosition = state.position < 15 ? 0 : state.position - 15;
      return Object.assign({}, state, {
        playPosition: newPosition,
      });
    case SET_POSITION:
      return Object.assign({}, state, {
        playPosition: action.position,
      });
    case START_OVER:
      return Object.assign({}, state, {
        position: 0,
      });
    default:
      return state;
  }
}
