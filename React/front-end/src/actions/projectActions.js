import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";
import { PROJECT_API_URL } from "../urlConfig";

export const createProject = (project, history) => async (dispatch) => {
  try {
    await axios.post(PROJECT_API_URL, project);
    history.push("/dashboard");
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

export const getProjects = () => async (dispatch) => {
  const res = await axios.get(PROJECT_API_URL);
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};

export const getProject = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`${PROJECT_API_URL}${id}`);
    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteProject = (id) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure that you want to delete project? this action is irreverseble "
    )
  ) {
    await axios.delete(`${PROJECT_API_URL}${id}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: id,
    });
  }
};
