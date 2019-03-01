export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const JUMP_BACK = 'JUMP_BACK';
export const START_OVER = 'START_OVER';
export const UPDATE_TEXT = 'UPDATE_TEXT';

export const play = () => dispatch => {
  dispatch({
    type: PLAY,
  });
};

export const pause = () => dispatch => {
  dispatch({
    type: PAUSE,
  });
};

export const jumpBack = (seconds) => dispatch => {
  dispatch({
    type: JUMP_BACK,
    seconds
  });
};

export const startOver = () => dispatch => {
  dispatch({
    type: START_OVER,
  });
};

export const updateText = (idx, text) => dispatch => {
  dispatch({
    type: UPDATE_TEXT,
    idx,
    text,
  });
};
