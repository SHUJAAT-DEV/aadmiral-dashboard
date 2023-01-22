import { AstroActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AstroActionTypes.FETCH_ASTRO:
      return { ...state, loading: false, data: action.payload };
    case AstroActionTypes.FETCH_ASTRO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case AstroActionTypes.UPDATE_ASTRO:
      return { ...state, loading: true, updated: action.payload };
    case AstroActionTypes.UPDATE_ASTRO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case AstroActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case AstroActionTypes.CLEAR_MESSAGES:
      return { ...state, loading: false, updated: null, error: null };
    default:
      return state;
  }
};
