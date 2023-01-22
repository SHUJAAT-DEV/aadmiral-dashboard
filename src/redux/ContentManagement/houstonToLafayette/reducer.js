import { HoustonToLafayetteActionTypes } from './types'

let INITIAL_STATE = {
    loading: true,
    data: {},
    error: null,
    updated: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HoustonToLafayetteActionTypes.FETCH_HOUSTON_TO_LAFAYETTE:
            return { ...state, loading: false, data: action.payload }
        case HoustonToLafayetteActionTypes.FETCH_HOUSTON_TO_LAFAYETTE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToLafayetteActionTypes.UPDATE_HOUSTON_TO_LAFAYETTE:
            return { ...state, loading: true, updated: action.payload }
        case HoustonToLafayetteActionTypes.UPDATE_HOUSTON_TO_LAFAYETTE_ERROR:
            return { ...state, loading: false, error: action.payload }
        case HoustonToLafayetteActionTypes.CLEAR_ERROR:
            return { ...state, loading: false, error: null }
        default:
            return state
    }
}
