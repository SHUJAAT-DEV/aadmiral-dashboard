import { HoustonToCollegeActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HoustonToCollegeActionTypes.FETCH_HOUSTON_TO_COLLEGE:
      return { ...state, loading: false, data: action.payload };
    case HoustonToCollegeActionTypes.FETCH_HOUSTON_TO_COLLEGE_ERROR:
      return { ...state, loading: false, error: action.payload };
    case HoustonToCollegeActionTypes.UPDATE_HOUSTON_TO_COLLEGE:
      return { ...state, loading: true, updated: action.payload };
    case HoustonToCollegeActionTypes.UPDATE_HOUSTON_TO_COLLEGE_ERROR:
      return { ...state, loading: false, error: action.payload };
    case HoustonToCollegeActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case HoustonToCollegeActionTypes.CLEAR_MESSAGES:
      return { ...state, loading: false, updated: null, error: null };
    default:
      return state;
  }
};
