import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  user: {},
  validToken: false,
};
const isTokenValid = (payload) => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: isTokenValid,
        user: action.payload,
      };

    default:
      return state;
  }
}
