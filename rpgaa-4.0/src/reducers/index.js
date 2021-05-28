import { combineReducers } from 'redux';


import characters from './characters';
import auth from './auth';
import dialogs from './dialog'

export const reducers = combineReducers({ characters, auth, dialogs });