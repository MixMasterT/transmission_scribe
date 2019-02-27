/*
  Error Reducer
*/

import { CONFIRM_POST_SUCCESS } from '../actions/api';
import {
  RECEIVE_FRONTEND_ERROR,
  RECEIVE_API_ERROR,
  RESOLVE_FRONTEND_ERROR,
  RESOLVE_API_ERROR,
} from '../actions/errors';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_API_ERROR:
      console.log('API_ERROR recieved');
      return Object.assign({}, state, {
        apiError: action.error
      });
    case CONFIRM_POST_SUCCESS:
    case RESOLVE_API_ERROR:
      return Object.assign({}, state, {
        apiError: false
      });
    case RECEIVE_FRONTEND_ERROR:
      console.log('FRONTEND_ERROR recieved');
      return Object.assign({}, state, {
        frontendError: action.error
      });
    case RESOLVE_FRONTEND_ERROR:
      console.log('resolving FRONTEND_ERROR');
      return Object.assign({}, state, {
        frontendError: false
      });
    default:
      return state;
  }
}
