import { ContactDetailsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  details: [],
  updated: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactDetailsActionTypes.FETCH_CONTACT_DETAILS:
      return { ...state, loading: false, details: action.payload };
    case ContactDetailsActionTypes.FETCH_CONTACT_DETAILS_ERROR:
      return { ...state, loading: false, details: action.payload };
    case ContactDetailsActionTypes.UPDATE_CONTACT_DETAILS:
      return { ...state, loading: false, updated: action.payload };
    case ContactDetailsActionTypes.UPDATE_CONTACT_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ContactDetailsActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, updated: null };
    default:
      return state;
  }
};
