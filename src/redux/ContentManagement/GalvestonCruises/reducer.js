import { GalvestonActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GalvestonActionTypes.FETCH_GALVESTON:
      return { ...state, loading: false, data: action.payload };
    case GalvestonActionTypes.FETCH_SERVICES_PAGES:
      return { ...state, loading: false, pageData: action.payload };
    case GalvestonActionTypes.CREATE_SERVICES_PAGES:
      return { ...state, loading: false, data: action.payload };
    case GalvestonActionTypes.FETCH_GALVESTON_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GalvestonActionTypes.UPDATE_GALVESTON:
      return { ...state, loading: true, updated: action.payload };
    case GalvestonActionTypes.UPDATE_GALVESTON_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GalvestonActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case GalvestonActionTypes.CLEAR_MESSAGES:
      return { ...state, loading: false, updated: null, error: null };
    default:
      return state;
  }
};
