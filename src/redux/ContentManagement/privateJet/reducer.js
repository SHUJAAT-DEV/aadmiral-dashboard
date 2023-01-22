import { PrivateJetActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PrivateJetActionTypes.FETCH_PRIVATE_JET:
      return { ...state, loading: false, data: action.payload };
    case PrivateJetActionTypes.FETCH_PRIVATE_JET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PrivateJetActionTypes.UPDATE_PRIVATE_JET:
      return { ...state, loading: true, updated: action.payload };
    case PrivateJetActionTypes.UPDATE_PRIVATE_JET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PrivateJetActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case PrivateJetActionTypes.CLEAR_MESSAGES:
      return { ...state, loading: false, updated: null, error: null };
    default:
      return state;
  }
};
