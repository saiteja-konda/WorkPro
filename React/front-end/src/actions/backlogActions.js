import axios from "axios";
import { GET_ERRORS, GET_BACKLOG, GET_PROJECT_TASK } from "./types";
import { PROJECT_BACKLOG_API_URL } from "../urlConfig";

export const addProjectTask = (backlog_id, project_task, history) => async (
  dispatch
) => {
  try {
    await axios.post(`${PROJECT_BACKLOG_API_URL}${backlog_id}`, project_task);
    history.push(`/projectBoard/${backlog_id}`);
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

export const getBacklog = (backlog_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${PROJECT_BACKLOG_API_URL}${backlog_id}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getProjectTask = (backlog_id, pt_id, history) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `${PROJECT_BACKLOG_API_URL}${backlog_id}/${pt_id}`
    );
    dispatch({
      type: GET_PROJECT_TASK,
      payload: res.data,
    });
  } catch (error) {
    history.push("/dashboard");
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data,
    // });
  }
};

export const updateProjectTask = (
  backlog_id,
  pt_id,
  project_task,
  history
) => async dispatch => {
try{
  await axios.patch(`${PROJECT_BACKLOG_API_URL}/${backlog_id}/${pt_id}`,project_task);
  history.push(`/projectBoard/${backlog_id}`);
  dispatch({
    type: GET_ERRORS,
    payload: {},
  });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};