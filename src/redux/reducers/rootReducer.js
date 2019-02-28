import { combineReducers } from 'redux';
import errors from './errors';
import audio from './audio';
import api from './api';
export default combineReducers({ errors, audio, api });
