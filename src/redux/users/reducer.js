import { UsersActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  deleted: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.FETCH_ALL_USERS:
      return { ...state, loading: false, data: action.payload };
    case UsersActionTypes.FETCH_ALL_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case UsersActionTypes.DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case UsersActionTypes.DELETE_USER:
      return { ...state, loading: false, deleted: action.payload };
    case UsersActionTypes.DELETE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case UsersActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, deleted: null };
    default:
      return state;
  }
};
