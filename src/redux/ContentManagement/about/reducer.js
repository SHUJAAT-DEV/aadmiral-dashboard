import { AboutActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AboutActionTypes.FETCH_ABOUT:
      return { ...state, loading: false, data: action.payload };
    case AboutActionTypes.FETCH_ABOUT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case AboutActionTypes.UPDATE_ABOUT:
      return { ...state, loading: true, updated: action.payload };
    case AboutActionTypes.UPDATE_ABOUT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case AboutActionTypes.CLEAR_MESSAGES:
      return { ...state, loading: false, updated: null, error: null };
    default:
      return state;
  }
};
