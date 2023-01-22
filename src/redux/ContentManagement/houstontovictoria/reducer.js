import { HoustonToVictoriaActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HoustonToVictoriaActionTypes.FETCH_HOUSTON_TO_Victoria:
      return { ...state, loading: false, data: action.payload };
    case HoustonToVictoriaActionTypes.FETCH_HOUSTON_TO_Victoria_ERROR:
      return { ...state, loading: false, error: action.payload };
    case HoustonToVictoriaActionTypes.UPDATE_HOUSTON_TO_Victoria:
      return { ...state, loading: true, updated: action.payload };
    case HoustonToVictoriaActionTypes.UPDATE_HOUSTON_TO_Victoria_ERROR:
      return { ...state, loading: false, error: action.payload };
    case HoustonToVictoriaActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case HoustonToVictoriaActionTypes.CLEAR_MESSAGES:
      return { ...state, loading: false, updated: null, error: null };
    default:
      return state;
  }
};
