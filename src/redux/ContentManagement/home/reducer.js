import { HomeActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionTypes.FETCH_HOME:
      return { ...state, loading: false, data: action.payload };
    case HomeActionTypes.FETCH_HOME_ERROR:
      return { ...state, loading: false, error: action.payload };
    case HomeActionTypes.UPDATE_HOME:
      return { ...state, loading: true, updated: action.payload };
    case HomeActionTypes.UPDATE_SERVICES_DETAIL:
      return { ...state, loading: false, updatedServiceDetail: action.payload };
    case HomeActionTypes.GET_SERVICES_DETAIL:
      return { ...state, loading: false, getServiceDetail: action.payload };
    case HomeActionTypes.UPDATE_HOME_ERROR:
      return { ...state, loading: false, error: action.payload };
    case HomeActionTypes.CLEAR_MESSAGES:
      return { ...state, loading: false, updated: null, error: null };
    case HomeActionTypes.LOADING:
      return { ...state, loading: true, updated: null, error: null };
    default:
      return state;
  }
};
