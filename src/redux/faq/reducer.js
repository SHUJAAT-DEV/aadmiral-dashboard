import { FaqsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
  deleted: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FaqsActionTypes.FETCH_FAQ:
      return { ...state, loading: false, data: action.payload };
    case FaqsActionTypes.FETCH_FAQ_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FaqsActionTypes.DELETE_FAQ:
      return { ...state, loading: true, deleted: action.payload };
    case FaqsActionTypes.DELETE_FAQ_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FaqsActionTypes.ADD_FAQ:
      return { ...state, loading: true, data: action.payload };
    case FaqsActionTypes.ADD_FAQ_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FaqsActionTypes.UPDATE_FAQ:
      return { ...state, loading: true, updated: action.payload };
    case FaqsActionTypes.UPDATE_FAQ_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FaqsActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case FaqsActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, updated: null };
    default:
      return state;
  }
};
