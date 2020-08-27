import axios from "axios";
import { USER_REGISTER_API_URL, USER_LOGIN_API_URL } from "../urlConfig";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../utills/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post(USER_REGISTER_API_URL, newUser);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
export const login = (LoginRequest) => async (dispatch) => {
  try {
    //post login request
    const res = await axios.post(USER_LOGIN_API_URL, LoginRequest);
    //get the token
    const { token } = res.data;
    //store token in localStorage
    localStorage.setItem("jwToken", token);
    //This function below is sets token in header
    setJWTToken(token);
    //decode the token
    const decoded = jwt_decode(token);
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
