import { OurServicesActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OurServicesActionTypes.FETCH_OUR_SERVICES:
      return { ...state, loading: false, data: action.payload };
    case OurServicesActionTypes.FETCH_OUR_SERVICES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OurServicesActionTypes.DELETE_OUR_SERVICES:
      return { ...state, loading: true, data: action.payload };
    case OurServicesActionTypes.DELETE_OUR_SERVICES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OurServicesActionTypes.ADD_OUR_SERVICES:
      return { ...state, loading: true, data: action.payload };
    case OurServicesActionTypes.ADD_OUR_SERVICES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OurServicesActionTypes.UPDATE_OUR_SERVICES:
      return { ...state, loading: true, updated: action.payload };
    case OurServicesActionTypes.UPDATE_OUR_SERVICES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OurServicesActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, updated: null };
    default:
      return state;
  }
};
