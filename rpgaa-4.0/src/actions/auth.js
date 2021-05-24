import { AUTH }  from '../constants/actionTypes'
import * as api from '../axios/Axios.js'

export const signin = (formData, router) => async (dispatch) => {
    try {
        // login the user

        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })

        router.push('/')
    } catch (error) {
        console.log(error, 'this other')
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

