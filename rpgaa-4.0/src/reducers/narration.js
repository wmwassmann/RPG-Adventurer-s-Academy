import { FETCH_NARRATION} from '../constants/actionTypes';

export default (narrations = [], action) => {
  switch (action.type) { 
    case FETCH_NARRATION:
      
      return action.payload;
    default:
      return narrations;
  }
};
