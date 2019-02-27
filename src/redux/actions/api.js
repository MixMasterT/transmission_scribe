import * as api from '../../util/api';
import { receiveApiError } from './errors';
export const RECEIVE_AUDIO_DATA = 'RECEIVE_AUDIO_DATA';
export const CONFIRM_POST_SUCCESS = 'CONFIRM_POST_SUCCESS';

export const postResult = (data) => async dispatch => {
  let postResponse;
  try {
    postResponse = await api.postAudioData(data);
  } catch(err) {
    console.log('postResult error: ', err);
    const postError = await (await postResponse).text();
    const error = `Error posting transcription: '${postError}'`
    return dispatch(receiveApiError(error));
  }
  if(postResponse.ok) {
    console.log('postResult succeeded! ', postResponse);
  }
  dispatch({
    type: CONFIRM_POST_SUCCESS,
  });
};
export const receiveAudioData = (data) => dispatch => {
  dispatch({
    type: RECEIVE_AUDIO_DATA,
    data,
  });
};
