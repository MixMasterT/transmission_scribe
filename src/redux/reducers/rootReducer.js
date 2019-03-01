import { combineReducers } from 'redux';
import errors from './errors';
import audio from './audio';
import data from './data';

export default combineReducers({ errors, audio, data });
