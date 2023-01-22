import { CitiesActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  deleted: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CitiesActionTypes.FETCH_CITIES:
      return { ...state, loading: false, data: action.payload };
    case CitiesActionTypes.FETCH_CITIES_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CitiesActionTypes.DELETE_CITY_REQUEST:
      return { ...state, loading: true };
    case CitiesActionTypes.DELETE_CITY:
      return { ...state, loading: true, deleted: action.payload };
    case CitiesActionTypes.DELETE_CITY_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CitiesActionTypes.ADD_CITY:
      return { ...state, loading: true, data: action.payload };
    case CitiesActionTypes.ADD_CITY:
      return { ...state, loading: false, error: action.payload };
    case CitiesActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, deleted: null };
    default:
      return state;
  }
};
