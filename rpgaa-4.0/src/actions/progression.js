import { CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const createCharacter = (character, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createCharacter(character);

    dispatch({ type: CREATE, payload: data });

    history.push(`/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateCharacter = (id, character) => async (dispatch) => {
  try {
    const { data } = await api.updateCharacter(id, character);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCharacter = (id) => async (dispatch) => {
  try {
    await await api.deleteCharacter(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
