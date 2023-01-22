import { BachelorettePartyActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BachelorettePartyActionTypes.FETCH_BACHELORETTE_PARTY:
      return { ...state, loading: false, data: action.payload };
    case BachelorettePartyActionTypes.FETCH_BACHELORETTE_PARTY_ERROR:
      return { ...state, loading: false, error: action.payload };
    case BachelorettePartyActionTypes.UPDATE_BACHELORETTE_PARTY:
      return { ...state, loading: true, updated: action.payload };
    case BachelorettePartyActionTypes.UPDATE_BACHELORETTE_PARTY_ERROR:
      return { ...state, loading: false, error: action.payload };
    case BachelorettePartyActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    default:
      return state;
  }
};
