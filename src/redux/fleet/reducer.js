import { FleetActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FleetActionTypes.FETCH_FLEET:
      return { ...state, loading: false, data: action.payload };
    case FleetActionTypes.FETCH_FLEET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FleetActionTypes.DELETE_FLEET:
      return { ...state, loading: true, data: action.payload };
    case FleetActionTypes.DELETE_FLEET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FleetActionTypes.UPDATE_FLEET:
      return { ...state, loading: false, updated: action.payload };
    case FleetActionTypes.UPDATE_FLEET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FleetActionTypes.ADD_FLEET:
      return { ...state, loading: true, data: action.payload };
    case FleetActionTypes.ADD_FLEET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FleetActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, updated: null };
    default:
      return state;
  }
};
