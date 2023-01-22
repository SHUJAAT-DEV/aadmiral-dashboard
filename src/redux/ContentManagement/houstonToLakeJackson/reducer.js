import { HoustonToLakeJacksonActionTypes } from "./types";

let INITIAL_STATE = {
  loading: true,
  data: {},
  error: null,
  updated: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HoustonToLakeJacksonActionTypes.FETCH_HOUSTON_TO_LakeJackson:
      return { ...state, loading: false, data: action.payload };
    case HoustonToLakeJacksonActionTypes.FETCH_HOUSTON_TO_LakeJackson_ERROR:
      return { ...state, loading: false, error: action.payload };
    case HoustonToLakeJacksonActionTypes.UPDATE_HOUSTON_TO_LakeJackson:
      return { ...state, loading: true, updated: action.payload };
    case HoustonToLakeJacksonActionTypes.UPDATE_HOUSTON_TO_LakeJackson_ERROR:
      return { ...state, loading: false, error: action.payload };
    case HoustonToLakeJacksonActionTypes.CLEAR_ERROR:
      return { ...state, loading: false, error: null };
    case HoustonToLakeJacksonActionTypes.CLEAR_MESSAGES:
      return { ...state, loading: false, updated: null, error: null };
    default:
      return state;
  }
};
