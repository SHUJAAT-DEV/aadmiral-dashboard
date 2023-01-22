import { OurPartnerActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OurPartnerActionTypes.FETCH_OUR_PARTNER:
      return { ...state, loading: false, data: action.payload };
    case OurPartnerActionTypes.FETCH_OUR_PARTNER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OurPartnerActionTypes.DELETE_OUR_PARTNER:
      return { ...state, loading: true, data: action.payload };
    case OurPartnerActionTypes.DELETE_OUR_PARTNER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OurPartnerActionTypes.ADD_OUR_PARTNER:
      return { ...state, loading: true, data: action.payload };
    case OurPartnerActionTypes.ADD_OUR_PARTNER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OurPartnerActionTypes.UPDATE_OUR_PARTNER:
      return { ...state, loading: true, updated: action.payload };
    case OurPartnerActionTypes.UPDATE_OUR_PARTNER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case OurPartnerActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, updated: null };
    default:
      return state;
  }
};
