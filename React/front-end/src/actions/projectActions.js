import axios from "axios";
import { GET_ERRORS, GET_PROJECTS } from "./types";
import { API_URL } from "../urlConfig";

export const createProject = (project, history) => async (dispatch) => {
  try {
    await axios.post(API_URL, project);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProjects = () => async (dispatch) => {
  const res = await axios.get(API_URL);
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};
