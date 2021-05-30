import { combineReducers } from 'redux';


import characters from './characters';
import auth from './auth';
import dialogs from './dialog';
import narrations from './narration';

export const reducers = combineReducers({ characters, auth, dialogs, narrations });