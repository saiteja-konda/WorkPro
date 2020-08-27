import axios from 'axios'
import {USER_REGISTER_API_URL} from '../urlConfig'
import { GET_ERRORS } from './types';
export const createNewUser =  (newUser, history) => async dispatch => {
    try {
        await axios.post(USER_REGISTER_API_URL,newUser)
        history.push("/login");
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    } catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}