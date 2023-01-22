import {
  FETCH_ALL_BOOKING,
  FETCH_ALL_BOOKING_ERROR,
  FETCH_COMPLETED_BOOKING,
  FETCH_COMPLETED_BOOKING_ERROR,
  FETCH_CANCELLED_BOOKING,
  FETCH_CANCELLED_BOOKING_ERROR,
  FETCH_IN_PROGRESS_BOOKING,
  FETCH_IN_PROGRESS_BOOKING_ERROR,
  REQUEST,
  FETCH_SINGLE_BOOKING,
  FETCH_SINGLE_BOOKING_ERROR,
  MARK_AS_COMPLETE,
  MARK_AS_COMPLETE_ERROR,
  CLEAR_MESSAGES
} from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {
    all: {},
    completed: {},
    cancelled: {},
    inProgress: {},
    single: {},
  },
  updated: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST:
      return { loading: true };
    case FETCH_SINGLE_BOOKING:
      return {
        ...state,
        loading: false,
        data: { ...state.data, single: action.payload },
      };
    case FETCH_SINGLE_BOOKING_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_ALL_BOOKING:
      return {
        ...state,
        loading: false,
        data: { ...state.data, all: action.payload },
      };
    case FETCH_ALL_BOOKING_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_COMPLETED_BOOKING:
      return {
        ...state,
        loading: false,
        data: { ...state.data, completed: action.payload },
      };
    case FETCH_COMPLETED_BOOKING_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_CANCELLED_BOOKING:
      return {
        ...state,
        loading: false,
        data: { ...state.data, cancelled: action.payload },
      };
    case FETCH_CANCELLED_BOOKING_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_IN_PROGRESS_BOOKING:
      return {
        ...state,
        loading: false,
        data: { ...state.data, inProgress: action.payload },
      };
    case FETCH_IN_PROGRESS_BOOKING_ERROR:
      return { ...state, loading: false, error: action.payload };
    case MARK_AS_COMPLETE:
      return { ...state, loading: false, updated: action.payload };
    case MARK_AS_COMPLETE_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_MESSAGES:
      return { ...state, loading: false, error: null, updated: null };
    default:
      return state;
  }
};
