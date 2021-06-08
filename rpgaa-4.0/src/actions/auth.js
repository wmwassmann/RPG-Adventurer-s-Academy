import { AUTH, FETCH_DIALOG, FETCH_NARRATION }  from '../constants/actionTypes'
import * as api from '../axios/Axios.js'

export const signin = (formData, router) => async (dispatch) => {
    try {
        // login the user

        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })

        router.push('/')
    } catch (error) {
      // If this fails it means that 
        console.log(error, 'Authentication access failure - Debug by inspecting /Axios/Axios.js, or exported const signin /components/Auth/Auth.js')
    }
}

export const signup = (formData, router) => async (dispatch) => {
    try {

        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data })

        router.push('/')
    } catch (error) {
        console.log(error, 'this')
    }
}


export const dialog = () => async (dispatch) => {
    try {
    

      const { data } = await api.getDialog();
  
      dispatch({ type: FETCH_DIALOG, payload: data });
   
      console.log('/actions/auth.js const dialog success')
    } catch (error) {
      console.log(error, "/actions/auth.js const dialog failure");
    }
  };

export const narration = () => async (dispatch) => {
    try {
    

      const { data } = await api.getNarration();
  
      dispatch({ type: FETCH_NARRATION, payload: data });
   
      console.log('/actions/auth.js const narration success')
    } catch (error) {
      console.log(error, "/actions/auth.js const narration failure");
    }
  };