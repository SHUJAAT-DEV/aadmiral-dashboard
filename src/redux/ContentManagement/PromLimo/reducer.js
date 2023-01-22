import { PromLimoActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PromLimoActionTypes.FETCH_PROM_LIMO:
      return { ...state, loading: false, data: action.payload };
    case PromLimoActionTypes.FETCH_PROM_LIMO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PromLimoActionTypes.UPDATE_PROM_LIMO:
      return { ...state, loading: true, updated: action.payload };
    case PromLimoActionTypes.UPDATE_PROM_LIMO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PromLimoActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    default:
      return state;
  }
};
