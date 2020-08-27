import axios from "axios";
import { PROJECT_BACKLOG_API_URL } from "../urlConfig";
import { GET_ERRORS, GET_BACKLOG } from "./types";
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
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getBacklog = backlog_id => async dispatch => {
  try {
    const res = await axios.get(`${PROJECT_BACKLOG_API_URL}${backlog_id}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (err) {}
};
 