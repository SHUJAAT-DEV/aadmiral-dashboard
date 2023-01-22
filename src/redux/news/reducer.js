import { NewsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  deleted: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return { ...state, loading: false, data: action.payload };
    case NewsActionTypes.FETCH_NEWS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case NewsActionTypes.DELETE_NEWS:
      return { ...state, loading: true, deleted: action.payload };
    case NewsActionTypes.DELETE_NEWS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case NewsActionTypes.ADD_NEWS:
      return { ...state, loading: true, data: action.payload };
    case NewsActionTypes.ADD_NEWS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case NewsActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case NewsActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, updated: null };
    default:
      return state;
  }
};
