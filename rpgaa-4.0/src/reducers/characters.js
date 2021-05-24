
import { ADD, SUBTRACT, UPDATE } from '../constants/actionTypes';

export default (characters = [], action) => {
  switch (action.type) {   
    case ADD:
      return characters.map((character) => (character._id === action.payload._id ? action.payload : character));
    case SUBTRACT:
      return characters.map((character) => (character._id === action.payload._id ? action.payload : character));
    case UPDATE:
      return characters.map((character) => (character._id === action.payload._id ? action.payload : character));
    default:
      return characters;
  }
};