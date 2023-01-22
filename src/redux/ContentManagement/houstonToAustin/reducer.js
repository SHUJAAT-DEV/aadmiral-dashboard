import { HoustonToAustinActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HoustonToAustinActionTypes.FETCH_HOUSTON_TO_AUSTIN:
            return { ...state, loading: false, data: action.payload }
        case HoustonToAustinActionTypes.FETCH_HOUSTON_TO_AUSTIN_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToAustinActionTypes.UPDATE_HOUSTON_TO_AUSTIN:
            return { ...state, loading: true, updated: action.payload }
        case HoustonToAustinActionTypes.UPDATE_HOUSTON_TO_AUSTIN_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToAustinActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
