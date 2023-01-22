import { HoustonToLakecharlesActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HoustonToLakecharlesActionTypes.FETCH_HOUSTON_TO_LAKECHARLES:
            return { ...state, loading: false, data: action.payload }
        case HoustonToLakecharlesActionTypes.FETCH_HOUSTON_TO_LAKECHARLES_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToLakecharlesActionTypes.UPDATE_HOUSTON_TO_LAKECHARLES:
            return { ...state, loading: true, updated: action.payload }
        case HoustonToLakecharlesActionTypes.UPDATE_HOUSTON_TO_LAKECHARLES_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToLakecharlesActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
