import { FETCH_NARRATION } from '../constants/actionTypes';

export default (narration = [], action) => {
  switch (action.type) { 
    case FETCH_NARRATION:      
      return action.payload;
    default:
      return narration;
  }
};
