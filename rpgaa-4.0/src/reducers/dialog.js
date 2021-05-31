import { FETCH_DIALOG } from '../constants/actionTypes';

export default (dialogs = [], action) => {
  switch (action.type) { 
    case FETCH_DIALOG:      
      return action.payload;
    default:
      return dialogs;
  }
};
