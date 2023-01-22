import { BlogActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
  deleted: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BlogActionTypes.FETCH_BLOG:
      return { ...state, loading: false, data: action.payload };
    case BlogActionTypes.FETCH_BLOG_ERROR:
      return { ...state, loading: false, error: action.payload };
    case BlogActionTypes.DELETE_BLOG:
      return { ...state, loading: true, deleted: action.payload };
    case BlogActionTypes.DELETE_BLOG_ERROR:
      return { ...state, loading: false, error: action.payload };
    case BlogActionTypes.ADD_BLOG:
      return { ...state, loading: true, data: action.payload };
    case BlogActionTypes.ADD_BLOG_ERROR:
      return { ...state, loading: false, error: action.payload };
    case BlogActionTypes.UPDATE_BLOG:
      return { ...state, loading: true, updated: action.payload };
    case BlogActionTypes.UPDATE_BLOG_ERROR:
      return { ...state, loading: false, error: action.payload };
    case BlogActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case BlogActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, updated: null };
    default:
      return state;
  }
};
