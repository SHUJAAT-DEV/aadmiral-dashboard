import { TestimonialsActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TestimonialsActionTypes.FETCH_TESTIMONIALS:
      return { ...state, loading: false, data: action.payload };
    case TestimonialsActionTypes.FETCH_TESTIMONIALS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TestimonialsActionTypes.DELETE_TESTIMONIALS:
      return { ...state, loading: true, data: action.payload };
    case TestimonialsActionTypes.DELETE_TESTIMONIALS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TestimonialsActionTypes.ADD_TESTIMONIALS:
      return { ...state, loading: true, data: action.payload };
    case TestimonialsActionTypes.ADD_TESTIMONIALS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TestimonialsActionTypes.UPDATE_TESTIMONIALS:
      return { ...state, loading: true, updated: action.payload };
    case TestimonialsActionTypes.UPDATE_TESTIMONIALS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TestimonialsActionTypes.CLEAR_MESSAGE:
      return { ...state, error: null, updated: null };
    default:
      return state;
  }
};
