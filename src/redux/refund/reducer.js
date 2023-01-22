import {
  FETCH_REFUND_REQUEST,
  FETCH_REFUND_REQUEST_ERROR,
  REFUND_REQUEST_DETAILS_ERROR,
  REFUND_REQUEST_DETAILS_LOADING,
  REFUND_REQUEST_DETAILS_SUCCESS,
} from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  updated: null,
  error: null,
};

export const refundReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REFUND_REQUEST:
      return { ...state, loading: false, data: action.payload };
    case FETCH_REFUND_REQUEST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const refundDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case REFUND_REQUEST_DETAILS_LOADING:
      return { loading: true };
    case REFUND_REQUEST_DETAILS_SUCCESS:
      return { loading: false, data: action.payload };
    case REFUND_REQUEST_DETAILS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
