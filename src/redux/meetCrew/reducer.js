import { MeetCrewActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: {},
  deleted: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MeetCrewActionTypes.FETCH_MEET_CREW:
      return { ...state, loading: false, data: action.payload };
    case MeetCrewActionTypes.FETCH_MEET_CREW_ERROR:
      return { ...state, loading: false, error: action.payload };
    case MeetCrewActionTypes.DELETE_CREW:
      return { ...state, loading: true, data: action.payload };
    case MeetCrewActionTypes.DELETE_CREW_ERROR:
      return { ...state, loading: false, error: action.payload };
    case MeetCrewActionTypes.ADD_CREW:
      return { ...state, loading: true, data: action.payload };
    case MeetCrewActionTypes.ADD_CREW_ERROR:
      return { ...state, loading: false, error: action.payload };
    case MeetCrewActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    default:
      return state;
  }
};
